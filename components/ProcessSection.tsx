'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, ClipboardCheck, Syringe } from "lucide-react";

interface ProcessSectionProps {
  locale: string;
}

export default function ProcessSection({ locale }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '1',
      title: locale === 'es' ? 'Valoración Médica' : 'Medical Assessment',
      description: locale === 'es' 
        ? 'Realizamos una evaluación completa de tu condición física, historial médico y objetivos específicos para entender tus necesidades.'
        : 'We perform a complete evaluation of your physical condition, medical history, and specific objectives to understand your needs.',
      icon: <Calendar className="w-7 h-7 text-[#0066FF]" />,
      iconBg: 'bg-[#E6F2FF]',
      numberBg: 'bg-[#0066FF]',
      image: '/assets/images/dc_james_7.jpg',
      overlayTitle: locale === 'es' ? 'Valoración Médica' : 'Medical Assessment',
      overlaySubtitle: locale === 'es' ? 'Diagnóstico preciso y personalizado' : 'Precise and personalized diagnosis',
    },
    {
      number: '2',
      title: locale === 'es' ? 'Tratamiento Personalizado' : 'Personalized Treatment',
      description: locale === 'es' 
        ? 'Aplicamos técnicas avanzadas de medicina regenerativa diseñadas específicamente para tu diagnóstico y objetivos de recuperación.'
        : 'We apply advanced regenerative medicine techniques designed specifically for your diagnosis and recovery objectives.',
      icon: <ClipboardCheck className="w-7 h-7 text-[#00D98E]" />,
      iconBg: 'bg-[#E6FDF4]',
      numberBg: 'bg-[#00D98E]',
      image: '/assets/images/dc_james_8.jpg',
      overlayTitle: locale === 'es' ? 'Tratamiento Especializado' : 'Specialized Treatment',
      overlaySubtitle: locale === 'es' ? 'Medicina regenerativa sin cirugía' : 'Regenerative medicine without surgery',
    },
    {
      number: '3',
      title: locale === 'es' ? 'Seguimiento y Recuperación' : 'Follow-up and Recovery',
      description: locale === 'es' 
        ? 'Te acompañamos durante todo el proceso con citas de control periódicas, ajustes al tratamiento y soporte continuo hasta alcanzar tus objetivos.'
        : 'We accompany you throughout the entire process with periodic control appointments, treatment adjustments, and continuous support until you achieve your objectives.',
      icon: <Syringe className="w-7 h-7 text-[#FF6B35]" />,
      iconBg: 'bg-[#FFF2ED]',
      numberBg: 'bg-[#FF6B35]',
      image: '/assets/images/dc_james_9.jpg',
      overlayTitle: locale === 'es' ? 'Acompañamiento Total' : 'Complete Support',
      overlaySubtitle: locale === 'es' ? 'Seguimiento hasta tu recuperación completa' : 'Follow-up until your complete recovery',
    },
  ];

  // Auto-advance steps every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D5F3E5] text-[#1A1A1A] px-5 py-2.5 rounded-full mb-6">
            <span className="text-sm font-semibold">
              {locale === 'es' ? 'Nuestro Proceso' : 'Our Process'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            {locale === 'es' 
              ? 'Tu recuperación en 3 pasos simples' 
              : 'Your recovery in 3 simple steps'}
          </h2>
          <p className="text-lg md:text-xl text-[#4A5568] mb-4">
            {locale === 'es' 
              ? 'Un proceso sencillo y estructurado que garantiza los mejores resultados' 
              : 'A simple and structured process that guarantees the best results'}
          </p>
          <p className="text-base text-[#718096] italic">
            {locale === 'es' 
              ? '"Nos enfocamos en resultados reales, sin cirugía."' 
              : '"We focus on real results, without surgery."'}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
          
          {/* Left Column - Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative cursor-pointer transition-all duration-500 ${
                  activeStep === index
                    ? 'bg-white shadow-xl rounded-2xl p-8 md:p-10 border-l-4 border-[#5BA1C8]'
                    : 'hover:opacity-80'
                }`}
              >
                {/* Number Badge */}
                <div
                  className={`absolute -left-6 -top-6 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300 ${
                    activeStep === index
                      ? `${step.numberBg} scale-110`
                      : 'bg-[#8DAABA]'
                  }`}
                >
                  {step.number}
                </div>

                <div className="flex items-start gap-6 ml-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeStep === index
                        ? `${step.iconBg}`
                        : 'bg-[#EDF2F7]'
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-300 ${
                        activeStep === index ? 'text-[#1A1A1A]' : 'text-[#2D3748]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`leading-relaxed transition-colors duration-300 ${
                        activeStep === index ? 'text-[#4A5568]' : 'text-[#718096]'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Progress Dots - Mobile */}
            <div className="flex justify-center gap-3 lg:hidden mt-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeStep === index
                      ? 'w-10 h-3 bg-[#1A1A1A]'
                      : 'w-3 h-3 bg-[#DCE3E8]'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:flex lg:items-start">
            <div className="relative w-full h-[580px] max-h-[580px] rounded-3xl overflow-hidden shadow-2xl">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeStep === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
              ))}

              {/* Active Step Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1A1A1A] font-bold text-xl">
                    {steps[activeStep].number}
                  </div>
                  <div className="h-px flex-1 bg-white/30"></div>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold mb-2 !text-white">
                  {steps[activeStep].overlayTitle}
                </h4>
                <p className="text-sm md:text-base !text-white/90">
                  {steps[activeStep].overlaySubtitle}
                </p>
              </div>

              {/* Navigation Dots */}
              <div className="absolute top-8 right-8 z-20 flex flex-col gap-3">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`transition-all duration-300 rounded-full ${
                      activeStep === index
                        ? 'w-3 h-10 bg-white'
                        : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#BFD7EA]/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#D5F3E5]/20 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="w-full">
            {/* CTA Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
                {locale === 'es' 
                  ? '¿Listo para comenzar tu recuperación?' 
                  : 'Ready to start your recovery?'}
              </h3>
              <p className="text-lg md:text-xl text-[#4A5568] mb-8 max-w-2xl mx-auto">
                {locale === 'es' 
                  ? 'Agenda tu primera consulta y da el primer paso hacia una vida sin dolor' 
                  : 'Schedule your first consultation and take the first step towards a pain-free life'}
              </p>
              
              {/* WhatsApp CTA Button */}
              <a
                href="https://wa.me/573001234567?text=Hola%20Dr.%20James%20Madrid,%20me%20gustaría%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#00D98E] hover:bg-[#00B876] text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl max-w-md mx-auto"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                {locale === 'es' 
                  ? 'Agendar Cita por WhatsApp' 
                  : 'Schedule Appointment by WhatsApp'}
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
