import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

interface TreatmentExplanationProps {
  definition: string;
  explanation: string[];
  physiologicalBenefit: string;
  synonyms?: string[];
}

export function TreatmentExplanation({ 
  definition, 
  explanation, 
  physiologicalBenefit,
  synonyms = []
}: TreatmentExplanationProps) {
  return (
    <section className="py-16 bg-[var(--bg-general)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-4">
            ¿Qué es este tratamiento y cómo funciona?
          </h2>
          <div className="w-20 h-1 bg-[var(--whatsapp-green)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">
          {/* Definition Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-titles)] mb-4">
                Definición
              </h3>
              <p className="text-[var(--text-main)] leading-relaxed text-lg">
                {definition}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-titles)] mb-4">
                Beneficio fisiológico
              </h3>
              <p className="text-[var(--text-main)] leading-relaxed text-lg">
                {physiologicalBenefit}
              </p>
            </div>
            
            {synonyms.length > 0 && (
              <div className="pt-4 border-t border-[var(--details-gray)]">
                <p className="text-sm text-[var(--text-main)]">
                  <span className="font-bold text-[var(--text-titles)]">También conocido como:</span> {synonyms.join(', ')}
                </p>
              </div>
            )}
          </div>
          
          {/* How it works Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[var(--text-titles)] mb-6">
              ¿Cómo funciona?
            </h3>
            <div className="space-y-5">
              {explanation.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-[var(--whatsapp-green)] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="text-[var(--text-main)] leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA destacado */}
        <div className="text-center pt-8">
          <Button 
            size="lg"
            className="bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white shadow-xl text-lg px-10 py-7 rounded-xl"
            onClick={() => window.open('https://wa.me/573044386208?text=Quiero solicitar un diagnóstico personalizado', '_blank')}
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Solicitar Diagnóstico Personalizado
          </Button>
          <p className="text-sm text-[var(--text-main)] mt-4">
            Respuesta inmediata por WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
