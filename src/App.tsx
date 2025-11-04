import { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HistoriaPage from './pages/HistoriaPage';
import MuseoPage from './pages/MuseoPage';
import EventosPage from './pages/EventosPage';
import CumpleanosPage from './pages/CumpleanosPage';
import AlquilerPage from './pages/AlquilerPage';
import ExposicionesPage from './pages/ExposicionesPage';
import SATPage from './pages/SATPage';
import EntradasPage from './pages/EntradasPage';
import TiendaPage from './pages/TiendaPage';
import ContactoPage from './pages/ContactoPage';
import TorneosPage from './pages/TorneosPage';

type PageType = 'inicio' | 'historia' | 'museo' | 'eventos' | 'torneos' | 'cumpleanos' | 'alquiler' | 'exposiciones' | 'sat' | 'entradas' | 'tienda' | 'contacto';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio': return <HomePage />;
      case 'historia': return <HistoriaPage />;
      case 'museo': return <MuseoPage />;
      case 'eventos': return <EventosPage />;
      case 'torneos': return <TorneosPage />;
      case 'cumpleanos': return <CumpleanosPage />;
      case 'alquiler': return <AlquilerPage />;
      case 'exposiciones': return <ExposicionesPage />;
      case 'sat': return <SATPage />;
      case 'entradas': return <EntradasPage />;
      case 'tienda': return <TiendaPage />;
      case 'contacto': return <ContactoPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
      <main>
        {renderPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}