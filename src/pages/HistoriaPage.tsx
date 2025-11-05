import { Calendar, Heart, Trophy, Users, MapPin, Gamepad2 } from 'lucide-react';

export default function HistoriaPage() {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Historia
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            El origen y la evolución de Factoría Retro
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">El origen de Factoría Retro</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Factoría Retro nació de la pasión de un grupo de coleccionistas y aficionados que querían recuperar la magia
              de los salones recreativos y compartirla con nuevas generaciones. Tras años restaurando y conservando máquinas
              originales, la asociación abrió sus puertas al público el 31 de mayo de 2024 en Alcorcón, Madrid.
            </p>
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-xl p-6 mt-6">
              <div className="flex items-center justify-center space-x-4">
                <Calendar className="w-10 h-10 text-cyan-400" />
                <div>
                  <p className="text-cyan-400 font-bold text-2xl">31 de Mayo, 2024</p>
                  <p className="text-white text-sm">Inauguración oficial en Alcorcón, Madrid</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mt-6">
              Ese día se inauguró un salón del arcade y del videojuego con más de cuarenta máquinas de los años 70, 80 y 90,
              que incluyen recreativas, pinballs, consolas, futbolines y un museo.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Trophy className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Una misión: revivir la cultura del recreativo</h2>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Desde su apertura, el objetivo de Factoría Retro ha sido transportar a los visitantes a los salones recreativos
              de su infancia y mostrar a los más pequeños cómo se divertían sus padres y abuelos. Se trata de que los mayores
              viajen a su infancia jugando con las máquinas y los pinballs, mientras los más pequeños descubren otra forma de
              ocio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Generaciones Unidas</h3>
                <p className="text-slate-300 text-sm">
                  Mayores reviviendo su infancia y pequeños descubriendo nuevas formas de ocio
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Referente en Gaming</h3>
                <p className="text-slate-300 text-sm">
                  Convirtiendo a Alcorcón en un referente en el mundo del gaming retro
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                <Gamepad2 className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Cultura Recreativa</h3>
                <p className="text-slate-300 text-sm">
                  Recuperando la cultura perdida de los salones recreativos clásicos
                </p>
              </div>
            </div>
            <p className="text-lg text-slate-300 leading-relaxed mt-6">
              La asociación quiere también recuperar la cultura del recreativo perdida con la llegada de las consolas domésticas,
              convertir a Alcorcón en un referente en el mundo del gaming y compartir su pasión por el arcade y el videojuego.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
