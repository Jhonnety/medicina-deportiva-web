import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Star, Quote, Play } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    type: "testimonial",
    name: "María González",
    age: 34,
    condition: "Lesión de rodilla",
    result: "Recuperé movilidad completa sin cirugía",
    testimonial: "Después de 6 meses con dolor en la rodilla, el Dr. Madrid me ayudó a recuperar mi movilidad completa con terapias regenerativas. Ahora puedo correr nuevamente sin dolor.",
    rating: 5,
    avatar: "MG"
  },
  {
    type: "video",
    name: "Carlos Ruiz",
    condition: "Recuperación deportiva",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80"
  },
  {
    type: "video",
    name: "Javier Mendoza",
    condition: "Terapia física post-lesión",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1605868230251-f0e640f3201f?w=400&q=80"
  },
  {
    type: "testimonial",
    name: "Ana Martínez",
    age: 42,
    condition: "Dolor lumbar crónico",
    result: "Eliminé el dolor después de 2 años",
    testimonial: "Sufrí de dolor lumbar crónico por 2 años. Con el programa integral del Dr. Madrid, no solo eliminé el dolor, sino que mejoré mi calidad de vida significativamente.",
    rating: 5,
    avatar: "AM"
  },
  {
    type: "video",
    name: "Sofía Torres",
    condition: "Rehabilitación deportiva",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1717500252010-d708ec89a0a2?w=400&q=80"
  },
  {
    type: "testimonial",
    name: "Roberto Silva",
    age: 36,
    condition: "Sobrepeso y dolor articular",
    result: "Perdí 25 kg y eliminé el dolor",
    testimonial: "El programa de adelgazamiento combinado con el manejo del dolor fue exactamente lo que necesitaba. Perdí 25 kilos y mis articulaciones ya no me duelen.",
    rating: 5,
    avatar: "RS"
  },
  {
    type: "video",
    name: "Laura Pérez",
    condition: "Tratamiento regenerativo",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80"
  },
  {
    type: "video",
    name: "Andrés Castro",
    condition: "Medicina deportiva avanzada",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1678356188535-1c23c93b0746?w=400&q=80"
  },
  {
    type: "testimonial",
    name: "Diego Morales",
    age: 31,
    condition: "Lesión menisco",
    result: "Evité la cirugía exitosamente",
    testimonial: "Pensé que necesitaría cirugía de menisco, pero gracias al tratamiento del Dr. Madrid, me recuperé completamente sin pasar por el quirófano. Increíble resultado.",
    rating: 5,
    avatar: "DM"
  },
  {
    type: "video",
    name: "Patricia García",
    condition: "Terapia PRP",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&q=80"
  },
  {
    type: "video",
    name: "Miguel Ramírez",
    condition: "Consulta medicina deportiva",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?w=400&q=80"
  },
  {
    type: "testimonial",
    name: "Patricia Gómez",
    age: 38,
    condition: "Artrosis de cadera",
    result: "Mejoría notable en 2 meses",
    testimonial: "La artrosis en mi cadera me impedía caminar normalmente. Con las infiltraciones y terapia física del Dr. Madrid, recuperé mi movilidad y calidad de vida.",
    rating: 5,
    avatar: "PG"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-[var(--bg-general)]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-[var(--secondary-green)] text-[var(--text-titles)] border-0 mb-4">
            Testimonios
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-titles)] mb-6">
            Historias reales de recuperación
          </h2>
          <p className="text-xl text-[var(--text-main)] max-w-3xl mx-auto">
            Miles de pacientes han recuperado su movilidad y bienestar con nuestros tratamientos
          </p>
        </div>
      </div>

      {/* Infinite Carousel - Double Row - Full Width */}
      <div className="mb-12 space-y-6">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            @keyframes scroll-right {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0);
              }
            }
            .carousel-track-left {
              animation: scroll-left 60s linear infinite;
            }
            .carousel-track-left:hover {
              animation-play-state: paused;
            }
            .carousel-track-right {
              animation: scroll-right 60s linear infinite;
            }
            .carousel-track-right:hover {
              animation-play-state: paused;
            }
          `}} />
          
          {/* Primera fila - se mueve hacia la izquierda */}
          <div className="relative overflow-hidden">
            <div className="carousel-track-left flex gap-6">
              {[...testimonials.slice(0, 4), ...testimonials.slice(0, 4)].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[380px] group"
                >
                  {item.type === "video" ? (
                    <div className="relative shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden aspect-square group-hover:scale-[1.02] rounded-lg">
                      {/* Imagen */}
                      <img 
                        src={item.thumbnail} 
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Overlay suave */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                      
                      {/* Play Button - Simple y centrado */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-9 h-9 text-[var(--text-titles)] ml-1" fill="currentColor" />
                        </div>
                      </div>
                      
                      {/* Información - Bottom overlay simple */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pt-12">
                        <h4 className="text-white mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-white/90">
                          {item.condition}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-[var(--primary-blue)] text-white font-semibold">
                              {item.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-[var(--text-titles)]">
                              {item.name}
                            </h4>
                            <p className="text-sm text-[var(--text-main)]">
                              {item.age} años • {item.condition}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-1 mb-4">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        <Quote className="w-8 h-8 text-[var(--cta-blue)] mb-3" />
                        
                        <p className="text-[var(--text-main)] leading-relaxed mb-4">
                          "{item.testimonial}"
                        </p>
                        
                        <div className="bg-[var(--secondary-green)] rounded-lg p-3">
                          <p className="text-sm font-semibold text-[var(--text-titles)]">
                            Resultado: {item.result}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Segunda fila - se mueve hacia la derecha */}
          <div className="relative overflow-hidden">
            <div className="carousel-track-right flex gap-6">
              {[...testimonials.slice(4), ...testimonials.slice(4)].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[380px] group"
                >
                  {item.type === "video" ? (
                    <div className="relative shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden aspect-square group-hover:scale-[1.02] rounded-lg">
                      {/* Imagen */}
                      <img 
                        src={item.thumbnail} 
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Overlay suave */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                      
                      {/* Play Button - Simple y centrado */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-9 h-9 text-[var(--text-titles)] ml-1" fill="currentColor" />
                        </div>
                      </div>
                      
                      {/* Información - Bottom overlay simple */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 pt-12">
                        <h4 className="text-white mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-white/90">
                          {item.condition}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-[var(--primary-blue)] text-white font-semibold">
                              {item.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-[var(--text-titles)]">
                              {item.name}
                            </h4>
                            <p className="text-sm text-[var(--text-main)]">
                              {item.age} años • {item.condition}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-1 mb-4">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        <Quote className="w-8 h-8 text-[var(--cta-blue)] mb-3" />
                        
                        <p className="text-[var(--text-main)] leading-relaxed mb-4">
                          "{item.testimonial}"
                        </p>
                        
                        <div className="bg-[var(--secondary-green)] rounded-lg p-3">
                          <p className="text-sm font-semibold text-[var(--text-titles)]">
                            Resultado: {item.result}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* Stats and CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[var(--text-titles)] mb-2">1000+</div>
            <div className="text-[var(--text-main)]">Pacientes Atendidos</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[var(--text-titles)] mb-2">95%</div>
            <div className="text-[var(--text-main)]">Índice de Satisfacción</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[var(--text-titles)] mb-2">85%</div>
            <div className="text-[var(--text-main)]">Evitan Cirugía</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-[var(--text-titles)] mb-2">20</div>
            <div className="text-[var(--text-main)]">Años de Experiencia</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[var(--text-titles)] mb-4">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h3>
          <p className="text-[var(--text-main)] mb-6">
            Únete a los miles de pacientes que han recuperado su movilidad con nosotros
          </p>
          <button 
            className="bg-[var(--whatsapp-green)] hover:bg-[#1DA851] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            onClick={() => window.open('https://wa.me/573044386208?text=Hola, quiero conocer más sobre los tratamientos', '_blank')}
          >
            Comenzar mi Recuperación
          </button>
        </div>
      </div>
    </section>
  );
}