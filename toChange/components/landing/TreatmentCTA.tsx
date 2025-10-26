import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { MapPin, Phone, Clock, Mail, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import doctorImage from "figma:asset/1ed915a0433d62e88e3c41c9ac4a1d1ed15653b8.png";

interface TreatmentCTAProps {
  treatmentName: string;
  symptomText: string;
  ctaDescription: string;
}

export function TreatmentCTA({ treatmentName, symptomText, ctaDescription }: TreatmentCTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: treatmentName
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, soy ${formData.name}. Me interesa agendar una cita para: ${formData.reason}. Mi teléfono es ${formData.phone}`;
    window.open(`https://wa.me/573044386208?text=${encodeURIComponent(message)}`, '_blank');
    toast.success('Redirigiendo a WhatsApp...');
  };
  
  return (
    <section id="contacto-landing" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner - Symptoms & Treatment */}
        <div className="mb-16 bg-white rounded-2xl overflow-hidden shadow-lg border border-[var(--details-gray)]/30">
          <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center p-8 md:p-10">
            {/* Doctor Image */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[var(--secondary-green)] shadow-md">
                <img
                  src={doctorImage}
                  alt="Dr. James Madrid"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div>
              <div className="flex items-start gap-2 mb-3">
                <AlertCircle className="w-6 h-6 text-[var(--cta-blue)] flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-[var(--text-titles)]">
                  {symptomText}
                </h3>
              </div>
              <p className="text-lg text-[var(--text-main)] leading-relaxed">
                {ctaDescription}
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex-shrink-0 md:ml-4">
              <Button 
                size="lg"
                className="bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white shadow-lg whitespace-nowrap px-8 py-6 text-lg w-full md:w-auto"
                onClick={() => window.open('https://wa.me/573044386208?text=Hola, me interesa información sobre ' + treatmentName, '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Consultar Ahora
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <Badge className="bg-[var(--whatsapp-green)] text-white border-0 mb-4">
            ¡Da el Primer Paso!
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-4">
            Agenda tu cita en Torre Medical, El Poblado
          </h2>
          <p className="text-xl text-[var(--text-main)] max-w-3xl mx-auto">
            Estamos listos para ayudarte a recuperar tu movilidad y bienestar
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[var(--bg-general)] to-white rounded-3xl p-8 shadow-xl border border-[var(--details-gray)]/30">
            <h3 className="text-2xl font-bold text-[var(--text-titles)] mb-6">
              Agenda tu Valoración
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Tu nombre"
                  required
                  className="bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+57 300 123 4567"
                  required
                  className="bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reason">Motivo de consulta</Label>
                <Textarea
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  placeholder="Cuéntanos brevemente tu situación..."
                  rows={4}
                  className="bg-white"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white shadow-lg text-lg py-6"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Enviar por WhatsApp
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Location */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-[var(--details-gray)]/30 group hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--cta-blue)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-titles)] mb-2">Ubicación</h4>
                  <p className="text-[var(--text-main)]">
                    Torre Medical, El Poblado<br />
                    Medellín, Colombia
                  </p>
                </div>
              </div>
            </div>
            
            {/* Phone */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-[var(--details-gray)]/30 group hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--whatsapp-green)] to-[var(--secondary-green)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-titles)] mb-2">Teléfono / WhatsApp</h4>
                  <p className="text-[var(--text-main)]">
                    +57 304 438 62 08
                  </p>
                </div>
              </div>
            </div>
            
            {/* Hours */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-[var(--details-gray)]/30 group hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--secondary-green)] to-[var(--whatsapp-green)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-titles)] mb-2">Horario de Atención</h4>
                  <p className="text-[var(--text-main)]">
                    Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                    Sábados: 8:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[var(--details-gray)]/30 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1649458087757!2d-75.56991492499958!3d6.244924426714748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sTorre%20M%C3%A9dica%20El%20Poblado!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
