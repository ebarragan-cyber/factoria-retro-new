import { useState } from 'react';
import { Star } from 'lucide-react';

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
            EVENTOS
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Convierte cualquier lugar en un salón recreativo. Organizamos, transportamos y montamos todo para que disfrutes de un evento gamer único, donde y cuando quieras. Fácil, completo y exclusivo.
          </p>
        </div>

        {/* Imagen Principal */}
        <div className="mb-16">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border border-cyan-500/30 relative">
            <img
              src="public\evento-retro.jpg"
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
        <div className="mb-16">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Star className="w-10 h-10 text-purple-400 mr-3" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">Tipos de Eventos</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-4 border-cyan-400 pl-4">
                <h4 className="font-semibold text-cyan-400 mb-2 text-lg">Torneos Competitivos</h4>
                <p className="text-slate-300 text-sm">
                  Street Fighter, King of Fighters, Tekken y más. Premios retro y dinamización profesional.
                </p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-purple-400 mb-2 text-lg">Noches Temáticas</h4>
                <p className="text-slate-300 text-sm">
                  Eventos dedicados a los 80s, 90s, Nintendo, Sega y franquicias icónicas.
                </p>
              </div>
              <div className="border-l-4 border-pink-400 pl-4">
                <h4 className="font-semibold text-pink-400 mb-2 text-lg">Eventos Corporativos</h4>
                <p className="text-slate-300 text-sm">
                  Team building, presentaciones de producto y celebraciones empresariales inolvidables.
                </p>
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