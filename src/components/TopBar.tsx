import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="hidden md:block bg-slate-800 py-3 px-4 text-xs sm:text-sm text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <a
            href="tel:+34622844292"
            className="flex flex-wrap items-center justify-center gap-2 text-center leading-tight hover:text-cyan-400 transition-colors sm:justify-start sm:text-left"
          >
            <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="break-words">+34 622 844 292</span>
          </a>
          <a
            href="mailto:mifactoriaretro@gmail.com"
            className="flex flex-wrap items-center justify-center gap-2 text-center leading-tight hover:text-cyan-400 transition-colors sm:justify-start sm:text-left"
          >
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="break-words">mifactoriaretro@gmail.com</span>
          </a>
        </div>
        <a
          href="https://www.google.com/maps?q=C%2F+Parque+de+Caba%C3%B1eros,+Av.+del+Pinar,+3,+28924+Alcorc%C3%B3n,+Madrid"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-wrap items-center justify-center gap-2 text-center leading-tight hover:text-cyan-400 transition-colors sm:justify-start sm:text-left"
        >
          <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="break-words">C/ Parque de Cabañeros, Av. del Pinar, 3, 28924 Alcorcón, Madrid</span>
        </a>
      </div>
    </div>
  );
}