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

export function ArtrosisPage() {
  const images = [
    "https://images.unsplash.com/photo-1659081461961-031c8e328094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZWRpY2luZSUyMGRvY3RvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjAzODYyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1746806942507-a7e93fdd6dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwdGhlcmFweSUyMHJlaGFiaWxpdGF0aW9ufGVufDF8fHx8MTc2MDM4NjI2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758653500124-e916873a84cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5qZWN0aW9uJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MDM4NjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1522845052468-8b871a6176e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBleGVyY2lzZXxlbnwxfHx8fDE3NjAzNzEzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <div>
      <TreatmentHero
        title="Tratamiento de Artrosis sin Cirugía | Recupera tu Movilidad con el Dr. James Madrid"
        subtitle="Tratamiento médico ecoguiado que reduce el dolor y mejora la movilidad sin necesidad de cirugía."
        images={images}
        icon={Activity}
        color="bg-gradient-to-br from-[#A2C3D5] to-[#8BADC2]"
      />
      
      <TreatmentExplanation
        definition="La artrosis es una enfermedad degenerativa de las articulaciones que causa dolor, rigidez y pérdida de movilidad. Nuestro tratamiento no quirúrgico utiliza técnicas médicas avanzadas con diagnóstico ecoguiado para regenerar el cartílago y reducir la inflamación."
        explanation={[
          "Evaluación completa con ecografía de alta resolución para identificar el grado de deterioro articular",
          "Aplicación de terapias regenerativas (PRP, proloterapia) directamente en la zona afectada",
          "Infiltraciones precisas guiadas por ecografía para máxima efectividad",
          "Programa de rehabilitación personalizado para fortalecer la articulación"
        ]}
        physiologicalBenefit="Las terapias regenerativas estimulan la producción de colágeno y nuevos tejidos, mientras que las infiltraciones reducen la inflamación y lubrican la articulación, permitiendo una mejora significativa en la movilidad y reducción del dolor."
        synonyms={["Osteoartrosis", "Desgaste articular", "Artritis degenerativa", "Tratamiento regenerativo para artrosis"]}
      />
      
      <TreatmentIndications
        indications={[
          {
            text: "Dolor o rigidez en rodillas, caderas, hombros o manos",
            image: "https://images.unsplash.com/photo-1715531786629-bd8b2dd87066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwcGFpbiUyMGFydGhyaXRpc3xlbnwxfHx8fDE3NjAzODg1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Diagnóstico de artrosis leve o moderada",
            image: "https://images.unsplash.com/photo-1715531786031-7c4e30a45c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBwYWluJTIwYXJ0aHJpdGlzfGVufDF8fHx8MTc2MDM4ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Limitación de movimiento al caminar o realizar actividades cotidianas",
            image: "https://images.unsplash.com/photo-1624716346716-303904799c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrJTIwc3BpbmUlMjBwYWlufGVufDF8fHx8MTc2MDM4ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Pacientes que buscan evitar cirugía de reemplazo articular",
            image: "https://images.unsplash.com/photo-1516069677018-378515003435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMHBhaW4lMjBpbmp1cnl8ZW58MXx8fHwxNzYwMzg4NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Personas activas que desean mantener su estilo de vida",
            image: "https://images.unsplash.com/photo-1655656724704-59c4021ee726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmtsZSUyMGZvb3QlMjBwYWlufGVufDF8fHx8MTc2MDM4ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Dolor que empeora después de actividad física o al final del día",
            image: "https://images.unsplash.com/photo-1568065219398-8f9c0bde728d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwd3Jpc3QlMjBwYWlufGVufDF8fHx8MTc2MDM4ODUwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
      />
      
      <TreatmentBenefits
        benefits={[
          {
            title: "Alivio del dolor articular",
            description: "Reducción significativa del dolor crónico en las articulaciones afectadas, permitiéndote realizar tus actividades diarias sin molestias.",
            image: "https://images.unsplash.com/photo-1582380375444-275b280990a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2ludCUyMHBhaW4lMjByZWxpZWYlMjByZWNvdmVyeXxlbnwxfHx8fDE3NjAzODk3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            title: "Mejora en movilidad",
            description: "Recuperación del rango de movimiento articular para que puedas caminar, subir escaleras y realizar ejercicio con mayor facilidad.",
            image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGl0eSUyMGV4ZXJjaXNlJTIwbW92ZW1lbnR8ZW58MXx8fHwxNzYwMzg4OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Reducción de inflamación",
            description: "Las terapias antiinflamatorias dirigidas disminuyen la hinchazón y el enrojecimiento en las zonas afectadas.",
            image: "https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsYW1tYXRpb24lMjByZWR1Y3Rpb24lMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzYwMzg4OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Regeneración del cartílago",
            description: "Las terapias con PRP y factores de crecimiento estimulan la regeneración natural del tejido cartilaginoso.",
            image: "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0aWxhZ2UlMjByZWdlbmVyYXRpb24lMjBoZWFsaW5nfGVufDF8fHx8MTc2MDM4ODkwOXww&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
        statistic={{
          percentage: "85%",
          description: "de pacientes reportan mejora funcional significativa en las primeras 4-6 semanas"
        }}
      />
      
      <TreatmentProcess
        steps={[
          {
            title: "Valoración médica con diagnóstico ecoguiado",
            description: "Evaluación completa de tu condición articular utilizando ecografía de alta resolución. Identificamos el grado de artrosis y diseñamos un plan de tratamiento personalizado."
          },
          {
            title: "Aplicación del tratamiento personalizado",
            description: "Realizamos las infiltraciones o terapias regenerativas necesarias, guiadas por ecografía para máxima precisión. El procedimiento es ambulatorio y mínimamente invasivo."
          },
          {
            title: "Seguimiento y control del progreso",
            description: "Monitoreo continuo de tu evolución con consultas de control. Ajustamos el tratamiento según tu respuesta y te guiamos en ejercicios de rehabilitación."
          }
        ]}
      />
      
       <TestimonialsSection/>
      
      <FAQsSection />
      
      <ContactSection />
    </div>
  );
}
