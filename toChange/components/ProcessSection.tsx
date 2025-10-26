import { Badge } from "./ui/badge";
import { Calendar, ClipboardCheck, Syringe, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

const processSteps = [
  {
    icon: ClipboardCheck,
    step: "1",
    title: "Valoración Médica",
    description: "Realizamos una evaluación completa de tu condición física, historial médico y objetivos específicos para entender tus necesidades.",
    color: "bg-[var(--primary-blue)]",
    image: "https://images.unsplash.com/photo-1758691462123-8a17ae95d203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXhhbWluYXRpb24lMjBkb2N0b3J8ZW58MXx8fHwxNzYwMzc2OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageTitle: "Valoración Médica Completa",
    imageDescription: "Diagnóstico preciso y personalizado"
  },
  {
    icon: Syringe,
    step: "2", 
    title: "Tratamiento Personalizado",
    description: "Aplicamos técnicas avanzadas de medicina regenerativa diseñadas específicamente para tu diagnóstico y objetivos de recuperación.",
    color: "bg-[var(--secondary-green)]",
    image: "https://images.unsplash.com/photo-1664902275922-9cd136203ba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhdG1lbnQlMjBwbGFuJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjAzNzY5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageTitle: "Tratamiento Especializado",
    imageDescription: "Medicina regenerativa sin cirugía"
  },
  {
    icon: TrendingUp,
    step: "3",
    title: "Seguimiento y Recuperación",
    description: "Te acompañamos durante todo el proceso con citas de control periódicas, ajustes al tratamiento y soporte continuo hasta alcanzar tus objetivos.",
    color: "bg-[var(--cta-blue)]",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2MDMxMjQ0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    imageTitle: "Acompañamiento Total",
    imageDescription: "Seguimiento hasta tu recuperación completa"
  }
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="proceso" className="py-20 bg-[var(--bg-general)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-[var(--secondary-green)] text-[var(--text-titles)] border-0 mb-4">
            Nuestro Proceso
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-6">
            Tu recuperación en 3 pasos simples
          </h2>
          <p className="text-xl text-[var(--text-main)] max-w-3xl mx-auto mb-4">
            Un proceso sencillo y estructurado que garantiza los mejores resultados
          </p>
          <p className="text-lg text-[var(--text-main)] italic">
            "Nos enfocamos en resultados reales, sin cirugía."
          </p>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="lg:hidden overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max px-4">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center w-[280px] flex-shrink-0">
                  {/* Step Number */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--text-titles)] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[var(--text-titles)]">
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-main)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Two columns layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left Column - Steps */}
          <div className="space-y-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div 
                  key={index} 
                  className="relative cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`flex gap-6 p-6 rounded-xl transition-all duration-500 ${
                    isActive 
                      ? 'bg-white shadow-xl scale-105' 
                      : 'bg-transparent hover:bg-white/50'
                  }`}>
                    {/* Icon and Number */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                        isActive ? 'scale-110' : 'scale-100'
                      }`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute -top-2 -right-2 w-7 h-7 bg-[var(--text-titles)] text-white rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                        isActive ? 'scale-125' : 'scale-100'
                      }`}>
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${
                        isActive ? 'text-[var(--cta-blue)]' : 'text-[var(--text-titles)]'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-[var(--text-main)] leading-relaxed transition-all duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-70'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className={`absolute left-14 top-[88px] w-0.5 h-6 transition-all duration-500 ${
                      isActive ? 'bg-[var(--cta-blue)]' : 'bg-[var(--details-gray)]'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      activeStep === index 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <ImageWithFallback
                      src={step.image}
                      alt={step.imageTitle}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Texto superpuesto */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">{step.step}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {step.imageTitle}
                      </h3>
                      <p className="text-lg opacity-90">
                        {step.imageDescription}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Progress indicators */}
                <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
                  {processSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-2 h-8 rounded-full transition-all duration-300 ${
                        activeStep === index
                          ? 'bg-white'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Ir al paso ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[var(--text-titles)] mb-4">
            ¿Listo para comenzar tu recuperación?
          </h3>
          <p className="text-[var(--text-main)] mb-6">
            Agenda tu primera consulta y da el primer paso hacia una vida sin dolor
          </p>
          <button 
            className="bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
            onClick={() => window.open('https://wa.me/573044386208?text=Hola, me interesa agendar una consulta', '_blank')}
          >
            <Calendar className="w-5 h-5" />
            Agendar Cita por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}