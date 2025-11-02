'use client';

import Image from 'next/image';
import { Award, Stethoscope, Target, Microscope, UsersRound, MapPin } from "lucide-react";

interface AboutSectionProps {
  locale: string;
}

export default function AboutSection({ locale }: AboutSectionProps) {
  return (
    <section id="sobre-mi" className="section-padding relative overflow-hidden"
             style={{ 
               background: 'linear-gradient(135deg, #283838 0%, #1a2626 50%, #283838 100%)',
             }}>
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full -translate-x-1/2 -translate-y-1/2"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6"
               style={{ backgroundColor: 'rgba(107, 165, 165, 0.2)', border: '1px solid rgba(107, 165, 165, 0.3)' }}>
            <svg className="w-4 h-4" style={{ color: '#6ba5a5' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold" style={{ color: '#6ba5a5' }}>
              {locale === 'es' ? 'Nuestro Especialista' : 'Our Specialist'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-6">
            Dr. James Madrid
          </h2>
          <p className="text-xl md:text-2xl !text-gray-300 italic font-light leading-relaxed">
            {locale === 'es' 
              ? '"No tratamos enfermedades, transformamos vidas"' 
              : '"We don\'t treat diseases, we transform lives"'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1200px] mx-auto">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image */}
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4"
                 style={{ borderColor: 'rgba(107, 165, 165, 0.3)' }}>
              <Image
                src="/assets/images/dc_james_6.jpg"
                alt={locale === 'es' ? 'Dr. James Madrid - Especialista en Medicina Deportiva' : 'Dr. James Madrid - Sports Medicine Specialist'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-8 left-8 right-8 !text-white">
                <p className="text-xl font-bold mb-2 !text-white">
                  {locale === 'es' ? 'Atención personalizada y profesional' : 'Personalized and professional care'}
                </p>
                <p className="text-sm opacity-90 !text-white flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {locale === 'es' ? 'Medicina Deportiva • Tratamiento sin cirugía' : 'Sports Medicine • Non-surgical treatment'}
                </p>
              </div>

              {/* Experience Badge */}
              <div className="absolute top-8 right-8 rounded-2xl p-4 shadow-xl backdrop-blur-sm"
                   style={{ backgroundColor: 'rgba(107, 165, 165, 0.9)' }}>
                <div className="text-center">
                  <div className="text-4xl font-bold !text-white">20+</div>
                  <div className="text-xs font-medium !text-white/90 mt-1">
                    {locale === 'es' ? 'Años' : 'Years'}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl -z-10"
                 style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
          </div>

          {/* Content Column */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Professional History */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold !text-white mb-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                     style={{ backgroundColor: 'rgba(107, 165, 165, 0.2)' }}>
                  <Stethoscope className="w-6 h-6" style={{ color: '#6ba5a5' }} />
                </div>
                {locale === 'es' ? 'Historia Profesional' : 'Professional History'}
              </h3>
              
              <div className="space-y-5">
                <p className="!text-gray-300 leading-relaxed text-lg">
                  {locale === 'es' 
                    ? 'Con más de 20 años de experiencia en medicina deportiva, el Dr. James Madrid se ha especializado en el tratamiento no quirúrgico de lesiones deportivas y el manejo integral del dolor. Su enfoque combina la medicina basada en evidencia con un trato humano y personalizado.'
                    : 'With more than 20 years of experience in sports medicine, Dr. James Madrid has specialized in the non-surgical treatment of sports injuries and comprehensive pain management. His approach combines evidence-based medicine with human and personalized treatment.'}
                </p>
                
                <p className="!text-gray-300 leading-relaxed text-lg">
                  {locale === 'es' 
                    ? 'Su filosofía de trabajo se centra en entender que cada paciente es único, desarrollando planes de tratamiento personalizados que abordan no solo los síntomas, sino las causas subyacentes de cada condición.'
                    : 'His work philosophy focuses on understanding that each patient is unique, developing personalized treatment plans that address not only the symptoms, but also the underlying causes of each condition.'}
                </p>
              </div>
            </div>

            {/* Key Qualifications */}
            <div>
              <div className="space-y-6">
                {[
                  {
                    icon: <Award className="w-6 h-6" />,
                    es: '20+ años de experiencia médica',
                    en: '20+ years of medical experience'
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    es: 'Enfoque no quirúrgico y personalizado',
                    en: 'Non-surgical and personalized approach'
                  },
                  {
                    icon: <Microscope className="w-6 h-6" />,
                    es: 'Equipos de diagnóstico ecoguiado',
                    en: 'Eco-guided diagnostic equipment'
                  },
                  {
                    icon: <UsersRound className="w-6 h-6" />,
                    es: 'Seguimiento multidisciplinario completo',
                    en: 'Complete multidisciplinary follow-up'
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    es: 'Atención en Torre Medical, El Poblado',
                    en: 'Care at Torre Medical, El Poblado'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: 'rgba(107, 165, 165, 0.2)' }}
                    >
                      <div style={{ color: '#6ba5a5' }}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <span className="!text-white font-medium text-base leading-relaxed">{item[locale as 'es' | 'en']}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
