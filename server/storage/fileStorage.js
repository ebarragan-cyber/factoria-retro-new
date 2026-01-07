import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'orders.json');

const ensureDataFile = async () => {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify({ orders: [] }, null, 2));
  }
};

const readOrders = async () => {
  await ensureDataFile();
  const content = await fs.readFile(DATA_FILE, 'utf-8');
  const parsed = JSON.parse(content || '{"orders":[]}');
  return Array.isArray(parsed.orders) ? parsed.orders : [];
};

const writeOrders = async (orders) => {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify({ orders }, null, 2));
};

export const createFileStorage = () => {
  return {
    async createOrder(order) {
      const orders = await readOrders();
      const updated = [...orders, order];
      await writeOrders(updated);
      return order;
    },
    async listOrders() {
      return await readOrders();
    },
    async getOrderById(id) {
      const orders = await readOrders();
      return orders.find(order => order.id === id) ?? null;
    },
    async confirmOrder(id, tickets) {
      const orders = await readOrders();
      const existing = orders.find(order => order.id === id);
      if (!existing) return null;
      const updatedOrder = {
        ...existing,
        status: 'CONFIRMED',
        tickets,
        updatedAt: new Date().toISOString()
      };
      await writeOrders(orders.map(order => (order.id === id ? updatedOrder : order)));
      return updatedOrder;
    },
    async cancelOrder(id) {
      const orders = await readOrders();
      const existing = orders.find(order => order.id === id);
      if (!existing) return null;
      const updatedOrder = {
        ...existing,
        status: 'CANCELLED',
        updatedAt: new Date().toISOString()
      };
      await writeOrders(orders.map(order => (order.id === id ? updatedOrder : order)));
      return updatedOrder;
    }
  };
};
