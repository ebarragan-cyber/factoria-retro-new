import { SUPPORT_EMAIL } from '../utils/support';

export default function PagoCompletadoPage() {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎉 ¡Pago realizado con éxito!
          </h1>
          <p className="text-lg text-slate-300">
            Gracias por tu compra.
            <br />
            Hemos recibido correctamente el pago de tus entradas.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-3">📩 Confirmación por email</h2>
            <p className="text-slate-300 text-sm">
              En breve recibirás un correo con los detalles de tu compra y la información de acceso a tu entrada.
              Si no encuentras el email, revisa tu carpeta de spam o promociones.
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-3">ℹ️ Información importante</h2>
            <p className="text-slate-300 text-sm">
              Este es un sistema de venta en fase inicial.
              Si tienes cualquier incidencia o duda, puedes contactar con nosotros en: {SUPPORT_EMAIL}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
