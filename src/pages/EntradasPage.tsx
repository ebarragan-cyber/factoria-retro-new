import { Clock, Users, Mail, Phone } from 'lucide-react';
import TicketPurchaseForm from '../components/TicketPurchaseForm';

export default function EntradasPage() {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Compra tus Entradas
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Reserva tu visita y disfruta de la experiencia retro gaming
          </p>
        </div>

        <div className="mb-12">
          <TicketPurchaseForm />
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Información de precios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="bg-slate-700/50 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg font-bold text-white mb-1">Entrada general</h3>
                <p className="text-slate-400 text-xs">Acceso al museo durante el turno elegido</p>
              </div>
              <div className="text-3xl font-bold text-cyan-400">10€</div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg font-bold text-white mb-1">Pase de día completo</h3>
                <p className="text-slate-400 text-xs">Acceso ilimitado durante toda la jornada</p>
              </div>
              <div className="text-3xl font-bold text-purple-400">15€</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm mb-12">
          <div className="flex items-center mb-6 justify-center">
            <Clock className="w-6 h-6 text-cyan-400 mr-2" />
            <h2 className="text-2xl font-bold text-white">Horarios</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-slate-700/50 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-white font-medium">Viernes</span>
              <span className="text-cyan-400 font-semibold text-lg">18:00 – 22:00</span>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-white font-medium">Sábado</span>
              <span className="text-purple-400 font-semibold text-lg">11:00 – 15:00 y 18:00 – 22:00</span>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-white font-medium">Domingo</span>
              <span className="text-pink-400 font-semibold text-lg">11:00 – 15:00 y 17:00 – 21:00</span>
            </div>
          </div>
          <p className="text-slate-400 text-xs mt-4 text-center">La apertura está sujeta a disponibilidad para eventos privados.</p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-4">Datos de contacto</h2>
          <p className="text-slate-300 mb-4 text-sm">
            ¿Necesitas modificar tu reserva o tienes alguna consulta?
          </p>
          <div className="space-y-4">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Phone className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Teléfono</h4>
                  <a href="tel:+34912345678" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-bold">
                    +34 123 456 789
                  </a>
                </div>
              </div>
              <p className="text-slate-400 text-xs ml-9">Lun-Vie: 10:00-20:00</p>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Mail className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Email</h4>
                  <a
                    href="mailto:info@factoriaretro.es"
                    className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    info@factoriaretro.es
                  </a>
                </div>
              </div>
              <p className="text-slate-400 text-xs ml-9">Respuesta en 24h</p>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-6 h-6 text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Dirección</h4>
                  <a
                    href="https://www.google.com/maps?q=Calle+Parque+de+Caba%C3%B1eros+3,+esquina+Av+del+Pinar,+28924,+Alcorc%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 text-sm hover:text-cyan-300 transition-colors"
                  >
                    Calle Parque de Cabañeros 3, esquina Av del Pinar, 28924, Alcorcón
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
