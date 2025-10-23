import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-800 py-3 px-4 text-sm text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <a href="tel:+34123456789" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>+34 123 456 789</span>
          </a>
          <a href="mailto:info@factoriaretro.es" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-center md:text-left">info@factoriaretro.es</span>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span className="text-center md:text-left">Calle Retro Gaming, 123, Madrid</span>
        </div>
      </div>
    </div>
  );
}