import { useState } from 'react';
import { Image, Calendar, Eye, Star, Camera, Users } from 'lucide-react';

export default function ExposicionesPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoVisita: '',
    fecha: '',
    personas: '',
    interes: '',
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
    alert('¡Solicitud enviada! Te contactaremos para confirmar tu visita a las exposiciones.');
  };

  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Exposiciones Temporales
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Exposiciones rotativas con temáticas específicas y colecciones exclusivas
          </p>
        </div>

        {/* Imagen Principal */}
        <div className="mb-16 relative">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border border-yellow-500/30">
            <img 
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Exposiciones en Factoría Retro"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Colecciones Únicas</h2>
                <p className="text-slate-300">Descubre piezas históricas del gaming mundial</p>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción del Servicio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Camera className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Experiencias Exclusivas</h3>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                Nuestras exposiciones temporales ofrecen una mirada única a la historia del gaming, 
                con piezas exclusivas, prototipos raros y documentación histórica que no encontrarás 
                en ningún otro lugar de España.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  Piezas originales y prototipos únicos
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  Documentación histórica exclusiva
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  Colaboraciones con museos internacionales
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  Visitas guiadas especializadas
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Para Todos los Públicos</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-400 pl-4">
                <h4 className="font-semibold text-yellow-400 mb-2">Familias</h4>
                <p className="text-slate-300 text-sm">
                  Actividades interactivas para niños y padres, descubriendo juntos la evolución del gaming.
                </p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-orange-400 mb-2">Coleccionistas</h4>
                <p className="text-slate-300 text-sm">
                  Acceso a piezas raras y documentación técnica detallada de cada elemento expuesto.
                </p>
              </div>
              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="font-semibold text-red-400 mb-2">Estudiantes</h4>
                <p className="text-slate-300 text-sm">
                  Material educativo y talleres especializados sobre historia de la tecnología.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exposición actual */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 rounded-2xl p-8 border-2 border-yellow-500 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-bold">EXPOSICIÓN ACTUAL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              "Nintendo: 40 Años de Innovación"
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-300 mb-6">
                  Un recorrido completo por la historia de Nintendo, desde sus inicios como empresa 
                  de cartas hasta convertirse en el gigante del entretenimiento que conocemos hoy. 
                  Consolas originales, prototipos únicos y documentos históricos exclusivos.
                </p>
                <div className="flex items-center space-x-6 text-sm text-slate-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Hasta 31 Marzo 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>+5,000 visitantes</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-yellow-400">Piezas Destacadas</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Nintendo Famicom original (1983)</li>
                  <li>• Prototipo de Game Boy Color</li>
                  <li>• Cartas Hanafuda históricas</li>
                  <li>• Nintendo 64DD (ultra raro)</li>
                  <li>• Documentos de desarrollo de Mario</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Próximas exposiciones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Próximas Exposiciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-semibold">Abril - Junio 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">"Sega vs Nintendo: La Guerra de Consolas"</h3>
              <p className="text-slate-300 mb-4">
                Revive la épica batalla entre Sega y Nintendo en los años 90. Consolas, juegos 
                exclusivos y la rivalidad que definió una generación.
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">Incluye:</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Sega Genesis vs Super Nintendo</li>
                  <li>• Sonic vs Mario: documentales</li>
                  <li>• Publicidad de la época</li>
                  <li>• Entrevistas exclusivas</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-semibold">Julio - Septiembre 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">"Arcade Español: Pioneros Olvidados"</h3>
              <p className="text-slate-300 mb-4">
                Descubre la historia no contada de los desarrolladores españoles de arcade. 
                Máquinas únicas, empresas pioneras y el legado español en el gaming.
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Destacados:</h4>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Máquinas de Tecfri y Petaco</li>
                  <li>• Historia de Dinamic Software</li>
                  <li>• Entrevistas con desarrolladores</li>
                  <li>• Documentación histórica</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Exposiciones pasadas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Exposiciones Pasadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="text-center mb-4">
                <Image className="w-12 h-12 text-pink-400 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-white">Street Fighter: 35 Años</h3>
                <p className="text-slate-400 text-sm">Oct 2023 - Ene 2024</p>
              </div>
              <p className="text-slate-300 text-sm">
                Celebración del 35º aniversario de Street Fighter con máquinas originales, 
                arte conceptual y torneos especiales.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="text-center mb-4">
                <Image className="w-12 h-12 text-green-400 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-white">Pac-Man Fever</h3>
                <p className="text-slate-400 text-sm">Jul - Sep 2023</p>
              </div>
              <p className="text-slate-300 text-sm">
                Todo sobre el fenómeno Pac-Man: desde su creación hasta su impacto 
                en la cultura popular mundial.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="text-center mb-4">
                <Image className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-white">Consolas Portátiles</h3>
                <p className="text-slate-400 text-sm">Abr - Jun 2023</p>
              </div>
              <p className="text-slate-300 text-sm">
                La evolución de las consolas portátiles desde Game & Watch hasta 
                Nintendo Switch.
              </p>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Reserva tu Visita a las Exposiciones</h3>
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
              <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de Visita *</label>
              <select
                name="tipoVisita"
                value={formData.tipoVisita}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Selecciona tipo</option>
                <option value="individual">Visita individual</option>
                <option value="familiar">Visita familiar</option>
                <option value="grupo">Visita en grupo</option>
                <option value="guiada">Visita guiada</option>
                <option value="educativa">Visita educativa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Fecha Preferida</label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleInputChange}
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Número de Personas</label>
              <input
                type="number"
                name="personas"
                value={formData.personas}
                onChange={handleInputChange}
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="Número de visitantes"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Exposición de Interés</label>
              <select
                name="interes"
                value={formData.interes}
                onChange={handleInputChange}
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Selecciona exposición</option>
                <option value="nintendo">Nintendo: 40 Años de Innovación</option>
                <option value="sega-nintendo">Sega vs Nintendo (próximamente)</option>
                <option value="arcade-espanol">Arcade Español (próximamente)</option>
                <option value="todas">Todas las exposiciones</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">¿Eres coleccionista?</label>
              <select
                name="coleccionista"
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Selecciona</option>
                <option value="si">Sí, soy coleccionista</option>
                <option value="no">No, soy visitante casual</option>
                <option value="profesional">Profesional del sector</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-purple-400 focus:outline-none transition-colors"
                placeholder="¿Hay alguna pieza específica que te interese? ¿Necesitas información especial?"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Reservar Visita
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}