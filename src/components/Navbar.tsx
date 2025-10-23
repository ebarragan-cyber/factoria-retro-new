import { useState } from 'react';
import {
  ChevronDown,
  Calendar,
  Gift,
  Building,
  Image,
  Wrench,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo(0, 0);
  };

  const services = [
    { id: 'eventos', label: 'Eventos', icon: Calendar },
    { id: 'cumpleanos', label: 'Cumpleaños', icon: Gift },
    { id: 'alquiler', label: 'Alquiler', icon: Building },
    { id: 'exposiciones', label: 'Exposiciones', icon: Image },
    { id: 'sat', label: 'SAT', icon: Wrench }
  ];

  return (
    <nav className="bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-16 relative">

          {/* Left Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handlePageChange('inicio')}
              className={`transition-colors ${
                currentPage === 'inicio' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Inicio
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 transition-colors ${
                  services.some(s => s.id === currentPage) ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                <span>Servicios</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 overflow-hidden">
                  {services.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => handlePageChange(id)}
                      className={`w-full text-left px-4 py-3 transition-colors flex items-center space-x-3 ${
                        currentPage === id
                          ? 'bg-slate-700 text-cyan-400'
                          : 'text-white hover:bg-slate-700 hover:text-cyan-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              onClick={() => handlePageChange('historia')}
              className={`transition-colors ${
                currentPage === 'historia' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Historia
            </button>
            
            <button 
              onClick={() => handlePageChange('museo')}
              className={`transition-colors ${
                currentPage === 'museo' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Museo
            </button>
          </div>

          {/* Centered Logo */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-10 z-10">
            <img
              src="/Logo-factoria-retro.png"
              alt="Factoría Retro"
              className="h-[60px] md:h-[80px] w-auto cursor-pointer"
              onClick={() => handlePageChange('inicio')}
            />
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handlePageChange('entradas')}
              className={`transition-colors ${
                currentPage === 'entradas' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Entradas
            </button>
            
            <button 
              onClick={() => handlePageChange('tienda')}
              className={`transition-colors ${
                currentPage === 'tienda' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Tienda
            </button>
            
            <button 
              onClick={() => handlePageChange('contacto')}
              className={`transition-colors ${
                currentPage === 'contacto' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
              }`}
            >
              Contacto
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button
              type="button"
              onClick={() => handlePageChange('inicio')}
              className="flex items-center text-white"
            >
              <img
                src="/Logo-factoria-retro.png"
                alt="Factoría Retro"
                className="h-10 w-auto"
              />
              <span className="sr-only">Factoría Retro</span>
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              <button
                onClick={() => handlePageChange('inicio')}
                className={`block w-full text-left px-3 py-2 transition-colors ${
                  currentPage === 'inicio' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                Inicio
              </button>
              {services.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handlePageChange(id)}
                  className={`block w-full text-left px-3 py-2 transition-colors ${
                    currentPage === id ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => handlePageChange('historia')}
                className={`block w-full text-left px-3 py-2 transition-colors ${
                  currentPage === 'historia' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                Historia
              </button>
              <button
                onClick={() => handlePageChange('museo')}
                className={`block w-full text-left px-3 py-2 transition-colors ${
                  currentPage === 'museo' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                Museo
              </button>
              <button
                onClick={() => handlePageChange('entradas')}
                className={`block w-full text-left px-3 py-2 transition-colors ${
                  currentPage === 'entradas' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                Entradas
              </button>
              <button
                onClick={() => handlePageChange('tienda')}
                className={`block w-full text-left px-3 py-2 transition-colors ${
                  currentPage === 'tienda' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                Tienda
              </button>
              <button
                onClick={() => handlePageChange('contacto')}
                className={`block w-full text-left px-3 py-2 transition-colors ${
                  currentPage === 'contacto' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                Contacto
              </button>
              <div className="mt-4 border-t border-slate-700 pt-4 space-y-3 text-sm text-slate-300">
                <a
                  href="tel:+34123456789"
                  className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+34 123 456 789</span>
                </a>
                <a
                  href="mailto:info@factoriaretro.es"
                  className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>info@factoriaretro.es</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Calle Retro Gaming, 123, Madrid</span>
                </div>
                <div className="pt-1">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Síguenos</p>
                  <div className="mt-2 flex items-center gap-4 text-white">
                    <a
                      href="#"
                      className="hover:text-cyan-400 transition-colors"
                      aria-label="Factoría Retro en Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="hover:text-cyan-400 transition-colors"
                      aria-label="Factoría Retro en Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="hover:text-cyan-400 transition-colors"
                      aria-label="Factoría Retro en Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}