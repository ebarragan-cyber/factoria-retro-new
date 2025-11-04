import { ExternalLink, Trophy, Calendar, Users, MapPin, Images } from 'lucide-react';

type Tournament = {
  title: string;
  date: string;
  description: string[];
  image: string;
  imageAlt: string;
  location: string;
  link?: string;
  gallery?: { src: string; alt: string }[];
};

const createPoster = (
  title: string | string[],
  subtitle: string | string[],
  options?: { gradientFrom?: string; gradientTo?: string; footer?: string },
) => {
  const { gradientFrom = '#f97316', gradientTo = '#ef4444', footer = 'Factoría Retro' } = options ?? {};
  const titleLines = Array.isArray(title) ? title : `${title}`.split('\n');
  const subtitleLines = Array.isArray(subtitle) ? subtitle : `${subtitle}`.split('\n');

  const titleText = titleLines
    .map((line, index) => `<tspan x="120" dy="${index === 0 ? 0 : 68}">${line}</tspan>`)
    .join('');
  const subtitleText = subtitleLines
    .map((line, index) => `<tspan x="120" dy="${index === 0 ? 0 : 48}">${line}</tspan>`)
    .join('');

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${gradientFrom}" />
          <stop offset="100%" stop-color="${gradientTo}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="675" fill="#0f172a" />
      <rect x="60" y="60" width="1080" height="555" rx="48" fill="url(#grad)" opacity="0.92" />
      <text x="120" y="220" font-family="'Inter', 'Arial', sans-serif" font-size="64" fill="#f8fafc" font-weight="700">
        ${titleText}
      </text>
      <text x="120" y="420" font-family="'Inter', 'Arial', sans-serif" font-size="36" fill="#f8fafc" font-weight="500">
        ${subtitleText}
      </text>
      <text x="120" y="520" font-family="'Inter', 'Arial', sans-serif" font-size="28" fill="#facc15" font-weight="600">
        ${footer}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const archivedTournaments: Tournament[] = [
  {
    title: 'EL ESPERADO SEGUNDO TORNEO DE FUTBOLÍN YA ESTÁ AQUÍ',
    date: '20 de septiembre de 2025',
    description: [
      'Apúntate el próximo sábado 27 de septiembre a las 7 para intentar ser el ganador de este torneo con la máquina que todos amamos y jugábamos. Recuerda esos buenos momentos aquí, en Factoría Retro. ¡Inscripción gratuita con la compra de tu entrada!',
    ],
    image: createPoster(['II TORNEO DE FUTBOLÍN', 'FACTORÍA RETRO'], '27 de septiembre · 19:00 h', {
      gradientFrom: '#22d3ee',
      gradientTo: '#3b82f6',
      footer: 'Inscripción gratuita con tu entrada',
    }),
    imageAlt: 'Cartel promocional del segundo torneo de futbolín de Factoría Retro',
    location: 'Factoría Retro, Alcorcón',
    link: 'https://factoriaretro.com/el-esperado-segundo-torneo-de-futbolin-ya-esta-aqui/',
  },
  {
    title: 'NUEVA MAQUINA TOTEM 4 PLAYERS',
    date: '17 de julio de 2025',
    description: [
      'Cadillacs and Dinosaurs (conocido en Japón como Cadillacs Kyouryuu Shin Seiki) es un videojuego arcade de 1992 editado por Capcom.',
      'Es un beat’em basado en el cómic Xenozoic Tales creado por Marck Schultz durante finales de la década de 1980. Tras el estreno de este videojuego se produjo una serie de televisión vinculada.',
      'Además el videojuego de Capcom no tiene ninguna relación con dicha serie, ya que se basa enteramente en los cómics.',
    ],
    image: createPoster('MÁQUINA TOTEM 4 PLAYERS', 'Cadillacs & Dinosaurs llega a Factoría Retro', {
      gradientFrom: '#9333ea',
      gradientTo: '#f472b6',
      footer: 'Experiencia arcade para 4 jugadores',
    }),
    imageAlt: 'Máquina arcade TOTEM 4 players en Factoría Retro',
    location: 'Factoría Retro, Alcorcón',
    gallery: [
      {
        src: createPoster('Galería TOTEM 4', 'Pantalla principal', {
          gradientFrom: '#f472b6',
          gradientTo: '#fb7185',
          footer: 'Cadillacs & Dinosaurs',
        }),
        alt: 'Pantalla del videojuego Cadillacs and Dinosaurs en la máquina TOTEM 4 players',
      },
      {
        src: createPoster('Galería TOTEM 4', 'Marcadores clásicos', {
          gradientFrom: '#22d3ee',
          gradientTo: '#0ea5e9',
          footer: 'High scores retro',
        }),
        alt: 'Marcadores clásicos del videojuego Cadillacs and Dinosaurs en Factoría Retro',
      },
      {
        src: createPoster('Galería TOTEM 4', 'Cabinet original', {
          gradientFrom: '#f97316',
          gradientTo: '#fb7185',
          footer: 'Red Bull corner',
        }),
        alt: 'Cabina completa de la máquina TOTEM 4 players en Factoría Retro',
      },
    ],
  },
  {
    title: 'I Torneo de THE KING OF FIGHTERS 98',
    date: '22 de junio de 2025',
    description: [
      'Prepárate para combates intensos, risas aseguradas y una buena dosis de nostalgia pixelada.',
      'Si crees que tienes lo que hace falta para ser el mejor, ¡ven a demostrarlo! Habrá trofeos para los ganadores. Diversión garantizada para todos. ¡Ambiente retro, comunidad brutal y pura pasión por los videojuegos! ¡No importa si eres un…',
    ],
    image: createPoster("TORNEO KOF '98", 'Trofeos y mucha nostalgia retro', {
      gradientFrom: '#f97316',
      gradientTo: '#ef4444',
      footer: '22 de junio de 2025',
    }),
    imageAlt: 'Cartel del primer torneo de The King of Fighters 98',
    location: 'Factoría Retro, Alcorcón',
  },
  {
    title: '¡¡Nuevo horario de verano!!',
    date: '6 de julio de 2025',
    description: [
      'Como ya es verano tenemos un horario especial para que podáis disfrutar más días jugando.',
    ],
    image: createPoster('HORARIO DE VERANO', 'Más días para jugar en Factoría Retro', {
      gradientFrom: '#facc15',
      gradientTo: '#fb923c',
      footer: 'Vive el museo arcade',
    }),
    imageAlt: 'Anuncio del horario de verano en Factoría Retro',
    location: 'Factoría Retro, Alcorcón',
  },
  {
    title: 'Torneo de STREET FIGHTER II: Champion Edition',
    date: '22 de junio de 2025',
    description: [
      'Prepárate para combates intensos, risas aseguradas y una buena dosis de nostalgia pixelada. Si crees que tienes lo que hace falta para ser el mejor, ¡ven a demostrarlo!',
      '🏆 Habrá trofeos, diplomas y abonos para los ganadores',
      '🕹️ Diversión garantizada para todos',
      '👾 ¡Ambiente retro, comunidad brutal y pura pasión por los videojuegos!',
      '¡No importa si eres un pro o si solo vienes a pasarlo bien!',
      'Trae a tus amigos, elige tu personaje y…',
      '¡LUCHA!',
    ],
    image: createPoster(['STREET FIGHTER II', 'CHAMPION EDITION'], 'Torneo arcade con premios para los mejores', {
      gradientFrom: '#f97316',
      gradientTo: '#f43f5e',
      footer: '22 de junio · 19:30 h',
    }),
    imageAlt: 'Cartel del torneo de Street Fighter II Champion Edition',
    location: 'Factoría Retro, Alcorcón',
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
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 backdrop-blur space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-8">
                <figure className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900">
                  <img
                    src={tournament.image}
                    alt={tournament.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">{tournament.imageAlt}</figcaption>
                </figure>

                <div className="space-y-6">
                  <header className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Archivo oficial</p>
                    <h3 className="text-3xl font-bold text-white">{tournament.title}</h3>
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
                        Comunidad gamer Factoría Retro
                      </span>
                    </div>
                  </header>

                  <div className="space-y-4">
                    {tournament.description.map((paragraph, index) => (
                      <p key={`${tournament.title}-paragraph-${index}`} className="text-slate-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {tournament.link && (
                    <a
                      href={tournament.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white font-semibold hover:from-amber-400 hover:to-red-400 transition-colors"
                    >
                      Ver publicación original
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {tournament.gallery && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-amber-300 uppercase tracking-[0.3em]">
                    <Images className="w-4 h-4" />
                    Galería del evento
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {tournament.gallery.map((media) => (
                      <figure
                        key={media.alt}
                        className="overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/60"
                      >
                        <img src={media.src} alt={media.alt} className="w-full h-full object-cover" loading="lazy" />
                        <figcaption className="sr-only">{media.alt}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
