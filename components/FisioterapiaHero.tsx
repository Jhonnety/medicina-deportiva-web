'use client';

import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/images_fisioterapia/6_vertical.jpeg';

interface FisioterapiaHeroProps {
  dictionary: any;
  locale: string;
}

export default function FisioterapiaHero({ dictionary, locale }: FisioterapiaHeroProps) {
  const content = dictionary.fisioterapia?.hero;

  if (!content) return null;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-teal-900 overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={content.title}
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-overlay"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            {content.title}
            <span className="block text-teal-300 mt-2">{content.subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-50 leading-relaxed max-w-3xl mx-auto font-light">
            {content.description}
          </p>
        </div>
      </div>
      
      {/* Scroll indicator overlay */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-white text-sm uppercase tracking-widest mb-2 opacity-80 font-medium">
           {locale === 'es' ? 'Descubre más' : 'Discover more'}
        </span>
        <svg className="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
