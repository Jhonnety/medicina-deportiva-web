import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function Header({ onNavigate, currentPage = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // If we're not on home page, navigate to home first
    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
    } else {
      scrollToSection('inicio');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="text-2xl font-bold text-[var(--text-titles)]">
              JM
            </div>
            <div className="ml-2 text-sm">
              <div className="font-semibold text-[var(--text-titles)]">Dr. James Madrid</div>
              <div className="text-xs text-[var(--text-main)]">Medicina Deportiva</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-[var(--text-main)] hover:text-[var(--cta-blue)] transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('tratamientos')}
              className="text-[var(--text-main)] hover:text-[var(--cta-blue)] transition-colors"
            >
              Tratamientos
            </button>
            <button 
              onClick={() => scrollToSection('proceso')}
              className="text-[var(--text-main)] hover:text-[var(--cta-blue)] transition-colors"
            >
              Proceso
            </button>
            <button 
              onClick={() => scrollToSection('doctor')}
              className="text-[var(--text-main)] hover:text-[var(--cta-blue)] transition-colors"
            >
              Doctor
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-[var(--text-main)] hover:text-[var(--cta-blue)] transition-colors"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('faqs')}
              className="text-[var(--text-main)] hover:text-[var(--cta-blue)] transition-colors"
            >
              FAQs
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-[var(--text-main)] hover:text-[var(--cta-blue)] transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* WhatsApp Button */}
          <Button 
            className="hidden md:flex bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white"
            onClick={() => window.open('https://wa.me/573044386208', '_blank')}
          >
            WhatsApp
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-3 py-2 text-[var(--text-main)] hover:bg-[var(--bg-general)] rounded-md"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('tratamientos')}
              className="block w-full text-left px-3 py-2 text-[var(--text-main)] hover:bg-[var(--bg-general)] rounded-md"
            >
              Tratamientos
            </button>
            <button 
              onClick={() => scrollToSection('proceso')}
              className="block w-full text-left px-3 py-2 text-[var(--text-main)] hover:bg-[var(--bg-general)] rounded-md"
            >
              Proceso
            </button>
            <button 
              onClick={() => scrollToSection('doctor')}
              className="block w-full text-left px-3 py-2 text-[var(--text-main)] hover:bg-[var(--bg-general)] rounded-md"
            >
              Doctor
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="block w-full text-left px-3 py-2 text-[var(--text-main)] hover:bg-[var(--bg-general)] rounded-md"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('faqs')}
              className="block w-full text-left px-3 py-2 text-[var(--text-main)] hover:bg-[var(--bg-general)] rounded-md"
            >
              FAQs
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-3 py-2 text-[var(--text-main)] hover:bg-[var(--bg-general)] rounded-md"
            >
              Contacto
            </button>
            <Button 
              className="w-full mt-2 bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white"
              onClick={() => window.open('https://wa.me/573044386208', '_blank')}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}