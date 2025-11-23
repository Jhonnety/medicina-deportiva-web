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

export default function FAQsSection({ locale }: FAQsSectionProps) {
  const faqsData: FAQItem[] = locale === 'es' ? [
    {
      question: '¿Qué es la medicina deportiva y quién puede beneficiarse?',
      answer: 'La medicina deportiva es una especialidad médica enfocada en prevenir, diagnosticar y tratar lesiones relacionadas con la actividad física. Tratamos desde deportistas de alto rendimiento hasta personas con actividades cotidianas que presentan molestias. Además, tenemos como objetivo prevenir la muerte súbita durante la actividad física, por eso analizamos el sistema cardiovascular. Por último, evaluamos de manera integral el sistema metabólico y tenemos las competencias para ayudar al paciente al control del peso.',
      icon: Stethoscope,
    },
    {
      question: '¿Necesito cita previa?',
      answer: 'Trabajamos con cita previa para garantizar atención personalizada. Contáctanos por WhatsApp al +57 304 438 62 08 y haremos lo posible por atenderte el mismo día. Contamos con la modalidad virtual y presencial para agendamiento de acuerdo a la necesidad. Modalidad muy útil para pacientes que viven fuera de Medellín, útil para citas iniciales y seguimiento.',
      icon: Calendar,
    },
    {
      question: '¿Cuántas sesiones necesito?',
      answer: 'Depende de tu condición específica. Algunas condiciones mejoran en 2-4 sesiones, mientras que lesiones complejas pueden requerir 8-12 sesiones. El Dr. Madrid te dará un estimado en la primera consulta.',
      icon: Clock,
    },
    {
      question: '¿Los tratamientos requieren cirugía?',
      answer: 'No, realizamos tratamiento médico con células madre, exosomas, péptidos, plasma rico en plaquetas, ácido hialurónico, medicina funcional y convencional. Utilizamos técnicas de fisioterapia avanzada, tales como: ondas de choque y medicina hiperbárica.',
      icon: ShieldOff,
    },
    {
      question: '¿Dónde están ubicados?',
      answer: 'Estamos en Torre Medical, El Poblado, Medellín. Zona accesible con parqueadero, cerca del Metro Estación Poblado. Calle 7 #39-107, Torre Medical, Consultorio 1009.',
      icon: MapPin,
    },
    {
      question: '¿Aceptan seguros médicos?',
      answer: 'Solo Sura pólizas y Coomeva medicina prepagada.',
      icon: CreditCard,
    },
  ] : [
    {
      question: 'What is sports medicine and who can benefit?',
      answer: 'Sports medicine is a medical specialty focused on preventing, diagnosing and treating injuries related to physical activity. We treat from high-performance athletes to people with daily activities who present discomfort. Additionally, we aim to prevent sudden death during physical activity, which is why we analyze the cardiovascular system. Finally, we comprehensively evaluate the metabolic system and have the competencies to help the patient with weight control.',
      icon: Stethoscope,
    },
    {
      question: 'Do I need an appointment?',
      answer: 'We work by appointment to guarantee personalized attention. Contact us by WhatsApp at +57 304 438 62 08 and we will do our best to serve you the same day. We have virtual and in-person modality for scheduling according to need. Modality very useful for patients who live outside Medellín, useful for initial appointments and follow-up.',
      icon: Calendar,
    },
    {
      question: 'How many sessions do I need?',
      answer: 'It depends on your specific condition. Some conditions improve in 2-4 sessions, while complex injuries may require 8-12 sessions. Dr. Madrid will give you an estimate at the first consultation.',
      icon: Clock,
    },
    {
      question: 'Do treatments require surgery?',
      answer: 'No, we perform medical treatment with stem cells, exosomes, peptides, platelet-rich plasma, hyaluronic acid, functional and conventional medicine. We use advanced physiotherapy techniques, such as: shock waves and hyperbaric medicine.',
      icon: ShieldOff,
    },
    {
      question: 'Where are you located?',
      answer: 'We are in Torre Medical, El Poblado, Medellín. Accessible area with parking, near Metro Estación Poblado. Calle 7 #39-107, Torre Medical, Consultorio 1009.',
      icon: MapPin,
    },
    {
      question: 'Do you accept medical insurance?',
      answer: 'Only Sura policies and Coomeva prepaid medicine.',
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
                      className="w-8 h-8 transition-all duration-300 text-[#6ba5a5]"
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href={`/${locale}/faqs`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-[#6ba5a5] hover:bg-[#5a9494]"
          >
            <span>
              {locale === 'es' ? 'Ver todas las preguntas frecuentes' : 'View all frequently asked questions'}
            </span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
