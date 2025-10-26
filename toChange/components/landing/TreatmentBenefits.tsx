import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState, useEffect } from "react";

interface TreatmentBenefitsProps {
  benefits: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  statistic?: {
    percentage: string;
    description: string;
  };
  disclaimer?: string;
}

export function TreatmentBenefits({ 
  benefits,
  statistic,
  disclaimer = "Los resultados varían según la condición del paciente; cada tratamiento es personalizado."
}: TreatmentBenefitsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  // Auto-play: advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <section className="py-16 bg-[var(--bg-general)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-4">
            Resultados que puedes esperar
          </h2>
          <div className="w-20 h-1 bg-[var(--whatsapp-green)] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[var(--text-main)] max-w-3xl mx-auto">
            Beneficios comprobados clínicamente que transformarán tu calidad de vida
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left: Carousel with Thumbnails */}
          <div className="order-2 lg:order-1">
            {/* Main Carousel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                <ImageWithFallback
                  key={`benefit-main-${currentIndex}`}
                  src={benefits[currentIndex].image}
                  alt={`${benefits[currentIndex].title}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Carousel Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Imagen anterior"
                >
                  <svg className="w-5 h-5 text-[var(--text-titles)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Imagen siguiente"
                >
                  <svg className="w-5 h-5 text-[var(--text-titles)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {benefits.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Ir a beneficio ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Image Grid Thumbnails */}
              <div className="grid grid-cols-4 gap-3 mt-4">
                {benefits.map((benefit, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative overflow-hidden rounded-lg aspect-video transition-all duration-300 ${
                      index === currentIndex 
                        ? 'ring-2 ring-[var(--whatsapp-green)] scale-105' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback
                      src={benefit.image}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Benefits List */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-[var(--text-titles)] mb-8">
              Beneficios comprobados
            </h3>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex items-start gap-4 cursor-pointer transition-all duration-300 p-3 rounded-xl ${
                  index === currentIndex 
                    ? 'bg-[var(--secondary-green)]/30 scale-105' 
                    : 'hover:bg-[var(--bg-general)]'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[var(--whatsapp-green)] scale-110' 
                    : 'bg-[var(--whatsapp-green)]/70'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className={`mb-2 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'text-[var(--text-titles)] font-bold' 
                      : 'text-[var(--text-titles)]'
                  }`}>
                    {benefit.title}
                  </h4>
                  <p className={`leading-relaxed transition-all duration-300 ${
                    index === currentIndex 
                      ? 'text-[var(--text-main)]' 
                      : 'text-[var(--text-main)]'
                  }`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Disclaimer */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm text-[var(--text-main)] italic bg-white rounded-xl p-4 border border-[var(--details-gray)]/30">
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
