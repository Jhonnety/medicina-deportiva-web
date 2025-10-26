import { Badge } from "./ui/badge";
import { Award, Users, Stethoscope, Heart, CheckCircle, Target, Microscope, UsersRound, MapPin } from "lucide-react";
import doctorImage from "figma:asset/1ed915a0433d62e88e3c41c9ac4a1d1ed15653b8.png";

const stats = [
  { icon: Users, number: "5000+", label: "Pacientes satisfechos" },
  { icon: Award, number: "20+", label: "Años de experiencia" },
  { icon: Heart, number: "98%", label: "Tasa de éxito" }
];

export function DoctorSection() {
  return (
    <section id="doctor" className="py-20 bg-gradient-to-br from-white via-[var(--bg-general)] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary-blue)] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary-green)] rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-[#A2C3D5] to-[#8BADC2] text-white border-0 mb-4 px-6 py-2">
            Nuestro Especialista
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--text-titles)] mb-6">
            Dr. James Madrid
          </h2>
          <p className="text-xl lg:text-2xl text-[var(--text-main)] max-w-3xl mx-auto italic">
            "No tratamos enfermedades, transformamos vidas"
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image with decorative layers */}
          <div className="relative">
            {/* Decorative organic shapes - Layer system */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-br from-[#BFD7EA] to-[#A2C3D5] rounded-[40%_60%_70%_30%/60%_30%_70%_40%] opacity-40 -z-10 animate-pulse"></div>
            <div className="absolute -bottom-12 -right-8 w-72 h-72 bg-gradient-to-br from-[#D5F3E5] to-[#A2C3D5] rounded-[60%_40%_30%_70%/40%_70%_30%_60%] opacity-30 -z-10" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-12 w-56 h-56 bg-gradient-to-br from-[#A2C3D5] to-[#BFD7EA] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-25 -z-10" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px] z-10">
              <img
                src={doctorImage}
                alt="Dr. James Madrid - Especialista en Medicina Deportiva"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-lg font-semibold mb-1">Atención personalizada y profesional</p>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <span>Medicina Deportiva</span>
                  <span>•</span>
                  <span>Tratamiento sin cirugía</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A2C3D5] to-[#8BADC2] rounded-full flex items-center justify-center shadow-md">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-titles)]">
                  Historia Profesional
                </h3>
              </div>
              
              <p className="text-[var(--text-main)] leading-relaxed mb-4 text-lg">
                Con más de 20 años de experiencia en medicina deportiva, el Dr. James Madrid se ha 
                especializado en el tratamiento no quirúrgico de lesiones deportivas y el manejo 
                integral del dolor. Su enfoque combina la medicina basada en evidencia con un 
                trato humano y personalizado.
              </p>
              
              <p className="text-[var(--text-main)] leading-relaxed text-lg">
                Su filosofía de trabajo se centra en entender que cada paciente es único, 
                desarrollando planes de tratamiento personalizados que abordan no solo los 
                síntomas, sino las causas subyacentes de cada condición.
              </p>
            </div>

            {/* Features List */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-[var(--details-gray)]/30">
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#A2C3D5] to-[#8BADC2] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[var(--text-titles)] font-semibold group-hover:text-[var(--cta-blue)] transition-colors duration-200">
                      20 años de experiencia médica
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[var(--text-titles)] font-semibold group-hover:text-[var(--cta-blue)] transition-colors duration-200">
                      Enfoque no quirúrgico y personalizado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-300 to-cyan-300 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Microscope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[var(--text-titles)] font-semibold group-hover:text-[var(--cta-blue)] transition-colors duration-200">
                      Equipos de diagnóstico ecoguiado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <UsersRound className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[var(--text-titles)] font-semibold group-hover:text-[var(--cta-blue)] transition-colors duration-200">
                      Programas con seguimiento multidisciplinario
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-300 to-pink-300 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[var(--text-titles)] font-semibold group-hover:text-[var(--cta-blue)] transition-colors duration-200">
                      Atención integral en Torre Medical, El Poblado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
