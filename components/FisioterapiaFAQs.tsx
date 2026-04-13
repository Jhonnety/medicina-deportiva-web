'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FisioterapiaFAQsProps {
  dictionary: any;
  locale: string;
}

export default function FisioterapiaFAQs({ dictionary, locale }: FisioterapiaFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = dictionary.fisioterapia?.faqs;

  if (!faqs || !faqs.items) return null;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold mb-6">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">{faqs.title}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6" style={{ color: '#182121' }}>
            {faqs.subtitle}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.items.map((item: any, idx: number) => (
            <div 
              key={idx}
              className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 ${
                openIndex === idx ? 'border-teal-500 shadow-md' : 'border-gray-200 hover:border-teal-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-bold text-gray-900 pr-8">
                  {item.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === idx ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-8 text-gray-700 text-lg leading-relaxed border-t border-gray-50 pt-6">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.items.map((item: any) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}
