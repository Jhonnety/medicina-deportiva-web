'use client';

interface FAQ {
  q: string;
  a: string;
}

interface TreatmentFAQsProps {
  faqs: FAQ[];
  title: string;
}

export default function TreatmentFAQs({ faqs, title }: TreatmentFAQsProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#182121' }}>
            {title}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden border-2 border-gray-200 group hover:border-[#6ba5a5]/30 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <summary className="px-6 py-5 cursor-pointer font-bold transition-colors list-none"
                         style={{ color: '#182121' }}
                         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(107, 165, 165, 0.05)'}
                         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <div className="flex items-center justify-between">
                    <span className="pr-8">{faq.q}</span>
                    <svg
                      className="w-6 h-6 flex-shrink-0 transform group-open:rotate-180 transition-transform duration-300"
                      style={{ color: '#6ba5a5' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t-2 border-[#6ba5a5]/10 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

