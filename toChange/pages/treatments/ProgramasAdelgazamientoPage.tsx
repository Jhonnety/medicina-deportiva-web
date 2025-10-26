import { TreatmentHero } from "../../components/landing/TreatmentHero";
import { TreatmentExplanation } from "../../components/landing/TreatmentExplanation";
import { TreatmentIndications } from "../../components/landing/TreatmentIndications";
import { TreatmentBenefits } from "../../components/landing/TreatmentBenefits";
import { TreatmentProcess } from "../../components/landing/TreatmentProcess";
import { TreatmentTestimonials } from "../../components/landing/TreatmentTestimonials";
import { TreatmentFAQs } from "../../components/landing/TreatmentFAQs";
import { TreatmentCTA } from "../../components/landing/TreatmentCTA";
import { Scale } from "lucide-react";
import { TestimonialsSection } from "../../components/TestimonialsSection";
import { FAQsSection } from "../../components/FAQsSection";
import { ContactSection } from "../../components/ContactSection";

export function ProgramasAdelgazamientoPage() {
  const images = [
    "https://images.unsplash.com/photo-1670165088604-5a39f5c1be51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBoZWFsdGh5JTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MDM2MTk0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1522845052468-8b871a6176e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBleGVyY2lzZXxlbnwxfHx8fDE3NjAzNzEzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1659081461961-031c8e328094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZWRpY2luZSUyMGRvY3RvciUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NjAzODYyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758653500124-e916873a84cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5qZWN0aW9uJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MDM4NjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <div>
      <TreatmentHero
        title="Programa de Adelgazamiento Médico en Medellín | Pérdida de Peso Saludable y Sostenible | Dr. James Madrid"
        subtitle="Programa médicamente supervisado que combina evaluación nutricional, suero terapia y seguimiento personalizado para pérdida de peso saludable."
        images={images}
        icon={Scale}
        color="bg-gradient-to-br from-purple-500 to-pink-600"
      />
      
      <TreatmentExplanation
        definition="Nuestro programa de adelgazamiento médico es un enfoque integral y científico para pérdida de peso supervisado por profesionales. Combina evaluación metabólica completa, plan nutricional personalizado, suero terapia con nutrientes esenciales, ejercicio adaptado y seguimiento médico continuo. No es una dieta temporal, sino un programa de transformación de hábitos para resultados sostenibles."
        explanation={[
          "Evaluación médica inicial: análisis de composición corporal, metabolismo, factores hormonales y condiciones médicas",
          "Plan nutricional personalizado diseñado por nutricionista especializado en tu perfil metabólico",
          "Suero terapia con vitaminas, minerales y aminoácidos que optimizan metabolismo y reducen ansiedad",
          "Programa de ejercicio progresivo adaptado a tu condición física actual",
          "Seguimiento médico semanal con ajustes basados en tu evolución"
        ]}
        physiologicalBenefit="El enfoque multidisciplinario médicamente supervisado asegura que la pérdida de peso sea predominantemente de grasa (no músculo), mantiene tu metabolismo activo, previene deficiencias nutricionales y educa en hábitos sostenibles. El suero terapia optimiza la función metabólica, reduce fatiga y ansiedad, facilitando la adherencia al programa."
        synonyms={["Programa de pérdida de peso médico", "Adelgazamiento supervisado", "Control de peso médico", "Programa metabólico"]}
      />
      
      <TreatmentIndications
        indications={[
          {
            text: "Sobrepeso u obesidad (IMC > 25)",
            image: "https://images.unsplash.com/photo-1464918877125-24db0dc393cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwd2VpZ2h0JTIwbG9zc3xlbnwxfHx8fDE3NjAzODg2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Dificultad para perder peso con dietas convencionales",
            image: "https://images.unsplash.com/photo-1740560052706-fd75ee856b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjB3ZWxsbmVzcyUyMGNvYWNoaW5nfGVufDF8fHx8MTc2MDM4ODY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Pérdida de peso yoyo (efecto rebote recurrente)",
            image: "https://images.unsplash.com/photo-1589451431369-f569890dfd84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZXhlcmNpc2UlMjBtb3RpdmF0aW9ufGVufDF8fHx8MTc2MDM3NDA0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Condiciones médicas que requieren pérdida de peso (diabetes, hipertensión, artrosis)",
            image: "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdWx0cmFzb3VuZCUyMGRpYWdub3N0aWN8ZW58MXx8fHwxNzYwMzg4NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Personas que necesitan perder peso para cirugía o procedimientos médicos",
            image: "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2hlY2t1cCUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjAzODg2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Atletas o deportistas que buscan optimizar composición corporal",
            image: "https://images.unsplash.com/photo-1589451431369-f569890dfd84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZXhlcmNpc2UlMjBtb3RpdmF0aW9ufGVufDF8fHx8MTc2MDM3NDA0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Personas con ansiedad o hambre emocional",
            image: "https://images.unsplash.com/photo-1740560052706-fd75ee856b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjB3ZWxsbmVzcyUyMGNvYWNoaW5nfGVufDF8fHx8MTc2MDM4ODY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            text: "Pacientes que desean enfoque médico profesional y sostenible",
            image: "https://images.unsplash.com/photo-1631563018889-23f47a027973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2hlY2t1cCUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjAzODg2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
      />
      
      <TreatmentBenefits
        benefits={[
          {
            title: "Pérdida de peso saludable y sostenible",
            description: "Pérdida gradual de 2-4 kg por mes de forma saludable, enfocada en grasa corporal mientras preservas masa muscular. Resultados que se mantienen a largo plazo.",
            image: "https://images.unsplash.com/photo-1604480132715-bd70038b74df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwd2VpZ2h0JTIwbG9zcyUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzYwMzg5MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          },
          {
            title: "Supervisión médica continua",
            description: "Monitoreo profesional en cada etapa asegura que el proceso sea seguro, efectivo y adaptado a tu salud. Detectamos y manejamos cualquier complicación tempranamente.",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhYm9saWMlMjBoZWFsdGglMjBpbXByb3ZlbWVudHxlbnwxfHx8fDE3NjAzODkwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Mejora de condiciones médicas",
            description: "La pérdida de peso mejora diabetes, presión arterial, colesterol, dolor articular y apnea del sueño. Reducción de medicamentos en muchos casos.",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGhhYml0cyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjAzODkwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          {
            title: "Educación y transformación de hábitos",
            description: "No solo pierdes peso, sino que aprendes hábitos nutricionales y de ejercicio sostenibles. El objetivo es que mantengas los resultados de por vida.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3VwZXJ2aXNpb24lMjBzdXBwb3J0fGVufDF8fHx8MTc2MDM4OTAzNXww&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ]}
        statistic={{
          percentage: "87%",
          description: "de pacientes que completan el programa mantienen la pérdida de peso 12 meses después"
        }}
      />
      
      <TreatmentProcess
        steps={[
          {
            title: "Evaluación médica inicial completa",
            description: "Análisis de composición corporal (peso, grasa, músculo, agua), perfil metabólico, evaluación hormonal si es necesario, historia médica completa y establecimiento de metas realistas."
          },
          {
            title: "Diseño e implementación del programa",
            description: "Plan nutricional personalizado, prescripción de ejercicio adaptado, inicio de suero terapia semanal, educación nutricional y entrega de materiales de apoyo."
          },
          {
            title: "Seguimiento semanal y ajustes",
            description: "Consultas de control cada semana para evaluar progreso, ajustar plan según resultados, aplicar suero terapia, resolver dudas y mantener motivación. Duración típica: 3-6 meses según meta."
          }
        ]}
      />
      
      <TestimonialsSection/>
      
      <FAQsSection />
      
      <ContactSection />
    </div>
  );
}
