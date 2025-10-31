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
  color: string;
  bgColor: string;
};

export default function FAQsSection({ dictionary, locale }: FAQsSectionProps) {
  const faqsData: FAQItem[] = locale === 'es' ? [
    {
      question: '¿Qué es la medicina deportiva y quién puede beneficiarse?',
      answer: 'La medicina deportiva es una especialidad médica enfocada en prevenir, diagnosticar y tratar lesiones relacionadas con la actividad física. Tratamos desde deportistas de alto rendimiento hasta personas con actividades cotidianas que presentan molestias.',
      icon: Stethoscope,
      color: '#5BA1C8',
      bgColor: 'rgba(91, 161, 200, 0.1)',
    },
    {
      question: '¿Los tratamientos requieren cirugía?',
      answer: 'No. Nuestra especialidad es el tratamiento NO quirúrgico. Utilizamos técnicas avanzadas como proloterapia, plasma rico en plaquetas (PRP), terapias regenerativas e infiltraciones ecoguiadas.',
      icon: ShieldOff,
      color: '#00D98E',
      bgColor: 'rgba(0, 217, 142, 0.1)',
    },
    {
      question: '¿Necesito cita previa?',
      answer: 'Trabajamos con cita previa para garantizar atención personalizada. Para urgencias, contáctanos por WhatsApp al +57 304 438 62 08 y haremos lo posible por atenderte el mismo día.',
      icon: Calendar,
      color: '#FF6B6B',
      bgColor: 'rgba(255, 107, 107, 0.1)',
    },
    {
      question: '¿Dónde están ubicados?',
      answer: 'Estamos en Torre Medical, El Poblado, Medellín. Zona accesible con parqueadero, cerca del Metro Estación Poblado. Puedes ver la ubicación exacta en nuestra sección de contacto.',
      icon: MapPin,
      color: '#9B59B6',
      bgColor: 'rgba(155, 89, 182, 0.1)',
    },
    {
      question: '¿Cuántas sesiones necesito?',
      answer: 'Depende de tu condición específica. Algunas condiciones mejoran en 2-4 sesiones, mientras que lesiones complejas pueden requerir 8-12 sesiones. El Dr. Madrid te dará un estimado en la primera consulta.',
      icon: Clock,
      color: '#F39C12',
      bgColor: 'rgba(243, 156, 18, 0.1)',
    },
    {
      question: '¿Aceptan seguros médicos?',
      answer: 'Sí, trabajamos con los principales seguros médicos y medicina prepagada de Colombia. Verifica tu cobertura con tu aseguradora antes de la cita.',
      icon: CreditCard,
      color: '#3498DB',
      bgColor: 'rgba(52, 152, 219, 0.1)',
    },
  ] : [
    {
      question: 'What is sports medicine and who can benefit?',
      answer: 'Sports medicine is a medical specialty focused on preventing, diagnosing, and treating injuries related to physical activity. We treat everyone from high-performance athletes to people with everyday activities who experience discomfort.',
      icon: Stethoscope,
      color: '#5BA1C8',
      bgColor: 'rgba(91, 161, 200, 0.1)',
    },
    {
      question: 'Do treatments require surgery?',
      answer: 'No. Our specialty is NON-surgical treatment. We use advanced techniques such as prolotherapy, platelet-rich plasma (PRP), regenerative therapies, and ultrasound-guided infiltrations.',
      icon: ShieldOff,
      color: '#00D98E',
      bgColor: 'rgba(0, 217, 142, 0.1)',
    },
    {
      question: 'Do I need an appointment?',
      answer: 'We work by appointment to ensure personalized attention. For emergencies, contact us via WhatsApp at +57 304 438 62 08 and we will do our best to see you the same day.',
      icon: Calendar,
      color: '#FF6B6B',
      bgColor: 'rgba(255, 107, 107, 0.1)',
    },
    {
      question: 'Where are you located?',
      answer: 'We are in Torre Medical, El Poblado, Medellín. Accessible area with parking, near Metro Estación Poblado. You can see the exact location in our contact section.',
      icon: MapPin,
      color: '#9B59B6',
      bgColor: 'rgba(155, 89, 182, 0.1)',
    },
    {
      question: 'How many sessions do I need?',
      answer: 'It depends on your specific condition. Some conditions improve in 2-4 sessions, while complex injuries may require 8-12 sessions. Dr. Madrid will give you an estimate at the first consultation.',
      icon: Clock,
      color: '#F39C12',
      bgColor: 'rgba(243, 156, 18, 0.1)',
    },
    {
      question: 'Do you accept medical insurance?',
      answer: 'Yes, we work with the main medical insurance and prepaid medicine companies in Colombia. Verify your coverage with your insurer before the appointment.',
      icon: CreditCard,
      color: '#3498DB',
      bgColor: 'rgba(52, 152, 219, 0.1)',
    },
  ];

  return (
    <section id="preguntas" className="section-padding bg-[#F8F9FA]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#D5F3E5] text-[#1A1A1A] px-5 py-2.5 rounded-full mb-6">
            <span className="text-sm font-semibold">
              {locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            {locale === 'es' ? '¿Tienes dudas? Te ayudamos' : 'Have questions? We help you'}
          </h2>
          <p className="text-lg md:text-xl text-[#4A5568]">
            {locale === 'es' 
              ? 'Respuestas rápidas a las preguntas más comunes' 
              : 'Quick answers to the most common questions'}
          </p>
        </div>

        {/* FAQs Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {faqsData.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: faq.bgColor,
                    }}
                  >
                    <IconComponent 
                      className="w-7 h-7 transition-all duration-300" 
                      style={{ color: faq.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#5BA1C8] transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-[#4A5568] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#4A5568] font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {locale === 'es' ? 'Ver Todas las Preguntas' : 'See All Questions'}
          </a>
          <a
            href="https://wa.me/573044386208"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {locale === 'es' ? 'Preguntar por WhatsApp' : 'Ask on WhatsApp'}
          </a>
        </div>
      </div>
    </section>
  );
}
