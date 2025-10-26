import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail, Instagram, Clock, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    // Create email subject and body
    const subject = encodeURIComponent(`Consulta de ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone || 'No proporcionado'}\n\n` +
      `Mensaje:\n${formData.message}`
    );
    
    // Open default email client
    window.location.href = `mailto:consultorio.medico.drjamesmadrid@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success('Abriendo tu cliente de correo', {
      description: 'Completa el envío desde tu aplicación de email'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      reason: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-[var(--bg-general)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-[var(--secondary-green)] text-[var(--text-titles)] border-0 mb-4">
            Contacto
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-6">
            Agenda tu Consulta
          </h2>
          <p className="text-xl text-[var(--text-main)] max-w-3xl mx-auto">
            Estamos aquí para ayudarte a recuperar tu movilidad y bienestar
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information - Expanded */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="border-b border-[var(--details-gray)] px-6 py-5">
                <h3 className="font-bold text-[var(--text-titles)] mb-1">
                  Información de Contacto
                </h3>
                <p className="text-sm text-[var(--text-main)]">
                  Estamos disponibles para atenderte
                </p>
              </div>
              
              <div className="p-6 space-y-5">
                {/* WhatsApp - Featured with button */}
                <div className="pb-5 border-b border-[var(--details-gray)]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[var(--whatsapp-green)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[var(--text-titles)] mb-1">WhatsApp</h4>
                      <p className="text-sm text-[var(--text-main)] mb-1">Respuesta inmediata</p>
                      <p className="text-[var(--text-titles)] font-semibold">
                        +57 304 438 62 08
                      </p>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white"
                    onClick={() => window.open('https://wa.me/573044386208?text=Hola, me gustaría agendar una consulta', '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Agendar Cita por WhatsApp
                  </Button>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 pb-5 border-b border-[var(--details-gray)]">
                  <div className="w-12 h-12 bg-[var(--primary-blue)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--text-titles)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[var(--text-titles)] mb-1">Email</h4>
                    <p className="text-sm text-[var(--text-main)] break-all hover:text-[var(--cta-blue)] cursor-pointer transition-colors"
                       onClick={() => window.location.href = 'mailto:consultorio.medico.drjamesmadrid@gmail.com'}>
                      consultorio.medico.drjamesmadrid@gmail.com
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4 pb-5 border-b border-[var(--details-gray)]">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[var(--text-titles)] mb-1">Instagram</h4>
                    <p className="text-sm text-purple-600 hover:text-purple-700 cursor-pointer transition-colors"
                       onClick={() => window.open('https://instagram.com/deportologo.james', '_blank')}>
                      @deportologo.james
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 pb-5 border-b border-[var(--details-gray)]">
                  <div className="w-12 h-12 bg-[var(--cta-blue)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[var(--text-titles)] mb-1">Ubicación</h4>
                    <p className="text-sm text-[var(--text-main)] mb-0.5">Torre Medical, El Poblado</p>
                    <p className="text-sm text-[var(--text-main)] hover:text-[var(--cta-blue)] cursor-pointer transition-colors"
                       onClick={() => window.open('https://www.google.com/maps/place/Torre+M%C3%A9dica+Salud+y+Servicios/@6.2226021,-75.5774345,1095m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e4429cb562fe71b:0x1f63134c973a3c9c!8m2!3d6.2225968!4d-75.5748596!16s%2Fg%2F11bzyxmgsf', '_blank')}>
                      Ver en Google Maps →
                    </p>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--secondary-green)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--text-titles)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[var(--text-titles)] mb-2">Horarios de Atención</h4>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-[var(--text-main)]">Lunes - Viernes</span>
                        <span className="font-semibold text-[var(--text-titles)]">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[var(--text-main)]">Sábados</span>
                        <span className="font-semibold text-[var(--text-titles)]">8:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[var(--text-main)]">Domingos</span>
                        <span className="text-[var(--text-main)]">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Form Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-4 border-b border-[var(--details-gray)] bg-[var(--bg-general)]">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[var(--text-titles)] flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[var(--cta-blue)]" />
                    Torre Medical, El Poblado - Medellín
                  </h3>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="border-[var(--cta-blue)] text-[var(--cta-blue)]"
                    onClick={() => window.open('https://www.google.com/maps/place/Torre+M%C3%A9dica+Salud+y+Servicios/@6.2226021,-75.5774345,1095m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e4429cb562fe71b:0x1f63134c973a3c9c!8m2!3d6.2225968!4d-75.5748596!16s%2Fg%2F11bzyxmgsf', '_blank')}
                  >
                    Abrir en Maps
                  </Button>
                </div>
              </div>
              <div className="relative w-full h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0675774858744!2d-75.5774345!3d6.2226021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429cb562fe71b%3A0x1f63134c973a3c9c!2sTorre%20M%C3%A9dica%20Salud%20y%20Servicios!5e0!3m2!1ses!2sco!4v1704900000000!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Torre Medical"
                />
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-[var(--text-titles)]">
                  Enviar Mensaje
                </CardTitle>
                <p className="text-sm text-[var(--text-main)]">
                  Te responderemos en menos de 24 horas
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-[var(--text-titles)] mb-1.5">
                        Nombre *
                      </label>
                      <Input 
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border-[var(--details-gray)]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[var(--text-titles)] mb-1.5">
                        Teléfono
                      </label>
                      <Input 
                        type="tel"
                        placeholder="+57 300 123 4567"
                        value={formData.phone || ''}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-[var(--details-gray)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[var(--text-titles)] mb-1.5">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-[var(--details-gray)]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[var(--text-titles)] mb-1.5">
                      Mensaje *
                    </label>
                    <Textarea 
                      placeholder="Describe brevemente tu consulta..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-[var(--details-gray)] min-h-[100px] resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[var(--cta-blue)] hover:bg-[#8BB1C7] text-white"
                  >
                    Enviar Mensaje
                  </Button>

                  <p className="flex items-center gap-2 text-xs text-[var(--text-main)] justify-center">
                    <Shield className="w-3.5 h-3.5" />
                    Tus datos están protegidos
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}