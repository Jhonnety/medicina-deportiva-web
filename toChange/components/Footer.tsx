import { Heart, MapPin, Phone, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--text-titles)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold mr-2">JM</div>
              <div>
                <div className="font-semibold">Dr. James Madrid</div>
                <div className="text-sm text-gray-300">Medicina Física y del Deporte</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Especialistas en medicina deportiva avanzada, comprometidos con tu recuperación 
              y bienestar. Más de 20 años transformando vidas sin cirugía.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-gray-300">"No tratamos enfermedades, transformamos vidas"</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--whatsapp-green)]" />
                <span className="text-gray-300">+57 304 438 62 08</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--primary-blue)]" />
                <span className="text-gray-300 text-xs">consultorio.medico.drjamesmadrid@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--secondary-green)]" />
                <span className="text-gray-300">Medellín, Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[var(--cta-blue)]" />
                <span className="text-gray-300">@deportologo.james</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Medicina Deportiva</li>
              <li>Manejo del Dolor</li>
              <li>Terapias Regenerativas</li>
              <li>Programa de Adelgazamiento</li>
              <li>Suero Terapia</li>
              <li>Consulta Especializada</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 Dr. James Madrid - Medicina Deportiva. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.open('https://wa.me/573044386208', '_blank')}
              className="bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
            >
              Contactar WhatsApp
            </button>
            <button 
              onClick={() => window.open('https://instagram.com/deportologo.james', '_blank')}
              className="bg-[var(--cta-blue)] hover:bg-[#8BB1C7] text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
            >
              Seguir en Instagram
            </button>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8 py-4 bg-[var(--secondary-green)]/10 rounded-lg">
          <p className="text-sm text-gray-300">
            🔒 Respetamos tu privacidad • ⭐ +1000 pacientes satisfechos • 🏥 20 años de experiencia
          </p>
        </div>
      </div>
    </footer>
  );
}