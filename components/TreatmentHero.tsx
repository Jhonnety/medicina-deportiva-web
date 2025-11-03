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
  return (
    <section className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8fafa 0%, #ffffff 50%, #f5f8f8 100%)' }}>
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full"
             style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {/* Badge médico */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full w-fit mb-6 shadow-lg"
                 style={{ backgroundColor: 'rgba(107, 165, 165, 0.15)', border: '2px solid rgba(107, 165, 165, 0.3)' }}>
              <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-bold" style={{ color: '#6ba5a5' }}>
                {lang === 'es' ? 'Tratamiento Especializado' : 'Specialized Treatment'}
              </span>
            </div>

            {/* Main Heading mejorado con SEO */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#182121' }}>
              {langContent.title}
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2" style={{ color: '#6ba5a5' }}>
                {lang === 'es' ? 'en Medellín' : 'in Medellín'}
              </span>
            </h1>

            {/* Subtitle mejorado */}
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl">
              {langContent.subtitle}
            </p>

            {/* Beneficio destacado */}
            <div className="mb-8 p-5 rounded-2xl border-l-4 shadow-lg"
                 style={{ 
                   backgroundColor: 'rgba(107, 165, 165, 0.08)',
                   borderColor: '#6ba5a5'
                 }}>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <p className="text-base font-semibold mb-1" style={{ color: '#182121' }}>
                    {lang === 'es' ? '🏥 Tratamiento con el Dr. James Madrid' : '🏥 Treatment with Dr. James Madrid'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {lang === 'es' 
                      ? '20+ años de experiencia en medicina deportiva y regenerativa'
                      : '20+ years of experience in sports and regenerative medicine'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Botones de acción mejorados */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Botón principal - WhatsApp */}
              <a
                href="https://wa.me/573044386208"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#6ba5a5' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a9494'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6ba5a5'}
              >
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>{lang === 'es' ? 'Agendar Consulta' : 'Schedule Consultation'}</span>
              </a>

              {/* Botón secundario - Solo en mobile para llamar */}
              <a
                href="tel:+573044386208"
                className="sm:hidden group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 border-2"
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{lang === 'es' ? 'Llamar Ahora' : 'Call Now'}</span>
              </a>
            </div>
          </div>

          {/* Imagen mejorada */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4"
               style={{ borderColor: 'rgba(107, 165, 165, 0.2)' }}>
            <Image
              src={treatment.image}
              alt={`${langContent.title} - Dr. James Madrid, Medicina Deportiva Medellín`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay decorativo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

