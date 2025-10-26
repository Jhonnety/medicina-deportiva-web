import { TreatmentHero } from "../../components/landing/TreatmentHero";
import { TreatmentExplanation } from "../../components/landing/TreatmentExplanation";
import { TreatmentIndications } from "../../components/landing/TreatmentIndications";
import { TreatmentBenefits } from "../../components/landing/TreatmentBenefits";
import { TreatmentProcess } from "../../components/landing/TreatmentProcess";
import { TreatmentTestimonials } from "../../components/landing/TreatmentTestimonials";
import { TreatmentFAQs } from "../../components/landing/TreatmentFAQs";
import { TreatmentCTA } from "../../components/landing/TreatmentCTA";
import { Droplets } from "lucide-react";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import { FAQsSection } from "../../components/FAQsSection";
import { ContactSection } from "../../components/ContactSection";

export function PlasmaRicoPlaquetasPage() {
  const images = [
    "https://images.unsplash.com/photo-1758653500124-e916873a84cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5qZWN0aW9uJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MDM4NjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWVkaWNhbCUyMGRpYWdub3Npc3xlbnwxfHx8fDE3NjAzODYyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1659081461961-031c8e328094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZWRpY2luZSUyMGRvY3RvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjAzODYyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1746806942507-a7e93fdd6dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwdGhlcmFweSUyMHJlaGFiaWxpdGF0aW9ufGVufDF8fHx8MTc2MDM4NjI2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <div>
      <TreatmentHero
        title="Plasma Rico en Plaquetas (PRP) en Medellín | Regeneración con tu Propia Sangre | Dr. James Madrid"
        subtitle="Terapia regenerativa avanzada que utiliza factores de crecimiento de tu propia sangre para acelerar la curación de lesiones."
        images={images}
        icon={Droplets}
        color="bg-gradient-to-br from-amber-500 to-orange-600"
      />
      
      <TreatmentExplanation
        definition="El Plasma Rico en Plaquetas (PRP) es una terapia regenerativa que utiliza componentes concentrados de tu propia sangre para estimular y acelerar la curación de tejidos lesionados. Las plaquetas contienen factores de crecimiento que promueven la regeneración celular y la reparación de tendones, ligamentos, músculos y cartílago."
        explanation={[
          "Extracción de una pequeña muestra de tu sangre (similar a un análisis de laboratorio)",
          "Centrifugación para concentrar las plaquetas y factores de crecimiento",
          "Aplicación del PRP directamente en la zona lesionada mediante infiltración guiada por ecografía",
          "Los factores de crecimiento activan la regeneración celular y aceleran la curación natural"
        ]}
        physiologicalBenefit="El PRP libera factores de crecimiento (PDGF, TGF-β, VEGF, EGF) que estimulan la proliferación celular, angiogénesis y síntesis de colágeno. Esto acelera significativamente los procesos naturales de curación, resultando en regeneración tisular de mayor calidad y más rápida recuperación funcional."
        synonyms={["PRP", "Terapia con factores de crecimiento", "Plasma autólogo", "Terapia regenerativa con plaquetas", "Tratamiento biológico"]}
      />
      
      <TreatmentIndications
        indications={[
          {
            text: "Tendinitis aguda o crónica (hombro, codo, Aquiles, rotuliano)",
            image: "https://images.unsplash.com/photo-1624716346730-078ba4654d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5kb25pdGlzJTIwaW5mbGFtbWF0aW9ufGVufDF8fHx8MTc2MDM4ODU5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Lesiones musculares o desgarros parciales",
            image: "https://images.unsplash.com/photo-1715531786031-7c4e30a45c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjbGUlMjB0ZWFyJTIwaW5qdXJ5fGVufDF8fHx8MTc2MDM4ODU5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Artrosis de rodilla, cadera, hombro o tobillo",
            image: "https://images.unsplash.com/photo-1715531786629-bd8b2dd87066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwcGFpbiUyMGFydGhyaXRpc3xlbnwxfHx8fDE3NjAzODg1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Lesiones de ligamentos (esguinces que no cicatrizan)",
            image: "https://images.unsplash.com/photo-1655656724704-59c4021ee726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmtsZSUyMGZvb3QlMjBwYWlufGVufDF8fHx8MTc2MDM4ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Epicondilitis (codo de tenista o golfista)",
            image: "https://images.unsplash.com/photo-1715531786629-bd8b2dd87066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGJvdyUyMHBhaW4lMjBpbmp1cnl8ZW58MXx8fHwxNzYwMzg4NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Fascitis plantar crónica",
            image: "https://images.unsplash.com/photo-1655656724704-59c4021ee726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmtsZSUyMGZvb3QlMjBwYWlufGVufDF8fHx8MTc2MDM4ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Lesiones de menisco o cartílago",
            image: "https://images.unsplash.com/photo-1715531786629-bd8b2dd87066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwcGFpbiUyMGFydGhyaXRpc3xlbnwxfHx8fDE3NjAzODg1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Aceleración de recuperación post-quirúrgica",
            image: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjbGUlMjByZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHl8ZW58MXx8fHwxNzYwMzg4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
      />
      
      <TreatmentBenefits
        benefits={[
          {
            title: "Regeneración tisular acelerada",
            description: "Los factores de crecimiento del PRP aceleran la curación natural hasta 3 veces más rápido que el proceso normal, permitiendo un retorno más pronto a tus actividades.",
            image: "https://images.unsplash.com/photo-1714845596474-5b934d901b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXNzdWUlMjBoZWFsaW5nJTIwcmVnZW5lcmF0aW9ufGVufDF8fHx8MTc2MDM4OTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            title: "Tratamiento 100% natural y seguro",
            description: "Al usar componentes de tu propia sangre, no hay riesgo de rechazo, alergias o transmisión de enfermedades. Es completamente biocompatible.",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXNzdWUlMjByZWdlbmVyYXRpb24lMjBjZWxsdWxhcnxlbnwxfHx8fDE3NjAzODg5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Reducción del dolor crónico",
            description: "El PRP no solo alivia el dolor temporalmente, sino que trata la causa subyacente promoviendo curación real del tejido dañado.",
            image: "https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsYW1tYXRpb24lMjByZWR1Y3Rpb24lMjBzd2VsbGluZ3xlbnwxfHx8fDE3NjAzODg5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Evita cirugías y medicamentos",
            description: "En muchos casos, el PRP permite evitar intervenciones quirúrgicas y reducir o eliminar el uso de antiinflamatorios y analgésicos a largo plazo.",
            image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9sb2dpY2FsJTIwYXV0b2xvZ291cyUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjAzODg5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
        statistic={{
          percentage: "88%",
          description: "de pacientes experimentan mejora significativa en dolor y función después del tratamiento con PRP"
        }}
      />
      
      <TreatmentProcess
        steps={[
          {
            title: "Valoración médica con diagnóstico ecoguiado",
            description: "Evaluación completa de tu lesión con ecografía de alta resolución para identificar el tipo y extensión del daño tisular. Determinamos si el PRP es el tratamiento óptimo para tu caso."
          },
          {
            title: "Aplicación del tratamiento personalizado",
            description: "Extraemos una pequeña cantidad de sangre, la procesamos para concentrar las plaquetas, y aplicamos el PRP directamente en la zona lesionada guiado por ecografía. El procedimiento completo toma aproximadamente 45-60 minutos."
          },
          {
            title: "Seguimiento y control del progreso",
            description: "Realizamos controles con ecografía para documentar la regeneración del tejido. Te orientamos en un programa de rehabilitación progresiva diseñado para optimizar los resultados del PRP."
          }
        ]}
      />
      
       <TestimonialsSection/>
      
      <FAQsSection />
      <ContactSection />
    </div>
  );
}
