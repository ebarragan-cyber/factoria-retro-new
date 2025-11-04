import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function AlquilerPage() {
  const [formData, setFormData] = useState({
    empresa: '',
    contacto: '',
    email: '',
    telefono: '',
    fecha: '',
    horario: '',
    ubicacion: '',
    tipoEvento: '',
    asistentes: '',
    maquinas: '',
    detalles: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Solicitud de alquiler enviada:', formData);
    alert('¡Solicitud de presupuesto enviada! Te contactaremos en las próximas 24 horas.');
  };

  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Alquiler de máquinas
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Llevamos la experiencia arcade a tu evento con máquinas originales, listas para jugar y acompañadas por nuestro equipo especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
              alt: 'Arcade clásico iluminado con luces de neón'
            },
            {
              src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
              alt: 'Detalle de joystick arcade retro'
            },
            {
              src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
              alt: 'Fila de recreativas preparadas para alquiler'
            }
          ].map(({ src, alt }) => (
            <div key={src} className="relative overflow-hidden rounded-2xl border border-slate-700">
              <img src={src} alt={alt} className="w-full h-64 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-green-400">Servicios incluidos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Transporte',
                description: 'Nos encargamos de llevar las máquinas a tu localización con total seguridad.'
              },
              {
                title: 'Técnico especializado',
                description: 'Nuestro equipo técnico permanece en el evento para resolver cualquier incidencia.'
              },
              {
                title: 'Puesta en marcha',
                description: 'Montaje completo, pruebas y configuración para que solo tengas que pulsar start.'
              }
            ].map(({ title, description }) => (
              <div key={title} className="bg-slate-900/60 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                  <h4 className="text-lg font-semibold text-white">{title}</h4>
                </div>
                <p className="text-slate-300 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario de consulta */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Solicita tu presupuesto</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Empresa/Organización *</label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Nombre de la empresa"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Persona de Contacto *</label>
              <input
                type="text"
                name="contacto"
                value={formData.contacto}
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
                placeholder="contacto@empresa.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Teléfono *</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="+34 123 456 789"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de evento *</label>
              <select
                name="tipoEvento"
                value={formData.tipoEvento}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Selecciona el tipo</option>
                <option value="corporativo">Evento corporativo</option>
                <option value="fiesta">Fiesta privada</option>
                <option value="centro-comercial">Centro comercial / promoción</option>
                <option value="rodaje">Rodaje / producción audiovisual</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Número de Asistentes *</label>
              <input
                type="number"
                name="asistentes"
                value={formData.asistentes}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Número aproximado"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Fecha deseada *</label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Horario estimado *</label>
              <input
                type="text"
                name="horario"
                value={formData.horario}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Ej. 17:00 - 22:00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Ubicación del evento *</label>
              <input
                type="text"
                name="ubicacion"
                value={formData.ubicacion}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Ciudad, recinto o dirección"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Máquinas solicitadas *</label>
              <select
                name="maquinas"
                value={formData.maquinas}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Selecciona una opción</option>
                <option value="pack-clasico">Pack arcade clásico (hasta 4 máquinas)</option>
                <option value="pack-competitivo">Pack competitivo (luchas y carreras)</option>
                <option value="pack-personalizado">Selección personalizada</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">Detalles del Evento</label>
              <textarea
                name="detalles"
                value={formData.detalles}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Describe tu evento, servicios necesarios, requisitos especiales..."
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Solicitar presupuesto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}