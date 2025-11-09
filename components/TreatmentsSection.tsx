'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TREATMENTS } from '@/lib/constants/treatments';
import type { Dictionary } from '@/lib/types';

interface TreatmentsSectionProps {
  dictionary: Dictionary;
  locale: string;
}

export default function TreatmentsSection({ dictionary, locale }: TreatmentsSectionProps) {
  return (
    <section id="tratamientos" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 text-white font-semibold"
               style={{ backgroundColor: '#6ba5a5' }}>
            <span className="text-sm">
              {locale === 'es' ? 'Tratamientos Especializados' : 'Specialized Treatments'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: '#182121' }}>
            {locale === 'es' 
              ? 'Soluciones Avanzadas para tu Recuperación' 
              : 'Advanced Solutions for Your Recovery'}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            {locale === 'es' 
              ? 'Técnicas innovadoras de medicina regenerativa sin cirugía' 
              : 'Innovative regenerative medicine techniques without surgery'}
          </p>
          <p className="text-base text-gray-600 italic">
            {locale === 'es' 
              ? '"Recuperación natural, resultados duraderos."' 
              : '"Natural recovery, lasting results."'}
          </p>
        </div>

        {/* Treatments Grid - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {TREATMENTS.map((treatment, index) => {
            // Mapeo de slugs a claves del diccionario
            const slugToKeyMap: Record<string, string> = {
              'celulas-madre-mesenquimales': 'celulas_madre',
              'exosomas': 'exosomas',
              'plasma-rico-plaquetas': 'prp',
              'acido-hialuronico': 'acido_hialuronico',
              'infiltracion-convencional': 'infiltracion',
              'sueroterapia': 'sueroterapia',
              'programa-adelgazamiento': 'adelgazamiento',
              'alto-rendimiento-deportivo': 'alto_rendimiento',
            };
            
            const treatmentKey = slugToKeyMap[treatment.slug] || treatment.slug;
            const treatmentDict = dictionary.treatments[treatmentKey as keyof typeof dictionary.treatments] || {};

            // Sistema de colores corporativo
            const brandColors = {
              primary: '#283838',        // Verde petróleo oscuro
              primaryHover: '#202c2c',   // Verde petróleo más oscuro
              accentCool: '#6ba5a5',     // Menta suave (badges, iconos)
              accentWarm: '#e55b5b',     // Coral médico (CTAs)
              textPrimary: '#182121',    // Texto principal
              border: '#bec3c3',         // Bordes
              background: '#ffffff',     // Fondo
            };

            // Usar los datos del diccionario
            const currentTexts = {
              es: {
                title: (treatmentDict as { title?: string; description?: string; benefits?: string[] }).title || treatment.title,
                description: (treatmentDict as { title?: string; description?: string; benefits?: string[] }).description || treatment.description,
                benefits: (treatmentDict as { title?: string; description?: string; benefits?: string[] }).benefits || treatment.benefits
              },
              en: {
                title: (treatmentDict as { title?: string; description?: string; benefits?: string[] }).title || treatment.title,
                description: (treatmentDict as { title?: string; description?: string; benefits?: string[] }).description || treatment.description,
                benefits: (treatmentDict as { title?: string; description?: string; benefits?: string[] }).benefits || treatment.benefits
              }
            };

            // Mapear la posición de imagen a clases de Tailwind
            const getImagePositionClass = (position?: string) => {
              const positionMap: Record<string, string> = {
                'center': 'object-center',
                'top': 'object-top',
                'bottom': 'object-bottom',
                'left': 'object-left',
                'right': 'object-right',
                'top-left': 'object-left-top',
                'top-right': 'object-right-top',
                'bottom-left': 'object-left-bottom',
                'bottom-right': 'object-right-bottom',
              };
              return positionMap[position || 'center'] || 'object-center';
            };

            const mobileImagePosition = getImagePositionClass(treatment.mobileImagePosition);

            return (
              <div
                key={treatment.id}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row h-full"
                     style={{ borderColor: brandColors.border, borderWidth: '1px' }}>
                  
                  {/* Image Column - Left Side */}
                  <div className="relative w-full lg:w-1/2 h-64 lg:h-auto flex-shrink-0 overflow-hidden">
                    {/* Mobile image */}
                    <div className="absolute inset-0 lg:hidden">
                      <Image
                        src={treatment.mobileImage || treatment.image}
                        alt={currentTexts[locale as 'es' | 'en'].title}
                        fill
                        className={`object-cover ${mobileImagePosition} group-hover:scale-105 transition-transform duration-700`}
                        sizes="100vw"
                        priority={index < 2}
                      />
                    </div>
                    {/* Desktop image */}
                    <div className="absolute inset-0 hidden lg:block">
                      <Image
                        src={treatment.image}
                        alt={currentTexts[locale as 'es' | 'en'].title}
                        fill
                        className={`object-cover lg:object-center group-hover:scale-105 transition-transform duration-700`}
                        sizes="50vw"
                        priority={index < 2}
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:scale-105 transition-transform duration-700"></div>
                    
                    {/* Badge */}
                    <div 
                      className="absolute top-6 right-6 px-4 py-2 text-white text-sm font-bold rounded-full shadow-lg"
                      style={{ backgroundColor: brandColors.accentCool }}
                    >
                      {locale === 'es' ? 'Especializado' : 'Specialized'}
                    </div>

                    {/* Number overlay */}
                    <div className="absolute bottom-6 left-6 text-6xl font-bold text-white/20">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content Column - Right Side */}
                  <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300"
                        style={{ color: brandColors.textPrimary }}>
                      {currentTexts[locale as 'es' | 'en'].title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {currentTexts[locale as 'es' | 'en'].description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3"
                          style={{ color: brandColors.textPrimary }}>
                        {locale === 'es' ? 'Beneficios' : 'Benefits'}
                      </h4>
                      <ul className="space-y-3">
                        {currentTexts[locale as 'es' | 'en'].benefits.slice(0, 3).map((benefit: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div 
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: brandColors.accentCool + '30' }}
                            >
                              <svg 
                                className="w-3 h-3" 
                                style={{ color: brandColors.primary }}
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="font-medium" style={{ color: brandColors.textPrimary }}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      href={`/${locale}/tratamientos/${treatment.slug}`}
                      className="mt-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white transition-all duration-300 self-start hover:scale-105"
                      style={{ backgroundColor: brandColors.primary }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = brandColors.primaryHover}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = brandColors.primary}
                    >
                      {locale === 'es' ? 'Conocer Más' : 'Learn More'}
                      <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
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
                  {locale === 'es' ? 'Consulta Personalizada' : 'Personalized Consultation'}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 !text-white leading-tight">
                {locale === 'es' 
                  ? '¿No encuentras tu tratamiento?' 
                  : "Can't find your treatment?"}
              </h3>
              
              <p className="text-lg md:text-xl !text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                {locale === 'es' 
                  ? 'Consulta con el Dr. James Madrid para recibir una evaluación médica personalizada y descubrir el tratamiento ideal para ti' 
                  : 'Consult with Dr. James Madrid for a personalized medical evaluation and discover the ideal treatment for you'}
              </p>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Botón principal - WhatsApp */}
                <a
                  href="https://wa.me/573044386208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl w-full sm:w-auto justify-center"
                  style={{ backgroundColor: '#6ba5a5' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a9494'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6ba5a5'}
                >
                  <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
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
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'es' ? 'Respuesta en menos de 24h' : 'Response in less than 24h'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>{locale === 'es' ? 'Sin compromiso' : 'No commitment'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{locale === 'es' ? 'Atención profesional' : 'Professional care'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
