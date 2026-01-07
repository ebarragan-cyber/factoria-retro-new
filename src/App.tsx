import { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HistoriaPage from './pages/HistoriaPage';
import MuseoPage from './pages/MuseoPage';
import EventosPage from './pages/EventosPage';
import CumpleanosPage from './pages/CumpleanosPage';
import AlquilerPage from './pages/AlquilerPage';
import SATPage from './pages/SATPage';
import EntradasPage from './pages/EntradasPage';
import TiendaPage from './pages/TiendaPage';
import ContactoPage from './pages/ContactoPage';
import TorneosPage from './pages/TorneosPage';
import AdminPage from './pages/AdminPage';
import PagoCompletadoPage from './pages/PagoCompletadoPage';
import GaleriaPage from './pages/GaleriaPage';
import { PageType } from './types/navigation';

const ROUTES: Record<PageType, string> = {
  inicio: '/',
  historia: '/historia',
  museo: '/museo',
  eventos: '/eventos',
  torneos: '/torneos',
  cumpleanos: '/cumpleanos',
  alquiler: '/alquiler',
  sat: '/sat',
  entradas: '/entradas',
  galeria: '/galeria',
  tienda: '/tienda',
  contacto: '/contacto',
  admin: '/admin',
  'pago-completado': '/pago-completado'
};

const resolvePageFromPath = (pathname: string): PageType => {
  const normalized = pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;

  const match = (Object.entries(ROUTES) as Array<[PageType, string]>)
    .find(([, path]) => path === normalized);

  return match ? match[0] : 'inicio';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('inicio');

  useEffect(() => {
    setCurrentPage(resolvePageFromPath(window.location.pathname));

    const handlePopState = () => {
      setCurrentPage(resolvePageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageType) => {
    const nextPath = ROUTES[page] ?? '/';
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio': return <HomePage />;
      case 'historia': return <HistoriaPage />;
      case 'museo': return <MuseoPage />;
      case 'eventos': return <EventosPage />;
      case 'torneos': return <TorneosPage />;
      case 'cumpleanos': return <CumpleanosPage />;
      case 'alquiler': return <AlquilerPage />;
      case 'sat': return <SATPage />;
      case 'entradas': return <EntradasPage />;
      case 'galeria': return <GaleriaPage />;
      case 'tienda': return <TiendaPage />;
      case 'contacto': return <ContactoPage />;
      case 'admin': return <AdminPage />;
      case 'pago-completado': return <PagoCompletadoPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar currentPage={currentPage} onPageChange={handleNavigate} />
      </div>
      <main>
        {renderPage()}
      </main>
      <Footer onPageChange={handleNavigate} />
    </div>
  );
}
