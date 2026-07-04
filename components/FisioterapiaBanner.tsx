'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bannerImage from '@/assets/images_fisioterapia/galeria/cover-estiramiento-pierna.jpg';

interface FisioterapiaBannerProps {
  dictionary: any;
  locale: string;
}

export default function FisioterapiaBanner({ dictionary, locale }: FisioterapiaBannerProps) {
  const content = dictionary.fisioterapia?.banner;
  const detailedContent = dictionary.fisioterapia?.content;

  if (!content) return null;

  return (
    <div className="mt-24 lg:mt-32 mb-24 lg:mb-32 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column: High-Impact Text Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest border border-teal-100">
             <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
             {locale === 'es' ? 'Nueva especialidad' : 'New specialty'}
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-950">
            {content.title}
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            {content.subtitle}
          </p>

          {/* Key Benefits Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
             {detailedContent?.benefits?.slice(0, 4).map((benefit: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                   </div>
                   <span className="text-gray-700 font-semibold text-sm">{benefit}</span>
                </div>
             ))}
          </div>

          <div className="pt-8">
            <Link 
              href={`/${locale}/fisioterapia`}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#283838] text-white text-lg font-bold rounded-xl shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              {content.cta}
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column: High-Impact Image with Tags */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
                src={bannerImage}
                alt={content.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
            />
            
            {/* Brand-Consistent Tags - Diagonally Positioned and Inverted */}
            <div className="absolute top-6 left-6">
               <div className="px-5 py-2.5 rounded-full bg-white text-[#283838] text-[11px] font-bold uppercase tracking-widest shadow-lg border border-gray-100">
                  {locale === 'es' ? 'Nuevo Especialista en Fisioterapia' : 'New Physiotherapy Specialist'}
               </div>
            </div>

            <div className="absolute bottom-6 right-6">
               <div className="px-5 py-2.5 rounded-full text-white text-[11px] font-bold uppercase tracking-widest shadow-lg"
                    style={{ backgroundColor: '#6ba5a5' }}>
                  {locale === 'es' ? 'Atención Médica Avanzada' : 'Advanced Medical Care'}
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
