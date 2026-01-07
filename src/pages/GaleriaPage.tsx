const galleryImages = Object.values(
  import.meta.glob('../assets/galeria/*.{png,jpg,jpeg,webp,gif,svg}', {
    eager: true,
    import: 'default'
  })
) as string[];

export default function GaleriaPage() {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Galería</h1>
          <p className="text-lg text-slate-300">
            Explora las imágenes más recientes del museo, eventos y experiencias.
          </p>
        </div>

        {galleryImages.length === 0 ? (
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-10 text-center text-slate-300">
            Todavía no hay imágenes en la galería. Sube archivos a
            <span className="text-cyan-300 font-semibold"> src/assets/galeria</span> para mostrarlos aquí.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/60"
              >
                <img
                  src={src}
                  alt={`Galería ${index + 1}`}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
