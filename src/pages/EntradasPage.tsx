import { Clock, Users, Mail, Phone, Gift } from 'lucide-react';
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
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Información de Precios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <div className="bg-slate-700/50 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg font-bold text-white mb-1">Entrada General</h3>
                <p className="text-slate-400 text-xs">Acceso completo</p>
              </div>
              <div className="text-3xl font-bold text-cyan-400">21€</div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg font-bold text-white mb-1">Entrada Reducida</h3>
                <p className="text-slate-400 text-xs">5-13 años, +65, discapacidad</p>
              </div>
              <div className="text-3xl font-bold text-green-400">16€</div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg font-bold text-white mb-1">Pack Familiar</h3>
                <p className="text-slate-400 text-xs">2 adultos + 2 niños</p>
              </div>
              <div className="text-3xl font-bold text-purple-400">70€</div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-2 sm:mb-0">
                <h3 className="text-lg font-bold text-white mb-1">Menores de 5 años</h3>
                <p className="text-slate-400 text-xs">Entrada gratuita</p>
              </div>
              <div className="text-3xl font-bold text-green-400">GRATIS</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Tu Entrada Incluye</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-start space-x-3">
              <div className="text-xl">🎮</div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-base">2 Horas de Juego Interactivo</h4>
                <p className="text-slate-400 text-sm">Más de 100 máquinas arcade y consolas retro</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-xl">📱</div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-base">Entrada Digital Inmediata</h4>
                <p className="text-slate-400 text-sm">Recibe tu ticket por email con código QR</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-xl">🏛️</div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-base">Exposición Permanente</h4>
                <p className="text-slate-400 text-sm">Historia completa del videojuego</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-xl">🎨</div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-base">Exposiciones Temporales</h4>
                <p className="text-slate-400 text-sm">Acceso a eventos especiales incluido</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Servicios Adicionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-700/50 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                <Users className="w-5 h-5 mr-2 text-cyan-400" />
                Reservas de Grupo
              </h3>
              <p className="text-slate-300 text-sm mb-3">
                Descuentos especiales para grupos de más de 10 personas.
              </p>
              <a
                href="mailto:info@factoriaretro.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@factoriaretro.com
              </a>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-5">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center">
                <Gift className="w-5 h-5 mr-2 text-purple-400" />
                Visitas Guiadas
              </h3>
              <p className="text-slate-300 text-sm mb-3">
                Tours guiados por expertos en historia del videojuego.
              </p>
              <a
                href="mailto:visitas@factoriaretro.com"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                visitas@factoriaretro.com
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-4">Contacto y Soporte</h2>
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

              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Gift className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">WhatsApp</h4>
                    <a href="https://wa.me/34123456789" className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm">
                      +34 123 456 789
                    </a>
                  </div>
                </div>
                <p className="text-slate-400 text-xs ml-9">Respuesta inmediata</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 mr-2 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Horarios</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-700/50 rounded-lg p-4 flex items-center justify-between">
                <span className="text-white font-medium">Lunes - Viernes:</span>
                <span className="text-cyan-400 font-bold text-lg">10:00 - 20:00</span>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 flex items-center justify-between">
                <span className="text-white font-medium">Sábados:</span>
                <span className="text-purple-400 font-bold text-lg">10:00 - 22:00</span>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 flex items-center justify-between">
                <span className="text-white font-medium">Domingos:</span>
                <span className="text-pink-400 font-bold text-lg">12:00 - 20:00</span>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 flex items-center justify-between">
                <span className="text-white font-medium">Festivos:</span>
                <span className="text-yellow-400 font-bold text-lg">Consultar</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs mt-4 text-center">
              * Última entrada 30 minutos antes del cierre
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}