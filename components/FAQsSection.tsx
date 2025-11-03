'use client';

import type { Dictionary } from '@/lib/types';
import { Stethoscope, ShieldOff, Calendar, MapPin, Clock, CreditCard } from 'lucide-react';

interface FAQsSectionProps {
  dictionary: Dictionary;
  locale: string;
}

type FAQItem = {
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function FAQsSection({ dictionary, locale }: FAQsSectionProps) {
  const faqsData: FAQItem[] = locale === 'es' ? [
    {
      question: '¿Qué es la medicina deportiva y quién puede beneficiarse?',
      answer: 'La medicina deportiva es una especialidad médica enfocada en prevenir, diagnosticar y tratar lesiones relacionadas con la actividad física. Tratamos desde deportistas de alto rendimiento hasta personas con actividades cotidianas que presentan molestias.',
      icon: Stethoscope,
    },
    {
      question: '¿Los tratamientos requieren cirugía?',
      answer: 'No. Nuestra especialidad es el tratamiento NO quirúrgico. Utilizamos técnicas avanzadas como proloterapia, plasma rico en plaquetas (PRP), terapias regenerativas e infiltraciones ecoguiadas.',
      icon: ShieldOff,
    },
    {
      question: '¿Necesito cita previa?',
      answer: 'Trabajamos con cita previa para garantizar atención personalizada. Para urgencias, contáctanos por WhatsApp al +57 304 438 62 08 y haremos lo posible por atenderte el mismo día.',
      icon: Calendar,
    },
    {
      question: '¿Dónde están ubicados?',
      answer: 'Estamos en Torre Medical, El Poblado, Medellín. Zona accesible con parqueadero, cerca del Metro Estación Poblado. Puedes ver la ubicación exacta en nuestra sección de contacto.',
      icon: MapPin,
    },
    {
      question: '¿Cuántas sesiones necesito?',
      answer: 'Depende de tu condición específica. Algunas condiciones mejoran en 2-4 sesiones, mientras que lesiones complejas pueden requerir 8-12 sesiones. El Dr. Madrid te dará un estimado en la primera consulta.',
      icon: Clock,
    },
    {
      question: '¿Aceptan seguros médicos?',
      answer: 'Sí, trabajamos con los principales seguros médicos y medicina prepagada de Colombia. Verifica tu cobertura con tu aseguradora antes de la cita.',
      icon: CreditCard,
    },
  ] : [
    {
      question: 'What is sports medicine and who can benefit?',
      answer: 'Sports medicine is a medical specialty focused on preventing, diagnosing, and treating injuries related to physical activity. We treat everyone from high-performance athletes to people with everyday activities who experience discomfort.',
      icon: Stethoscope,
    },
    {
      question: 'Do treatments require surgery?',
      answer: 'No. Our specialty is NON-surgical treatment. We use advanced techniques such as prolotherapy, platelet-rich plasma (PRP), regenerative therapies, and ultrasound-guided infiltrations.',
      icon: ShieldOff,
    },
    {
      question: 'Do I need an appointment?',
      answer: 'We work by appointment to ensure personalized attention. For emergencies, contact us via WhatsApp at +57 304 438 62 08 and we will do our best to see you the same day.',
      icon: Calendar,
    },
    {
      question: 'Where are you located?',
      answer: 'We are in Torre Medical, El Poblado, Medellín. Accessible area with parking, near Metro Estación Poblado. You can see the exact location in our contact section.',
      icon: MapPin,
    },
    {
      question: 'How many sessions do I need?',
      answer: 'It depends on your specific condition. Some conditions improve in 2-4 sessions, while complex injuries may require 8-12 sessions. Dr. Madrid will give you an estimate at the first consultation.',
      icon: Clock,
    },
    {
      question: 'Do you accept medical insurance?',
      answer: 'Yes, we work with the main medical insurance and prepaid medicine companies in Colombia. Verify your coverage with your insurer before the appointment.',
      icon: CreditCard,
    },
  ];

  return (
    <section id="preguntas" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 text-white font-semibold"
               style={{ backgroundColor: '#6ba5a5' }}>
            <span className="text-sm">
              {locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: '#182121' }}>
            {locale === 'es' ? '¿Tienes dudas? Te ayudamos' : 'Have questions? We help you'}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            {locale === 'es' 
              ? 'Respuestas rápidas a las preguntas más comunes sobre nuestros tratamientos' 
              : 'Quick answers to the most common questions about our treatments'}
          </p>
          <p className="text-base text-gray-600 italic">
            {locale === 'es' 
              ? '"Estamos aquí para resolver todas tus inquietudes."' 
              : '"We are here to answer all your questions."'}
          </p>
        </div>

        {/* FAQs Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {faqsData.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:border-[#6ba5a5]/30"
              >
                <div className="flex items-start gap-5">
                  {/* Icon Container */}
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ 
                      backgroundColor: 'rgba(107, 165, 165, 0.1)',
                    }}
                  >
                    <IconComponent 
                      className="w-8 h-8 transition-all duration-300" 
                      style={{ color: '#6ba5a5' }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-3 transition-colors duration-300"
                        style={{ color: '#182121' }}>
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Decorative line on hover */}
                <div className="mt-6 pt-0 border-t-2 border-transparent group-hover:border-[#6ba5a5]/20 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
