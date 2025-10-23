import { useState } from 'react';
import { Gift, Cake, Star, CheckCircle, Heart } from 'lucide-react';

export default function CumpleanosPage() {
  const [formData, setFormData] = useState({
    nombreCumpleanero: '',
    edad: '',
    nombreContacto: '',
    email: '',
    telefono: '',
    fecha: '',
    invitados: '',
    paquete: '',
    extras: [] as string[],
    comentarios: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleExtrasChange = (extra: string) => {
    const newExtras = formData.extras.includes(extra)
      ? formData.extras.filter(e => e !== extra)
      : [...formData.extras, extra];
    
    setFormData({
      ...formData,
      extras: newExtras
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Solicitud de cumpleaños enviada! Te contactaremos para confirmar los detalles.');
  };

  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Fiestas de Cumpleaños
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Celebra tu cumpleaños con una experiencia gaming inolvidable rodeado de máquinas arcade
          </p>
        </div>

        {/* Imagen Principal */}
        <div className="mb-16 relative">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-r from-pink-900/50 to-purple-900/50 border border-pink-500/30">
            <img 
              src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Cumpleaños gaming en Factoría Retro"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Cumpleaños Únicos</h2>
                <p className="text-slate-300">Una celebración que recordarán para siempre</p>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción del Servicio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-pink-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Una Experiencia Mágica</h3>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                En Factoría Retro convertimos cada cumpleaños en una aventura épica. Nuestros 
                paquetes están diseñados para crear recuerdos inolvidables combinando diversión, 
                nostalgia y la emoción de los videojuegos clásicos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-2" />
                  Animación especializada en gaming retro
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-2" />
                  Acceso ilimitado a máquinas arcade
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-2" />
                  Decoración temática personalizable
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-pink-400 mr-2" />
                  Zona privada exclusiva
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Cake className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">¿Qué Incluimos?</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-pink-400 pl-4">
                <h4 className="font-semibold text-pink-400 mb-2">Animación Profesional</h4>
                <p className="text-slate-300 text-sm">
                  Animadores especializados en gaming que conocen todos los trucos y secretos.
                </p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-purple-400 mb-2">Torneos Personalizados</h4>
                <p className="text-slate-300 text-sm">
                  Competiciones adaptadas a la edad y nivel de los invitados.
                </p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Recuerdos Únicos</h4>
                <p className="text-slate-300 text-sm">
                  Fotografías, diplomas de participación y regalos temáticos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Paquetes de cumpleaños */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestros Paquetes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Paquete Básico</h3>
              <div className="text-3xl font-bold text-pink-400 mb-6">150€</div>
              <ul className="text-slate-300 space-y-3 mb-8 text-left">
                <li>• Hasta 8 niños</li>
                <li>• 2 horas de juego</li>
                <li>• Decoración básica</li>
                <li>• Animador incluido</li>
                <li>• Máquinas arcade libres</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border-2 border-purple-500 backdrop-blur-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Paquete Premium</h3>
              <div className="text-3xl font-bold text-purple-400 mb-6">250€</div>
              <ul className="text-slate-300 space-y-3 mb-8 text-left">
                <li>• Hasta 12 niños</li>
                <li>• 3 horas de juego</li>
                <li>• Decoración temática</li>
                <li>• Animador especializado</li>
                <li>• Tarta personalizada</li>
                <li>• Zona VIP privada</li>
                <li>• Regalos sorpresa</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Cake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Paquete Deluxe</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-6">350€</div>
              <ul className="text-slate-300 space-y-3 mb-8 text-left">
                <li>• Hasta 16 niños</li>
                <li>• 4 horas de juego</li>
                <li>• Decoración completa</li>
                <li>• 2 animadores</li>
                <li>• Catering incluido</li>
                <li>• Fotografía profesional</li>
                <li>• Recuerdos personalizados</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Formulario de Reserva */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Reserva tu Fiesta de Cumpleaños</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Nombre del Cumpleañero *</label>
              <input
                type="text"
                name="nombreCumpleanero"
                value={formData.nombreCumpleanero}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Nombre del niño/a"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Edad *</label>
              <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleInputChange}
                required
                min="1"
                max="18"
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Edad"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Nombre de Contacto *</label>
              <input
                type="text"
                name="nombreContacto"
                value={formData.nombreContacto}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Tu nombre"
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
              <label className="block text-sm font-medium text-slate-300 mb-2">Fecha Deseada *</label>
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
              <label className="block text-sm font-medium text-slate-300 mb-2">Número de Invitados *</label>
              <select
                name="invitados"
                value={formData.invitados}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Selecciona</option>
                <option value="hasta-8">Hasta 8 niños</option>
                <option value="hasta-12">Hasta 12 niños</option>
                <option value="hasta-16">Hasta 16 niños</option>
                <option value="mas-16">Más de 16 niños</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Paquete Deseado *</label>
              <select
                name="paquete"
                value={formData.paquete}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Selecciona un paquete</option>
                <option value="basico">Paquete Básico (150€)</option>
                <option value="premium">Paquete Premium (250€)</option>
                <option value="deluxe">Paquete Deluxe (350€)</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">Extras Opcionales</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: 'tarta', label: 'Tarta personalizada (+30€)' },
                  { id: 'fotografia', label: 'Fotografía profesional (+50€)' },
                  { id: 'catering', label: 'Catering adicional (+15€/niño)' },
                  { id: 'regalos', label: 'Regalos personalizados (+10€/niño)' }
                ].map((extra) => (
                  <label key={extra.id} className="flex items-center space-x-2 text-sm text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.extras.includes(extra.id)}
                      onChange={() => handleExtrasChange(extra.id)}
                      className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                    />
                    <span>{extra.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">Comentarios Especiales</label>
              <textarea
                name="comentarios"
                value={formData.comentarios}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Tema preferido, alergias alimentarias, solicitudes especiales..."
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Reserva
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}