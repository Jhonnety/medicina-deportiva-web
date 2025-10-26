import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => window.open('https://wa.me/573044386208?text=Hola, me interesa información sobre los tratamientos', '_blank')}
        className="group bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Tooltip */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ¡Agenda tu cita por WhatsApp!
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black"></div>
        </div>
      </button>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 bg-[var(--whatsapp-green)] rounded-full animate-ping opacity-20"></div>
    </div>
  );
}