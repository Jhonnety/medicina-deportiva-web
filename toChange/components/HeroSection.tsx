import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Activity, Award, Zap, MapPin, MessageCircle, Stethoscope } from "lucide-react";
import doctorImage from "figma:asset/1837d402b311359bd3bf102a7afca0e795426ed9.png";

export function HeroSection() {
  const scrollToTreatments = () => {
    const element = document.getElementById('tratamientos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="bg-gradient-to-br from-[#EAF3F8] to-white pt-24 pb-12 relative overflow-hidden"
    >
      {/* Radial halo behind medical team */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-radial from-[#BFD7EA]/20 to-transparent rounded-full pointer-events-none transform -translate-y-½"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Importante: no centramos verticalmente toda la grid para poder alinear la imagen abajo */}
        <div className="grid lg:grid-cols-2 gap-12 h-full items-stretch">
          {/* Columna de contenido */}
          <div className="space-y-6">
            <Badge className="bg-[#D5F3E5] text-[#1A1A1A] border-0 px-4 py-2 rounded-full w-fit">
              <Activity className="w-4 h-4 mr-2" />
              20 años transformando vidas
            </Badge>

            <h1 className="lg:text-6xl xl:text-6xl leading-[1.1] tracking-tight font-bold text-[#1A1A1A] font-normal text-[60px]">
              Recupera tu <span className="text-[#8DAABA]">movilidad</span> y bienestar <span className="text-[rgba(141,170,186,1)]">sin cirugía</span>   Dr. James Madrid – Medicina del Deporte en Medellín
            </h1>

            <p className="text-xl text-[#4A5568] max-w-2xl leading-relaxed">
              Más de 20 años ayudando a pacientes a tratar la artrosis, lesiones deportivas y dolor crónico con terapias regenerativas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#1DA851] text-white px-10 py-4 text-lg rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                onClick={() => window.open('https://wa.me/573044386208', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Cita
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-[#E1E5E9] text-[#4A5568] hover:bg-[#F7FAFC] hover:text-[#2D3748] px-10 py-4 text-lg rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                onClick={scrollToTreatments}
              >
                <Stethoscope className="w-5 h-5" />
                Nuestros servicios
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EDF2F7] rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#5BA1C8]" />
                </div>
                <div>
                  <div className="text-2xl font-light text-[#1A1A1A]">2000+</div>
                  <div className="text-sm text-[#718096]">Pacientes Recuperados</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EDF2F7] rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#5BA1C8]" />
                </div>
                <div>
                  <div className="text-2xl font-light text-[#1A1A1A]">20+</div>
                  <div className="text-sm text-[#718096]">Años de Experiencia</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#EDF2F7] rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#5BA1C8]" />
                </div>
                <div>
                  <div className="text-2xl font-light text-[#1A1A1A]">6+</div>
                  <div className="text-sm text-[#718096]">Especialidades</div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de imagen: se estira y alinea al fondo en desktop */}
          <div className="relative flex justify-center lg:justify-end lg:items-end lg:self-stretch">
            <div className="relative w-full max-w-lg lg:h-full">
              <img
                src={doctorImage}
                alt="Dr. James Madrid y Equipo Médico - Medicina Deportiva"
                className="w-full h-full object-contain object-bottom drop-shadow-2xl scale-125 transform"
              />

              {/* Badge flotante: anclado y sin salirse del contenedor */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-[#E2E8F0] hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#EDF2F7] rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#5BA1C8]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#1A1A1A]">Torre Medical</div>
                    <div className="text-xs text-[#718096]">El Poblado, Medellín</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fin columna imagen */}
        </div>
      </div>
    </section>
  );
}
