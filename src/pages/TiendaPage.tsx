import { Star, Truck, Shield } from 'lucide-react';

export default function TiendaPage() {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Tienda Retro
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Catálogo de productos y merchandising
          </p>
        </div>

        {/* Productos destacados */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Catálogo de Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Producto 1 - Mini Máquina Rosa */}
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300 group">
              <div className="aspect-square bg-slate-700/50 rounded-lg mb-3 overflow-hidden">
                <img
                  src="/Mini-maquina-recreativa-rosa-01.jpg"
                  alt="Mini Máquina Recreativa Rosa"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Mini Máquina Recreativa Rosa</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
                <span className="text-slate-400 text-xs ml-2">(24)</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-cyan-400">149€</span>
                <span className="text-slate-500 line-through text-sm">199€</span>
              </div>
              <p className="text-xs text-slate-400 text-center">
                Disponible en catálogo. Consulta detalles en el local.
              </p>
            </div>

            {/* Producto 2 - Mini Máquina Azul */}
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300 group">
              <div className="aspect-square bg-slate-700/50 rounded-lg mb-3 overflow-hidden relative">
                <img
                  src="/Mini-maquina-recreativa-azul-01.jpg"
                  alt="Mini Máquina Recreativa Azul - Vista 1"
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src="/Mini-maquina-recreativa-azul-02.jpg"
                  alt="Mini Máquina Recreativa Azul - Vista 2"
                  className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Mini Máquina Recreativa Azul</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
                <span className="text-slate-400 text-xs ml-2">(18)</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-cyan-400">149€</span>
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">POPULAR</span>
              </div>
              <p className="text-xs text-slate-400 text-center">
                Disponible en catálogo. Consulta detalles en el local.
              </p>
            </div>

            {/* Producto 3 - Llavero */}
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300 group">
              <div className="aspect-square bg-slate-700/50 rounded-lg mb-3 overflow-hidden relative">
                <img
                  src="/Llavero-factoria-retro-01.jpg"
                  alt="Llavero Factoría Retro - Vista 1"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <img
                  src="/Llavero-factoria-retro-02.jpg"
                  alt="Llavero Factoría Retro - Vista 2"
                  className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Llavero Factoría Retro</h3>
              <div className="flex items-center mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
                <Star className="w-3 h-3 text-slate-600" />
                <span className="text-slate-400 text-xs ml-2">(12)</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-cyan-400">12€</span>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">NUEVO</span>
              </div>
              <p className="text-xs text-slate-400 text-center">
                Disponible en catálogo. Consulta detalles en el local.
              </p>
            </div>
          </div>
        </div>

        {/* Servicios de la tienda */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Nuestros Servicios</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 backdrop-blur-sm text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl flex items-center justify-center mb-3 mx-auto">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-base font-bold mb-2 text-white">Envío Gratuito</h3>
            <p className="text-slate-300 text-sm">
              Pedidos +50€. Entrega 24-48h.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 backdrop-blur-sm text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-3 mx-auto">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-base font-bold mb-2 text-white">Garantía Total</h3>
            <p className="text-slate-300 text-sm">
              Devoluciones gratuitas 30 días.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 backdrop-blur-sm text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 mx-auto">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-base font-bold mb-2 text-white">Calidad Premium</h3>
            <p className="text-slate-300 text-sm">
              Productos originales y restaurados.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
