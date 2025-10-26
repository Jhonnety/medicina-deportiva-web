import { Badge } from "../ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface TreatmentFAQsProps {
  faqs: FAQ[];
  treatmentName: string;
}

export function TreatmentFAQs({ faqs, treatmentName }: TreatmentFAQsProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-[var(--bg-general)] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-[var(--secondary-green)] text-[var(--text-titles)] border-0 mb-4">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-4">
            Resuelve tus dudas sobre {treatmentName}
          </h2>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-[var(--details-gray)]/30">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[var(--details-gray)]/50 rounded-xl px-6 bg-[var(--bg-general)]/30 hover:bg-[var(--bg-general)]/60 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 group">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--cta-blue)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <HelpCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-[var(--text-titles)] group-hover:text-[var(--cta-blue)] transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[var(--text-main)] leading-relaxed pl-12 pr-4 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
