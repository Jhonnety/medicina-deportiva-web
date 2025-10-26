import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { Toaster } from "./components/ui/sonner";
import { HomePage } from "./pages/HomePage";
import { ArtrosisPage } from "./pages/treatments/ArtrosisPage";
import { ProloterapiaPage } from "./pages/treatments/ProloterapiaPage";
import { PlasmaRicoPlaquetasPage } from "./pages/treatments/PlasmaRicoPlaquetasPage";
import { LesionesDeportivasPage } from "./pages/treatments/LesionesDeportivasPage";
import { DiagnosticoEcoguiadoPage } from "./pages/treatments/DiagnosticoEcoguiadoPage";
import { ProgramasAdelgazamientoPage } from "./pages/treatments/ProgramasAdelgazamientoPage";

type Page = 'home' | 'treatment';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [treatmentSlug, setTreatmentSlug] = useState<string | undefined>();

  const handleNavigate = (page: string, slug?: string) => {
    setCurrentPage(page as Page);
    setTreatmentSlug(slug);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage('home');
      setTreatmentSlug(undefined);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    if (currentPage === 'home') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    if (currentPage === 'treatment') {
      switch (treatmentSlug) {
        case 'artrosis':
          return <ArtrosisPage />;
        case 'proloterapia':
          return <ProloterapiaPage />;
        case 'prp':
          return <PlasmaRicoPlaquetasPage />;
        case 'lesiones-deportivas':
          return <LesionesDeportivasPage />;
        case 'diagnostico-ecoguiado':
          return <DiagnosticoEcoguiadoPage />;
        case 'programa-adelgazamiento':
          return <ProgramasAdelgazamientoPage />;
        default:
          return <HomePage onNavigate={handleNavigate} />;
      }
    }

    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-[var(--bg-general)]">
      {/* Header */}
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      {/* Main Content */}
      {renderPage()}
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
      
      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'var(--bg-general)',
            color: 'var(--text-main)',
            border: '1px solid var(--details-gray)'
          }
        }}
      />
    </div>
  );
}
