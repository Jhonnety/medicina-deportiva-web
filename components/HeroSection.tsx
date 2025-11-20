'use client';

import Image from 'next/image';
import type { Dictionary } from '@/lib/types';
import teamMobile from '@/assets/images/team_mobile_1.png';
import teamDesktop from '@/assets/images/team_desktop_1.png';

interface HeroSectionProps {
  dictionary: Dictionary;
  locale: string;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36 pb-0 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8fafa 0%, #ffffff 50%, #f5f8f8 100%)' }}>
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
        <div className="absolute top-1/2 right-20 w-[500px] h-[500px] rounded-full"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center lg:items-end">
          
          {/* Content Column */}
          <div className="flex flex-col justify-center pb-12 lg:pb-20 order-2 lg:order-1">
            
            {/* Badge mejorado */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full w-fit mb-8 shadow-lg"
                 style={{ backgroundColor: 'rgba(107, 165, 165, 0.15)', border: '2px solid rgba(107, 165, 165, 0.3)' }}>
              <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-bold" style={{ color: '#6ba5a5' }}>
                {locale === 'es' ? '20 años transformando vidas' : '20 years transforming lives'}
              </span>
            </div>

            {/* Main Heading mejorado */}
            <h1 className="text-[44px] sm:text-[52px] lg:text-[56px] xl:text-[64px] leading-tight font-bold tracking-normal mb-8" style={{ color: '#182121' }}>
              {locale === 'es' ? (
                <>
                  Movilidad <span style={{ color: '#6ba5a5' }}>segura</span> y sin <span style={{ color: '#6ba5a5' }}>dolor</span>
                </>
              ) : (
                <>
                  <span style={{ color: '#6ba5a5' }}>Safe</span> and <span style={{ color: '#6ba5a5' }}>painless</span> mobility
                </>
              )}
            </h1>

            {/* Subtitle mejorado */}
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-medium leading-relaxed mb-8 text-slate-600 max-w-2xl">
              <span className="block text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#182121] mb-3">
                {locale === 'es' ? 'Dr. James Madrid' : 'Dr. James Madrid'}
              </span>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-1 w-12 bg-[#6ba5a5] rounded-full"></div>
              </div>
              {locale === 'es' 
                ? 'Medicina física y del deporte / Medicina regenerativa.'
                : 'Physical Medicine and Sports / Regenerative Medicine.'}
            </h2>

            {/* Description mejorada */}
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl mb-10">
              {locale === 'es'
                ? 'Más de 20 años ayudando a pacientes a superar la artrosis, lesiones deportivas y sobrepeso.'
                : 'Over 20 years helping patients overcome osteoarthritis, sports injuries, and obesity.'}
            </p>

            {/* Imagen Mobile - team_4.png - Solo visible en mobile */}
            <div className="w-full md:hidden mb-10">
              <div className="relative w-full max-w-lg mx-auto">
                <Image
                  src={teamMobile}
                  alt="Dr. James Madrid y Equipo Médico - Medicina Deportiva"
                  width={800}
                  height={1000}
                  priority
                  quality={95}
                  className="w-full h-auto drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>

            {/* CTA Buttons mejorados */}
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a
                href={`https://wa.me/573044386208`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#6ba5a5' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a9494'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6ba5a5'}
              >
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>{locale === 'es' ? 'Agendar Cita' : 'Schedule Appointment'}</span>
              </a>

              <a
                href={`/${locale}#tratamientos`}
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 border-2"
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: '#6ba5a5',
                  color: '#6ba5a5'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(107, 165, 165, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span>{locale === 'es' ? 'Nuestros servicios' : 'Our Services'}</span>
              </a>
            </div>

            {/* Stats mejoradas - Solo Desktop */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10" style={{ borderTop: '2px solid rgba(107, 165, 165, 0.2)' }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                     style={{ backgroundColor: 'rgba(107, 165, 165, 0.1)' }}>
                  <svg className="w-7 h-7" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1" style={{ color: '#6ba5a5' }}>2000+</div>
                  <div className="text-sm font-medium text-gray-700">
                    {locale === 'es' ? 'Pacientes Recuperados' : 'Recovered Patients'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                     style={{ backgroundColor: 'rgba(107, 165, 165, 0.1)' }}>
                  <svg className="w-7 h-7" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1" style={{ color: '#6ba5a5' }}>20+</div>
                  <div className="text-sm font-medium text-gray-700">
                    {locale === 'es' ? 'Años de Experiencia' : 'Years of Experience'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                     style={{ backgroundColor: 'rgba(107, 165, 165, 0.1)' }}>
                  <svg className="w-7 h-7" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1" style={{ color: '#6ba5a5' }}>2</div>
                  <div className="text-sm font-medium text-gray-700">
                    {locale === 'es' ? 'Especialidades' : 'Specialties'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column - Aligned to bottom - Solo Desktop */}
          <div className="relative hidden md:flex items-end justify-center lg:justify-end order-1 lg:order-2 w-full">
            {/* Imagen Desktop - team_5.png */}
            <div className="relative w-full max-w-2xl">
              <Image
                src={teamDesktop}
                alt="Dr. James Madrid y Equipo Médico - Medicina Deportiva"
                width={800}
                height={1000}
                priority
                className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
                style={{ 
                  maxHeight: '85vh',
                  objectPosition: 'bottom'
                }}
              />
              
              {/* Floating Location Badge mejorado */}
              <div className="absolute bottom-0 right-0 lg:bottom-8 lg:right-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 hidden sm:block"
                   style={{ borderColor: 'rgba(107, 165, 165, 0.3)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                       style={{ backgroundColor: 'rgba(107, 165, 165, 0.1)' }}>
                    <svg className="w-7 h-7" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-bold mb-1" style={{ color: '#182121' }}>Torre Medical</div>
                    <div className="text-sm font-medium text-gray-600">El Poblado, Medellín</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
