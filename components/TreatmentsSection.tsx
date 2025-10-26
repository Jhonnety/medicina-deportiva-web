import Link from 'next/link';
import Image from 'next/image';
import { TREATMENTS } from '@/lib/constants/treatments';
import type { Dictionary } from '@/lib/types';

interface TreatmentsSectionProps {
  dictionary: Dictionary;
  locale: string;
}

export default function TreatmentsSection({ dictionary, locale }: TreatmentsSectionProps) {
  return (
    <section id="tratamientos" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.treatments.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {dictionary.treatments.subtitle}
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {TREATMENTS.map((treatment, index) => {
            const treatmentKey = treatment.slug.replace('tratamiento-', '').replace('plasma-rico-plaquetas', 'prp').replace('lesiones-deportivas', 'lesiones').replace('diagnostico-ecoguiado', 'ecoguiado').replace('programa-adelgazamiento', 'adelgazamiento');
            const treatmentDict = dictionary.treatments[treatmentKey] || {};

            const colors = [
              'from-blue-500 to-blue-600',
              'from-green-500 to-green-600',
              'from-purple-500 to-purple-600',
              'from-orange-500 to-orange-600',
              'from-pink-500 to-pink-600',
              'from-teal-500 to-teal-600',
            ];

            return (
              <Link
                key={treatment.id}
                href={`/${locale}/tratamientos/${treatment.slug}`}
                className="group"
              >
                <div className="card h-full flex flex-col overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 -mt-2 -mx-2">
                    <Image
                      src={treatment.image}
                      alt={treatmentDict.title || treatment.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Badge */}
                    <div className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-r ${colors[index % colors.length]} text-white text-xs font-bold rounded-full shadow-lg`}>
                      {locale === 'es' ? 'Especializado' : 'Specialized'}
                    </div>

                    {/* Number overlay */}
                    <div className="absolute bottom-4 left-4 text-6xl font-bold text-white/20">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col px-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {treatmentDict.title || treatment.title}
                    </h3>
                    <p className="text-gray-600 mb-5 flex-1 leading-relaxed">
                      {treatmentDict.description || treatment.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2.5 mb-6">
                      {(treatmentDict.benefits || treatment.benefits).map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-primary font-bold group-hover:gap-2 transition-all pt-4 border-t border-gray-100">
                      <span>{dictionary.treatments.cta}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href={`/${locale}#contacto`}
            className="btn btn-primary px-8 py-3 text-lg"
          >
            {locale === 'es' ? 'Agenda tu Consulta' : 'Schedule Your Appointment'}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
