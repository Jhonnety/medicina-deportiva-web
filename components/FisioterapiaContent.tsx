'use client';

import React from 'react';
import Image from 'next/image';
import physioImg1 from '@/assets/images_fisioterapia/4_vertical.jpeg';
import physioImg2 from '@/assets/images_fisioterapia/7_vertical.jpeg';

interface FisioterapiaContentProps {
  dictionary: any;
  locale: string;
}

export default function FisioterapiaContent({ dictionary, locale }: FisioterapiaContentProps) {
  const content = dictionary.fisioterapia?.content;

  if (!content) return null;

  return (
    <div className="bg-white">
      {/* Intro Section */}
      <section id="intro-fisioterapia" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light border-l-4 border-teal-500 pl-6">
              {content.intro}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {content.goal}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium bg-gray-50 p-6 rounded-2xl">
              {content.personalized}
            </p>
          </div>
          <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
             <Image
                src={physioImg1}
                alt="Fisioterapia Especializada"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
             />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios-fisioterapia" className="bg-teal-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ color: '#182121' }}>
                {content.benefits_title}
              </h2>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.benefits.map((benefit: string, idx: number) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                   </div>
                   <p className="text-lg font-medium text-gray-800">{benefit}</p>
                </div>
              ))}
           </div>
           
           <div className="mt-16 text-center max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-teal-100">
              <p className="text-xl text-teal-800 font-medium">
                {content.benefits_conclusion}
              </p>
           </div>
        </div>
      </section>

      {/* When to consult Section */}
      <section id="consultar-fisioterapia" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={physioImg2}
                alt={content.when_to_consult_title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
             />
             <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply"></div>
          </div>
          
          <div className="space-y-8">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ color: '#182121' }}>
                  {content.when_to_consult_title}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {content.when_to_consult_intro}
                </p>
             </div>
             
             <ul className="space-y-4">
                {content.when_to_consult.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                     <span className="flex-shrink-0 w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mt-1 mr-4">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                        </svg>
                     </span>
                     <p className="text-lg text-gray-700">{item}</p>
                  </li>
                ))}
             </ul>
             
             <div className="pt-6 border-t border-gray-100">
                <p className="text-xl font-medium text-amber-800 leading-relaxed bg-amber-50 p-6 rounded-2xl">
                  {content.when_to_consult_conclusion}
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
