import { useState } from 'react';
import { Wrench, CheckCircle, Clock, Phone, PenTool as Tool, Zap } from 'lucide-react';

export default function SATPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoConsola: '',
    modelo: '',
    problema: '',
    urgencia: '',
    direccion: '',
    descripcion: ''
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
    alert('¡Solicitud de reparación enviada! Te contactaremos en las próximas 2 horas para coordinar la recogida.');
  };

  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Servicio Técnico
          </h1>
          <div className="text-xl text-slate-300 max-w-3xl mx-auto space-y-4">
            <p>
              ¿Tu consola retro ya no enciende? ¿Tu máquina arcade perdió la magia? En nuestro taller damos nueva vida a tus clásicos favoritos.
            </p>
            <p>
              Somos especialistas en reparación y mantenimiento de consolas retro y máquinas arcade, cuidando cada detalle con precisión y respeto por la historia del videojuego.
            </p>
          </div>
        </div>

        {/* Imagen Principal */}
        <div className="mb-16 relative">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-r from-red-900/50 to-pink-900/50 border border-red-500/30">
            <img 
              src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Servicio técnico especializado en Factoría Retro"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Expertos en Reparación</h2>
                <p className="text-slate-300">Más de 15 años de experiencia en gaming retro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción del Servicio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Tool className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">¿Por Qué Elegirnos?</h3>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                Nuestro equipo de técnicos especializados cuenta con más de 15 años de experiencia 
                en reparación de consolas retro y máquinas arcade. Utilizamos piezas originales 
                siempre que es posible y ofrecemos garantía en todas nuestras reparaciones.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                  Diagnóstico gratuito y sin compromiso
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                  Piezas originales y compatibles en stock
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                  6 meses de garantía en reparaciones
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                  Servicio de recogida y entrega
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-pink-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Nuestros Servicios</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="font-semibold text-red-400 mb-2">Reparación de Consolas</h4>
                <p className="text-slate-300 text-sm">
                  Nintendo, Sega, PlayStation, Xbox y todas las consolas retro. Problemas de imagen, sonido, lectura de juegos.
                </p>
              </div>
              <div className="border-l-4 border-pink-400 pl-4">
                <h4 className="font-semibold text-pink-400 mb-2">Mantenimiento Arcade</h4>
                <p className="text-slate-300 text-sm">
                  Reparación de monitores CRT, fuentes de alimentación, controles y sistemas de monedas.
                </p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-orange-400 mb-2">Restauración Completa</h4>
                <p className="text-slate-300 text-sm">
                  Devolvemos tu consola o máquina arcade a su estado original, incluyendo carcasa y componentes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Proceso de reparación */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestro Proceso</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Diagnóstico</h3>
              <p className="text-slate-400 text-sm">
                Evaluación completa y gratuita del problema en nuestro taller
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Presupuesto</h3>
              <p className="text-slate-400 text-sm">
                Presupuesto detallado sin compromiso, solo pagas si aceptas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Reparación</h3>
              <p className="text-slate-400 text-sm">
                Reparación por técnicos especializados con piezas originales
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Entrega</h3>
              <p className="text-slate-400 text-sm">
                Pruebas finales y entrega con 6 meses de garantía
              </p>
            </div>
          </div>
        </div>

        {/* Formulario de Solicitud SAT */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contacta con Nuestro SAT</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <div className="text-white font-semibold">Teléfono SAT</div>
                    <div className="text-slate-400">+34 622 844 29</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <div className="text-white font-semibold">Horario SAT</div>
                    <div className="text-slate-400">Lun-Vie: 9:00-18:00</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Wrench className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <div className="text-white font-semibold">Tiempo de Respuesta</div>
                    <div className="text-slate-400">Diagnóstico en 24-48h</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Solicita tu Reparación</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-red-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    placeholder="Teléfono"
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-red-400 focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                  className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-red-400 focus:outline-none transition-colors"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    name="tipoConsola"
                    value={formData.tipoConsola}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-red-400 focus:outline-none transition-colors"
                  >
                    <option value="">Tipo de consola</option>
                    <option value="nintendo">Nintendo (NES, SNES, N64, etc.)</option>
                    <option value="sega">Sega (Genesis, Saturn, etc.)</option>
                    <option value="playstation">PlayStation (1, 2)</option>
                    <option value="xbox">Xbox Original</option>
                    <option value="arcade">Máquina Arcade</option>
                    <option value="otra">Otra</option>
                  </select>
                  <input
                    type="text"
                    name="modelo"
                    value={formData.modelo}
                    onChange={handleInputChange}
                    placeholder="Modelo específico"
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-red-400 focus:outline-none transition-colors"
                  />
                </div>
                <select
                  name="problema"
                  value={formData.problema}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-red-400 focus:outline-none transition-colors"
                >
                  <option value="">Tipo de problema</option>
                  <option value="no-enciende">No enciende</option>
                  <option value="no-imagen">No hay imagen</option>
                  <option value="no-sonido">No hay sonido</option>
                  <option value="no-lee-juegos">No lee juegos</option>
                  <option value="controles">Problemas con controles</option>
                  <option value="limpieza">Necesita limpieza</option>
                  <option value="otro">Otro problema</option>
                </select>
                <select
                  name="urgencia"
                  value={formData.urgencia}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-red-400 focus:outline-none transition-colors"
                >
                  <option value="">Urgencia</option>
                  <option value="normal">Normal (5-7 días)</option>
                  <option value="urgente">Urgente (2-3 días)</option>
                  <option value="express">Express (24h) +50€</option>
                </select>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Describe el problema con detalle..."
                  className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-red-400 focus:outline-none transition-colors"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Solicitar Diagnóstico Gratuito
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
