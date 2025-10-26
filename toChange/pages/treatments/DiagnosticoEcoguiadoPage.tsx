import { TreatmentHero } from "../../components/landing/TreatmentHero";
import { TreatmentExplanation } from "../../components/landing/TreatmentExplanation";
import { TreatmentIndications } from "../../components/landing/TreatmentIndications";
import { TreatmentBenefits } from "../../components/landing/TreatmentBenefits";
import { TreatmentProcess } from "../../components/landing/TreatmentProcess";
import { TreatmentTestimonials } from "../../components/landing/TreatmentTestimonials";
import { TreatmentFAQs } from "../../components/landing/TreatmentFAQs";
import { TreatmentCTA } from "../../components/landing/TreatmentCTA";
import { Activity } from "lucide-react";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import { FAQsSection } from "../../components/FAQsSection";
import { ContactSection } from "../../components/ContactSection";

export function DiagnosticoEcoguiadoPage() {
  const images = [
    "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWVkaWNhbCUyMGRpYWdub3Npc3xlbnwxfHx8fDE3NjAzODYyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1659081461961-031c8e328094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZWRpY2luZSUyMGRvY3RvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjAzODYyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758653500124-e916873a84cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5qZWN0aW9uJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MDM4NjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1746806942507-a7e93fdd6dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwdGhlcmFweSUyMHJlaGFiaWxpdGF0aW9ufGVufDF8fHx8MTc2MDM4NjI2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <div>
      <TreatmentHero
        title="Diagnóstico Ecoguiado en Medellín | Ecografía Musculoesquelética de Alta Precisión | Dr. James Madrid"
        subtitle="Diagnóstico por imagen en tiempo real para identificar con precisión lesiones de tendones, ligamentos, músculos y articulaciones."
        images={images}
        icon={Activity}
        color="bg-gradient-to-br from-cyan-500 to-blue-600"
      />
      
      <TreatmentExplanation
        definition="El diagnóstico ecoguiado es una técnica médica que utiliza ultrasonido de alta resolución para visualizar en tiempo real estructuras musculoesqueléticas (tendones, ligamentos, músculos, articulaciones, nervios). Permite diagnosticar lesiones con precisión y guiar tratamientos como infiltraciones o terapias regenerativas directamente en el sitio afectado."
        explanation={[
          "Examen no invasivo y sin radiación que visualiza tejidos blandos en alta definición",
          "Evaluación dinámica: el paciente puede mover la articulación durante el examen para identificar problemas funcionales",
          "Comparación bilateral: examinamos ambos lados del cuerpo para detectar diferencias sutiles",
          "Guía en tiempo real para procedimientos: infiltraciones, bloqueos nerviosos, aspiración de líquidos"
        ]}
        physiologicalBenefit="La ecografía musculoesquelética ofrece una ventana directa a los tejidos blandos, superando las limitaciones de los rayos X (que solo muestran hueso) y complementando la resonancia magnética con evaluación dinámica. Esto permite diagnósticos más precisos y tratamientos más efectivos al aplicarlos exactamente donde se necesitan."
        synonyms={["Ecografía musculoesquelética", "Ultrasonido diagnóstico", "Ecografía de partes blandas", "Diagnóstico por ultrasonido"]}
      />
      
      <TreatmentIndications
        indications={[
          {
            text: "Dolor articular o muscular de origen incierto",
            image: "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdWx0cmFzb3VuZCUyMGRpYWdub3N0aWN8ZW58MXx8fHwxNzYwMzg4NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Sospecha de desgarro muscular o tendinoso",
            image: "https://images.unsplash.com/photo-1715531786031-7c4e30a45c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjbGUlMjB0ZWFyJTIwaW5qdXJ5fGVufDF8fHx8MTc2MDM4ODU5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Evaluación de tendinitis o bursitis",
            image: "https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2ludCUyMGluZmxhbW1hdGlvbiUyMGRpYWdub3Npc3xlbnwxfHx8fDE3NjAzODg2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Diagnóstico de lesiones de ligamentos",
            image: "https://images.unsplash.com/photo-1715531786629-bd8b2dd87066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5kb24lMjBpbmp1cnklMjBsaWdhbWVudHxlbnwxfHx8fDE3NjAzODg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Detección de quistes o masas de tejidos blandos",
            image: "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdWx0cmFzb3VuZCUyMGRpYWdub3N0aWN8ZW58MXx8fHwxNzYwMzg4NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Evaluación de neuropatías por atrapamiento",
            image: "https://images.unsplash.com/photo-1568065219398-8f9c0bde728d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwd3Jpc3QlMjBwYWlufGVufDF8fHx8MTc2MDM4ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Guía para infiltraciones precisas",
            image: "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdWx0cmFzb3VuZCUyMGRpYWdub3N0aWN8ZW58MXx8fHwxNzYwMzg4NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Seguimiento de evolución de tratamientos regenerativos",
            image: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjbGUlMjByZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHl8ZW58MXx8fHwxNzYwMzg4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Valoración de lesiones deportivas",
            image: "https://images.unsplash.com/photo-1754941622136-6664a3f50b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBpbmp1cnklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzYwMzg4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
      />
      
      <TreatmentBenefits
        benefits={[
          {
            title: "Diagnóstico inmediato",
            description: "Obtienes resultados en la misma consulta. No hay que esperar días por estudios externos. El Dr. Madrid interpreta las imágenes en tiempo real y explica los hallazgos inmediatamente.",
            image: "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdWx0cmFzb3VuZCUyMGRpYWdub3Npc3xlbnwxfHx8fDE3NjAzODk3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            title: "Sin radiación ni efectos secundarios",
            description: "La ecografía utiliza ondas de sonido, no radiación. Es completamente seguro, no tiene contraindicaciones y puede repetirse cuantas veces sea necesario para seguimiento.",
            image: "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsdGltZSUyMGltYWdpbmclMjBtZWRpY2FsfGVufDF8fHx8MTc2MDM4OTAxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Mayor precisión en tratamientos",
            description: "Cuando guiamos infiltraciones o terapias regenerativas con ecografía, la precisión aumenta de 60% (a ciegas) a 95%, mejorando significativamente los resultados.",
            image: "https://images.unsplash.com/photo-1584467735868-9d854760ee80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZlJTIwbWVkaWNhbCUyMHByb2NlZHVyZXxlbnwxfHx8fDE3NjAzODkwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Evaluación dinámica y funcional",
            description: "A diferencia de resonancia o rayos X (imágenes estáticas), la ecografía permite evaluar estructuras en movimiento, revelando problemas que otras imágenes no detectan.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhdG1lbnQlMjBwbGFubmluZyUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjAzODkwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
        statistic={{
          percentage: "95%",
          description: "de precisión diagnóstica en lesiones de partes blandas cuando es realizada por especialistas experimentados"
        }}
      />
      
      <TreatmentProcess
        steps={[
          {
            title: "Valoración médica con diagnóstico ecoguiado",
            description: "Examen clínico completo seguido de ecografía detallada de las zonas afectadas. El estudio se realiza en la misma consulta con equipo de última generación. Revisamos juntos las imágenes en pantalla grande."
          },
          {
            title: "Interpretación y plan de tratamiento",
            description: "El Dr. Madrid explica los hallazgos en términos comprensibles, te muestra exactamente qué está causando tu dolor, y diseña un plan de tratamiento basado en el diagnóstico preciso."
          },
          {
            title: "Guía de procedimientos y seguimiento",
            description: "Si requieres infiltraciones o terapias regenerativas, las guiamos con ecografía para máxima efectividad. En consultas de control, comparamos imágenes para documentar tu evolución."
          }
        ]}
      />
       <TestimonialsSection/>
      
      <FAQsSection />
      
      <ContactSection />
    </div>
  );
}
