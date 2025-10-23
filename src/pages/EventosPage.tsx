import { useState } from 'react';
import { Calendar, Trophy, Users, Clock, Star, CheckCircle } from 'lucide-react';

export default function EventosPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    evento: '',
    fecha: '',
    participantes: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica de envío
    alert('¡Solicitud enviada correctamente! Te contactaremos pronto.');
  };

  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Eventos Especiales
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Torneos de arcade, noches temáticas y eventos exclusivos para la comunidad gamer
          </p>
        </div>

        {/* Imagen Principal */}
        <div className="mb-16">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border border-cyan-500/30 relative">
            <img
              src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Eventos gaming en Factoría Retro"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Torneos y Competiciones</h2>
                <p className="text-slate-300">Vive la emoción de competir en los clásicos del arcade</p>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción del Servicio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">¿Qué Ofrecemos?</h3>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                En Factoría Retro organizamos eventos únicos que combinan la nostalgia del gaming 
                retro con la emoción de la competición moderna. Nuestros eventos están diseñados 
                para jugadores de todos los niveles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Torneos oficiales con premios en efectivo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Noches temáticas por décadas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Eventos corporativos personalizados
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  Competiciones por equipos
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Tipos de Eventos</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-400 pl-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Torneos Competitivos</h4>
                <p className="text-slate-300 text-sm">
                  Street Fighter, King of Fighters, Tekken y más. Premios de hasta 500€.
                </p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-purple-400 mb-2">Noches Temáticas</h4>
                <p className="text-slate-300 text-sm">
                  Eventos dedicados a los 80s, 90s, Nintendo, Sega y franquicias específicas.
                </p>
              </div>
              <div className="border-l-4 border-pink-400 pl-4">
                <h4 className="font-semibold text-pink-400 mb-2">Eventos Corporativos</h4>
                <p className="text-slate-300 text-sm">
                  Team building, presentaciones de productos y celebraciones empresariales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Próximos Eventos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Próximos Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-semibold">15 Enero 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Torneo Street Fighter II</h3>
              <p className="text-slate-300 mb-4 text-sm">
                Competición oficial con premios en efectivo. Inscripciones abiertas.
              </p>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> 32 jugadores</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 18:00h</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold">22 Enero 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Noche Retro 80s</h3>
              <p className="text-slate-300 mb-4 text-sm">
                Una noche dedicada a los clásicos de los 80. Música y ambiente retro.
              </p>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> Sin límite</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 20:00h</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-pink-400 mr-2" />
                <span className="text-pink-400 font-semibold">5 Febrero 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Campeonato Pac-Man</h3>
              <p className="text-slate-300 mb-4 text-sm">
                Competición por la puntuación más alta en el clásico come-cocos.
              </p>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> Abierto</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 16:00h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Solicita Información sobre Eventos</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Nombre Completo *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="+34 123 456 789"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de Evento *</label>
              <select
                name="evento"
                value={formData.evento}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Selecciona un tipo</option>
                <option value="torneo">Torneo competitivo</option>
                <option value="tematico">Evento temático</option>
                <option value="corporativo">Evento corporativo</option>
                <option value="privado">Evento privado</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Fecha Deseada</label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleInputChange}
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Número de Participantes</label>
              <input
                type="number"
                name="participantes"
                value={formData.participantes}
                onChange={handleInputChange}
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Número aproximado"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Cuéntanos más detalles sobre tu evento..."
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}