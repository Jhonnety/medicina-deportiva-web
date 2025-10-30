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
          <div className="inline-flex items-center gap-2 bg-[#D5F3E5] text-[#1A1A1A] px-5 py-2.5 rounded-full mb-6">
            <span className="text-sm font-semibold">
              {locale === 'es' ? 'Tratamientos Especializados' : 'Specialized Treatments'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            {locale === 'es' 
              ? 'Soluciones Avanzadas para tu Recuperación' 
              : 'Advanced Solutions for Your Recovery'}
          </h2>
          <p className="text-lg md:text-xl text-[#4A5568] mb-4">
            {locale === 'es' 
              ? 'Técnicas innovadoras de medicina regenerativa sin cirugía' 
              : 'Innovative regenerative medicine techniques without surgery'}
          </p>
          <p className="text-base text-[#718096] italic">
            {locale === 'es' 
              ? '"Recuperación natural, resultados duraderos."' 
              : '"Natural recovery, lasting results."'}
          </p>
        </div>

        {/* Treatments Grid - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {TREATMENTS.map((treatment, index) => {
            const treatmentKey = treatment.slug.replace('tratamiento-', '').replace('plasma-rico-plaquetas', 'prp').replace('lesiones-deportivas', 'lesiones').replace('diagnostico-ecoguiado', 'ecoguiado').replace('programa-adelgazamiento', 'adelgazamiento');
            const treatmentDict = dictionary.treatments[treatmentKey as keyof typeof dictionary.treatments] || {};

            const colors = [
              { primary: '#0066FF', light: '#E6F2FF', bg: '#F0F8FF' },
              { primary: '#00D98E', light: '#E6FDF4', bg: '#F0FDF9' },
              { primary: '#FF6B35', light: '#FFF2ED', bg: '#FFF7F0' },
              { primary: '#8B5CF6', light: '#F3F0FF', bg: '#FAF5FF' },
              { primary: '#F59E0B', light: '#FEF3C7', bg: '#FFFBEB' },
              { primary: '#EF4444', light: '#FEE2E2', bg: '#FEF2F2' },
            ];

            const currentColor = colors[index % colors.length];

            // Textos específicos basados en la imagen
            const treatmentTexts = {
              artrosis: {
                es: {
                  title: 'Tratamiento de Artrosis',
                  description: 'Alivio del dolor y regeneración del cartílago articular mediante técnicas avanzadas de medicina regenerativa.',
                  benefits: [
                    'Reducción significativa del dolor articular',
                    'Mejora de la movilidad y flexibilidad',
                    'Regeneración natural del cartílago'
                  ]
                },
                en: {
                  title: 'Osteoarthritis Treatment',
                  description: 'Pain relief and cartilage regeneration through advanced regenerative medicine techniques.',
                  benefits: [
                    'Significant reduction in joint pain',
                    'Improved mobility and flexibility',
                    'Natural cartilage regeneration'
                  ]
                }
              },
              prp: {
                es: {
                  title: 'Plasma Rico en Plaquetas (PRP)',
                  description: 'Terapia regenerativa que utiliza las propias plaquetas del paciente para acelerar la curación.',
                  benefits: [
                    'Aceleración del proceso de curación',
                    'Reducción de la inflamación',
                    'Mejora de la función articular'
                  ]
                },
                en: {
                  title: 'Platelet Rich Plasma (PRP)',
                  description: 'Regenerative therapy using the patient\'s own platelets to accelerate healing.',
                  benefits: [
                    'Accelerated healing process',
                    'Reduced inflammation',
                    'Improved joint function'
                  ]
                }
              },
              lesiones: {
                es: {
                  title: 'Lesiones Deportivas',
                  description: 'Tratamiento especializado para deportistas con técnicas de medicina regenerativa y rehabilitación.',
                  benefits: [
                    'Recuperación más rápida',
                    'Prevención de recaídas',
                    'Retorno seguro al deporte'
                  ]
                },
                en: {
                  title: 'Sports Injuries',
                  description: 'Specialized treatment for athletes using regenerative medicine and rehabilitation techniques.',
                  benefits: [
                    'Faster recovery',
                    'Prevention of relapses',
                    'Safe return to sports'
                  ]
                }
              },
              ecoguiado: {
                es: {
                  title: 'Diagnóstico Ecoguiado',
                  description: 'Evaluación precisa mediante ultrasonido para un diagnóstico y tratamiento más efectivo.',
                  benefits: [
                    'Diagnóstico preciso y en tiempo real',
                    'Tratamiento dirigido y seguro',
                    'Menor riesgo de complicaciones'
                  ]
                },
                en: {
                  title: 'Ultrasound-Guided Diagnosis',
                  description: 'Precise evaluation through ultrasound for more effective diagnosis and treatment.',
                  benefits: [
                    'Precise and real-time diagnosis',
                    'Targeted and safe treatment',
                    'Lower risk of complications'
                  ]
                }
              },
              adelgazamiento: {
                es: {
                  title: 'Programa de Adelgazamiento',
                  description: 'Plan integral de pérdida de peso con seguimiento médico especializado y técnicas complementarias.',
                  benefits: [
                    'Pérdida de peso saludable y sostenible',
                    'Seguimiento médico personalizado',
                    'Mejora de la salud general'
                  ]
                },
                en: {
                  title: 'Weight Loss Program',
                  description: 'Comprehensive weight loss plan with specialized medical follow-up and complementary techniques.',
                  benefits: [
                    'Healthy and sustainable weight loss',
                    'Personalized medical follow-up',
                    'Overall health improvement'
                  ]
                }
              }
            };

            const currentTexts = treatmentTexts[treatmentKey as keyof typeof treatmentTexts] || {
              es: {
                title: (treatmentDict as any).title || treatment.title,
                description: (treatmentDict as any).description || treatment.description,
                benefits: (treatmentDict as any).benefits || treatment.benefits
              },
              en: {
                title: (treatmentDict as any).title || treatment.title,
                description: (treatmentDict as any).description || treatment.description,
                benefits: (treatmentDict as any).benefits || treatment.benefits
              }
            };

            return (
              <Link
                key={treatment.id}
                href={`/${locale}/tratamientos/${treatment.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] flex flex-col lg:flex-row h-full">
                  
                  {/* Image Column - Left Side */}
                  <div className="relative w-full lg:w-1/2 h-64 lg:h-auto flex-shrink-0">
                    <Image
                      src={treatment.image}
                      alt={currentTexts[locale as 'es' | 'en'].title}
                      fill
                      className="object-cover object-top lg:object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Badge */}
                    <div 
                      className="absolute top-6 right-6 px-4 py-2 text-white text-sm font-bold rounded-full shadow-lg"
                      style={{ backgroundColor: currentColor.primary }}
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
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#0066FF] transition-colors duration-300">
                      {currentTexts[locale as 'es' | 'en'].title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[#4A5568] mb-6 leading-relaxed">
                      {currentTexts[locale as 'es' | 'en'].description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                        {locale === 'es' ? 'Beneficios' : 'Benefits'}
                      </h4>
                      <ul className="space-y-3">
                        {currentTexts[locale as 'es' | 'en'].benefits.slice(0, 3).map((benefit: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div 
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: currentColor.light }}
                            >
                              <svg 
                                className="w-3 h-3" 
                                style={{ color: currentColor.primary }}
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
                            <span className="text-[#2D3748] font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white transition-colors duration-300 self-start"
                            style={{ backgroundColor: currentColor.primary }}>
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
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-gray-100 w-full">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              {locale === 'es' 
                ? '¿No encuentras tu tratamiento?' 
                : "Can't find your treatment?"}
            </h3>
            <p className="text-lg text-[#4A5568] mb-8">
              {locale === 'es' 
                ? 'Consulta con el Dr. James Madrid para una evaluación personalizada' 
                : 'Consult with Dr. James Madrid for a personalized evaluation'}
            </p>
            
            <a
              href={`/${locale}#contacto`}
              className="inline-flex items-center gap-3 bg-[#00D98E] hover:bg-[#00B876] text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              {locale === 'es' ? 'Agendar Consulta' : 'Schedule Consultation'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
