'use client';

import { useCallback, useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';

import ejercicioPelotaDinamico from '@/assets/images_fisioterapia/galeria/ejercicio-pelota-dinamico.jpg';
import terapiaUltrasonidoVentana from '@/assets/images_fisioterapia/galeria/terapia-ultrasonido-ventana.jpg';
import configuracionElectroestimulacion from '@/assets/images_fisioterapia/galeria/configuracion-electroestimulacion.jpg';
import electroestimulacionRodillaDetalle from '@/assets/images_fisioterapia/galeria/electroestimulacion-rodilla-detalle.jpg';
import terapiaAntifazRelajacion from '@/assets/images_fisioterapia/galeria/terapia-antifaz-relajacion.jpg';
import sueroterapiaRelajacion from '@/assets/images_fisioterapia/galeria/sueroterapia-relajacion.jpg';
import terapiaLaserRodilla from '@/assets/images_fisioterapia/galeria/terapia-laser-rodilla.jpg';
import sueroterapiaPreparacion from '@/assets/images_fisioterapia/galeria/sueroterapia-preparacion.jpg';
import estiramientoPiernaDetalle from '@/assets/images_fisioterapia/galeria/estiramiento-pierna-detalle.jpg';
import ejercicioPelotaPiesDetalle from '@/assets/images_fisioterapia/galeria/ejercicio-pelota-pies-detalle.jpg';

interface GalleryItem {
  src: StaticImageData;
  alt: { es: string; en: string };
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: terapiaUltrasonidoVentana,
    alt: { es: 'Terapia con ultrasonido en consultorio', en: 'Ultrasound therapy session' },
  },
  {
    src: ejercicioPelotaDinamico,
    alt: { es: 'Ejercicio de movilidad asistido con balón', en: 'Assisted mobility exercise with ball' },
  },
  {
    src: electroestimulacionRodillaDetalle,
    alt: { es: 'Electrodos de electroestimulación en rodilla', en: 'Electrostimulation electrodes on knee' },
  },
  {
    src: terapiaAntifazRelajacion,
    alt: { es: 'Preparación de terapia de relajación', en: 'Relaxation therapy setup' },
  },
  {
    src: configuracionElectroestimulacion,
    alt: { es: 'Configuración de electroestimulación', en: 'Electrostimulation configuration' },
  },
  {
    src: terapiaLaserRodilla,
    alt: { es: 'Terapia láser aplicada en rodilla', en: 'Laser therapy applied to knee' },
  },
  {
    src: sueroterapiaRelajacion,
    alt: { es: 'Paciente en sesión de sueroterapia', en: 'Patient during serum therapy session' },
  },
  {
    src: estiramientoPiernaDetalle,
    alt: { es: 'Estiramiento asistido de pierna', en: 'Assisted leg stretch' },
  },
  {
    src: sueroterapiaPreparacion,
    alt: { es: 'Preparación de sueroterapia intravenosa', en: 'Intravenous serum therapy preparation' },
  },
  {
    src: ejercicioPelotaPiesDetalle,
    alt: { es: 'Ejercicio de propiocepción con balón', en: 'Proprioception exercise with ball' },
  },
];

interface FisioterapiaGalleryProps {
  locale: string;
}

export default function FisioterapiaGallery({ locale }: FisioterapiaGalleryProps) {
  const isEs = locale === 'es';
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % GALLERY_ITEMS.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  const activeItem = activeIndex !== null ? GALLERY_ITEMS[activeIndex] : null;

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold">
            <Camera className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">
              {isEs ? 'Nuestro Consultorio' : 'Our Clinic'}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold !text-[#111818]">
            {isEs ? 'Fisioterapia en Acción' : 'Physiotherapy in Action'}
          </h2>
          <p className="text-xl !text-gray-600 font-light">
            {isEs
              ? 'Un vistazo real a nuestras sesiones de rehabilitación y recuperación física.'
              : 'A real look inside our rehabilitation and physical recovery sessions.'}
          </p>
        </div>

        {/* Masonry layout: each photo keeps its natural aspect ratio, no forced cropping */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={isEs ? 'Ver imagen completa' : 'View full image'}
              className="group relative mb-3 md:mb-4 w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg break-inside-avoid cursor-zoom-in block"
            >
              <Image
                src={item.src}
                alt={isEs ? item.alt.es : item.alt.en}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111818]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label={isEs ? 'Cerrar' : 'Close'}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label={isEs ? 'Anterior' : 'Previous'}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label={isEs ? 'Siguiente' : 'Next'}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeItem.src}
              alt={isEs ? activeItem.alt.es : activeItem.alt.en}
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-xl md:rounded-2xl shadow-2xl"
              priority
            />
          </div>

          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tracking-wide">
            {(activeIndex ?? 0) + 1} / {GALLERY_ITEMS.length}
          </div>
        </div>
      )}
    </section>
  );
}
