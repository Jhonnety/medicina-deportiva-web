'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import type { Dictionary } from '@/lib/types';

interface TestimonialsSectionProps {
  dictionary: Dictionary;
}

const testimonials = [
  {
    id: 1,
    name: 'María González',
    condition: 'Artrosis de Rodilla',
    quote: 'Después de años de dolor, el Dr. Madrid me devolvió la movilidad. Su tratamiento con PRP fue increíble.',
    rating: 5,
    image: '/assets/images/dc_james_7.jpg',
    type: 'video' as const,
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    condition: 'Lesión de Hombro',
    quote: 'Volví a practicar tenis después de mi lesión gracias al tratamiento del Dr. Madrid.',
    rating: 5,
    image: '/assets/images/dc_james_8.jpg',
    type: 'video' as const,
  },
  {
    id: 3,
    name: 'Ana Martínez',
    condition: 'Dolor Crónico',
    quote: 'La proloterapia cambió mi vida. Ya no necesito analgésicos constantemente.',
    rating: 5,
    image: '/assets/images/dc_james_10.jpg',
    type: 'text' as const,
  },
  {
    id: 4,
    name: 'Jorge Silva',
    condition: 'Lesión Deportiva',
    quote: 'Tratamiento profesional y resultados excepcionales. Altamente recomendado.',
    rating: 5,
    image: '/assets/images/dc_james_11.jpg',
    type: 'video' as const,
  },
  {
    id: 5,
    name: 'Laura Pérez',
    condition: 'Dolor de Espalda',
    quote: 'Después de intentar muchos tratamientos, finalmente encontré alivio con el Dr. Madrid.',
    rating: 5,
    image: '/assets/images/dc_james_12.jpg',
    type: 'text' as const,
  },
  {
    id: 6,
    name: 'Roberto Díaz',
    condition: 'Rehabilitación',
    quote: 'El seguimiento post-tratamiento fue excelente. Me siento mejor que nunca.',
    rating: 5,
    image: '/assets/images/dc_james_13.jpg',
    type: 'video' as const,
  },
];

export default function TestimonialsSection({ dictionary }: TestimonialsSectionProps) {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll1 = scrollRef1.current;
    const scroll2 = scrollRef2.current;

    if (!scroll1 || !scroll2) return;

    let animationId: number;
    let position1 = 0;
    let position2 = 0;

    const animate = () => {
      position1 -= 0.5;
      position2 += 0.5;

      if (Math.abs(position1) >= scroll1.scrollWidth / 2) {
        position1 = 0;
      }
      if (position2 >= scroll2.scrollWidth / 2) {
        position2 = 0;
      }

      scroll1.style.transform = `translateX(${position1}px)`;
      scroll2.style.transform = `translateX(${position2}px)`;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  const firstRow = [...testimonials, ...testimonials];
  const secondRow = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

  return (
    <section id="testimonios" className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.testimonials.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {dictionary.testimonials.subtitle}
          </p>
        </div>
      </div>

      {/* First Row - Scrolling Right to Left */}
      <div className="mb-8 scroll-container">
        <div ref={scrollRef1} className="flex gap-6 will-change-transform">
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Second Row - Scrolling Left to Right */}
      <div className="scroll-container">
        <div ref={scrollRef2} className="flex gap-6 will-change-transform">
          {secondRow.map((testimonial, index) => (
            <TestimonialCard key={`row2-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[380px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      {/* Image/Video Container */}
      <div className="relative w-full aspect-video media-overlay">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="380px"
        />
        {testimonial.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <p className="text-gray-700 mb-5 line-clamp-3 leading-relaxed">
          <span className="text-primary font-bold text-2xl">"</span>{testimonial.quote}<span className="text-primary font-bold text-2xl">"</span>
        </p>

        {/* Author */}
        <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-gray-900">{testimonial.name}</div>
            <div className="text-sm text-gray-600">{testimonial.condition}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
