import { TreatmentHero } from "../../components/landing/TreatmentHero";
import { TreatmentExplanation } from "../../components/landing/TreatmentExplanation";
import { TreatmentIndications } from "../../components/landing/TreatmentIndications";
import { TreatmentBenefits } from "../../components/landing/TreatmentBenefits";
import { TreatmentProcess } from "../../components/landing/TreatmentProcess";
import { TreatmentTestimonials } from "../../components/landing/TreatmentTestimonials";
import { TreatmentFAQs } from "../../components/landing/TreatmentFAQs";
import { TreatmentCTA } from "../../components/landing/TreatmentCTA";
import { Heart } from "lucide-react";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import { FAQsSection } from "../../components/FAQsSection";
import { ContactSection } from "../../components/ContactSection";

export function ProloterapiaPage() {
  const images = [
    "https://images.unsplash.com/photo-1758653500124-e916873a84cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5qZWN0aW9uJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MDM4NjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1659081461961-031c8e328094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZWRpY2luZSUyMGRvY3RvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjAzODYyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWVkaWNhbCUyMGRpYWdub3Npc3xlbnwxfHx8fDE3NjAzODYyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1522845052468-8b871a6176e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBleGVyY2lzZXxlbnwxfHx8fDE3NjAzNzEzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <div>
      <TreatmentHero
        title="Proloterapia en Medellín | Regeneración Natural de Ligamentos y Tendones | Dr. James Madrid"
        subtitle="Técnica regenerativa no quirúrgica que fortalece ligamentos y tendones dañados mediante la estimulación natural del cuerpo."
        images={images}
        icon={Heart}
        color="bg-gradient-to-br from-red-500 to-pink-600"
      />
      
      <TreatmentExplanation
        definition="La proloterapia es un tratamiento médico regenerativo que consiste en inyectar una solución especial en ligamentos, tendones y articulaciones lesionadas para estimular el proceso natural de curación del cuerpo. Esta terapia fortalece los tejidos debilitados y restaura la estabilidad articular."
        explanation={[
          "Diagnóstico preciso mediante ecografía para identificar los ligamentos o tendones afectados",
          "Infiltración de una solución proliferativa en los puntos de inserción debilitados",
          "La solución desencadena una respuesta inflamatoria controlada que activa la regeneración",
          "El cuerpo produce colágeno nuevo que fortalece y repara el tejido dañado"
        ]}
        physiologicalBenefit="La proloterapia estimula la proliferación de fibroblastos y la síntesis de colágeno tipo I, fortaleciendo estructuralmente los ligamentos y tendones. Esto resulta en mayor estabilidad articular, reducción del dolor crónico y restauración de la función biomecánica."
        synonyms={["Terapia regenerativa proliferativa", "Inyecciones de dextrosa", "Terapia de proliferación", "Escleroterapia de ligamentos"]}
      />
      
      <TreatmentIndications
        indications={[
          {
            text: "Inestabilidad crónica de articulaciones (rodilla, tobillo, hombro)",
            image: "https://images.unsplash.com/photo-1715531786629-bd8b2dd87066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5kb24lMjBpbmp1cnklMjBsaWdhbWVudHxlbnwxfHx8fDE3NjAzODg1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Lesiones de ligamentos que no cicatrizaron completamente",
            image: "https://images.unsplash.com/photo-1516069677018-378515003435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMHBhaW4lMjBpbmp1cnl8ZW58MXx8fHwxNzYwMzg4NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Tendinitis crónica (codo de tenista, hombro de nadador)",
            image: "https://images.unsplash.com/photo-1754941622136-6664a3f50b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBpbmp1cnklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzYwMzg4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Dolor en articulaciones sacroilíacas o facetas vertebrales",
            image: "https://images.unsplash.com/photo-1624716346716-303904799c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrJTIwc3BpbmUlMjBwYWlufGVufDF8fHx8MTc2MDM4ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Lesiones deportivas recurrentes por laxitud ligamentaria",
            image: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjbGUlMjByZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHl8ZW58MXx8fHwxNzYwMzg4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Dolor crónico que no responde a tratamientos convencionales",
            image: "https://images.unsplash.com/photo-1635359209071-39fc320cf861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbmljJTIwam9pbnQlMjBwYWlufGVufDF8fHx8MTc2MDM4ODU3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
      />
      
      <TreatmentBenefits
        benefits={[
          {
            title: "Fortalecimiento estructural",
            description: "La proloterapia genera tejido conectivo nuevo y más fuerte, aumentando hasta un 40% la resistencia de ligamentos y tendones tratados.",
            image: "https://images.unsplash.com/photo-1758274526293-56788eb94113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwc3RhYmlsaXR5fGVufDF8fHx8MTc2MDM4OTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            title: "Alivio duradero del dolor",
            description: "A diferencia de tratamientos sintomáticos, la proloterapia trata la causa del dolor, ofreciendo alivio a largo plazo sin necesidad de medicamentos continuos.",
            image: "https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbmljJTIwcGFpbiUyMHJlbGllZnxlbnwxfHx8fDE3NjAzODg5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Mejora de la estabilidad articular",
            description: "Al fortalecer los ligamentos, se restaura la estabilidad de la articulación, reduciendo el riesgo de lesiones futuras y mejorando el rendimiento físico.",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2ludCUyMHN0YWJpbGl0eSUyMGJhbGFuY2V8ZW58MXx8fHwxNzYwMzg4OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Alternativa no quirúrgica",
            description: "Evita los riesgos y el tiempo de recuperación prolongado de la cirugía, permitiendo retomar actividades progresivamente durante el tratamiento.",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGVhbGluZyUyMHRoZXJhcHl8ZW58MXx8fHwxNzYwMzg4OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
        statistic={{
          percentage: "90%",
          description: "de pacientes reportan mejora significativa en estabilidad y reducción del dolor después del tratamiento completo"
        }}
      />
      
      <TreatmentProcess
        steps={[
          {
            title: "Valoración médica con diagnóstico ecoguiado",
            description: "Evaluamos minuciosamente tu lesión con ecografía dinámica para identificar exactamente qué ligamentos o tendones están debilitados y requieren tratamiento."
          },
          {
            title: "Aplicación del tratamiento personalizado",
            description: "Infiltramos la solución proloterapéutica directamente en los puntos de inserción de ligamentos y tendones afectados, guiados por ecografía. Se requieren generalmente 3-6 sesiones espaciadas cada 3-4 semanas."
          },
          {
            title: "Seguimiento y control del progreso",
            description: "Monitoreamos tu evolución con ecografías de control que muestran el fortalecimiento progresivo del tejido. Te guiamos en ejercicios específicos de rehabilitación para optimizar los resultados."
          }
        ]}
      />
      
      <TestimonialsSection/>
      
      <FAQsSection />
      
      <ContactSection />
    </div>
  );
}
