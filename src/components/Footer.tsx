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
              <div className="grid grid-rows-2 grid-flow-col auto-cols-fr gap-4 sm:gap-6 md:grid-rows-1 md:grid-flow-row md:auto-cols-auto md:grid-cols-5 items-center justify-items-center">
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/ACRISDECOR.png"
                    alt="Acrisdecor"
                    className="h-9 sm:h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/GAME-PRESS.png"
                    alt="Game Press"
                    className="h-9 sm:h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/IMG-20250915-WA0009.png"
                    alt="Patrocinador"
                    className="h-9 sm:h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/JESUS-TOLEDO.png"
                    alt="Jesús Toledo Ebanistería"
                    className="h-9 sm:h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="transition-all duration-300 hover:scale-105">
                  <img
                    src="/logo-alcorconhoy-negro.png"
                    alt="Alcorcón Hoy"
                    className="h-9 sm:h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
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
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          className="w-10 h-10"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M20.0742 16.4376C20.4919 16.4488 20.9549 16.4713 21.3955 17.4493C21.6876 18.1003 22.1798 19.2988 22.5807 20.2752C22.8927 21.0349 23.1494 21.66 23.2136 21.788C23.3604 22.0802 23.4508 22.4174 23.2588 22.8107C23.2361 22.8571 23.2148 22.9015 23.1942 22.9442C23.0402 23.2638 22.9306 23.4912 22.6716 23.7887C22.5651 23.9109 22.4542 24.0449 22.3437 24.1785C22.1493 24.4133 21.9562 24.6467 21.7907 24.8116C21.4971 25.1036 21.1921 25.4186 21.5308 26.003C21.8698 26.5874 23.0556 28.5095 24.806 30.0607C26.6878 31.736 28.3242 32.4421 29.1514 32.799C29.312 32.8683 29.4421 32.9244 29.5376 32.9719C30.1249 33.2641 30.4749 33.2191 30.8137 32.8258C31.1527 32.4323 32.2818 31.1172 32.6772 30.5327C33.0611 29.9483 33.4563 30.0383 33.9985 30.2405C34.5405 30.4428 37.4315 31.8591 38.0186 32.1513C38.1347 32.209 38.2433 32.2611 38.3439 32.3094C38.7525 32.5053 39.0302 32.6385 39.148 32.837C39.2947 33.0842 39.2947 34.2533 38.8092 35.6245C38.3124 36.9958 35.9182 38.3109 34.834 38.4121C34.7314 38.4217 34.6293 38.4341 34.5241 38.4468C33.5306 38.567 32.2694 38.7196 27.7759 36.9509C22.239 34.7735 18.5841 29.3714 17.8452 28.2792C17.7868 28.1929 17.7467 28.1336 17.7252 28.1048L17.7127 28.088C17.3765 27.6382 15.3197 24.8861 15.3197 22.0466C15.3197 19.3299 16.658 17.9155 17.2684 17.2704C17.3071 17.2295 17.3429 17.1917 17.3752 17.1569C17.9171 16.5725 18.5497 16.4264 18.9449 16.4264C19.3402 16.4264 19.7354 16.4264 20.0742 16.4376Z"
            fill="#F3ECE8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.77484 48.7668C4.58807 49.4448 5.20556 50.0705 5.88597 49.8928L16.404 47.1456C19.7241 48.944 23.4621 49.8993 27.268 49.8993H27.2792C39.8031 49.8993 50.0121 39.7495 50.0121 27.2731C50.0121 21.2259 47.6516 15.5383 43.3604 11.267C39.0691 6.99583 33.3661 4.63541 27.279 4.63541C14.7554 4.63541 4.54639 14.7852 4.54639 27.2619C4.54496 31.231 5.59262 35.1306 7.58418 38.5693L4.77484 48.7668ZM10.8855 39.4788C11.1294 38.5936 11.0076 37.6476 10.5474 36.8531C8.85772 33.9357 7.96951 30.6271 7.97071 27.2619C7.97071 16.6926 16.6303 8.05973 27.279 8.05973C32.4609 8.05973 37.2954 10.0618 40.9447 13.694C44.5898 17.3222 46.5877 22.1362 46.5877 27.2731C46.5877 37.8421 37.9282 46.475 27.2792 46.475H27.268C24.0342 46.475 20.8565 45.6629 18.0349 44.1346C17.2712 43.7209 16.3789 43.6129 15.5386 43.8324L9.23235 45.4796L10.8855 39.4788Z"
            fill="#F3ECE8"
          />
        </svg>
      </a>
    </>
  );
}