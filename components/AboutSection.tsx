import Image from 'next/image';
import { Award, Stethoscope, Target, Microscope, UsersRound, MapPin } from "lucide-react";

interface AboutSectionProps {
  locale: string;
}

export default function AboutSection({ locale }: AboutSectionProps) {
  return (
    <section id="sobre-mi" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#BFD7EA] text-[#1A1A1A] px-5 py-2.5 rounded-full mb-6">
            <span className="text-sm font-semibold">
              {locale === 'es' ? 'Nuestro Especialista' : 'Our Specialist'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
            Dr. James Madrid
          </h2>
          <p className="text-base text-[#1A1A1A] italic">
            {locale === 'es' 
              ? '"No tratamos enfermedades, transformamos vidas"' 
              : '"We don\'t treat diseases, we transform lives"'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/dc_james_6.jpg"
                alt={locale === 'es' ? 'Dr. James Madrid - Especialista en Medicina Deportiva' : 'Dr. James Madrid - Sports Medicine Specialist'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 !text-white">
                <p className="text-lg font-bold mb-1 !text-white">
                  {locale === 'es' ? 'Atención personalizada y profesional' : 'Personalized and professional care'}
                </p>
                <p className="text-sm opacity-90 !text-white">
                  {locale === 'es' ? 'Medicina Deportiva • Tratamiento sin cirugía' : 'Sports Medicine • Non-surgical treatment'}
                </p>
              </div>
            </div>

            {/* Floating Stats Badge */}
            {/* <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl p-6 shadow-2xl max-w-[280px] transform hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#00D98E] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#1A1A1A]">20+</div>
              </div>
              <div className="text-sm font-medium text-[#4A5568] leading-tight">
                {locale === 'es' 
                  ? 'Años de experiencia médica' 
                  : 'Years of medical experience'}
              </div>
            </div> */}

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 left-1/3 w-40 h-40 bg-[#D5F3E5]/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            {/* Professional History */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#BFD7EA] rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                {locale === 'es' ? 'Historia Profesional' : 'Professional History'}
              </h3>
              
              <div className="space-y-4">
                <p className="text-[#4A5568] leading-relaxed">
                  {locale === 'es' 
                    ? 'Con más de 20 años de experiencia en medicina deportiva, el Dr. James Madrid se ha especializado en el tratamiento no quirúrgico de lesiones deportivas y el manejo integral del dolor. Su enfoque combina la medicina basada en evidencia con un trato humano y personalizado.'
                    : 'With more than 20 years of experience in sports medicine, Dr. James Madrid has specialized in the non-surgical treatment of sports injuries and comprehensive pain management. His approach combines evidence-based medicine with human and personalized treatment.'}
                </p>
                
                <p className="text-[#4A5568] leading-relaxed">
                  {locale === 'es' 
                    ? 'Su filosofía de trabajo se centra en entender que cada paciente es único, desarrollando planes de tratamiento personalizados que abordan no solo los síntomas, sino las causas subyacentes de cada condición.'
                    : 'His work philosophy focuses on understanding that each patient is unique, developing personalized treatment plans that address not only the symptoms, but also the underlying causes of each condition.'}
                </p>
              </div>
            </div>

            {/* Key Qualifications */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                {[
                  {
                    icon: <Award className="w-5 h-5" />,
                    color: '#BFD7EA',
                    es: '20 años de experiencia médica',
                    en: '20 years of medical experience'
                  },
                  {
                    icon: <Target className="w-5 h-5" />,
                    color: '#00D98E',
                    es: 'Enfoque no quirúrgico y personalizado',
                    en: 'Non-surgical and personalized approach'
                  },
                  {
                    icon: <Microscope className="w-5 h-5" />,
                    color: '#BFD7EA',
                    es: 'Equipos de diagnóstico ecoguiado',
                    en: 'Eco-guided diagnostic equipment'
                  },
                  {
                    icon: <UsersRound className="w-5 h-5" />,
                    color: '#F59E0B',
                    es: 'Programas con seguimiento multidisciplinario',
                    en: 'Multidisciplinary follow-up programs'
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    color: '#FF6B35',
                    es: 'Atención integral en Torre Medical, El Poblado',
                    en: 'Comprehensive care at Torre Medical, El Poblado'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: item.color }}
                    >
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#2D3748] font-medium text-base leading-relaxed">{item[locale as 'es' | 'en']}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
