import { useState } from 'react';
import {
  ChevronDown,
  Calendar,
  Trophy,
  Gift,
  Building,
  Image,
  Wrench,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Home,
  BookOpen,
  Landmark,
  Ticket,
  ShoppingBag,
  MessageCircle
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
    { id: 'torneos', label: 'Torneos', icon: Trophy },
    { id: 'cumpleanos', label: 'Cumpleaños', icon: Gift },
    { id: 'alquiler', label: 'Alquiler', icon: Building },
    { id: 'exposiciones', label: 'Exposiciones', icon: Image },
    { id: 'sat', label: 'SAT', icon: Wrench }
  ];

  const primaryLinks = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'historia', label: 'Historia', icon: BookOpen },
    { id: 'museo', label: 'Museo', icon: Landmark },
    { id: 'entradas', label: 'Entradas', icon: Ticket },
    { id: 'tienda', label: 'Tienda', icon: ShoppingBag },
    { id: 'contacto', label: 'Contacto', icon: MessageCircle }
  ];

  return (
    <nav className="bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-16">

          {/* Left Menu */}
          <div className="hidden md:flex md:flex-1 items-center space-x-8">
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
          <div className="hidden md:flex items-center justify-center">
            <button
              type="button"
              onClick={() => handlePageChange('inicio')}
              className="cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <img
                src="/Logo-factoria-retro.png"
                alt="Factoría Retro"
                className="h-[80px] w-auto cursor-pointer"
              />
              <span className="sr-only">Factoría Retro</span>
            </button>
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex md:flex-1 items-center justify-end space-x-8">
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
          <div className="md:hidden pb-6">
            <div className="mt-3 rounded-2xl border border-slate-700 bg-slate-900/95 shadow-2xl backdrop-blur">
              <div className="px-5 pt-5 pb-4 border-b border-slate-800">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Explora Factoría Retro</p>
                <p className="mt-1 text-sm text-slate-300">
                  Elige una sección para continuar y descubre todo lo que tenemos preparado para ti.
                </p>
              </div>

              <div className="px-3 py-5 space-y-6">
                <div>
                  <p className="px-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">Navegación principal</p>
                  <div className="mt-3 grid gap-2">
                    {primaryLinks.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => handlePageChange(id)}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                          currentPage === id
                            ? 'bg-slate-800/80 text-cyan-300 shadow-inner'
                            : 'text-slate-200 hover:bg-slate-800/60 hover:text-cyan-200'
                        }`}
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800/80 text-cyan-300">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-medium">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="px-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">Nuestros servicios</p>
                  <div className="mt-3 grid gap-2">
                    {services.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => handlePageChange(id)}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                          currentPage === id
                            ? 'bg-slate-800/80 text-cyan-300 shadow-inner'
                            : 'text-slate-200 hover:bg-slate-800/60 hover:text-cyan-200'
                        }`}
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800/80 text-cyan-300">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-medium">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 border-t border-slate-800 bg-slate-950/70 px-5 py-5 text-sm text-slate-200">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Contacto directo</p>
                <div className="space-y-3">
                  <a
                    href="tel:+34123456789"
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-200"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/80 text-cyan-300">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">+34 123 456 789</span>
                  </a>
                  <a
                    href="mailto:info@factoriaretro.es"
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-200"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/80 text-cyan-300">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">info@factoriaretro.es</span>
                  </a>
                  <a
                    href="https://www.google.com/maps?q=Calle+Parque+de+Caba%C3%B1eros+3,+esquina+Av+del+Pinar,+28924,+Alcorc%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-left text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-200"
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/80 text-cyan-300">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed">
                      Calle Parque de Cabañeros 3, esquina Av del Pinar, 28924, Alcorcón
                    </span>
                  </a>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Síguenos</p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href="#"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 text-white transition-colors hover:border-cyan-400 hover:text-cyan-200"
                      aria-label="Factoría Retro en Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 text-white transition-colors hover:border-cyan-400 hover:text-cyan-200"
                      aria-label="Factoría Retro en Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 text-white transition-colors hover:border-cyan-400 hover:text-cyan-200"
                      aria-label="Factoría Retro en Twitter"
                    >
                      <Twitter className="h-5 w-5" />
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