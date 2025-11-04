import { ExternalLink, Trophy, Calendar, Users, MapPin } from 'lucide-react';

const archivedTournaments = [
  {
    title: 'El esperado segundo torneo de futbolín ya está aquí',
    description:
      'Factoría Retro revivió la emoción de los recreativos con una segunda edición cargada de competición amistosa, parejas apasionadas por el futbolín y premios con auténtico sabor retro.',
    highlights: [
      'Formato por parejas con plazas limitadas para garantizar partidas intensas y ágiles.',
      'Fases clasificatorias y eliminatorias celebradas en el museo con presentaciones en directo.',
      'Premios y sorpresas exclusivas para las duplas ganadoras y finalistas.',
    ],
    date: 'Publicado originalmente en 2023',
    location: 'Factoría Retro, Alcorcón',
    link: 'https://factoriaretro.com/el-esperado-segundo-torneo-de-futbolin-ya-esta-aqui/',
  },
];

export default function TorneosPage() {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">
            Torneos Factoría Retro
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Recuperamos el espíritu competitivo de los salones recreativos. Aquí encontrarás los torneos históricos de Factoría Retro
            y toda la información necesaria para inspirar tu próximo desafío arcade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 backdrop-blur">
            <div className="flex items-center mb-6">
              <Trophy className="w-9 h-9 text-amber-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Compite al estilo retro</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Nuestros torneos convierten cada partida en una experiencia inolvidable: brackets organizados, ambientación arcade,
              comentaristas apasionados y premios únicos pensados para coleccionistas y jugadores veteranos.
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 backdrop-blur">
            <div className="flex items-center mb-6">
              <Calendar className="w-9 h-9 text-cyan-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Archivo de torneos</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Explora ediciones pasadas, revive sus mejores momentos y prepárate para las próximas convocatorias. Cada evento
              conserva el entusiasmo de la comunidad gamer de Factoría Retro.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {archivedTournaments.map((tournament) => (
            <article
              key={tournament.title}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 backdrop-blur space-y-6"
            >
              <header>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300 mb-2">Archivo oficial</p>
                <h3 className="text-3xl font-bold text-white mb-4">{tournament.title}</h3>
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {tournament.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {tournament.location}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Torneos por parejas y comunidad gamer
                  </span>
                </div>
              </header>

              <p className="text-slate-300 leading-relaxed">{tournament.description}</p>

              <ul className="space-y-3">
                {tournament.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-slate-400">
                  Consulta el artículo original para revivir la convocatoria completa y descargar las bases del torneo.
                </p>
                <a
                  href={tournament.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white font-semibold hover:from-amber-400 hover:to-red-400 transition-colors"
                >
                  Ver publicación original
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

