import { Gamepad2, BookOpen, Sparkles, PlayCircle } from 'lucide-react';

export default function MuseoPage() {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Museo
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto font-semibold">
            Un viaje por la historia del videojuego
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <p className="text-lg text-slate-300 leading-relaxed">
              Embarcarse en un viaje por la historia del videojuego es adentrarse en una de las aventuras tecnológicas y
              culturales más fascinantes del último siglo. Desde sus humildes comienzos en laboratorios universitarios y
              salas recreativas hasta convertirse en una de las industrias del entretenimiento más influyentes del planeta.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">De los primeros píxeles a los arcades legendarios</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              A medida que recorres el museo viajarás a las raíces del juego: desde clásicos como Pong y Space Invaders
              hasta las aventuras de 8 y 16 bits que marcaron nuestra infancia. Explora pasillos llenos de tesoros pixelados
              y descubre cómo la tecnología evolucionó década a década. Nuestra exposición también alberga las máquinas arcade
              y pinball que marcaron una época; sentirás la adrenalina de los botones y las palancas al enfrentarte a juegos
              como Street Fighter, Pac‑Man o Metal Slug.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Gamepad2 className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Un museo vivo: juega la historia</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed">
              En nuestro museo no solo verás historia, ¡la jugarás! Muchas de las consolas y recreativas están en funcionamiento
              para que experimentes en primera persona la evolución de los videojuegos: prueba una consola de Atari, reta a tus
              amigos en un duelo de Street Fighter o revive las hazañas de Mario mientras busca salvar a la princesa. Cada pantalla
              es un portal al pasado, listo para revivir emociones y anécdotas.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Contexto y curiosidades</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              A lo largo del recorrido encontrarás paneles explicativos y anécdotas sobre la creación de estos sistemas,
              los ingenieros y compañías que los hicieron posibles y el impacto cultural que tuvieron. Queremos que pequeños
              y mayores descubran cómo la diversión se reinventa con cada generación.
            </p>
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-xl p-6">
              <p className="text-lg text-white font-semibold text-center leading-relaxed">
                Ven y acompáñanos en este viaje épico a través de las eras del gaming: revive la nostalgia, comparte la magia
                de los juegos retro y forma parte de la historia viva de los videojuegos.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Recorrido Virtual 360°</h2>
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
            <p className="text-slate-400 text-center text-sm mt-4">
              Explora nuestro museo desde casa con nuestro recorrido virtual interactivo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
