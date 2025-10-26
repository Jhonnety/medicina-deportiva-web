import { Badge } from "../ui/badge";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  condition: string;
  text: string;
  rating: number;
}

interface TreatmentTestimonialsProps {
  testimonials: Testimonial[];
}

export function TreatmentTestimonials({ testimonials }: TreatmentTestimonialsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-[var(--whatsapp-green)] text-white border-0 mb-4">
            Testimonios Reales
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-4">
            Historias reales de recuperación
          </h2>
          <p className="text-xl text-[var(--text-main)] max-w-3xl mx-auto">
            Conoce las experiencias de pacientes que han recuperado su movilidad y bienestar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[var(--bg-general)] to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-[var(--details-gray)]/30 group relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-[var(--cta-blue)]" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--whatsapp-green)] text-[var(--whatsapp-green)]" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-[var(--text-main)] leading-relaxed mb-6 relative z-10 italic">
                "{testimonial.text}"
              </p>
              
              {/* Author info */}
              <div className="border-t border-[var(--details-gray)]/50 pt-4">
                <p className="font-bold text-[var(--text-titles)] mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[var(--text-main)]">
                  {testimonial.condition}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--text-main)] italic">
            Testimonios verificados de pacientes reales tratados en Torre Medical, El Poblado
          </p>
        </div>
      </div>
    </section>
  );
}
