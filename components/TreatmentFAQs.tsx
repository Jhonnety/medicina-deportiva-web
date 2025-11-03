'use client';

import { HelpCircle, CheckCircle, AlertCircle, Info, MessageCircle, FileQuestion } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

interface TreatmentFAQsProps {
  faqs: FAQ[];
  title: string;
  locale?: string;
}

export default function TreatmentFAQs({ faqs, title, locale = 'es' }: TreatmentFAQsProps) {
  // Iconos genéricos que se asignan cíclicamente
  const genericIcons = [HelpCircle, CheckCircle, AlertCircle, Info, MessageCircle, FileQuestion];
  
  return (
    <section className="section-padding bg-white relative overflow-hidden">
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
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            {locale === 'es' 
              ? 'Respuestas específicas sobre este tratamiento para resolver tus dudas' 
              : 'Specific answers about this treatment to resolve your doubts'}
          </p>
          <p className="text-base text-gray-600 italic">
            {locale === 'es' 
              ? '"Estamos aquí para resolver todas tus inquietudes."' 
              : '"We are here to answer all your questions."'}
          </p>
        </div>

        {/* FAQs Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, index) => {
            const IconComponent = genericIcons[index % genericIcons.length];
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
                      {faq.q}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {faq.a}
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

