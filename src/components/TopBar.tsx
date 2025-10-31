import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="hidden md:block bg-slate-800 py-3 px-4 text-xs sm:text-sm text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <a
            href="tel:+34123456789"
            className="flex flex-wrap items-center justify-center gap-2 text-center leading-tight hover:text-cyan-400 transition-colors sm:justify-start sm:text-left"
          >
            <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="break-words">+34 123 456 789</span>
          </a>
          <a
            href="mailto:info@factoriaretro.es"
            className="flex flex-wrap items-center justify-center gap-2 text-center leading-tight hover:text-cyan-400 transition-colors sm:justify-start sm:text-left"
          >
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="break-words">info@factoriaretro.es</span>
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-center leading-tight sm:justify-start sm:text-left">
          <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="break-words">Calle Retro Gaming, 123, Madrid</span>
        </div>
      </div>
    </div>
  );
}