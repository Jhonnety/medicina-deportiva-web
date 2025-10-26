import { Badge } from "../ui/badge";
import { ClipboardCheck, Syringe, TrendingUp } from "lucide-react";

interface TreatmentProcessProps {
  steps: Array<{
    title: string;
    description: string;
  }>;
}

export function TreatmentProcess({ steps }: TreatmentProcessProps) {
  const icons = [ClipboardCheck, Syringe, TrendingUp];
  
  return (
    <section className="py-12 bg-[var(--bg-general)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block mb-3 px-4 py-2 bg-[var(--secondary-green)] rounded-full">
            <span className="text-sm font-semibold text-[var(--whatsapp-green)] uppercase tracking-wide">
              Proceso Simple
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-3">
            Tu tratamiento en {steps.length} pasos
          </h2>
          <div className="w-20 h-1 bg-[var(--whatsapp-green)] mx-auto rounded-full"></div>
        </div>
        
        {/* Two Column Layout: Steps + CTA */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Steps - Compact horizontal layout */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-[var(--details-gray)]/30">
            <div className="space-y-6">
              {steps.map((step, index) => {
                const IconComponent = icons[index % icons.length];
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 md:gap-6 group hover:bg-[var(--bg-general)] p-4 rounded-xl transition-all duration-300"
                  >
                    {/* Number + Icon combined */}
                    <div className="flex-shrink-0">
                      <div className="relative w-14 h-14 md:w-16 md:h-16">
                        {/* Background circle */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-green)] to-[var(--whatsapp-green)]/80 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        {/* Step number badge */}
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-[var(--text-titles)] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                          <span className="text-sm font-bold text-white">{index + 1}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[var(--text-titles)] mb-2 group-hover:text-[var(--whatsapp-green)] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[var(--text-main)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Divider line with arrow */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--secondary-green)] via-[var(--whatsapp-green)] to-[var(--secondary-green)] opacity-20"></div>
          </div>
          
          {/* CTA Card - Sticky on desktop */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-gradient-to-br from-[var(--whatsapp-green)] to-[#1DA851] rounded-2xl shadow-xl p-6 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  ¿Listo para comenzar?
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Agenda tu cita de valoración y da el primer paso hacia tu recuperación
                </p>
              </div>
              
              <button
                onClick={() => window.open('https://wa.me/573044386208?text=Hola, quiero agendar una cita de valoración', '_blank')}
                className="w-full bg-white hover:bg-white/90 text-[var(--whatsapp-green)] px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Agendar Cita Ahora
              </button>
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center justify-center gap-2 text-sm text-white/90">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Respuesta en menos de 1 hora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom note - more compact */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[var(--text-main)] italic">
            <span className="font-semibold text-[var(--text-titles)]">Acompañamiento profesional</span> en cada etapa de tu recuperación
          </p>
        </div>
      </div>
    </section>
  );
}
