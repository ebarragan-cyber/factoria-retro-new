import type { FormEvent } from 'react';
import { useState } from 'react';
import { CreditCard, Mail, ShieldCheck, User } from 'lucide-react';
import { SUPPORT_EMAIL } from '../utils/support';

const MIN_TICKETS = 1;

export default function TicketPurchaseForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: 1
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateForm = () => {
    if (!formData.name.trim()) {
      return 'Completa tu nombre y apellidos.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      return 'Introduce un email válido.';
    }

    if (formData.quantity < MIN_TICKETS) {
      return 'Selecciona al menos 1 entrada.';
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

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          quantity: formData.quantity
        })
      });

      const payload = await response.json();
      if (!response.ok || !payload?.url) {
        throw new Error(payload?.message || 'No se ha podido completar el pago. Por favor, inténtalo de nuevo.');
      }

      window.location.href = payload.url;
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'No se ha podido completar el pago. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6" id="comprar">
      <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/40 backdrop-blur-sm">
        <p className="text-slate-200 text-sm">
          El pago se realiza a través de Stripe, una plataforma de pago segura utilizada internacionalmente.
          No almacenamos datos bancarios en esta web.
        </p>
      </div>

      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-4">
          <CreditCard className="w-5 h-5 text-cyan-400 mr-2" />
          <h3 className="text-xl font-bold text-white">📋 Datos del comprador</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Nombre y apellidos
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Tu nombre completo"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Cantidad de entradas
            </label>
            <input
              type="number"
              min={MIN_TICKETS}
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
              className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors"
            />
          </div>

          <p className="text-slate-400 text-xs">
            📩 Utilizaremos tu email para enviarte la confirmación de compra y tu entrada.
          </p>

          {errorMessage && (
            <div className="rounded-lg border border-rose-500/50 bg-rose-500/10 p-3 text-sm text-rose-200">
              {errorMessage}
            </div>
          )}

          <div className="border-t border-slate-700 pt-4">
            <div className="flex items-center justify-center mb-3">
              <h3 className="text-xl font-bold text-white">💳 Pago seguro con tarjeta</h3>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-full font-bold text-base transition-all duration-300 ${
                isSubmitting
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:scale-105 shadow-xl'
              }`}
            >
              {isSubmitting ? 'Procesando…' : 'Pagar con tarjeta'}
            </button>

            <p className="text-slate-400 text-xs text-center mt-3">
              Serás redirigido/a al entorno seguro de Stripe para completar el pago.
              Una vez finalizado, volverás automáticamente a esta web.
            </p>
          </div>
        </form>
      </div>

      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white mb-3">🔒 Seguridad y confianza</h3>
        <p className="text-slate-300 text-sm">
          Los pagos se procesan de forma segura mediante Stripe.
          Esta web no tiene acceso ni almacena los datos de tu tarjeta bancaria.
        </p>
      </div>

      <div className="flex items-center justify-center text-slate-400 text-xs">
        <ShieldCheck className="w-4 h-4 mr-2 text-cyan-400" />
        Si tienes cualquier problema con tu compra, escríbenos a: {SUPPORT_EMAIL}
      </div>
    </div>
  );
}
