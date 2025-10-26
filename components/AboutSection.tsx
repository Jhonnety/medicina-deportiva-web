import Image from 'next/image';
import type { Dictionary } from '@/lib/types';

interface AboutSectionProps {
  dictionary: Dictionary;
}

export default function AboutSection({ dictionary }: AboutSectionProps) {
  return (
    <section id="sobre-mi" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/dc_james_9.jpg"
                  alt={dictionary.about.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Badge */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-8 shadow-2xl max-w-[240px] transform hover:scale-105 transition-transform">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-sm font-medium opacity-90 leading-tight">
                  Años de experiencia en medicina deportiva
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 left-1/3 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  {dictionary.about.subtitle}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                {dictionary.about.title}
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {dictionary.about.description}
            </p>

            {/* Credentials */}
            <div className="space-y-4 pt-4">
              {dictionary.about.credentials.map((credential: string, index: number) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium flex-1 text-lg">{credential}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t-2 border-gray-100">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gradient">5000+</div>
                <div className="text-sm text-gray-600 font-medium">Procedimientos realizados</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gradient">98%</div>
                <div className="text-sm text-gray-600 font-medium">Tasa de satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
