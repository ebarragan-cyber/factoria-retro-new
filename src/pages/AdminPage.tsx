import type { FormEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { Order, OrderStatus } from '../types/orders';

const statusStyles: Record<OrderStatus, string> = {
  PENDING: 'bg-amber-500/20 text-amber-200 border border-amber-500/40',
  CONFIRMED: 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/40',
  CANCELLED: 'bg-rose-500/20 text-rose-200 border border-rose-500/40'
};

export default function AdminPage() {
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersError, setOrdersError] = useState<string | null>(null);
  const [isLoadingOrders, setIsLoadingOrders] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [actionError, setActionError] = useState<string | null>(null);
  const [busyOrderId, setBusyOrderId] = useState<string | null>(null);

  const selectedOrder = useMemo(() => {
    return orders.find(order => order.id === selectedOrderId) ?? null;
  }, [orders, selectedOrderId]);

  const filteredOrders = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return orders;
    return orders.filter(order =>
      order.customer.email.toLowerCase().includes(term) ||
      order.paymentReference.toLowerCase().includes(term)
    );
  }, [orders, searchTerm]);

  const fetchOrders = async () => {
    setIsLoadingOrders(true);
    setOrdersError(null);

    try {
      const response = await fetch('/api/admin/orders', { credentials: 'include' });
      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.message || 'No se pudieron cargar los pedidos.');
      }
      const payload = await response.json();
      setOrders(payload.orders);
      if (payload.orders.length > 0) {
        setSelectedOrderId(prev => prev ?? payload.orders[0].id);
      }
    } catch (error) {
      setOrdersError(error instanceof Error ? error.message : 'Error inesperado al cargar pedidos.');
    } finally {
      setIsLoadingOrders(false);
    }
  };

  const checkSession = async () => {
    setIsCheckingSession(true);
    try {
      const response = await fetch('/api/admin/session', { credentials: 'include' });
      if (response.ok) {
        setIsAuthenticated(true);
        await fetchOrders();
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsCheckingSession(false);
    }
  };

  useEffect(() => {
    void checkSession();
  }, []);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setLoginError(null);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          username: loginData.username,
          password: loginData.password
        })
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload?.message || 'Credenciales inválidas.');
      }

      setIsAuthenticated(true);
      setLoginData({ username: '', password: '' });
      await fetchOrders();
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : 'Error inesperado al iniciar sesión.');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' });
    setIsAuthenticated(false);
    setOrders([]);
    setSelectedOrderId(null);
    setLoginData({ username: '', password: '' });
  };

  const updateOrderState = (updatedOrder: Order) => {
    setOrders(prev => prev.map(order => (order.id === updatedOrder.id ? updatedOrder : order)));
  };

  const handleConfirm = async (orderId: string) => {
    setActionError(null);
    setBusyOrderId(orderId);
    try {
      const response = await fetch(`/api/admin/orders/${orderId}/confirm`, {
        method: 'POST',
        credentials: 'include'
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.message || 'No se pudo confirmar el pedido.');
      }
      updateOrderState(payload.order);
    } catch (error) {
      setActionError(error instanceof Error ? error.message : 'Error inesperado al confirmar.');
    } finally {
      setBusyOrderId(null);
    }
  };

  const handleCancel = async (orderId: string) => {
    setActionError(null);
    setBusyOrderId(orderId);
    try {
      const response = await fetch(`/api/admin/orders/${orderId}/cancel`, {
        method: 'POST',
        credentials: 'include'
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.message || 'No se pudo cancelar el pedido.');
      }
      updateOrderState(payload.order);
    } catch (error) {
      setActionError(error instanceof Error ? error.message : 'Error inesperado al cancelar.');
    } finally {
      setBusyOrderId(null);
    }
  };

  if (isCheckingSession) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto bg-slate-800/60 border border-slate-700 rounded-2xl p-8 text-center">
          <p className="text-slate-200">Verificando sesión del administrador...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-md mx-auto bg-slate-800/60 border border-slate-700 rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-white mb-4">Acceso Admin</h1>
          <p className="text-slate-300 text-sm mb-6">
            Introduce tus credenciales para gestionar los pedidos y confirmar pagos por transferencia.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Usuario</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(event) => setLoginData({ ...loginData, username: event.target.value })}
                className="w-full rounded-lg bg-slate-900/60 border border-slate-600 p-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Contraseña</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(event) => setLoginData({ ...loginData, password: event.target.value })}
                className="w-full rounded-lg bg-slate-900/60 border border-slate-600 p-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
                required
              />
            </div>

            {loginError && (
              <div className="rounded-lg border border-rose-500/50 bg-rose-500/10 p-3 text-sm text-rose-200">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-sm font-semibold text-white transition hover:from-cyan-600 hover:to-blue-700"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Panel de Pedidos</h1>
            <p className="text-slate-300 text-sm mt-2">
              Revisa y confirma pagos pendientes. Los tickets se generan al confirmar el ingreso.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 mb-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Pedidos</h2>
              <p className="text-xs text-slate-400">Filtra por email o referencia de pago.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Buscar por email o referencia"
                className="w-full sm:w-72 rounded-lg bg-slate-900/60 border border-slate-600 px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={fetchOrders}
                className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
              >
                Recargar
              </button>
            </div>
          </div>

          {ordersError && (
            <div className="mt-4 rounded-lg border border-rose-500/50 bg-rose-500/10 p-3 text-sm text-rose-200">
              {ordersError}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-900/60 text-slate-300">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Referencia</th>
                    <th className="px-4 py-3 text-left font-semibold">Cliente</th>
                    <th className="px-4 py-3 text-left font-semibold">Total</th>
                    <th className="px-4 py-3 text-left font-semibold">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoadingOrders && (
                    <tr>
                      <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                        Cargando pedidos...
                      </td>
                    </tr>
                  )}
                  {!isLoadingOrders && filteredOrders.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                        No hay pedidos que coincidan con tu búsqueda.
                      </td>
                    </tr>
                  )}
                  {!isLoadingOrders && filteredOrders.map(order => (
                    <tr
                      key={order.id}
                      className={`cursor-pointer border-t border-slate-700/70 transition-colors hover:bg-slate-700/40 ${
                        selectedOrderId === order.id ? 'bg-slate-700/60' : ''
                      }`}
                      onClick={() => setSelectedOrderId(order.id)}
                    >
                      <td className="px-4 py-3 font-semibold text-white">{order.paymentReference}</td>
                      <td className="px-4 py-3 text-slate-200">
                        <p className="font-medium">{order.customer.name}</p>
                        <p className="text-xs text-slate-400">{order.customer.email}</p>
                      </td>
                      <td className="px-4 py-3 text-slate-200">{order.totalAmount}€</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs ${statusStyles[order.status]}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
            {selectedOrder ? (
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">Detalle del pedido</h2>
                  <p className="text-xs text-slate-400">ID: {selectedOrder.id}</p>
                </div>

                <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">Cliente</p>
                  <p className="text-white font-semibold">{selectedOrder.customer.name}</p>
                  <p className="text-slate-300 text-sm">{selectedOrder.customer.email}</p>
                  {selectedOrder.customer.phone && (
                    <p className="text-slate-400 text-sm">{selectedOrder.customer.phone}</p>
                  )}
                </div>

                <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">Visita</p>
                  <p className="text-white font-semibold">{selectedOrder.visit.date}</p>
                  <p className="text-slate-300 text-sm">Horario: {selectedOrder.visit.time}</p>
                </div>

                <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">Entradas</p>
                  <ul className="space-y-2">
                    {selectedOrder.items.map(item => (
                      <li key={item.id} className="flex justify-between text-sm text-slate-200">
                        <span>{item.name} × {item.quantity}</span>
                        <span>{item.price * item.quantity}€</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex justify-between border-t border-slate-700 pt-3 text-white font-semibold">
                    <span>Total</span>
                    <span>{selectedOrder.totalAmount}€</span>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">Referencia de pago</p>
                  <p className="text-white font-semibold">{selectedOrder.paymentReference}</p>
                  <p className="text-slate-400 text-xs mt-1">Estado: {selectedOrder.status}</p>
                </div>

                {selectedOrder.tickets.length > 0 && (
                  <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400 mb-2">Tickets generados</p>
                    <ul className="space-y-2">
                      {selectedOrder.tickets.map(ticket => (
                        <li key={ticket.code} className="text-sm text-emerald-200">
                          {ticket.code}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {actionError && (
                  <div className="rounded-lg border border-rose-500/50 bg-rose-500/10 p-3 text-sm text-rose-200">
                    {actionError}
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleConfirm(selectedOrder.id)}
                    disabled={selectedOrder.status !== 'PENDING' || busyOrderId === selectedOrder.id}
                    className="rounded-lg bg-emerald-500/80 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:bg-slate-700"
                  >
                    {busyOrderId === selectedOrder.id ? 'Procesando...' : 'Confirmar pago y generar tickets'}
                  </button>
                  <button
                    onClick={() => handleCancel(selectedOrder.id)}
                    disabled={selectedOrder.status !== 'PENDING' || busyOrderId === selectedOrder.id}
                    className="rounded-lg border border-rose-400/60 py-2 text-sm font-semibold text-rose-200 transition hover:border-rose-300 hover:text-rose-100 disabled:cursor-not-allowed disabled:border-slate-700 disabled:text-slate-500"
                  >
                    Cancelar pedido
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-slate-400 text-sm">Selecciona un pedido para ver el detalle.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
