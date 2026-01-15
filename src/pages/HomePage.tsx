
import { useState } from 'react';
import { PlayCircle } from 'lucide-react';

const galleryImages = Object.values(
  import.meta.glob('../assets/galeria/*.{png,jpg,jpeg,webp,gif,svg}', {
    eager: true,
    import: 'default'
  })
) as string[];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = galleryImages.length;
  const slidesToShow = 4;

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const visibleImages = totalSlides > 0
    ? Array.from({ length: Math.min(slidesToShow, totalSlides) }, (_, index) => {
      const imageIndex = (currentSlide + index) % totalSlides;
      return {
        src: galleryImages[imageIndex],
        label: imageIndex + 1
      };
    })
    : [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-cyan-900/50"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            FACTORÍA RETRO
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-slate-300">
            El primer museo interactivo de videojuegos en España
          </p>
          <p className="text-base sm:text-lg mb-12 text-slate-400 max-w-2xl mx-auto">
            Descubre la historia del gaming con recorridos virtuales, máquinas arcade originales y experiencias únicas que te transportarán a la edad dorada de los videojuegos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Comprar Entradas
            </button>
            <a
              href="https://my.matterport.com/show/?m=bNnPf2zbR67"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>🏛️</span>
              <span>Tour Virtual 360°</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Momentos en Factoría Retro</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Recorre nuestra galería con un vistazo rápido a las mejores imágenes del museo.
            </p>
          </div>
          {visibleImages.length > 0 ? (
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {visibleImages.map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/60 shadow-lg"
                  >
                    <img
                      src={image.src}
                      alt={`Galería destacada ${image.label}`}
                      className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    aria-label="Ver imágenes anteriores"
                    className="h-12 w-12 rounded-full border border-slate-600 bg-slate-900/70 text-white text-xl hover:border-cyan-400 transition"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Ver imágenes siguientes"
                    className="h-12 w-12 rounded-full border border-slate-600 bg-slate-900/70 text-white text-xl hover:border-cyan-400 transition"
                  >
                    →
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = '/galeria';
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:from-cyan-600 hover:to-purple-700 transition-all"
                >
                  Ver más
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-10 text-center text-slate-300">
              Todavía no hay imágenes disponibles en la galería.
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experiencia Única
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Sumérgete en la historia de los videojuegos como nunca antes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Máquinas Originales</h3>
              <p className="text-slate-300">
                Juega en máquinas arcade auténticas de los años 80 y 90, completamente restauradas y funcionales.
              </p>
            </div>

            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🕹️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Recorrido Virtual</h3>
              <p className="text-slate-300">
                Explora nuestro museo en 360° desde cualquier lugar del mundo con tecnología Matterport.
              </p>
            </div>

            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600 backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Eventos Únicos</h3>
              <p className="text-slate-300">
                Participa en torneos, celebra cumpleaños y disfruta de eventos temáticos exclusivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recorrido Virtual 360°</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Sumérgete en Factoria Retro desde cualquier dispositivo con nuestro tour interactivo.
            </p>
          </div>
          <a
            href="https://my.matterport.com/show/?m=bNnPf2zbR67"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block group aspect-video w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/60"
          >
            <img
              src="public/video-360.jpg"
              alt="Vista interior del museo Factoria Retro"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-900/40 transition-colors duration-300 group-hover:bg-slate-900/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <PlayCircle className="w-20 h-20 drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
              <span className="mt-4 text-lg font-semibold tracking-wide">Explorar recorrido virtual</span>
            </div>
          </a>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Horarios del museo</h2>
            <p className="text-slate-300">Planifica tu visita y asegúrate de no perderte ninguna sesión de juego.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 rounded-2xl border border-slate-700 p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Viernes</h3>
              <p className="text-cyan-400 text-xl font-bold">18:00 – 22:00</p>
            </div>
            <div className="bg-slate-800/60 rounded-2xl border border-slate-700 p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Sábado</h3>
              <p className="text-purple-400 text-xl font-bold">11:00 – 15:00 y 18:00 – 22:00</p>
            </div>
            <div className="bg-slate-800/60 rounded-2xl border border-slate-700 p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Domingo</h3>
              <p className="text-pink-400 text-xl font-bold">11:00 – 15:00 y 17:00 – 21:00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
