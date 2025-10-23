
export default function HomePage() {
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
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            FACTORÍA RETRO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            El primer museo interactivo de videojuegos en España
          </p>
          <p className="text-lg mb-12 text-slate-400 max-w-2xl mx-auto">
            Descubre la historia del gaming con recorridos virtuales, máquinas arcade originales y experiencias únicas que te transportarán a la edad dorada de los videojuegos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Comprar Entradas
            </button>
            <a
              href="https://my.matterport.com/show/?m=bNnPf2zbR67"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <span>🏛️</span>
              <span>Tour Virtual 360°</span>
            </a>
          </div>
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
    </>
  );
}