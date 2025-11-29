'use client';

import Image from 'next/image';
import { getWhatsAppLink } from '@/lib/constants/contact';
import { sendWhatsAppConversion } from '@/lib/analytics';
import { FlaskConical, Bone, Activity, Sun, ShieldPlus, Sparkles, MoveRight } from 'lucide-react';
import { useState } from 'react';

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
  if (name.includes('detox')) return <FlaskConical className="w-full h-full text-white" />;
  if (name.includes('osteo') || name.includes('muscular') || name.includes('bone')) return <Bone className="w-full h-full text-white" />;
  if (name.includes('rendimiento') || name.includes('sport') || name.includes('performance')) return <Activity className="w-full h-full text-white" />;
  if (name.includes('vitamina') || name.includes('vitamin')) return <Sun className="w-full h-full text-white" />;
  if (name.includes('glutati') || name.includes('glutathi')) return <ShieldPlus className="w-full h-full text-white" />;
  return <Sparkles className="w-full h-full text-white" />;
};

export default function TreatmentTypes({ types, lang }: TreatmentTypesProps) {
  const [activeTab, setActiveTab] = useState(0);

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

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#182121' }}>
            {types.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {types.intro}
          </p>
        </div>

        {/* Desktop Horizontal Accordion */}
        <div className="hidden md:flex h-[600px] gap-4 mb-20">
            {types.list.map((type, index) => (
                <div 
                    key={index}
                    className="group relative flex-1 hover:flex-[3] transition-all duration-500 ease-out overflow-hidden rounded-[2rem] cursor-default"
                >
                    {/* Background Image */}
                    {type.image ? (
                        <Image 
                            src={type.image} 
                            alt={type.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                            sizes="(max-width: 1200px) 25vw, 20vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200"></div>
                    )}
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:via-black/60 transition-colors duration-500"></div>

                    {/* Content Container */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        
                        <div className="mb-4 w-16 h-16 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-[#6ba5a5] group-hover:border-transparent transition-colors duration-500">
                            <div className="w-8 h-8">
                                {getIcon(type)}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-bold !text-white mb-2 whitespace-nowrap transform origin-left transition-transform duration-500">
                            {type.name}
                        </h3>

                        {/* Description - Hidden initially, slides up/fades in on hover */}
                        <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                            <p className="!text-gray-200 text-lg leading-relaxed mb-6 line-clamp-4">
                                {type.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Mobile "Tabs" Interface */}
        <div className="md:hidden mb-16">
            {/* Scrollable Tab List */}
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 gap-3 no-scrollbar snap-x">
                {types.list.map((type, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-full whitespace-nowrap transition-all duration-300 snap-start border ${
                            activeTab === index 
                            ? 'bg-[#6ba5a5] border-[#6ba5a5] text-white shadow-lg' 
                            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                        <div className={`w-5 h-5 ${activeTab === index ? 'text-white' : 'text-[#6ba5a5]'}`}>
                            {getIcon(type)}
                        </div>
                        <span className="font-bold text-sm">{type.name}</span>
                    </button>
                ))}
            </div>

            {/* Active Content Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl border border-gray-100 transition-all duration-500">
                <div className="relative aspect-[4/3] w-full">
                     {/* Background Image */}
                     {types.list[activeTab].image ? (
                        <Image 
                            key={activeTab} // Key forces re-render animation
                            src={types.list[activeTab].image!} 
                            alt={types.list[activeTab].name}
                            fill
                            className="object-cover animate-fadeIn"
                            sizes="100vw"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#182121] via-[#182121]/60 to-transparent"></div>
                </div>

                <div className="relative -mt-20 px-8 pb-8 pt-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#6ba5a5] text-white shadow-lg mb-6 border-4 border-white">
                         <div className="w-7 h-7">
                            {getIcon(types.list[activeTab])}
                        </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#182121] mb-3">
                        {types.list[activeTab].name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                        {types.list[activeTab].description}
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20" style={{ background: 'linear-gradient(135deg, #283838 0%, #1a2626 50%, #283838 100%)' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(107, 165, 165, 0.2)' }}>
                  <svg className="w-6 h-6" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-lg font-semibold !text-white">
                  {types.cta}
                </span>
              </div>
              <a href={getWhatsAppLink(lang, lang === 'es' ? '¡Hola! Los vi en la página web y me interesa el tratamiento y quiero más información' : 'Hello! I saw you on the website and I am interested in the treatment and would like more information')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendWhatsAppConversion('results_section')}
                className="px-6 py-3 rounded-full font-bold !text-white shadow-lg 
                            hover:shadow-2xl transform hover:scale-105 transition-all duration-300
                            flex items-center gap-2"
                style={{ backgroundColor: '#6ba5a5' }}>
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
