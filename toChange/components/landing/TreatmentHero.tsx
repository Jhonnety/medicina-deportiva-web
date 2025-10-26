import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { CheckCircle2, Clock, Users, Award } from "lucide-react";

interface TreatmentHeroProps {
  title: string;
  subtitle: string;
  images: string[];
  icon: React.ComponentType<any>;
  color: string;
  stats?: {
    experience: string;
    location: string;
    patients: string;
  };
}

export function TreatmentHero({ 
  title, 
  subtitle, 
  images, 
  icon: IconComponent,
  color,
  stats = {
    experience: "+20 años de experiencia",
    location: "Torre Medical – El Poblado",
    patients: "Más de 2.000 pacientes tratados"
  }
}: TreatmentHeroProps) {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--bg-general)] via-white to-[var(--secondary-green)]/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-blue)] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary-green)] rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center shadow-xl`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <Badge className="bg-[var(--secondary-green)] text-[var(--text-titles)] border-0">
                Tratamiento Especializado
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-titles)] leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-[var(--text-main)] leading-relaxed">
              {subtitle}
            </p>
            
            {/* Stats/Social Proof */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-main)]">
                <Award className="w-5 h-5 text-[var(--cta-blue)]" />
                <span>{stats.experience}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-main)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--whatsapp-green)]" />
                <span>{stats.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-main)]">
                <Users className="w-5 h-5 text-[var(--primary-blue)]" />
                <span>{stats.patients}</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white shadow-xl text-lg px-8 py-6"
                onClick={() => window.open(`https://wa.me/573044386208?text=Hola, quiero agendar una valoración para ${title}`, '_blank')}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Agendar Valoración
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[var(--cta-blue)] text-[var(--cta-blue)] hover:bg-[var(--cta-blue)] hover:text-white text-lg px-8 py-6"
                onClick={() => {
                  const contactSection = document.getElementById('contacto-landing');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Clock className="w-5 h-5 mr-2" />
                Consultar Disponibilidad
              </Button>
            </div>
          </div>
          
          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 4).map((image, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                  index === 0 ? 'col-span-2 h-64' : 'h-48'
                }`}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${title} - Imagen ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
