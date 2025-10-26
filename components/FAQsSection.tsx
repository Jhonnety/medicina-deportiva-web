'use client';

import { useState } from 'react';
import type { Dictionary } from '@/lib/types';

interface FAQsSectionProps {
  dictionary: Dictionary;
}

export default function FAQsSection({ dictionary }: FAQsSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: dictionary.faqs.question1.q,
      answer: dictionary.faqs.question1.a,
    },
    {
      question: dictionary.faqs.question2.q,
      answer: dictionary.faqs.question2.a,
    },
    {
      question: dictionary.faqs.question3.q,
      answer: dictionary.faqs.question3.a,
    },
    {
      question: dictionary.faqs.question4.q,
      answer: dictionary.faqs.question4.a,
    },
    {
      question: dictionary.faqs.question5.q,
      answer: dictionary.faqs.question5.a,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.faqs.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {dictionary.faqs.subtitle}
          </p>
        </div>

        {/* FAQs List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                openIndex === index 
                  ? 'border-primary shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300 shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <span className={`font-bold pr-8 text-lg transition-colors ${
                  openIndex === index ? 'text-primary' : 'text-gray-900 group-hover:text-primary'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  openIndex === index 
                    ? 'bg-primary rotate-180' 
                    : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <svg
                    className={`w-5 h-5 transition-colors ${
                      openIndex === index ? 'text-white' : 'text-gray-600'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 md:px-8 pb-6 text-gray-600 leading-relaxed text-lg animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            ¿Tienes más preguntas? Estamos aquí para ayudarte
          </p>
          <a href="#contacto" className="btn btn-primary px-8 py-3">
            Contáctanos
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
