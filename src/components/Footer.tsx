interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <>
      <footer className="bg-slate-800 py-12 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <img src="/Logo-factoria-retro.png" alt="Factoría Retro" className="h-16 w-auto" />
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                El primer museo interactivo de videojuegos en España. Descubre la historia del gaming con nosotros.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><button onClick={() => onPageChange('inicio')} className="text-slate-400 hover:text-cyan-400 transition-colors">Inicio</button></li>
                <li><button onClick={() => onPageChange('museo')} className="text-slate-400 hover:text-cyan-400 transition-colors">Museo</button></li>
                <li><button onClick={() => onPageChange('historia')} className="text-slate-400 hover:text-cyan-400 transition-colors">Historia</button></li>
                <li><button onClick={() => onPageChange('entradas')} className="text-slate-400 hover:text-cyan-400 transition-colors">Entradas</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li><button onClick={() => onPageChange('eventos')} className="text-slate-400 hover:text-cyan-400 transition-colors">Eventos</button></li>
                <li><button onClick={() => onPageChange('cumpleanos')} className="text-slate-400 hover:text-cyan-400 transition-colors">Cumpleaños</button></li>
                <li><button onClick={() => onPageChange('alquiler')} className="text-slate-400 hover:text-cyan-400 transition-colors">Alquiler</button></li>
                <li><button onClick={() => onPageChange('tienda')} className="text-slate-400 hover:text-cyan-400 transition-colors">Tienda</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-6 text-center">Patrocinadores</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/ACRISDECOR.png"
                    alt="Acrisdecor"
                    className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/GAME-PRESS.png"
                    alt="Game Press"
                    className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/IMG-20250915-WA0009.png"
                    alt="Patrocinador"
                    className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/JESUS-TOLEDO.png"
                    alt="Jesús Toledo Ebanistería"
                    className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/logo-alcorconhoy-negro.png"
                    alt="Alcorcón Hoy"
                    className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-center">
              © 2024 Factoría Retro. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/34123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M256 8C119.03 8 8 119.03 8 256c0 49.61 14.4 97.99 41.4 139.35L0 504l116.34-30.65C156.27 499.16 205.62 512 256 512c136.97 0 248-110.99 248-248S392.97 8 256 8Zm0 455.03c-45.01 0-88.69-12.07-126.83-34.88l-9.08-5.42-69.05 18.17 18.45-67.19-5.92-10.12C42.08 329.61 32.77 293.51 32.77 256 32.77 137.7 120.75 48.97 256 48.97c67.5 0 130.96 25.71 178.64 72.41 47.67 46.7 73.91 109.02 73.91 176.45 0 138.3-87.98 225.2-252.55 225.2Z" />
          <path d="M380.8 369.86c-6.21 17.44-31.85 31.95-52.43 36.17-14.04 2.96-32.29 5.34-94.02-20.17-78.59-32.3-129.2-111.31-133.15-116.4-3.96-5.09-31.8-42.31-31.8-80.77s19.84-57.24 27.01-65.29c7.18-8.05 15.72-10.37 20.94-10.37 5.23 0 10.46.06 15.04.29 4.85.26 11.44-.18 17.88 13.69 6.2 13.88 21.1 47.97 23.02 51.41 1.92 3.44 3.2 7.53.64 12.62-2.56 5.09-3.84 7.53-7.55 11.75-3.71 4.23-7.83 9.49-11.28 12.74-3.69 3.5-7.51 7.27-3.22 14.3 4.29 7.03 19.1 31.45 41.05 50.89 28.3 25.26 52.15 33.18 59.48 36.68 7.33 3.5 11.58 3.02 15.84-1.8 4.26-4.82 18.37-21.45 23.28-28.82 4.92-7.37 9.84-6.09 16.04-3.65 6.21 2.44 39.41 18.58 46.16 21.91 6.75 3.34 11.21 5.09 12.83 7.85 1.62 2.76 1.62 15.89-4.59 33.33Z" />
        </svg>
      </a>
    </>
  );
}