import { useState } from 'react';
import { Gift, Star } from 'lucide-react';

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
    comentarios: ''
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
          <p className="text-xl text-slate-300 max-w-3xl mx-auto whitespace-pre-line">
            {`¡Haz que tu cumpleaños sea una verdadera aventura gamer! 🎉
Vive una experiencia única rodeado de luces, sonidos y toda la emoción de las máquinas arcade clásicas.
Compite con tus amigos, supera tus récords y revive esa magia de los videojuegos que nunca pasa de moda.`}
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

        {/* Paquetes de cumpleaños */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestros Paquetes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Paquete Básico</h3>
              <div className="text-3xl font-bold text-pink-400 mb-6">150€</div>
              <ul className="text-slate-300 space-y-3 mb-8 text-left">
                <li>• 10 personas</li>
                <li>• 2 horas</li>
                <li>• 75€ hora adicional</li>
                <li>• 10€/persona adicional</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border-2 border-purple-500 backdrop-blur-sm text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                PREMIUM
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Paquete Premium</h3>
              <p className="text-lg text-purple-300 font-semibold mb-6">Pedir presupuesto</p>
              <ul className="text-slate-300 space-y-3 mb-8 text-left">
                <li>• Cuéntanos qué tienes en mente</li>
                <li>• Propuesta personalizada para tu evento</li>
                <li>• Ajustamos opciones y servicios</li>
                <li>• Presupuesto a medida</li>
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
                <option value="hasta-15">Hasta 15 personas</option>
                <option value="mas-15">Más de 15 personas</option>
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
                <option value="premium">Paquete Premium (Pedir presupuesto)</option>
              </select>
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
