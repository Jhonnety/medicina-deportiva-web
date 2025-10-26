import { TreatmentHero } from "../../components/landing/TreatmentHero";
import { TreatmentExplanation } from "../../components/landing/TreatmentExplanation";
import { TreatmentIndications } from "../../components/landing/TreatmentIndications";
import { TreatmentBenefits } from "../../components/landing/TreatmentBenefits";
import { TreatmentProcess } from "../../components/landing/TreatmentProcess";
import { TreatmentTestimonials } from "../../components/landing/TreatmentTestimonials";
import { TreatmentFAQs } from "../../components/landing/TreatmentFAQs";
import { TreatmentCTA } from "../../components/landing/TreatmentCTA";
import { Stethoscope } from "lucide-react";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import { FAQsSection } from "../../components/FAQsSection";
import { ContactSection } from "../../components/ContactSection";

export function LesionesDeportivasPage() {
  const images = [
    "https://images.unsplash.com/photo-1522845052468-8b871a6176e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBleGVyY2lzZXxlbnwxfHx8fDE3NjAzNzEzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1746806942507-a7e93fdd6dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwdGhlcmFweSUyMHJlaGFiaWxpdGF0aW9ufGVufDF8fHx8MTc2MDM4NjI2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1659081461961-031c8e328094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZWRpY2luZSUyMGRvY3RvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjAzODYyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758653500124-e916873a84cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5qZWN0aW9uJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MDM4NjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <div>
      <TreatmentHero
        title="Tratamiento de Lesiones Deportivas en Medellín | Vuelve a tu Deporte | Dr. James Madrid"
        subtitle="Diagnóstico preciso y tratamiento especializado para lesiones deportivas con ecografía y terapias regenerativas avanzadas."
        images={images}
        icon={Stethoscope}
        color="bg-gradient-to-br from-green-500 to-emerald-600"
      />
      
      <TreatmentExplanation
        definition="El tratamiento especializado de lesiones deportivas combina diagnóstico ecoguiado de alta precisión con terapias regenerativas, infiltraciones dirigidas y programas de rehabilitación deportiva específicos. Nuestro enfoque multidisciplinario no solo busca la recuperación, sino el retorno seguro a tu actividad deportiva al máximo nivel."
        explanation={[
          "Evaluación integral con ecografía musculoesquelética de alta resolución para diagnóstico preciso",
          "Identificación de factores biomecánicos que contribuyeron a la lesión",
          "Aplicación de terapias regenerativas (PRP, proloterapia) según el tipo de lesión",
          "Programa de rehabilitación deportiva progresiva para prevenir recaídas"
        ]}
        physiologicalBenefit="El abordaje multidisciplinario optimiza los tiempos de curación, reduce el riesgo de cronicidad y previene lesiones futuras. Las terapias regenerativas aceleran la recuperación mientras la rehabilitación deportiva específica restaura patrones de movimiento adecuados y fortalece estructuras vulnerables."
        synonyms={["Medicina deportiva", "Tratamiento de lesiones atléticas", "Rehabilitación deportiva", "Medicina del deporte Medellín"]}
      />
      
      <TreatmentIndications
        indications={[
          {
            text: "Esguinces de tobillo, rodilla o muñeca",
            image: "https://images.unsplash.com/photo-1655656724704-59c4021ee726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmtsZSUyMGZvb3QlMjBwYWlufGVufDF8fHx8MTc2MDM4ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Desgarros musculares (gemelos, isquiotibiales, cuádriceps)",
            image: "https://images.unsplash.com/photo-1715531786031-7c4e30a45c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjbGUlMjB0ZWFyJTIwaW5qdXJ5fGVufDF8fHx8MTc2MDM4ODU5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Lesiones de menisco o ligamentos cruzados",
            image: "https://images.unsplash.com/photo-1715531786629-bd8b2dd87066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwcGFpbiUyMGFydGhyaXRpc3xlbnwxfHx8fDE3NjAzODg1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Tendinitis de hombro, codo, rodilla o Aquiles",
            image: "https://images.unsplash.com/photo-1516069677018-378515003435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMHBhaW4lMjBpbmp1cnl8ZW58MXx8fHwxNzYwMzg4NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Fracturas por estrés o sobrecarga",
            image: "https://images.unsplash.com/photo-1758684051090-bc83bb0af184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uZXIlMjBpbmp1cnklMjByZWNvdmVyeXxlbnwxfHx8fDE3NjAzODg2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Lesiones del manguito rotador",
            image: "https://images.unsplash.com/photo-1715531786031-7c4e30a45c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwc2hvdWxkZXIlMjBpbmp1cnl8ZW58MXx8fHwxNzYwMzg4NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Fascitis plantar en corredores",
            image: "https://images.unsplash.com/photo-1655656724704-59c4021ee726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmtsZSUyMGZvb3QlMjBwYWlufGVufDF8fHx8MTc2MDM4ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Síndrome de dolor patelofemoral",
            image: "https://images.unsplash.com/photo-1715531786629-bd8b2dd87066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwcGFpbiUyMGFydGhyaXRpc3xlbnwxfHx8fDE3NjAzODg1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Lesiones por sobreuso o entrenamiento inadecuado",
            image: "https://images.unsplash.com/photo-1754941622136-6664a3f50b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBpbmp1cnklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzYwMzg4NTczfDA&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
      />
      
      <TreatmentBenefits
        benefits={[
          {
            title: "Retorno más rápido al deporte",
            description: "La combinación de terapias regenerativas y rehabilitación específica acelera significativamente los tiempos de recuperación, permitiendo volver a entrenar y competir más pronto de forma segura.",
            image: "https://images.unsplash.com/photo-1631668280815-df00093f6f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwc3BvcnRzJTIwcmV0dXJufGVufDF8fHx8MTc2MDM4OTc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            title: "Prevención de recaídas",
            description: "No solo tratamos la lesión actual, sino que identificamos y corregimos factores de riesgo para prevenir lesiones futuras, mediante fortalecimiento específico y corrección biomecánica.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmp1cnklMjBwcmV2ZW50aW9uJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYwMzg4OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Diagnóstico preciso con ecografía",
            description: "La ecografía dinámica permite visualizar en tiempo real tendones, ligamentos, músculos y articulaciones, ofreciendo un diagnóstico más preciso que el examen clínico tradicional.",
            image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRpbWFsJTIwcGVyZm9ybWFuY2UlMjBhdGhsZXRlfGVufDF8fHx8MTc2MDM4ODk5MXww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Tratamiento sin interrumpir tu vida",
            description: "Terapias ambulatorias y mínimamente invasivas que permiten continuar con actividades cotidianas y mantener cierto nivel de entrenamiento adaptado durante la recuperación.",
            image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbGl6ZWQlMjBzcG9ydHMlMjBwbGFufGVufDF8fHx8MTc2MDM4ODk5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
        statistic={{
          percentage: "92%",
          description: "de deportistas tratados retornan exitosamente a su nivel de actividad previo a la lesión"
        }}
      />
      
      <TreatmentProcess
        steps={[
          {
            title: "Valoración médica con diagnóstico ecoguiado",
            description: "Evaluación completa que incluye ecografía dinámica, análisis biomecánico y pruebas funcionales específicas del deporte. Identificamos no solo la lesión sino los factores que la causaron."
          },
          {
            title: "Aplicación del tratamiento personalizado",
            description: "Combinación individualizada de terapias regenerativas (PRP, proloterapia), infiltraciones precisas guiadas por ecografía, y protocolo de rehabilitación deportiva progresiva adaptada a tu deporte."
          },
          {
            title: "Seguimiento y control del progreso",
            description: "Monitoreo continuo con ecografías de control, ajustes del programa según evolución, y guía profesional para el retorno gradual y seguro al deporte. Incluye estrategias de prevención a largo plazo."
          }
        ]}
      />
      
       <TestimonialsSection/>
      
      <FAQsSection />
      
     <ContactSection />
    </div>
  );
}
