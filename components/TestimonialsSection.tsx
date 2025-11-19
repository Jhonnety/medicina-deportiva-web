'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import type { Dictionary } from '@/lib/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface TestimonialsSectionProps {
  dictionary: Dictionary;
  locale: string;
}

type Language = 'es' | 'en';

type BaseTestimonial = {
  id: number;
  name: string;
  condition: string;
  rating: 1 | 2 | 3 | 4 | 5;
  language: Language;
  typeLabel: string;
};

type TestimonialVideo = BaseTestimonial & {
  kind: 'video';
  src: string;
  poster?: string;
  instagramUrl?: string;
};

type TestimonialText = BaseTestimonial & {
  kind: 'text';
  quote: string;
  result: string;
};

type Testimonial = TestimonialVideo | TestimonialText;

const VIDEOS: TestimonialVideo[] = [
  { id: 1, kind: 'video', name: 'Simon Gallego', condition: 'Lesión deportiva', rating: 5, src: '/assets/videos/testimonial_simon_1.mp4', poster: '/assets/images/testimonial_simon_1.jpg', language: 'es', typeLabel: 'Deportista de alto rendimiento', instagramUrl: 'https://www.instagram.com/p/DEV15UfxIe-' }, // typeLabel: 'Lesión hombro'
  { id: 2, kind: 'video', name: 'Beatriz', condition: 'Plasma rico en plaquetas', rating: 5, src: '/assets/videos/testimonial_beatriz_1.mp4', poster: '/assets/images/testimonial_beatriz_1.jpg', language: 'es', typeLabel: 'Dolor rodilla', instagramUrl: 'https://www.instagram.com/p/DEx_3fRxf8o' },
  { id: 3, kind: 'video', name: 'Lina', condition: 'PRP y suero terapia', rating: 5, src: '/assets/videos/testimonial_lina_1.mp4', poster: '/assets/images/testimonial_lina_1.jpg', language: 'es', typeLabel: 'Dolor arquiculaciones', instagramUrl: 'https://www.instagram.com/p/DFGjDNtxlHC' },
  { id: 4, kind: 'video', name: 'Emmanuel Mendoza', condition: 'Acido hialurónico, PRP y bioregulador', rating: 5, src: '/assets/videos/testimonial_buffalo_1.mp4', poster: '/assets/images/testimonial_buffalo_1.jpg', language: 'es', typeLabel: 'Deportista de alto rendimiento', instagramUrl: 'https://www.instagram.com/p/DHW-2iDxzqD' }, // typeLabel: 'Dolor hombro - Deportista de alto rendimiento'
  { id: 5, kind: 'video', name: 'Camila', condition: 'Intervenciones varias', rating: 5, src: '/assets/videos/testimonial_camila_1.mp4', poster: '/assets/images/testimonial_camila_1.jpg', language: 'es', typeLabel: 'Deportista de alto rendimiento', instagramUrl: 'https://www.instagram.com/p/DOw5KjmkW2k' },
  { id: 6, kind: 'video', name: 'Jane', condition: 'Platelet-rich plasma', rating: 5, src: '/assets/videos/testimonial_jane_1.mp4', poster: '/assets/images/testimonial_jane_1.jpg', language: 'en', typeLabel: 'Pain in several joints', instagramUrl: 'https://www.instagram.com/p/Czbzjy6xZ2Z' },
  { id: 7, kind: 'video', name: 'Bruce', condition: 'Platelet-rich plasma', rating: 5, src: '/assets/videos/testimonial_bruce_1.mp4', poster: '/assets/images/testimonial_bruce_1.jpg', language: 'en', typeLabel: 'Osteoarthritis - Knee pain', instagramUrl: 'https://www.instagram.com/p/CzpCWVTxgUH' },
  { id: 8, kind: 'video', name: 'Martin Higuita', condition: 'Plasma rico en plaquetas y exosomas', rating: 5, src: '/assets/videos/testimonial_martin_1.mp4', poster: '/assets/images/testimonial_martin_1.jpg', language: 'es', typeLabel: 'Deportista de alto rendimiento', instagramUrl: 'https://www.instagram.com/p/CzE9_MLRRn5' },
  { id: 9, kind: 'video', name: 'Christopher', condition: 'Platelet-rich plasma', rating: 5, src: '/assets/videos/testimonial_cristofer_1.mp4', poster: '/assets/images/testimonial_cristofer_1.jpg', language: 'en', typeLabel: 'Right sacroiliitis', instagramUrl: 'https://www.instagram.com/p/CyMlbW0RixK' },
  { id: 10, kind: 'video', name: 'James', condition: 'Platelet-rich plasma', rating: 5, src: '/assets/videos/testimonial_paciemte_eeuu_1.mp4', poster: '/assets/images/testimonial_paciemte_eeuu_1.jpg', language: 'en', typeLabel: 'Pain in several joints', instagramUrl: 'https://www.instagram.com/p/C4BiC01xj-Z' },
  { id: 11, kind: 'video', name: 'Nalia', condition: 'Celulas madre y plasma rico en plaquetas', rating: 5, src: '/assets/videos/testimonial_natalia_1.mp4', poster: '/assets/images/testimonial_natalia_1.jpg', language: 'es', typeLabel: 'Dolor en la rodilla', instagramUrl: 'https://www.instagram.com/p/DE7LbYWRkKo' },
];

const TEXTS: TestimonialText[] = [
  { id: 101, kind: 'text', name: 'Nelly Show', condition: 'Hip pain for 13 years', rating: 5, language: 'en', typeLabel: 'Stem cells', quote: 'After 13 years of hip pain and visiting many doctors without success, Dr. Madrid\'s stem cell treatment finally gave me relief. He is the most caring and knowledgeable professional I\'ve met!', result: '13 years of pain resolved' },
  { id: 102, kind: 'text', name: 'Blanca Marin', condition: 'Tratamiento médico especializado', rating: 5, language: 'es', typeLabel: 'Atención médica', quote: 'Es un excelente médico, trata muy bien a los pacientes y acompañantes, no tengo palabras para describirlo... adorable.', result: 'Excelente atención médica' },
  { id: 103, kind: 'text', name: 'Diana Carolina', condition: 'Atención integral', rating: 5, language: 'es', typeLabel: 'Medicina deportiva', quote: 'Excelente profesional y excepcional ser humano. Todos merecemos un Doctor como él en nuestras vidas. Una persona que te brinda atención plena. Lo recomiendo a ojos cerrados.', result: 'Atención plena y profesional' },
  { id: 104, kind: 'text', name: 'Aroni', condition: 'Tratamiento especializado', rating: 5, language: 'es', typeLabel: 'Medicina regenerativa', quote: 'Excelente profesional, tiene la pedagogía para la enseñanza significativa a los pacientes, buena atención, maneja un conocimiento previo recomendado.', result: 'Excelente pedagogía y atención' },
  { id: 105, kind: 'text', name: 'Viviana Via', condition: 'Consulta médica', rating: 5, language: 'es', typeLabel: 'Atención médica', quote: 'Excelente profesional, amable, dedicado, explicaciones muy claras, muestra interés, muy receptivo. Un 10.', result: 'Explicaciones claras y dedicación total' },
];

export default function TestimonialsSection({ dictionary, locale }: TestimonialsSectionProps) {
  const all: Testimonial[] = useMemo(() => [...VIDEOS, ...TEXTS], []);
  const [modalVideo, setModalVideo] = useState<TestimonialVideo | null>(null);

  // Priorizar idioma actual
  const ordered = useMemo(() => {
    const lang = (locale === 'en' ? 'en' : 'es') as Language;
    return [...all].sort((a, b) => (a.language === lang ? 0 : 1) - (b.language === lang ? 0 : 1));
  }, [all, locale]);

  // Dividir en dos filas para desktop
  const midpoint = Math.ceil(ordered.length / 2);
  const rowA = ordered.slice(0, midpoint);
  const rowB = ordered.slice(midpoint);

  // Schema.org JSON-LD para SEO
  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Dr. James Madrid - Medicina Deportiva',
    url: 'https://drjamesmadrid.com',
    image: 'https://drjamesmadrid.com/assets/images/dc_james_1.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Torre Medical - El Poblado',
      addressLocality: 'Medellín',
      addressRegion: 'Antioquia',
      postalCode: '050021',
      addressCountry: 'CO'
    },
    telephone: '+573044386208',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: all.length.toString(),
      bestRating: '5',
      worstRating: '5'
    },
    review: all.map((testimonial) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating.toString(),
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: testimonial.kind === 'text' 
        ? testimonial.quote 
        : `${testimonial.condition} - ${testimonial.typeLabel}`,
      itemReviewed: {
        '@type': 'MedicalProcedure',
        name: testimonial.condition
      }
    }))
  };

  return (
    <section id="testimonios" className="section-padding bg-white overflow-hidden">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      {/* Header centrado */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 mb-14">
        <HeaderBlock
          title={dictionary?.testimonials?.title ?? (locale === 'es' ? 'Historias reales de recuperación' : 'Real recovery stories')}
          subtitle={dictionary?.testimonials?.subtitle ?? (locale === 'es' ? 'Lo que dicen nuestros pacientes' : 'What our patients say')}
        />
      </div>

      {/* Desktop: dos filas auto-rotando - ancho completo */}
      <div className="hidden lg:block space-y-10">
        <AutoMarquee items={rowA} direction="left" onOpenVideo={(v) => setModalVideo(v)} locale={locale} />
        <AutoMarquee items={rowB} direction="right" onOpenVideo={(v) => setModalVideo(v)} locale={locale} />
      </div>

      {/* Mobile: Swiper optimizado */}
      <div className="lg:hidden px-6 md:px-8">
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          speed={800}
          className="testimonials-swiper !pb-14"
        >
          {[
            // Primero videos del mismo idioma
            ...ordered.filter(t => t.kind === 'video' && t.language === (locale === 'en' ? 'en' : 'es')),
            // Luego los demás
            ...ordered.filter(t => !(t.kind === 'video' && t.language === (locale === 'en' ? 'en' : 'es'))),
          ].map(item => (
            <SwiperSlide key={`m-${item.id}`} className="!w-[320px] md:!w-[380px]">
              <TestimonialCard item={item} onOpenVideo={(v) => setModalVideo(v)} locale={locale} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA - Próximo caso de éxito */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 mt-20">
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
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#6ba5a5' }}>
                {locale === 'es' ? 'Caso de Éxito' : 'Success Story'}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 !text-white leading-tight">
              {locale === 'es' 
                ? '¿Quieres ser nuestro próximo caso de éxito?' 
                : 'Want to be our next success story?'}
            </h3>
            
            <p className="text-lg md:text-xl !text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {locale === 'es'
                ? 'Forma parte de quienes ya  recuperaron su bienestar con nuestros tratamientos médicos avanzados.'
                : 'Be part of those who have already recovered their well-being with our advanced medical treatments.'}
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
                <span>{locale === 'es' ? 'Comenzar mi Recuperación' : 'Start My Recovery'}</span>
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

      {/* Modal de video */}
      {modalVideo && (
        <VideoModal
          video={modalVideo}
          onClose={() => setModalVideo(null)}
        />
      )}
    </section>
  );
}

function HeaderBlock({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      <div className="inline-flex items-center gap-2 badge badge-cool text-gray-900 px-5 py-2.5 rounded-full mb-6">
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-lg md:text-xl text-gray-700">{subtitle}</p>
    </div>
  );
}

function AutoMarquee({ items, direction, onOpenVideo, locale }: { items: Testimonial[]; direction: 'left' | 'right'; onOpenVideo: (v: TestimonialVideo) => void; locale: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(direction === 'left' ? 0 : 0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPositionRef = useRef(0);
  
  // Triplicar items para bucle suave sin saltos
  const infiniteItems = [...items, ...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Inicializar posición solo la primera vez
    if (positionRef.current === 0 && direction === 'right') {
      const setWidth = track.scrollWidth / 4;
      positionRef.current = -setWidth;
    }

    if (isPaused || isDraggingRef.current) return;

    const speed = direction === 'left' ? -0.5 : 0.5;
    let animationId: number;

    const animate = () => {
      positionRef.current += speed;
      
      // Calcular el ancho de un set (1/4 del total)
      const setWidth = track.scrollWidth / 4;
      
      if (direction === 'left') {
        // Si se movió un set completo hacia la izquierda, reiniciar
        if (positionRef.current <= -setWidth) {
          positionRef.current = 0;
        }
      } else {
        // Si se movió un set completo hacia la derecha, reiniciar
        if (positionRef.current >= 0) {
          positionRef.current = -setWidth;
        }
      }
      
      track.style.transform = `translateX(${positionRef.current}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction, isPaused]);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startPositionRef.current = positionRef.current;
    setIsPaused(true);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    
    const deltaX = e.clientX - startXRef.current;
    const newPosition = startPositionRef.current + deltaX;
    
    // Aplicar límites del bucle
    const setWidth = trackRef.current.scrollWidth / 4;
    
    if (newPosition <= -setWidth) {
      positionRef.current = newPosition + setWidth;
      startPositionRef.current = positionRef.current;
      startXRef.current = e.clientX;
    } else if (newPosition >= 0) {
      positionRef.current = newPosition - setWidth;
      startPositionRef.current = positionRef.current;
      startXRef.current = e.clientX;
    } else {
      positionRef.current = newPosition;
    }
    
    trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grab';
      }
    }
    setIsPaused(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full cursor-grab active:cursor-grabbing select-none py-4"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsPaused(true)}
    >
      <div
        ref={trackRef}
        className="flex gap-6 will-change-transform"
      >
        {infiniteItems.map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} item={item} onOpenVideo={onOpenVideo} locale={locale} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ item, onOpenVideo, locale }: { item: Testimonial; onOpenVideo: (v: TestimonialVideo) => void; locale: string }) {
  return item.kind === 'video' ? <VideoCard item={item} onOpen={() => onOpenVideo(item)} locale={locale} /> : <TextCard item={item} />;
}

function Stars({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function VideoCard({ item, onOpen, locale }: { item: TestimonialVideo; onOpen: () => void; locale: string }) {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    const handleLoaded = () => {
      try {
        // Seek a bit to generate a frame as thumbnail
        v.currentTime = Math.min(0.5, (v.duration || 1) - 0.1);
        v.pause();
      } catch {
        // ignore
      }
    };
    v.addEventListener('loadedmetadata', handleLoaded);
    return () => v.removeEventListener('loadedmetadata', handleLoaded);
  }, []);

  const poster = item.poster || '/assets/images/dc_james_6.jpg';
  const altText = `Testimonio en video de ${item.name} - ${item.typeLabel} - Tratamiento: ${item.condition} - Dr. James Madrid Medicina Deportiva Medellín`;
  
  const isHighPerformance = item.typeLabel === 'Deportista de alto rendimiento';
  const labelText = isHighPerformance && locale === 'en' ? 'High Performance Athlete' : item.typeLabel;
  const labelStyle = isHighPerformance
    ? "px-2.5 py-1 text-xs font-bold rounded-full bg-[#212e2e] text-white shadow-md"
    : "px-2.5 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-900";

  return (
    <article 
      className="flex-shrink-0 w-[320px] md:w-[380px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="relative aspect-square">
        {!broken ? (
          <video
            ref={vidRef}
            src={item.src}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            preload="metadata"
            poster={poster}
            onError={() => setBroken(true)}
            aria-label={altText}
            title={altText}
          />
        ) : (
          <Image
            src={poster}
            alt={altText}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 320px, 380px"
            title={`Testimonio de ${item.name} sobre ${item.condition}`}
          />
        )}
        {/* overlay gradient bottom for title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        
        {/* badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <span className={labelStyle}>
            {labelText}
          </span>
          {item.instagramUrl && (
            <a
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
              aria-label={`Ver testimonio de ${item.name} en Instagram`}
              title="Ver en Instagram"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          )}
        </div>
        
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="px-2 py-1 text-xs font-bold rounded-full bg-black/70 text-white">
            {item.language.toUpperCase()}
          </span>
        </div>
        
        {/* play button - solo este es clickeable */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
            aria-label={`Reproducir testimonio en video de ${item.name} sobre ${item.condition}`}
            title={`Ver testimonio completo de ${item.name}`}
            className="w-16 h-16 md:w-20 md:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer pointer-events-auto"
          >
            <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        
        {/* bottom text */}
        <div className="absolute bottom-4 left-4 right-4 z-10 text-white pointer-events-none">
          <div className="font-semibold" itemProp="author">{item.name}</div>
          <div className="text-sm opacity-90" itemProp="reviewBody">{item.condition}</div>
          <meta itemProp="ratingValue" content={item.rating.toString()} />
        </div>
      </div>
    </article>
  );
}

function TextCard({ item }: { item: TestimonialText }) {
  return (
    <article 
      className="flex-shrink-0 w-[320px] md:w-[380px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white p-6"
      itemScope
      itemType="https://schema.org/Review"
      aria-label={`Testimonio escrito de ${item.name} sobre ${item.condition}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div 
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-semibold"
          aria-hidden="true"
        >
          {item.name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-900 leading-tight" itemProp="author" itemScope itemType="https://schema.org/Person">
            <span itemProp="name">{item.name}</span>
          </div>
          <div className="text-xs text-gray-600 leading-tight">{item.condition}</div>
        </div>
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-black/70 text-white" aria-label={`Idioma: ${item.language === 'es' ? 'Español' : 'English'}`}>
          {item.language.toUpperCase()}
        </span>
      </div>
      
      <div aria-label={`Calificación: ${item.rating} de 5 estrellas`}>
        <Stars rating={item.rating} />
        <meta itemProp="ratingValue" content={item.rating.toString()} />
      </div>
      
      <div className="mt-3">
        <svg className="w-6 h-6 text-primary/80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.17 6A5.17 5.17 0 002 11.17V20h6v-8H5.17A3.17 3.17 0 018.34 8H7.17zM16.83 6A5.17 5.17 0 0011.66 11.17V20h6v-8h-2.83A3.17 3.17 0 0117.66 8h-.83z" />
        </svg>
        <p className="text-gray-900 leading-relaxed mt-3" itemProp="reviewBody">
          {item.quote}
        </p>
      </div>
      
      <div className="mt-5">
        <span className="inline-block px-3 py-2 text-xs font-semibold rounded-xl bg-accent-cool/10 text-gray-900">
          {item.language === 'es' ? 'Resultado: ' : 'Result: '}{item.result}
        </span>
      </div>
      
      <meta itemProp="itemReviewed" itemScope itemType="https://schema.org/MedicalProcedure" content={item.condition} />
    </article>
  );
}

function VideoModal({ video, onClose }: { video: TestimonialVideo; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Cerrar con Escape
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    // Reproducir el video cuando el modal se abre
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log('Autoplay bloqueado:', err);
        });
      }
    }, 100);

    return () => {
      window.removeEventListener('keydown', onKey);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Reproduciendo testimonio de ${video.name}`}
    >
      <div 
        className="relative w-full max-w-6xl" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video */}
        <video
          ref={videoRef}
          src={video.src}
          className="w-full rounded-lg"
          controls
          playsInline
          style={{ maxHeight: '90vh' }}
          aria-label={`Testimonio en video completo de ${video.name} - ${video.condition} - ${video.typeLabel}`}
          title={`Testimonio de ${video.name}: ${video.condition}`}
        />
        
        {/* Botón cerrar */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-gray-900 rounded-full w-12 h-12 shadow-2xl flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label={`Cerrar video de testimonio de ${video.name}`}
          title="Cerrar video (ESC)"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
