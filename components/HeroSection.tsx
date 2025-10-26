import Image from 'next/image';
import type { Dictionary } from '@/lib/types';
import team2 from '@/assets/images/team_2.png';

interface HeroSectionProps {
  dictionary: Dictionary;
  locale: string;
}

export default function HeroSection({ dictionary, locale }: HeroSectionProps) {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36 pb-0 bg-gradient-to-br from-[#EAF3F8] via-[#F0F6FA] to-white overflow-hidden">
      {/* Decorative radial gradient */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#BFD7EA]/20 via-[#BFD7EA]/10 to-transparent rounded-full pointer-events-none transform -translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-end">
          
          {/* Content Column */}
          <div className="flex flex-col justify-center pb-12 lg:pb-20 order-2 lg:order-1">
            
            {/* Badge con más margen inferior */}
            <div className="inline-flex items-center gap-3 bg-[#D5F3E5] text-[#1A1A1A] px-5 py-3 rounded-full w-fit shadow-sm mb-8">
              <svg className="w-5 h-5 text-[#00B876]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold">
                {locale === 'es' ? '20 años transformando vidas' : '20 years transforming lives'}
              </span>
            </div>

            {/* Main Heading con más margen inferior */}
            <h1 className="text-[44px] sm:text-[52px] lg:text-[56px] xl:text-[64px] leading-[1.05] font-bold text-[#1A1A1A] tracking-tight mb-8">
              {locale === 'es' ? (
                <>
                  Recupera tu <span className="text-[#8DAABA]">movilidad</span> y bienestar{' '}
                  <span className="text-[#8DAABA]">sin cirugía</span>
                </>
              ) : (
                <>
                  Recover your <span className="text-[#8DAABA]">mobility</span> and wellness{' '}
                  <span className="text-[#8DAABA]">without surgery</span>
                </>
              )}
            </h1>

            {/* Subtitle con más margen inferior */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#1A1A1A] leading-tight mb-8">
              {locale === 'es' 
                ? 'Dr. James Madrid – Medicina del Deporte en Medellín'
                : 'Dr. James Madrid – Sports Medicine in Medellín'}
            </h2>

            {/* Description con más margen inferior */}
            <p className="text-lg lg:text-xl text-[#4A5568] leading-relaxed max-w-xl mb-10">
              {locale === 'es'
                ? 'Más de 20 años ayudando a pacientes a tratar la artrosis, lesiones deportivas y dolor crónico con terapias regenerativas.'
                : 'Over 20 years helping patients treat arthritis, sports injuries and chronic pain with regenerative therapies.'}
            </p>

            {/* CTA Buttons con más espacio */}
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a
                href={`https://wa.me/573044386208`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-10 py-5 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {locale === 'es' ? 'Agendar Cita' : 'Schedule Appointment'}
              </a>

              <a
                href={`/${locale}#tratamientos`}
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-[#F7FAFC] text-[#4A5568] hover:text-[#2D3748] border-2 border-[#E1E5E9] px-10 py-5 text-lg font-semibold rounded-full transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                {locale === 'es' ? 'Nuestros servicios' : 'Our Services'}
              </a>
            </div>

            {/* Stats con más padding y espacio entre elementos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t-2 border-[#E2E8F0]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EDF2F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#5BA1C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#1A1A1A] mb-1">2000+</div>
                  <div className="text-sm text-[#718096]">
                    {locale === 'es' ? 'Pacientes Recuperados' : 'Recovered Patients'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EDF2F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#5BA1C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#1A1A1A] mb-1">20+</div>
                  <div className="text-sm text-[#718096]">
                    {locale === 'es' ? 'Años de Experiencia' : 'Years of Experience'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EDF2F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#5BA1C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#1A1A1A] mb-1">6+</div>
                  <div className="text-sm text-[#718096]">
                    {locale === 'es' ? 'Especialidades' : 'Specialties'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column - Aligned to bottom */}
          <div className="relative flex items-end justify-center lg:justify-end order-1 lg:order-2 h-full">
            <div className="relative w-full max-w-2xl">
              <Image
                src={team2}
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
              
              {/* Floating Location Badge con más padding */}
              <div className="absolute bottom-0 right-0 lg:bottom-8 lg:right-8 bg-white rounded-2xl shadow-2xl p-6 border border-[#E2E8F0] hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#EDF2F7] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#5BA1C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[#1A1A1A] mb-1">Torre Medical</div>
                    <div className="text-sm text-[#718096]">El Poblado, Medellín</div>
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
