export default function EntradasPage() {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            🎟️ Comprar entradas
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Estamos revisando la plataforma de compra para mejorar la experiencia.
          </p>
        </div>
        <div className="bg-slate-800/60 rounded-2xl p-10 border border-amber-400/40 backdrop-blur-sm text-center space-y-6">
          <p className="text-amber-200 text-lg font-semibold">
            Esta sección está en mantenimiento temporalmente.
          </p>
          <p className="text-slate-300">
            Estamos trabajando para volver a habilitar la compra de entradas cuanto antes.
            Si necesitas ayuda o quieres reservar, contáctanos directamente.
          </p>
          <button
            type="button"
            onClick={() => {
              window.location.href = '/contacto';
            }}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:from-cyan-600 hover:to-purple-700 transition-all"
          >
            Ir a contacto
          </button>
        </div>
      </div>
    </div>
  );
}
