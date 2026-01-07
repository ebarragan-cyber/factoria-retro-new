import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';
import { ShoppingCart, User, CreditCard } from 'lucide-react';
import TicketCalendar from './TicketCalendar';
import type { Order, PaymentInstructions } from '../types/orders';

interface TicketOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

const TICKET_OPTIONS: TicketOption[] = [
  {
    id: 'general',
    name: 'Entrada general',
    price: 10,
    description: 'Acceso al museo durante el turno elegido'
  },
  {
    id: 'dia-completo',
    name: 'Pase del día completo',
    price: 15,
    description: 'Acceso ilimitado durante todas las sesiones del día'
  }
];

interface OrderResponse {
  order: Order;
  paymentInstructions: PaymentInstructions;
}

export default function TicketPurchaseForm() {
  const [selectedTickets, setSelectedTickets] = useState<Record<string, number>>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [orderResponse, setOrderResponse] = useState<OrderResponse | null>(null);

  const handleTicketQuantityChange = (ticketId: string, quantity: number) => {
    setSelectedTickets(prev => ({
      ...prev,
      [ticketId]: Math.max(0, quantity)
    }));
  };

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const calculateTotal = () => {
    return Object.entries(selectedTickets).reduce((total, [ticketId, quantity]) => {
      const ticket = TICKET_OPTIONS.find(t => t.id === ticketId);
      return total + (ticket ? ticket.price * quantity : 0);
    }, 0);
  };

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((sum, qty) => sum + qty, 0);
  };

  const selectedTicketsSummary = useMemo(() => {
    return TICKET_OPTIONS.filter(option => (selectedTickets[option.id] ?? 0) > 0);
  }, [selectedTickets]);

  const validateForm = () => {
    if (getTotalTickets() <= 0) {
      return 'Selecciona al menos una entrada.';
    }
    if (!selectedDate || !selectedTime) {
      return 'Selecciona una fecha y hora para tu visita.';
    }
    if (!formData.name.trim()) {
      return 'Indica tu nombre completo.';
    }
    if (!formData.email.trim()) {
      return 'Introduce un email válido.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      return 'El email no tiene un formato válido.';
    }

    return null;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    if (!selectedDate || !selectedTime) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const payload = {
        customer: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined
        },
        visitDate: selectedDate.toISOString().split('T')[0],
        visitTime: selectedTime,
        items: Object.entries(selectedTickets)
          .filter(([, quantity]) => quantity > 0)
          .map(([id, quantity]) => ({ id, quantity }))
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.message || 'No se pudo crear el pedido.');
      }

      setOrderResponse(data);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Error inesperado al crear el pedido.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setOrderResponse(null);
    setSelectedTickets({});
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: '', email: '', phone: '' });
    setErrorMessage(null);
  };

  if (orderResponse) {
    const { order, paymentInstructions } = orderResponse;
    return (
      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold text-white">Pedido creado</h3>
          <p className="text-slate-300 text-sm">
            Tu solicitud ha quedado registrada y está pendiente de verificación del pago.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">Transferencia</p>
            <div className="mt-3 space-y-2 text-sm text-slate-200">
              <p><span className="text-slate-400">IBAN:</span> {paymentInstructions.iban}</p>
              <p><span className="text-slate-400">Titular:</span> {paymentInstructions.holder}</p>
              <p><span className="text-slate-400">Banco:</span> {paymentInstructions.bank}</p>
              <p className="text-white font-semibold">Importe: {order.totalAmount}€</p>
              <p className="text-cyan-300 font-semibold">Concepto: {order.paymentReference}</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">Resumen del pedido</p>
            <div className="mt-3 space-y-2 text-sm text-slate-200">
              <p><span className="text-slate-400">Fecha:</span> {order.visit.date}</p>
              <p><span className="text-slate-400">Hora:</span> {order.visit.time}</p>
              <p><span className="text-slate-400">Email:</span> {order.customer.email}</p>
              <div className="border-t border-slate-700 pt-3">
                {order.items.map(item => (
                  <p key={item.id} className="flex justify-between">
                    <span>{item.name} × {item.quantity}</span>
                    <span>{item.price * item.quantity}€</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
          Estado: pendiente de verificación. Cuando confirmemos la transferencia enviaremos tus tickets.
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={resetForm}
            className="w-full sm:w-auto rounded-full border border-slate-600 px-5 py-2 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Crear otro pedido
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6" id="comprar">
      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-4">
          <ShoppingCart className="w-5 h-5 text-cyan-400 mr-2" />
          <h3 className="text-xl font-bold text-white">Selecciona tus Entradas</h3>
        </div>

        <div className="space-y-3">
          {TICKET_OPTIONS.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-slate-700/50 rounded-lg p-4 border border-slate-600"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-base">{ticket.name}</h4>
                  <p className="text-slate-400 text-xs">{ticket.description}</p>
                </div>
                <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
                  <p className="text-xl font-bold text-cyan-400 min-w-[70px] text-right">
                    {ticket.price === 0 ? 'GRATIS' : `${ticket.price}€`}
                  </p>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => handleTicketQuantityChange(ticket.id, (selectedTickets[ticket.id] || 0) - 1)}
                      className="w-8 h-8 rounded-lg bg-slate-600 hover:bg-slate-500 text-white font-bold transition-colors text-sm"
                    >
                      -
                    </button>
                    <span className="text-white font-semibold w-6 text-center">
                      {selectedTickets[ticket.id] || 0}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleTicketQuantityChange(ticket.id, (selectedTickets[ticket.id] || 0) + 1)}
                      className="w-8 h-8 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition-colors text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {getTotalTickets() > 0 && (
          <div className="mt-4 p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-white font-semibold text-sm">Total ({getTotalTickets()} entrada{getTotalTickets() !== 1 ? 's' : ''}):</span>
              <span className="text-2xl font-bold text-cyan-400">{calculateTotal()}€</span>
            </div>
          </div>
        )}
      </div>

      <TicketCalendar onDateTimeSelect={handleDateTimeSelect} />

      <form onSubmit={handleSubmit} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-4">
          <User className="w-5 h-5 text-cyan-400 mr-2" />
          <h3 className="text-xl font-bold text-white">Datos de Contacto</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Nombre Completo *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Teléfono (opcional)
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="+34 600 000 000"
            />
          </div>
        </div>

        <div className="border-t border-slate-700 pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-slate-300 text-xs mb-1">Total a pagar:</p>
              <p className="text-3xl font-bold text-white">{calculateTotal()}€</p>
            </div>
            <CreditCard className="w-10 h-10 text-slate-600" />
          </div>

          {selectedTicketsSummary.length > 0 && (
            <div className="mb-4 rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-xs text-slate-300">
              {selectedTicketsSummary.map(ticket => (
                <div key={ticket.id} className="flex justify-between">
                  <span>{ticket.name}</span>
                  <span>x{selectedTickets[ticket.id] ?? 0}</span>
                </div>
              ))}
            </div>
          )}

          {errorMessage && (
            <div className="mb-4 rounded-lg border border-rose-500/50 bg-rose-500/10 p-3 text-sm text-rose-200">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-full font-bold text-base transition-all duration-300 transform ${
              isSubmitting
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:scale-105 shadow-xl'
            }`}
          >
            {isSubmitting ? 'Creando pedido...' : 'Crear pedido por transferencia'}
          </button>

          <p className="text-slate-400 text-xs text-center mt-3">
            Una vez enviada la transferencia, validaremos el pago y recibirás tus tickets por email.
          </p>
        </div>
      </form>
    </div>
  );
}
