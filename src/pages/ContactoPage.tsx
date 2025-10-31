import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactoPage() {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contacto
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Teléfono</h3>
                  <p className="text-slate-300">+34 622 844 292</p>
                  <p className="text-slate-400 text-sm">Lun-Vie: 10:00-20:00</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-slate-300">mifactoriaretro@gmail.com</p>
                  <p className="text-slate-400 text-sm">Respuesta en 24h</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-yellow-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Dirección</h3>
                  <p className="text-slate-300">Calle Retro Gaming, 123</p>
                  <p className="text-slate-300">28001 Madrid, España</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
                  <p className="text-slate-300">+34 123 456 789</p>
                  <p className="text-slate-400 text-sm">Respuesta inmediata</p>
                </div>
              </div>
            </div>

            {/* Horarios detallados */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Horarios Detallados</h3>
              </div>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>10:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>10:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span>12:00 - 20:00</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Festivos:</span>
                  <span>Consultar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-white">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Apellidos</label>
                  <input
                    type="text"
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Tus apellidos"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="+34 123 456 789"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Asunto</label>
                <select className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors">
                  <option>Información general</option>
                  <option>Reserva de entradas</option>
                  <option>Eventos y cumpleaños</option>
                  <option>Alquiler de espacios</option>
                  <option>Servicio técnico</option>
                  <option>Tienda online</option>
                  <option>Colaboraciones</option>
                  <option>Otro</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                <textarea
                  rows={5}
                  className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-slate-300">
                  Acepto la <a href="#" className="text-purple-400 hover:underline">política de privacidad</a> y el tratamiento de mis datos
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16 bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Cómo Llegar</h3>
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-700/50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-400">Mapa interactivo próximamente</p>
              <p className="text-slate-500 text-sm mt-2">Calle Retro Gaming, 123 - Madrid</p>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">🚇 Metro</h4>
              <p className="text-slate-300 text-sm">Línea 1 - Estación Sol</p>
              <p className="text-slate-400 text-xs">5 min andando</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-400 mb-2">🚌 Autobús</h4>
              <p className="text-slate-300 text-sm">Líneas 3, 25, 39</p>
              <p className="text-slate-400 text-xs">Parada Gran Vía</p>
            </div>
            <div>
              <h4 className="font-semibold text-pink-400 mb-2">🚗 Parking</h4>
              <p className="text-slate-300 text-sm">Parking público</p>
              <p className="text-slate-400 text-xs">2€/hora</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}