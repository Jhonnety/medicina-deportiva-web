'use client';

import Image from 'next/image';
import { getWhatsAppLink } from '@/lib/constants/contact';
import { sendWhatsAppConversion } from '@/lib/analytics';
import { FlaskConical, Activity, Sun, ShieldPlus, Sparkles, Zap } from 'lucide-react';

interface TreatmentType {
  name: string;
  description: string;
  icon: string;
  image?: string;
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

// Map emoji/keywords to Lucide Icons for a premium look
const getIcon = (type: TreatmentType) => {
  const name = type.name.toLowerCase();
  if (name.includes('rendimiento') || name.includes('muscle')) return <Activity className="w-full h-full text-white" />;
  if (name.includes('inmuno') || name.includes('immuno')) return <ShieldPlus className="w-full h-full text-white" />;
  if (name.includes('vitalidad') || name.includes('vitality')) return <Zap className="w-full h-full text-white" />;
  if (name.includes('detox')) return <FlaskConical className="w-full h-full text-white" />;
  if (name.includes('vida c') || name.includes('life c')) return <Sun className="w-full h-full text-white" />;
  return <Sparkles className="w-full h-full text-white" />;
};

export default function TreatmentTypes({ types, lang }: TreatmentTypesProps) {
  return (
    <section className="relative section-padding overflow-hidden bg-white">
       {/* Decorative background */}
       <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-[0.02]"
          style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.02]"
          style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
           <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(107, 165, 165, 0.1)', border: '1px solid rgba(107, 165, 165, 0.2)' }}>
            <Sparkles className="w-4 h-4 text-[#6ba5a5]" />
            <span className="text-sm font-bold text-[#6ba5a5]">
              {lang === 'es' ? 'SOLUCIONES PERSONALIZADAS' : 'PERSONALIZED SOLUTIONS'}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[#182121]">
            {types.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {types.intro}
          </p>
        </div>

        {/* Bento Grid layout for Desktop and Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:auto-rows-[340px]">
            {types.list.map((type, index) => {
                // Determine grid classes for Bento Grid:
                // First item spans 2 columns on desktop to break symmetry
                const isLarge = index === 0;
                
                return (
                    <div 
                        key={index}
                        className={`group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 ease-out cursor-default flex flex-col justify-end
                            ${isLarge ? 'md:col-span-2' : 'md:col-span-1'} 
                            min-h-[320px] md:min-h-0
                        `}
                    >
                        {/* Background Image */}
                        {type.image ? (
                            <Image 
                                src={type.image} 
                                alt={type.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 absolute inset-0"></div>
                        )}
                        
                        {/* Dark Gradient Overlay - More intense at the bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#182121]/95 via-[#182121]/50 to-transparent group-hover:from-[#182121] group-hover:via-[#182121]/70 transition-colors duration-500"></div>

                        {/* Content Container - Glassmorphism style inside */}
                        <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 group-hover:bg-[#6ba5a5] group-hover:border-transparent transition-colors duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                                    <div className="w-6 h-6 md:w-7 md:h-7">
                                        {getIcon(type)}
                                    </div>
                                </div>
                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold !text-white leading-tight">
                                    {type.name}
                                </h3>
                            </div>

                            {/* Description - Animates slightly on hover */}
                            <p className="!text-gray-200 text-base md:text-lg leading-relaxed transform translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500 line-clamp-3 md:line-clamp-none">
                                {type.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* CTA */}
        <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-3xl bg-[#182121] shadow-2xl relative overflow-hidden group">
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_2s_infinite]"></div>
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#6ba5a5]/20">
                  <svg className="w-6 h-6 text-[#6ba5a5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-semibold text-white">
                  {types.cta}
                </span>
              </div>
              <a href={getWhatsAppLink(lang, lang === 'es' ? '¡Hola! Los vi en la página web y me interesa el tratamiento de sueroterapia, quiero más información' : 'Hello! I saw you on the website and I am interested in IV therapy, I would like more information')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendWhatsAppConversion('results_section')}
                className="px-8 py-4 rounded-full font-bold text-[#182121] bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] 
                            hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 transition-all duration-300
                            flex items-center gap-2 relative z-10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                {lang === 'es' ? 'Agenda tu Consulta' : 'Schedule Consultation'}
              </a>
            </div>
          </div>
      </div>
    </section>
  );
}
