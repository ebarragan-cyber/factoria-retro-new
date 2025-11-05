import TicketPurchaseForm from '../components/TicketPurchaseForm';

export default function EntradasPage() {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Compra tus Entradas
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Reserva tu visita y disfruta de la experiencia retro gaming
          </p>
        </div>

        <div className="mb-12">
          <TicketPurchaseForm />
        </div>
      </div>
    </div>
  );
}
