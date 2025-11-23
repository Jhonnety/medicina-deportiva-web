'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { getWhatsAppLink } from '@/lib/constants/contact';

interface Symptom {
  name: string;
  condition: string;
  image: string;
}

interface SymptomsShowcaseProps {
  symptoms: Symptom[];
  lang: string;
}

export default function SymptomsShowcase({ symptoms, lang }: SymptomsShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Ícono genérico médico para todos los síntomas
  const MedicalIcon = () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(107, 165, 165, 0.1)', border: '2px solid rgba(107, 165, 165, 0.2)' }}>
            <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-bold" style={{ color: '#6ba5a5' }}>
              {lang === 'es' ? 'SÍNTOMAS TRATABLES' : 'TREATABLE SYMPTOMS'}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: '#182121' }}>
            {lang === 'es' ? '¿Presentas alguno de ' : 'Do you have any of '}
            <span style={{ color: '#6ba5a5' }}>
              {lang === 'es' ? 'estos síntomas' : 'these symptoms'}
            </span>
            ?
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            {lang === 'es'
              ? 'Este tratamiento está diseñado específicamente para aliviar estos síntomas'
              : 'This treatment is specifically designed to relieve these symptoms'}
          </p>
        </div>

        {/* Grid de Síntomas - Responsive */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Carrusel de síntomas con imagen */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={14}
              slidesPerView={1.05}
              centeredSlides
              pagination={{ clickable: true, dynamicBullets: true }}
              className="!pb-10"
            >
              {symptoms.map((symptom, index) => (
                <SwiperSlide key={`s-${index}`} className="!w-[86%]">
                  <article
                    className="group relative rounded-3xl overflow-hidden shadow-xl border border-gray-100"
                    itemScope
                    itemType="https://schema.org/MedicalCondition"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={symptom.image}
                        alt={`${symptom.name} - ${lang === 'es' ? 'Síntoma tratable' : 'Treatable symptom'}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="100vw"
                        loading={index < 2 ? 'eager' : 'lazy'}
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                      <div className="absolute inset-0 p-5 flex flex-col justify-end">
                        <h3 className="text-xl font-bold !text-white leading-tight mb-1" itemProp="name">
                          {symptom.name}
                        </h3>
                        <p className="text-sm !text-white/90 font-semibold">
                          {symptom.condition}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95">
                          <div className="w-4 h-4 text-[#6ba5a5]" aria-hidden="true">
                            <MedicalIcon />
                          </div>
                          <span className="text-xs font-bold" style={{ color: '#182121' }}>
                            {lang === 'es' ? 'Tratamiento disponible' : 'Treatment available'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Tablet y Desktop: Grid con imágenes */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {symptoms.map((symptom, index) => (
              <article
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                itemScope
                itemType="https://schema.org/MedicalCondition"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Imagen de fondo - Lazy loading */}
                  <Image
                    src={symptom.image}
                    alt={`${symptom.name} - ${lang === 'es' ? 'Tratamiento disponible con Dr. James Madrid' : 'Treatment available with Dr. James Madrid'}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index < 3 ? 'eager' : 'lazy'}
                    quality={85}
                  />

                  {/* Overlay degradado */}
                  <div className={`absolute inset-0 transition-all duration-500 ${hoveredIndex === index
                    ? 'bg-gradient-to-t from-black/90 via-black/60 to-black/30'
                    : 'bg-gradient-to-t from-black/70 via-black/40 to-transparent'
                    }`}></div>

                  {/* Contenido */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Ícono superior */}
                    <div className="flex justify-end">
                      <div className={`w-12 h-12 rounded-2xl backdrop-blur-md flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'scale-110' : ''
                        }`}
                        style={{ backgroundColor: 'rgba(107, 165, 165, 0.9)' }}
                        aria-hidden="true">
                        <div className="w-7 h-7 text-white">
                          <MedicalIcon />
                        </div>
                      </div>
                    </div>

                    {/* Texto inferior */}
                    <div>
                      {/* Título del síntoma */}
                      <h3
                        className={`text-xl md:text-2xl font-bold !text-white leading-tight mb-2 transition-all duration-300 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2'
                          }`}
                        itemProp="name"
                      >
                        {symptom.name}
                      </h3>

                      {/* Condición médica */}
                      <p
                        className={`text-sm font-semibold !text-white/90 mb-3 transition-all duration-300 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
                          }`}
                      >
                        {symptom.condition}
                      </p>

                      {/* Check badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                        <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-bold" style={{ color: '#182121' }}>
                          {lang === 'es' ? 'Tratamiento disponible' : 'Treatment available'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: '#6ba5a5' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a9494'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6ba5a5'}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>{lang === 'es' ? 'Consultar mi caso' : 'Consult my case'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

