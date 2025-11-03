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
};

type TestimonialText = BaseTestimonial & {
  kind: 'text';
  quote: string;
  result: string;
};

type Testimonial = TestimonialVideo | TestimonialText;

const VIDEOS: TestimonialVideo[] = [
  { id: 1, kind: 'video', name: 'Simon Gallego', condition: 'Lesión deportiva', rating: 5, src: '/assets/videos/testimonial_simon_1.mp4', poster: '/assets/images/testimonial_simon_1.jpg', language: 'es', typeLabel: 'Lesión hombro' },
  { id: 2, kind: 'video', name: 'Beatriz', condition: 'Plasma rico en plaquetas', rating: 5, src: '/assets/videos/testimonial_beatriz_1.mp4', poster: '/assets/images/testimonial_beatriz_1.jpg', language: 'es', typeLabel: 'Dolor rodilla' },
  { id: 3, kind: 'video', name: 'Lina', condition: 'PRP y suero terapia', rating: 5, src: '/assets/videos/testimonial_lina_1.mp4', poster: '/assets/images/testimonial_lina_1.jpg', language: 'es', typeLabel: 'Dolor arquiculaciones' },
  { id: 4, kind: 'video', name: 'Emmanuel Mendoza', condition: 'Acido hialurónico, PRP y bioregulador', rating: 5, src: '/assets/videos/testimonial_buffalo_1.mp4', poster: '/assets/images/testimonial_buffalo_1.jpg', language: 'es', typeLabel: 'Dolor hombro - Deportista de alto rendimiento' },
  { id: 5, kind: 'video', name: 'Camila', condition: 'Intervenciones varias', rating: 5, src: '/assets/videos/testimonial_camila_1.mp4', poster: '/assets/images/testimonial_camila_1.jpg', language: 'es', typeLabel: 'Boxeadora de alto rendimiento' },
  { id: 6, kind: 'video', name: 'Jane', condition: 'Platelet-rich plasma', rating: 5, src: '/assets/videos/testimonial_jane_1.mp4', poster: '/assets/images/testimonial_jane_1.jpg', language: 'en', typeLabel: 'Pain in several joints' },
  { id: 7, kind: 'video', name: 'Bruce', condition: 'Platelet-rich plasma', rating: 5, src: '/assets/videos/testimonial_bruce_1.mp4', poster: '/assets/images/testimonial_bruce_1.jpg', language: 'en', typeLabel: 'Osteoarthritis - Knee pain' },
  { id: 8, kind: 'video', name: 'Martin Higuita', condition: 'Plasma rico en plaquetas y exosomas', rating: 5, src: '/assets/videos/testimonial_martin_1.mp4', poster: '/assets/images/testimonial_martin_1.jpg', language: 'es', typeLabel: 'Boxeador - Lesión ligamento' },
  { id: 9, kind: 'video', name: 'Christopher', condition: 'Platelet-rich plasma', rating: 5, src: '/assets/videos/testimonial_cristofer_1.mp4', poster: '/assets/images/testimonial_cristofer_1.jpg', language: 'en', typeLabel: 'Right sacroiliitis' },
  { id: 10, kind: 'video', name: 'John', condition: 'Platelet-rich plasma', rating: 5, src: '/assets/videos/testimonial_paciemte_eeuu_1.mp4', poster: '/assets/images/testimonial_paciemte_eeuu_1.jpg', language: 'en', typeLabel: 'Pain in several joints' },
  { id: 11, kind: 'video', name: 'Nalia', condition: 'Celulas madre y plasma rico en plaquetas', rating: 5, src: '/assets/videos/testimonial_natalia_1.mp4', poster: '/assets/images/testimonial_natalia_1.jpg', language: 'es', typeLabel: 'Dolor en la rodilla' },
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

  return (
    <section id="testimonios" className="section-padding bg-white overflow-hidden">
      {/* Header centrado */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 mb-14">
        <HeaderBlock title={dictionary.testimonials.title} subtitle={dictionary.testimonials.subtitle} />
      </div>

      {/* Desktop: dos filas auto-rotando - ancho completo */}
      <div className="hidden lg:block space-y-10">
        <AutoMarquee items={rowA} direction="left" onOpenVideo={(v) => setModalVideo(v)} />
        <AutoMarquee items={rowB} direction="right" onOpenVideo={(v) => setModalVideo(v)} />
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
              <TestimonialCard item={item} onOpenVideo={(v) => setModalVideo(v)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA - Próximo caso de éxito */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 mt-16">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 border border-gray-100">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'es' 
                ? '¿Quieres ser nuestro próximo caso de éxito?' 
                : 'Want to be our next success story?'}
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {locale === 'es'
                ? 'Únete a los miles de pacientes que han recuperado su movilidad con nosotros'
                : 'Join thousands of patients who have recovered their mobility with us'}
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {locale === 'es' ? 'Comenzar mi Recuperación' : 'Start My Recovery'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
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

function AutoMarquee({ items, direction, onOpenVideo }: { items: Testimonial[]; direction: 'left' | 'right'; onOpenVideo: (v: TestimonialVideo) => void }) {
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
          <TestimonialCard key={`${item.id}-${idx}`} item={item} onOpenVideo={onOpenVideo} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ item, onOpenVideo }: { item: Testimonial; onOpenVideo: (v: TestimonialVideo) => void }) {
  return item.kind === 'video' ? <VideoCard item={item} onOpen={() => onOpenVideo(item)} /> : <TextCard item={item} />;
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

function VideoCard({ item, onOpen }: { item: TestimonialVideo; onOpen: () => void }) {
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
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
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
          />
        ) : (
          <Image
            src={poster}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 320px, 380px"
          />
        )}
        {/* overlay gradient bottom for title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        {/* badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10 pointer-events-none">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-900">{item.typeLabel}</span>
        </div>
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="px-2 py-1 text-xs font-bold rounded-full bg-black/70 text-white">{item.language.toUpperCase()}</span>
        </div>
        {/* play button - solo este es clickeable */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
            aria-label="Ver video"
            className="w-16 h-16 md:w-20 md:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer pointer-events-auto"
          >
            <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        {/* bottom text */}
        <div className="absolute bottom-4 left-4 right-4 z-10 text-white pointer-events-none">
          <div className="font-semibold">{item.name}</div>
          <div className="text-sm opacity-90">{item.condition}</div>
        </div>
      </div>
    </div>
  );
}

function TextCard({ item }: { item: TestimonialText }) {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white p-6">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-semibold">
          {item.name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-900 leading-tight">{item.name}</div>
          <div className="text-xs text-gray-600 leading-tight">{item.condition}</div>
        </div>
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-black/70 text-white">{item.language.toUpperCase()}</span>
      </div>
      <Stars rating={item.rating} />
      <div className="mt-3">
        <svg className="w-6 h-6 text-primary/80" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.17 6A5.17 5.17 0 002 11.17V20h6v-8H5.17A3.17 3.17 0 018.34 8H7.17zM16.83 6A5.17 5.17 0 0011.66 11.17V20h6v-8h-2.83A3.17 3.17 0 0117.66 8h-.83z" />
        </svg>
        <p className="text-gray-900 leading-relaxed mt-3">{item.quote}</p>
      </div>
      <div className="mt-5">
        <span className="inline-block px-3 py-2 text-xs font-semibold rounded-xl bg-accent-cool/10 text-gray-900">
          {`Resultado: ${item.result}`}
        </span>
      </div>
    </div>
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
        />
        
        {/* Botón cerrar */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-gray-900 rounded-full w-12 h-12 shadow-2xl flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Cerrar video"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
