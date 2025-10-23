import { useState } from 'react';
import { Building, Users, CheckCircle, Wifi } from 'lucide-react';

export default function AlquilerPage() {
  const [formData, setFormData] = useState({
    empresa: '',
    contacto: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    asistentes: '',
    fecha: '',
    duracion: '',
    espacio: '',
    servicios: [] as string[],
    detalles: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiciosChange = (servicio: string) => {
    const newServicios = formData.servicios.includes(servicio)
      ? formData.servicios.filter(s => s !== servicio)
      : [...formData.servicios, servicio];
    
    setFormData({
      ...formData,
      servicios: newServicios
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Solicitud de presupuesto enviada! Te contactaremos en las próximas 24 horas.');
  };

  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Alquiler de Espacios
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Alquila nuestras instalaciones para eventos corporativos, presentaciones y celebraciones
          </p>
        </div>

        {/* Imagen Principal */}
        <div className="mb-16 relative">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-r from-green-900/50 to-cyan-900/50 border border-green-500/30">
            <img 
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Espacios para eventos en Factoría Retro"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Espacios Únicos</h2>
                <p className="text-slate-300">El lugar perfecto para tu evento corporativo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción del Servicio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Building className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">¿Por Qué Elegirnos?</h3>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                Factoría Retro ofrece espacios únicos que combinan tecnología retro con instalaciones 
                modernas. Perfecto para eventos corporativos que buscan una experiencia diferente 
                y memorable para sus asistentes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Ambiente único e inspirador
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Tecnología audiovisual de última generación
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Personal especializado incluido
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Actividades de team building únicas
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Tipos de Eventos</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-400 mb-2">Eventos Corporativos</h4>
                <p className="text-slate-300 text-sm">
                  Presentaciones, lanzamientos de productos, reuniones de empresa y team building.
                </p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Producciones Audiovisuales</h4>
                <p className="text-slate-300 text-sm">
                  Rodajes publicitarios, videoclips, documentales y contenido para redes sociales.
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-blue-400 mb-2">Eventos Educativos</h4>
                <p className="text-slate-300 text-sm">
                  Talleres, conferencias, seminarios y actividades escolares especializadas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Espacios disponibles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestros Espacios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Sala Principal</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">200m²</div>
                  <div className="text-slate-400">Superficie</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">100</div>
                  <div className="text-slate-400">Personas</div>
                </div>
              </div>
              <ul className="space-y-2 text-slate-300 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Acceso a todas las máquinas arcade
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Sistema de sonido profesional
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Proyector 4K y pantalla gigante
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Zona de catering equipada
                </li>
              </ul>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500€/día</div>
                <div className="text-slate-400">Lunes a Viernes</div>
                <div className="text-2xl font-bold text-green-400 mt-2">700€/día</div>
                <div className="text-slate-400">Fines de semana</div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Sala VIP</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">80m²</div>
                  <div className="text-slate-400">Superficie</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">40</div>
                  <div className="text-slate-400">Personas</div>
                </div>
              </div>
              <ul className="space-y-2 text-slate-300 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  Máquinas arcade exclusivas
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  Ambiente más íntimo y privado
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  Barra privada equipada
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  Acceso independiente
                </li>
              </ul>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300€/día</div>
                <div className="text-slate-400">Lunes a Viernes</div>
                <div className="text-2xl font-bold text-cyan-400 mt-2">450€/día</div>
                <div className="text-slate-400">Fines de semana</div>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios incluidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-green-400">Servicios Incluidos</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Personal de apoyo durante el evento
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Limpieza antes y después
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Seguridad y vigilancia
              </li>
              <li className="flex items-center">
                <Wifi className="w-5 h-5 text-green-400 mr-3" />
                WiFi de alta velocidad
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Aire acondicionado y calefacción
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Servicios Opcionales</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center justify-between">
                <span>Catering completo</span>
                <span className="text-cyan-400 font-semibold">Desde 25€/persona</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Fotografía profesional</span>
                <span className="text-cyan-400 font-semibold">200€/día</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Decoración temática</span>
                <span className="text-cyan-400 font-semibold">150€</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Animación especializada</span>
                <span className="text-cyan-400 font-semibold">300€/día</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Equipo audiovisual extra</span>
                <span className="text-cyan-400 font-semibold">100€/día</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Formulario de consulta */}
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Solicita tu Presupuesto</h3>
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
              <label className="block text-sm font-medium text-slate-300 mb-2">Tipo de Evento *</label>
              <select
                name="tipoEvento"
                value={formData.tipoEvento}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Selecciona el tipo</option>
                <option value="corporativo">Evento corporativo</option>
                <option value="rodaje">Rodaje/Fotografía</option>
                <option value="celebracion">Celebración privada</option>
                <option value="educativo">Evento educativo</option>
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
              <label className="block text-sm font-medium text-slate-300 mb-2">Duración *</label>
              <select
                name="duracion"
                value={formData.duracion}
                onChange={handleInputChange}
                required
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Selecciona duración</option>
                <option value="medio-dia">Medio día (4 horas)</option>
                <option value="dia-completo">Día completo (8 horas)</option>
                <option value="varios-dias">Varios días</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Espacio Preferido</label>
              <select
                name="espacio"
                value={formData.espacio}
                onChange={handleInputChange}
                className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="">Selecciona espacio</option>
                <option value="sala-principal">Sala Principal (200m²)</option>
                <option value="sala-vip">Sala VIP (80m²)</option>
                <option value="ambas">Ambas salas</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Servicios Adicionales</label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'catering', label: 'Catering' },
                  { id: 'fotografia', label: 'Fotografía profesional' },
                  { id: 'decoracion', label: 'Decoración temática' },
                  { id: 'animacion', label: 'Animación' }
                ].map((servicio) => (
                  <label key={servicio.id} className="flex items-center space-x-2 text-sm text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.servicios.includes(servicio.id)}
                      onChange={() => handleServiciosChange(servicio.id)}
                      className="w-4 h-4 text-green-600 bg-slate-700 border-slate-600 rounded focus:ring-green-500"
                    />
                    <span>{servicio.label}</span>
                  </label>
                ))}
              </div>
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
                Solicitar Presupuesto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}