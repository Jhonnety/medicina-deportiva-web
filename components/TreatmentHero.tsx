'use client';

import Image from 'next/image';

interface TreatmentHeroProps {
  treatment: {
    image: string;
  };
  langContent: {
    title: string;
    subtitle: string;
  };
  lang: string;
}

export default function TreatmentHero({ treatment, langContent, lang }: TreatmentHeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative section-padding overflow-hidden bg-white">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda - Contenido */}
          <div className="space-y-6">
            {/* Badge médico */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit shadow-md"
                 style={{ backgroundColor: 'rgba(107, 165, 165, 0.15)' }}>
              <svg className="w-4 h-4" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#6ba5a5' }}>
                {lang === 'es' ? 'Tratamiento Especializado' : 'Specialized Treatment'}
              </span>
            </div>

            {/* H1 - Título Principal */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#182121' }}>
              {langContent.title.split('|')[0].trim()}
              {langContent.title.includes('|') && (
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2" style={{ color: '#6ba5a5' }}>
                  {langContent.title.split('|')[1]?.trim()}
                </span>
              )}
            </h1>

            {/* Descripción - Párrafo descriptivo para SEO */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              {langContent.subtitle}
            </p>

            {/* Trust Indicators con iconos */}
            <div className="space-y-3">
              {/* Indicador 1 - Experiencia */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: 'rgba(107, 165, 165, 0.15)' }}>
                  <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {lang === 'es' ? '+20 años de experiencia' : '+20 years of experience'}
                </span>
              </div>

              {/* Indicador 2 - Ubicación */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: 'rgba(107, 165, 165, 0.15)' }}>
                  <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Torre Medical - El Poblado
                </span>
              </div>

              {/* Indicador 3 - Pacientes */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: 'rgba(107, 165, 165, 0.15)' }}>
                  <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {lang === 'es' ? 'Más de 2.000 pacientes tratados' : 'More than 2,000 patients treated'}
                </span>
              </div>
            </div>
            
            {/* Botón principal de acción */}
            <div className="pt-2">
              <a
                href="https://wa.me/573044386208"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>{lang === 'es' ? 'Agendar Valoración' : 'Schedule Consultation'}</span>
              </a>
            </div>

            {/* Enlaces rápidos de navegación */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-gray-200">
              <button
                onClick={() => scrollToSection('what-is-section')}
                className="group flex items-center gap-2 text-sm font-medium transition-all duration-200"
                style={{ color: '#6ba5a5' }}
              >
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="group-hover:underline">
                  {lang === 'es' 
                    ? `¿Qué ${langContent.title.toLowerCase().includes('células') || langContent.title.toLowerCase().includes('cells') ? 'son' : 'es'} ${langContent.title.split('|')[0].trim().toLowerCase()}?`
                    : `What ${langContent.title.toLowerCase().includes('cells') ? 'are' : 'is'} ${langContent.title.split('|')[0].trim().toLowerCase()}?`
                  }
                </span>
              </button>
              
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              
              <button
                onClick={() => scrollToSection('symptoms-section')}
                className="group flex items-center gap-2 text-sm font-medium transition-all duration-200"
                style={{ color: '#6ba5a5' }}
              >
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="group-hover:underline">
                  {lang === 'es' ? 'Ver síntomas tratables' : 'View treatable symptoms'}
                </span>
              </button>
              
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              
              <button
                onClick={() => scrollToSection('results-section')}
                className="group flex items-center gap-2 text-sm font-medium transition-all duration-200"
                style={{ color: '#6ba5a5' }}
              >
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="group-hover:underline">
                  {lang === 'es' ? 'Resultados esperados' : 'Expected results'}
                </span>
              </button>
            </div>
          </div>

          {/* Columna Derecha - Imagen Principal */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={treatment.image}
              alt={`${langContent.title} - Dr. James Madrid, Medicina Deportiva Medellín`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

