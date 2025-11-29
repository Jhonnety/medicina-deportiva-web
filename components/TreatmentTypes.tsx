'use client';

import { getWhatsAppLink } from '@/lib/constants/contact';
import { sendWhatsAppConversion } from '@/lib/analytics';

interface TreatmentType {
  name: string;
  description: string;
  icon: string;
}

interface TreatmentTypesProps {
  types: {
    title: string;
    intro: string;
    list: TreatmentType[];
    cta: string;
  };
  lang: string;
}

export default function TreatmentTypes({ types, lang }: TreatmentTypesProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#182121' }}>
            {types.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {types.intro}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {types.list.map((type, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-6">{type.icon}</div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#182121' }}>
                {type.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold mb-8" style={{ color: '#182121' }}>
                {types.cta}
            </h3>
            <a
            href={getWhatsAppLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendWhatsAppConversion('treatment_types_cta')}
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: '#6ba5a5' }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>{lang === 'es' ? 'Agendar mi cita' : 'Book appointment'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

