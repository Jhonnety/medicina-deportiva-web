import { Badge } from "./ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { HelpCircle } from "lucide-react";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "¿Qué es la medicina deportiva y quién puede beneficiarse?",
    answer: "La medicina deportiva es una especialidad médica enfocada en prevenir, diagnosticar y tratar lesiones relacionadas con la actividad física. Tratamos desde deportistas de alto rendimiento hasta personas con actividades cotidianas que presentan molestias."
  },
  {
    question: "¿Los tratamientos requieren cirugía?",
    answer: "No. Nuestra especialidad es el tratamiento NO quirúrgico. Utilizamos técnicas avanzadas como proloterapia, plasma rico en plaquetas (PRP), terapias regenerativas e infiltraciones ecoguiadas."
  },
  {
    question: "¿Necesito cita previa?",
    answer: "Trabajamos con cita previa para garantizar atención personalizada. Para urgencias, contáctanos por WhatsApp al +57 304 438 62 08 y haremos lo posible por atenderte el mismo día."
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Estamos en Torre Medical, El Poblado, Medellín. Zona accesible con parqueadero, cerca del Metro Estación Poblado. Puedes ver la ubicación exacta en nuestra sección de contacto."
  },
  {
    question: "¿Cuántas sesiones necesito?",
    answer: "Depende de tu condición específica. Algunas condiciones mejoran en 2-4 sesiones, mientras que lesiones complejas pueden requerir 8-12 sesiones. El Dr. Madrid te dará un estimado en la primera consulta."
  },
  {
    question: "¿Aceptan seguros médicos?",
    answer: "Sí, trabajamos con los principales seguros médicos y medicina prepagada de Colombia. Verifica tu cobertura con tu aseguradora antes de la cita."
  }
];

export function FAQsSection() {
  return (
    <section id="faqs" className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--secondary-green)] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary-blue)] rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-[var(--secondary-green)] text-[var(--text-titles)] border-0 mb-4">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-4">
            ¿Tienes dudas? Te ayudamos
          </h2>
          <p className="text-lg text-[var(--text-main)] max-w-2xl mx-auto">
            Respuestas rápidas a las preguntas más comunes
          </p>
        </div>

        {/* FAQs Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-[var(--details-gray)]/30 p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--cta-blue)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-[var(--text-titles)] group-hover:text-[var(--cta-blue)] transition-colors duration-300 flex-1">
                  {faq.question}
                </h3>
              </div>
              <p className="text-sm text-[var(--text-main)] leading-relaxed pl-14">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-[var(--cta-blue)] text-[var(--cta-blue)] hover:bg-[var(--cta-blue)] hover:text-white min-w-[200px]"
            onClick={() => window.open('https://wa.me/573044386208?text=Hola, tengo algunas preguntas sobre los tratamientos', '_blank')}
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Ver Todas las Preguntas
          </Button>
          
          <Button 
            size="lg"
            className="bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white shadow-lg min-w-[200px]"
            onClick={() => window.open('https://wa.me/573044386208?text=Hola, tengo algunas preguntas sobre los tratamientos', '_blank')}
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Preguntar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
