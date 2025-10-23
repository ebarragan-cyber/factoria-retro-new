import { useState } from 'react';
import { ShoppingCart, User, CreditCard } from 'lucide-react';
import TicketCalendar from './TicketCalendar';

interface TicketOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

const TICKET_OPTIONS: TicketOption[] = [
  { id: 'general', name: 'Entrada General', price: 21, description: 'Acceso completo' },
  { id: 'reducida', name: 'Entrada Reducida', price: 16, description: '5-13 años, +65, discapacidad' },
  { id: 'familiar', name: 'Pack Familiar', price: 70, description: '2 adultos + 2 niños' },
  { id: 'menor', name: 'Menor de 5 años', price: 0, description: 'Gratis' }
];

export default function TicketPurchaseForm() {
  const [selectedTickets, setSelectedTickets] = useState<Record<string, number>>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Purchase:', { selectedTickets, selectedDate, selectedTime, formData });
    alert('Función de pago próximamente. Los datos se han registrado correctamente.');
  };

  const isFormValid = () => {
    return (
      getTotalTickets() > 0 &&
      selectedDate &&
      selectedTime &&
      formData.name &&
      formData.email
    );
  };

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
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-base">{ticket.name}</h4>
                  <p className="text-slate-400 text-xs">{ticket.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-xl font-bold text-cyan-400 min-w-[70px] text-right">
                    {ticket.price === 0 ? 'GRATIS' : `${ticket.price}€`}
                  </p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleTicketQuantityChange(ticket.id, (selectedTickets[ticket.id] || 0) - 1)}
                      className="w-8 h-8 rounded-lg bg-slate-600 hover:bg-slate-500 text-white font-bold transition-colors text-sm"
                    >
                      -
                    </button>
                    <span className="text-white font-semibold w-6 text-center">
                      {selectedTickets[ticket.id] || 0}
                    </span>
                    <button
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

          <button
            type="submit"
            disabled={!isFormValid()}
            className={`w-full py-3 px-6 rounded-full font-bold text-base transition-all duration-300 transform ${
              isFormValid()
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:scale-105 shadow-xl'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            {isFormValid() ? 'Proceder al Pago' : 'Completa todos los campos requeridos'}
          </button>

          <p className="text-slate-400 text-xs text-center mt-3">
            Recibirás tu entrada digital por email de forma inmediata
          </p>
        </div>
      </form>
    </div>
  );
}
