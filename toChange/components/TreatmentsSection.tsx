import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Activity, Heart, Droplets, Scale, Stethoscope, Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const treatments = [
  {
    icon: Activity,
    title: "Tratamiento de Artrosis",
    slug: "artrosis",
    description: "Tratamiento médico ecoguiado que reduce el dolor y mejora la movilidad sin necesidad de cirugía. Terapias regenerativas para recuperar la función articular.",
    benefits: [
      "Alivio del dolor articular",
      "Mejora en movilidad",
      "Reducción de inflamación"
    ],
    color: "bg-gradient-to-br from-[#A2C3D5] to-[#8BADC2]",
    image: "https://images.unsplash.com/photo-1659081461961-031c8e328094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZWRpY2luZSUyMGRvY3RvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjAzODYyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true
  },
  {
    icon: Heart,
    title: "Proloterapia",
    slug: "proloterapia",
    description: "Técnica regenerativa no quirúrgica que fortalece ligamentos y tendones dañados mediante la estimulación natural del cuerpo.",
    benefits: [
      "Fortalecimiento estructural",
      "Alivio duradero del dolor",
      "Mejora de estabilidad articular"
    ],
    color: "bg-gradient-to-br from-rose-300 to-pink-300",
    image: "https://images.unsplash.com/photo-1758653500124-e916873a84cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5qZWN0aW9uJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MDM4NjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true
  },
  {
    icon: Droplets,
    title: "Plasma Rico en Plaquetas (PRP)",
    slug: "prp",
    description: "Terapia regenerativa avanzada que utiliza factores de crecimiento de tu propia sangre para acelerar la curación de lesiones.",
    benefits: [
      "Regeneración tisular acelerada",
      "Tratamiento 100% natural",
      "Reducción del dolor crónico"
    ],
    color: "bg-gradient-to-br from-amber-300 to-yellow-300",
    image: "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWVkaWNhbCUyMGRpYWdub3Npc3xlbnwxfHx8fDE3NjAzODYyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  },
  {
    icon: Stethoscope,
    title: "Lesiones Deportivas",
    slug: "lesiones-deportivas",
    description: "Diagnóstico preciso y tratamiento especializado para lesiones deportivas con ecografía y terapias regenerativas avanzadas.",
    benefits: [
      "Retorno más rápido al deporte",
      "Prevención de recaídas",
      "Diagnóstico preciso con ecografía"
    ],
    color: "bg-gradient-to-br from-emerald-300 to-teal-300",
    image: "https://images.unsplash.com/photo-1522845052468-8b871a6176e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBleGVyY2lzZXxlbnwxfHx8fDE3NjAzNzEzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  },
  {
    icon: Activity,
    title: "Diagnóstico Ecoguiado",
    slug: "diagnostico-ecoguiado",
    description: "Diagnóstico por imagen en tiempo real para identificar con precisión lesiones de tendones, ligamentos, músculos y articulaciones.",
    benefits: [
      "Diagnóstico inmediato",
      "Sin radiación",
      "Mayor precisión en tratamientos"
    ],
    color: "bg-gradient-to-br from-sky-300 to-cyan-300",
    image: "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWVkaWNhbCUyMGRpYWdub3Npc3xlbnwxfHx8fDE3NjAzODYyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  },
  {
    icon: Scale,
    title: "Programa de Adelgazamiento",
    slug: "programa-adelgazamiento",
    description: "Programa médicamente supervisado que combina evaluación nutricional, suero terapia y seguimiento personalizado para pérdida de peso saludable.",
    benefits: [
      "Pérdida de peso saludable",
      "Supervisión médica continua",
      "Mejora de condiciones médicas"
    ],
    color: "bg-gradient-to-br from-violet-300 to-purple-300",
    image: "https://images.unsplash.com/photo-1670165088604-5a39f5c1be51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBoZWFsdGh5JTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MDM2MTk0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  }
];

interface TreatmentsSectionProps {
  onNavigate?: (page: string, treatmentSlug?: string) => void;
}

export function TreatmentsSection({ onNavigate }: TreatmentsSectionProps) {
  return (
    <section id="tratamientos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animations */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Badge className="bg-[var(--secondary-green)] text-[var(--text-titles)] border-0 mb-4 animate-in fade-in slide-in-from-top-2 duration-500">
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Tratamientos Especializados
          </h2>
          <p className="text-xl text-[var(--text-main)] max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Ofrecemos una amplia gama de tratamientos médicos avanzados, 
            diseñados para restaurar tu salud y optimizar tu rendimiento físico.
          </p>
        </div>

        {/* Featured Treatments - Large cards with images */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {treatments.filter(t => t.featured).map((treatment, index) => {
            const IconComponent = treatment.icon;
            return (
              <div 
                key={index} 
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="grid md:grid-cols-5 h-full relative">
                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10 pointer-events-none"></div>
                  
                  {/* Image Section */}
                  <div className="md:col-span-2 relative overflow-hidden h-[250px] md:h-auto">
                    <ImageWithFallback
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent group-hover:from-black/30 transition-colors duration-500"></div>
                    
                    {/* Icon Badge Floating with pulse animation */}
                    <div className="absolute top-4 left-4 animate-in fade-in zoom-in duration-500 delay-300">
                      <div className={`w-14 h-14 ${treatment.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative`}>
                        <div className="absolute inset-0 rounded-2xl bg-white/30 animate-pulse"></div>
                        <IconComponent className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Featured badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-white/95 text-[var(--text-titles)] border-0 shadow-lg animate-in slide-in-from-right-2">
                        Destacado
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-3 p-6 lg:p-8 flex flex-col justify-between relative">
                    {/* Decorative gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-green)]/10 via-transparent to-[var(--primary-blue)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-titles)] mb-3 group-hover:text-[var(--cta-blue)] transition-all duration-300 group-hover:translate-x-1">
                        {treatment.title}
                      </h3>
                      <p className="text-[var(--text-main)] leading-relaxed mb-4 group-hover:text-[var(--text-titles)] transition-colors duration-300">
                        {treatment.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        <h4 className="text-sm font-semibold text-[var(--text-titles)] uppercase tracking-wide flex items-center gap-2">
                          <div className="w-1 h-4 bg-[var(--cta-blue)] rounded-full group-hover:h-6 transition-all duration-300"></div>
                          Beneficios clave:
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {treatment.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                            <li 
                              key={benefitIndex} 
                              className="flex items-center text-sm text-[var(--text-main)] group/item hover:translate-x-2 transition-transform duration-300"
                              style={{ animationDelay: `${(benefitIndex + 1) * 100}ms` }}
                            >
                              <div className="w-1.5 h-1.5 bg-[var(--cta-blue)] rounded-full mr-2 flex-shrink-0 group-hover/item:scale-150 group-hover/item:bg-[var(--whatsapp-green)] transition-all duration-300"></div>
                              <span className="group-hover/item:text-[var(--text-titles)] transition-colors duration-200">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-[var(--cta-blue)] hover:bg-[var(--primary-blue)] text-white group/btn relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative z-10"
                      onClick={() => {
                        if (onNavigate && treatment.slug) {
                          onNavigate('treatment', treatment.slug);
                        }
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Ver Más Información
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regular Treatments - Compact cards with images */}
        <div className="grid md:grid-cols-2 gap-6">
          {treatments.filter(t => !t.featured).map((treatment, index) => {
            const IconComponent = treatment.icon;
            
            return (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] animate-in fade-in slide-in-from-bottom-6 duration-700 relative"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10 pointer-events-none"></div>
                
                <div className="grid sm:grid-cols-5">
                  {/* Image Section */}
                  <div className="sm:col-span-2 relative overflow-hidden h-[180px] sm:h-auto">
                    <ImageWithFallback
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent group-hover:from-black/20 transition-colors duration-500"></div>
                    
                    {/* Icon Badge with animation */}
                    <div className="absolute top-3 left-3 animate-in fade-in zoom-in duration-500">
                      <div className={`w-12 h-12 ${treatment.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative`}>
                        <div className="absolute inset-0 rounded-xl bg-white/20 group-hover:animate-pulse"></div>
                        <IconComponent className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="sm:col-span-3 p-5 flex flex-col justify-between relative">
                    {/* Subtle gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-[var(--text-titles)] mb-2 group-hover:text-[var(--cta-blue)] transition-all duration-300 group-hover:translate-x-1">
                        {treatment.title}
                      </h3>
                      
                      {/* Description - always fully visible */}
                      <p className="text-sm text-[var(--text-main)] leading-relaxed mb-3 group-hover:text-[var(--text-titles)] transition-colors duration-300">
                        {treatment.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <h4 className="text-xs font-semibold text-[var(--text-titles)] uppercase tracking-wide flex items-center gap-1.5">
                          <div className="w-0.5 h-3 bg-[var(--cta-blue)] rounded-full group-hover:h-4 transition-all duration-300"></div>
                          Beneficios clave:
                        </h4>
                        <div className="space-y-1">
                          {treatment.benefits.map((benefit, benefitIndex) => (
                            <div 
                              key={benefitIndex} 
                              className="flex items-start text-xs text-[var(--text-main)] group/benefit hover:translate-x-2 transition-transform duration-300"
                            >
                              <div className="w-1 h-1 bg-[var(--cta-blue)] rounded-full mr-2 flex-shrink-0 mt-1.5 group-hover/benefit:scale-150 group-hover/benefit:bg-[var(--whatsapp-green)] transition-all duration-300"></div>
                              <span className="group-hover/benefit:text-[var(--text-titles)] transition-colors duration-200 leading-relaxed">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm"
                      className="w-full bg-[var(--cta-blue)] hover:bg-[var(--primary-blue)] text-white text-sm group/btn relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative z-10"
                      onClick={() => {
                        if (onNavigate && treatment.slug) {
                          onNavigate('treatment', treatment.slug);
                        }
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-1">
                        Ver Más
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}