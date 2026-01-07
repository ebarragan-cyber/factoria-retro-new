import crypto from 'crypto';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import { createStorage } from './storage/index.js';
import { generatePaymentReference, generateSessionId, generateTicketCodes } from './utils/tickets.js';
import { getPaymentInstructions } from './utils/payment.js';
import { TICKET_OPTIONS } from './config/tickets.js';

const storage = createStorage();
const sessionStore = new Map();
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '..', 'dist');

const parseCookies = (cookieHeader = '') => {
  return cookieHeader
    .split(';')
    .map(cookie => cookie.trim())
    .filter(Boolean)
    .reduce((acc, cookie) => {
      const [key, ...valueParts] = cookie.split('=');
      acc[key] = decodeURIComponent(valueParts.join('='));
      return acc;
    }, {});
};

const getSession = (req) => {
  const cookies = parseCookies(req.headers.cookie);
  const sessionId = cookies.sessionId;
  if (!sessionId) return null;
  const session = sessionStore.get(sessionId);
  if (!session) return null;
  if (session.expiresAt < Date.now()) {
    sessionStore.delete(sessionId);
    return null;
  }
  return session;
};

const setSessionCookie = (res, sessionId) => {
  const base = `sessionId=${sessionId}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${SESSION_TTL_MS / 1000}`;
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader('Set-Cookie', `${base}${secure}`);
};

const clearSessionCookie = (res) => {
  res.setHeader('Set-Cookie', 'sessionId=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0');
};

const readRequestBody = (req) => new Promise((resolve, reject) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => resolve(data));
  req.on('error', reject);
});

const parseJsonBody = async (req) => {
  const raw = await readRequestBody(req);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
};

const getContentType = (filePath) => {
  const ext = path.extname(filePath);
  switch (ext) {
    case '.js':
      return 'text/javascript';
    case '.css':
      return 'text/css';
    case '.svg':
      return 'image/svg+xml';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.json':
      return 'application/json';
    default:
      return 'text/html';
  }
};

const serveStatic = async (pathname, res) => {
  const filePath = path.join(distPath, pathname === '/' ? 'index.html' : pathname);
  try {
    await fs.access(filePath);
    const fileContent = await fs.readFile(filePath);
    res.writeHead(200, { 'Content-Type': getContentType(filePath) });
    res.end(fileContent);
  } catch {
    const indexPath = path.join(distPath, 'index.html');
    try {
      const indexContent = await fs.readFile(indexPath);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexContent);
    } catch {
      sendJson(res, 404, { message: 'Recurso no encontrado.' });
    }
  }
};

const requireAdmin = (req, res) => {
  const session = getSession(req);
  if (!session) {
    sendJson(res, 401, { message: 'Sesión no autorizada.' });
    return null;
  }
  return session;
};

const handler = async (req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host}`);
  const { pathname } = url;

  if (pathname.startsWith('/api')) {
    if (req.method === 'POST' && pathname === '/api/admin/login') {
      const body = await parseJsonBody(req);
      if (body === null) {
        return sendJson(res, 400, { message: 'JSON inválido.' });
      }

      const { username, password } = body ?? {};
      const adminUser = process.env.ADMIN_USER ?? 'Admin';
      const adminPass = process.env.ADMIN_PASS ?? 'Demo123';

      if (username !== adminUser || password !== adminPass) {
        return sendJson(res, 401, { message: 'Credenciales inválidas.' });
      }

      const sessionId = generateSessionId();
      sessionStore.set(sessionId, { user: username, expiresAt: Date.now() + SESSION_TTL_MS });
      setSessionCookie(res, sessionId);
      return sendJson(res, 200, { success: true });
    }

    if (req.method === 'POST' && pathname === '/api/admin/logout') {
      const cookies = parseCookies(req.headers.cookie);
      if (cookies.sessionId) {
        sessionStore.delete(cookies.sessionId);
      }
      clearSessionCookie(res);
      return sendJson(res, 200, { success: true });
    }

    if (req.method === 'GET' && pathname === '/api/admin/session') {
      const session = getSession(req);
      if (!session) {
        return sendJson(res, 401, { authenticated: false });
      }
      return sendJson(res, 200, { authenticated: true, user: session.user });
    }

    if (req.method === 'GET' && pathname === '/api/admin/orders') {
      if (!requireAdmin(req, res)) return undefined;
      const orders = await storage.listOrders();
      const sorted = [...orders].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      return sendJson(res, 200, { orders: sorted });
    }

    const orderDetailMatch = pathname.match(/^\/api\/admin\/orders\/([^/]+)$/);
    if (req.method === 'GET' && orderDetailMatch) {
      if (!requireAdmin(req, res)) return undefined;
      const order = await storage.getOrderById(orderDetailMatch[1]);
      if (!order) {
        return sendJson(res, 404, { message: 'Pedido no encontrado.' });
      }
      return sendJson(res, 200, { order });
    }

    const confirmMatch = pathname.match(/^\/api\/admin\/orders\/([^/]+)\/confirm$/);
    if (req.method === 'POST' && confirmMatch) {
      if (!requireAdmin(req, res)) return undefined;
      const order = await storage.getOrderById(confirmMatch[1]);
      if (!order) {
        return sendJson(res, 404, { message: 'Pedido no encontrado.' });
      }
      if (order.status !== 'PENDING') {
        return sendJson(res, 400, { message: 'Solo se pueden confirmar pedidos pendientes.' });
      }
      const totalTickets = order.items.reduce((sum, item) => sum + item.quantity, 0);
      const tickets = generateTicketCodes(totalTickets);
      const updatedOrder = await storage.confirmOrder(confirmMatch[1], tickets);
      return sendJson(res, 200, { order: updatedOrder });
    }

    const cancelMatch = pathname.match(/^\/api\/admin\/orders\/([^/]+)\/cancel$/);
    if (req.method === 'POST' && cancelMatch) {
      if (!requireAdmin(req, res)) return undefined;
      const order = await storage.getOrderById(cancelMatch[1]);
      if (!order) {
        return sendJson(res, 404, { message: 'Pedido no encontrado.' });
      }
      if (order.status !== 'PENDING') {
        return sendJson(res, 400, { message: 'Solo se pueden cancelar pedidos pendientes.' });
      }
      const updatedOrder = await storage.cancelOrder(cancelMatch[1]);
      return sendJson(res, 200, { order: updatedOrder });
    }

    if (req.method === 'POST' && pathname === '/api/orders') {
      const body = await parseJsonBody(req);
      if (body === null) {
        return sendJson(res, 400, { message: 'JSON inválido.' });
      }

      const { customer, items, visitDate, visitTime } = body ?? {};

      if (!customer?.name || !customer?.email) {
        return sendJson(res, 400, { message: 'Nombre y email son obligatorios.' });
      }

      if (!visitDate || !visitTime) {
        return sendJson(res, 400, { message: 'Selecciona fecha y hora para la visita.' });
      }

      if (!Array.isArray(items) || items.length === 0) {
        return sendJson(res, 400, { message: 'Selecciona al menos una entrada.' });
      }

      const normalizedItems = items
        .map((item) => {
          const option = TICKET_OPTIONS.find(ticket => ticket.id === item.id);
          const quantity = Number(item.quantity ?? 0);
          if (!option || quantity <= 0) return null;
          return {
            id: option.id,
            name: option.name,
            price: option.price,
            quantity
          };
        })
        .filter(Boolean);

      const totalTickets = normalizedItems.reduce((sum, item) => sum + item.quantity, 0);
      if (totalTickets <= 0) {
        return sendJson(res, 400, { message: 'Selecciona al menos una entrada válida.' });
      }

      const totalAmount = normalizedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const now = new Date().toISOString();

      const order = {
        id: crypto.randomUUID(),
        status: 'PENDING',
        createdAt: now,
        updatedAt: now,
        customer: {
          name: customer.name,
          email: customer.email,
          phone: customer.phone ?? undefined
        },
        visit: {
          date: visitDate,
          time: visitTime
        },
        items: normalizedItems,
        totalAmount,
        paymentReference: generatePaymentReference(),
        tickets: []
      };

      await storage.createOrder(order);
      return sendJson(res, 200, {
        order,
        paymentInstructions: getPaymentInstructions()
      });
    }

    return sendJson(res, 404, { message: 'Endpoint no encontrado.' });
  }

  if (process.env.NODE_ENV === 'production') {
    return serveStatic(pathname, res);
  }

  return sendJson(res, 404, { message: 'Recurso no encontrado.' });
};

const port = Number(process.env.PORT) || 3001;
http.createServer((req, res) => {
  handler(req, res).catch(() => {
    sendJson(res, 500, { message: 'Error interno del servidor.' });
  });
}).listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
