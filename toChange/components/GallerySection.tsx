import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, ZoomIn } from "lucide-react";
import { useState } from "react";

const galleryItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwZXF1aXBtZW50JTIwbW9kZXJufGVufDF8fHx8MTc1OTcwNTYwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Equipos médicos avanzados",
    title: "Equipos Médicos Avanzados",
    description: "Tecnología de punta para diagnósticos precisos"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwdHJlYXRtZW50JTIwc3BvcnRzJTIwbWVkaWNpbmV8ZW58MXx8fHwxNzU5NzA1NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Tratamiento de fisioterapia deportiva",
    title: "Fisioterapia Deportiva",
    description: "Tratamientos especializados para atletas"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwZG9jdG9yJTIwcGF0aWVudHxlbnwxfHx8fDE3NTk2MzE5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Consulta médica personalizada",
    title: "Consultas Personalizadas",
    description: "Evaluación integral de cada paciente"
  },
  {
    type: "video",
    src: "https://images.unsplash.com/photo-1729544015876-ea9b1cf1f1a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdiUyMGRyaXAlMjB0aGVyYXB5JTIwbWVkaWNhbHxlbnwxfHx8fDE3NTk3MDU2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Suero terapia IV",
    title: "Suero Terapia (Video)",
    description: "Proceso de preparación de sueros personalizados"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1580420768674-7078c2bebec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWdlbmVyYXRpdmUlMjB0aGVyYXB5JTIwbWVkaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTk3MDU2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Terapias regenerativas",
    title: "Terapias Regenerativas",
    description: "Equipos para PRP y células madre"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1758875568758-daad5146648c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjByZWhhYmlsaXRhdGlvbiUyMGV4ZXJjaXNlfGVufDF8fHx8MTc1OTcwNTYyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Rehabilitación deportiva",
    title: "Rehabilitación Deportiva",
    description: "Ejercicios específicos para recuperación"
  }
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-[var(--secondary-green)] text-[var(--text-titles)] border-0 mb-4">
            Galería
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-6">
            Nuestras Instalaciones y Tratamientos
          </h2>
          <p className="text-xl text-[var(--text-main)] max-w-3xl mx-auto">
            Conoce nuestras modernas instalaciones y los tratamientos de vanguardia que ofrecemos
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => handleImageClick(item.src)}
            >
              <div className="aspect-[4/3] relative">
                <ImageWithFallback 
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                    {item.type === 'video' ? (
                      <Play className="w-12 h-12 mx-auto mb-2" />
                    ) : (
                      <ZoomIn className="w-12 h-12 mx-auto mb-2" />
                    )}
                    <p className="font-semibold">Ver {item.type === 'video' ? 'video' : 'imagen'}</p>
                  </div>
                </div>

                {/* Video Badge */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    VIDEO
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-[var(--text-titles)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-main)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-[var(--bg-general)] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[var(--text-titles)] mb-6 text-center">
            Tips y Consejos de Salud
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-[var(--text-titles)] mb-2">
                Ejercicios de Prevención
              </h4>
              <p className="text-sm text-[var(--text-main)]">
                Videos cortos con ejercicios para prevenir lesiones deportivas
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--secondary-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-[var(--text-titles)]" />
              </div>
              <h4 className="font-semibold text-[var(--text-titles)] mb-2">
                Preparación de Sueros
              </h4>
              <p className="text-sm text-[var(--text-main)]">
                Proceso de elaboración de sueros IV personalizados
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cta-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-[var(--text-titles)] mb-2">
                Casos de Éxito
              </h4>
              <p className="text-sm text-[var(--text-main)]">
                Testimonios en video de pacientes recuperados
              </p>
            </div>
          </div>
        </div>

        {/* Modal for enlarged images */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="max-w-4xl max-h-full relative">
              <ImageWithFallback 
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}