'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, ClipboardCheck, Syringe } from "lucide-react";
import step1 from '@/assets/images/step_1.jpg';
import step2 from '@/assets/images/step_2.jpg';
import step3 from '@/assets/images/step_3.jpg';
import { getWhatsAppLink } from '@/lib/constants/contact';
import { sendWhatsAppConversion } from '@/lib/analytics';

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
        ? 'Realizamos una evaluación completa de tus objetivos específicos, historial médico y condición física para entender tus necesidades.'
        : 'We perform a complete evaluation of your specific objectives, medical history, and physical condition to understand your needs.',
      icon: <Calendar className="w-7 h-7 text-accent-cool" />,
      iconBg: 'bg-accent-cool/10',
      numberBg: 'bg-accent-cool',
      image: step1,
      overlayTitle: locale === 'es' ? 'Valoración Médica' : 'Medical Assessment',
      overlaySubtitle: locale === 'es' ? 'Diagnóstico preciso y personalizado' : 'Precise and personalized diagnosis',
    },
    {
      number: '2',
      title: locale === 'es' ? 'Tratamiento Personalizado' : 'Personalized Treatment',
      description: locale === 'es'
        ? 'Aplicamos técnicas avanzadas de medicina regenerativa diseñadas específicamente para tu diagnóstico y objetivos de recuperación.'
        : 'We apply advanced regenerative medicine techniques designed specifically for your diagnosis and recovery objectives.',
      icon: <ClipboardCheck className="w-7 h-7 text-accent-cool" />,
      iconBg: 'bg-accent-cool/10',
      numberBg: 'bg-primary',
      image: step2,
      overlayTitle: locale === 'es' ? 'Tratamiento Especializado' : 'Specialized Treatment',
      overlaySubtitle: locale === 'es' ? 'Medicina regenerativa sin cirugía' : 'Regenerative medicine without surgery',
    },
    {
      number: '3',
      title: locale === 'es' ? 'Seguimiento y Recuperación' : 'Follow-up and Recovery',
      description: locale === 'es'
        ? 'Te acompañamos durante todo el proceso con citas de control periódicas, ajustes al tratamiento y soporte continuo hasta alcanzar tus objetivos.'
        : 'We accompany you throughout the entire process with periodic control appointments, treatment adjustments, and continuous support until you achieve your objectives.',
      icon: <Syringe className="w-7 h-7 text-accent-warm" />,
      iconBg: 'bg-accent-warm/10',
      numberBg: 'bg-accent-warm',
      image: step3,
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
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 text-white font-semibold"
            style={{ backgroundColor: '#6ba5a5' }}>
            <span className="text-sm">
              {locale === 'es' ? 'Nuestro Proceso' : 'Our Process'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#182121' }}>
            {locale === 'es'
              ? 'Tu recuperación en 3 pasos simples'
              : 'Your recovery in 3 simple steps'}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            {locale === 'es'
              ? 'Un proceso sencillo y estructurado que garantiza los mejores resultados'
              : 'A simple and structured process that guarantees the best results'}
          </p>
          <p className="text-base text-gray-600 italic">
            {locale === 'es'
              ? '"Nos enfocamos en resultados reales y alcanzables."'
              : '"We focus on real results and achievable results."'}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start px-4 md:!px-0">

          {/* Left Column - Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative cursor-pointer transition-all duration-500 ${activeStep === index
                  ? 'bg-white shadow-xl rounded-2xl p-8 md:p-10 border-l-4 border-accent-cool'
                  : 'hover:opacity-80'
                  }`}
              >
                {/* Number Badge */}
                <div
                  className={`absolute -left-6 -top-6 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300 ${activeStep === index
                    ? `${step.numberBg} scale-110`
                    : 'bg-accent-cool/50'
                    }`}
                >
                  {step.number}
                </div>

                <div className="flex items-start gap-6 ml-6">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activeStep === index
                      ? `${step.iconBg}`
                      : 'bg-gray-100'
                      }`}
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`text-xl md:text-2xl font-bold mb-4 transition-colors duration-300 ${activeStep === index ? 'text-gray-900' : 'text-gray-900'
                        }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`leading-relaxed transition-colors duration-300 ${activeStep === index ? 'text-gray-700' : 'text-gray-600'
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
                  className={`transition-all duration-300 rounded-full ${activeStep === index
                    ? 'w-10 h-3 bg-primary'
                    : 'w-3 h-3 bg-gray-200'
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
                  className={`absolute inset-0 transition-opacity duration-700 ${activeStep === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
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
                    className={`transition-all duration-300 rounded-full ${activeStep === index
                      ? 'w-3 h-10 bg-white'
                      : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                      }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent-cool/20/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 badge badge-cool/20 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="relative rounded-3xl shadow-2xl p-10 md:p-14 lg:p-16 text-center w-full overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #283838 0%, #1a2626 50%, #283838 100%)',
            }}>
            {/* Patrón decorativo de fondo */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-40 h-40 rounded-full"
                style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full"
                style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
            </div>

            {/* Contenido */}
            <div className="relative z-10">
              {/* Badge superior */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: 'rgba(107, 165, 165, 0.2)', border: '1px solid rgba(107, 165, 165, 0.3)' }}>
                <svg className="w-4 h-4" style={{ color: '#6ba5a5' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold" style={{ color: '#6ba5a5' }}>
                  {locale === 'es' ? 'Primera Consulta' : 'First Consultation'}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 !text-white leading-tight">
                {locale === 'es'
                  ? '¿Listo para comenzar tu recuperación?'
                  : 'Ready to start your recovery?'}
              </h3>

              <p className="text-lg md:text-xl !text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                {locale === 'es'
                  ? 'Agenda tu primera consulta con el Dr. James Madrid Jaramillo y da el primer paso hacia una vida sin dolor'
                  : 'Schedule your first consultation with Dr. James Madrid Jaramillo and take the first step towards a pain-free life'}
              </p>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Botón principal - WhatsApp */}
                <a
                  href={getWhatsAppLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sendWhatsAppConversion('process_section')}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl w-full sm:w-auto justify-center"
                  style={{ backgroundColor: '#6ba5a5' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a9494'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6ba5a5'}
                >
                  <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <span>{locale === 'es' ? 'Agendar por WhatsApp' : 'Schedule via WhatsApp'}</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                {/* Botón secundario - Solo en mobile */}
                <a
                  href="tel:+573044386208"
                  className="sm:hidden group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full justify-center"
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid rgba(107, 165, 165, 0.5)',
                    color: '#ffffff'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(107, 165, 165, 0.1)';
                    e.currentTarget.style.borderColor = '#6ba5a5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(107, 165, 165, 0.5)';
                  }}
                >
                  <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{locale === 'es' ? 'Llamar Ahora' : 'Call Now'}</span>
                </a>
              </div>

              {/* Info adicional */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm !text-gray-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'es' ? 'Primera cita enfocada en entender tu dolor' : 'First appointment focused on understanding your pain'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>{locale === 'es' ? 'Analizamos la causa, no solo el síntoma' : 'We analyze the cause, not just the symptom'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'es' ? 'Plan de tratamiento personalizado' : 'Personalized treatment plan'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'es' ? 'Resultados medibles y realistas' : 'Measurable and realistic results'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
