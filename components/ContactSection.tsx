'use client';

import { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';
import type { Dictionary } from '@/lib/types';

interface ContactSectionProps {
  dictionary: Dictionary;
  locale: string;
}

export default function ContactSection({ dictionary, locale }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = locale === 'es' ? {
    whatsapp: {
      title: 'WhatsApp',
      subtitle: 'Respuesta inmediata',
      value: '+57 304 438 62 08',
      link: 'https://wa.me/573044386208',
    },
    email: {
      title: 'Email',
      value: 'consultorio.medico.drjamesmadrid@gmail.com',
      link: 'mailto:consultorio.medico.drjamesmadrid@gmail.com',
    },
    instagram: {
      title: 'Instagram',
      value: '@deportologojames',
      link: 'https://www.instagram.com/deportologojames',
    },
    location: {
      title: 'Ubicación',
      value: 'Torre Medical, El Poblado',
      link: 'https://maps.google.com/?q=Torre+Medical+El+Poblado+Medellín',
      detail: 'Ver en Google Maps →',
    },
    hours: {
      title: 'Horarios de Atención',
      weekdays: 'Lunes - Viernes',
      weekdaysTime: '8:00 AM - 6:00 PM',
      saturday: 'Sábados',
      saturdayTime: '8:00 AM - 2:00 PM',
      sunday: 'Domingos',
      sundayTime: 'Cerrado',
    },
  } : {
    whatsapp: {
      title: 'WhatsApp',
      subtitle: 'Immediate response',
      value: '+57 304 438 62 08',
      link: 'https://wa.me/573044386208',
    },
    email: {
      title: 'Email',
      value: 'consultorio.medico.drjamesmadrid@gmail.com',
      link: 'mailto:consultorio.medico.drjamesmadrid@gmail.com',
    },
    instagram: {
      title: 'Instagram',
      value: '@deportologojames',
      link: 'https://www.instagram.com/deportologojames',
    },
    location: {
      title: 'Location',
      value: 'Torre Medical, El Poblado',
      link: 'https://maps.google.com/?q=Torre+Medical+El+Poblado+Medellín',
      detail: 'View on Google Maps →',
    },
    hours: {
      title: 'Office Hours',
      weekdays: 'Monday - Friday',
      weekdaysTime: '8:00 AM - 6:00 PM',
      saturday: 'Saturday',
      saturdayTime: '8:00 AM - 2:00 PM',
      sunday: 'Sunday',
      sundayTime: 'Closed',
    },
  };

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#D5F3E5] text-[#1A1A1A] px-5 py-2.5 rounded-full mb-6">
            <span className="text-sm font-semibold">
              {locale === 'es' ? 'Contacto' : 'Contact'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            {locale === 'es' ? 'Agenda tu Consulta' : 'Schedule Your Consultation'}
          </h2>
          <p className="text-lg md:text-xl text-[#4A5568]">
            {locale === 'es' 
              ? 'Estamos aquí para ayudarte a recuperar tu movilidad y bienestar' 
              : 'We are here to help you recover your mobility and well-being'}
          </p>
        </div>

        {/* Main Content - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">
                {locale === 'es' ? 'Información de Contacto' : 'Contact Information'}
              </h3>
              <p className="text-sm text-[#4A5568] mb-6">
                {locale === 'es' 
                  ? 'Estamos disponibles para atenderte' 
                  : 'We are available to assist you'}
              </p>

              {/* WhatsApp */}
              <a
                href={contactInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#25D366] hover:bg-[#20BA5A] rounded-xl transition-all duration-300 mb-4 group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#25D366]" />
                </div>
                <div className="flex-1 text-white">
                  <div className="text-sm font-semibold">{contactInfo.whatsapp.title}</div>
                  <div className="text-xs opacity-90">{contactInfo.whatsapp.subtitle}</div>
                  <div className="text-sm font-bold mt-1">{contactInfo.whatsapp.value}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={contactInfo.email.link}
                className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 mb-4 group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#1A1A1A]">{contactInfo.email.title}</div>
                  <div className="text-xs text-[#4A5568] break-all">{contactInfo.email.value}</div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={contactInfo.instagram.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 mb-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#1A1A1A]">{contactInfo.instagram.title}</div>
                  <div className="text-xs text-[#4A5568]">{contactInfo.instagram.value}</div>
                </div>
              </a>

              {/* Location */}
              <a
                href={contactInfo.location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 mb-4 group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#1A1A1A]">{contactInfo.location.title}</div>
                  <div className="text-xs text-[#4A5568]">{contactInfo.location.value}</div>
                  <div className="text-xs text-blue-600 mt-1">{contactInfo.location.detail}</div>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#1A1A1A] mb-2">{contactInfo.hours.title}</div>
                  <div className="space-y-1 text-xs text-[#4A5568]">
                    <div className="flex justify-between">
                      <span className="font-medium">{contactInfo.hours.weekdays}</span>
                      <span>{contactInfo.hours.weekdaysTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">{contactInfo.hours.saturday}</span>
                      <span>{contactInfo.hours.saturdayTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">{contactInfo.hours.sunday}</span>
                      <span>{contactInfo.hours.sundayTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map and Form */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#1A1A1A]">
                  {locale === 'es' ? 'Torre Medical, El Poblado - Medellín' : 'Torre Medical, El Poblado - Medellin'}
                </h3>
                <a
                  href={contactInfo.location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                >
                  {locale === 'es' ? 'Abrir en Maps' : 'Open in Maps'}
                </a>
              </div>
              <div className="rounded-xl overflow-hidden h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d-75.5656!3d6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc079fc53!2sTorre%20M%C3%A9dica%20Salud%20y%20Servicios!5e0!3m2!1ses!2sco!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Dr. James Madrid"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                {locale === 'es' ? 'Enviar Mensaje' : 'Send Message'}
              </h3>
              <p className="text-sm text-[#4A5568] mb-6">
                {locale === 'es' 
                  ? 'Te responderemos en menos de 24 horas' 
                  : 'We will respond within 24 hours'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      {locale === 'es' ? 'Nombre *' : 'Name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D98E] focus:border-transparent"
                      placeholder={locale === 'es' ? 'Tu nombre' : 'Your name'}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                      {locale === 'es' ? 'Teléfono' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D98E] focus:border-transparent"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D98E] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    {locale === 'es' ? 'Mensaje *' : 'Message *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D98E] focus:border-transparent resize-none"
                    placeholder={locale === 'es' ? 'Describe brevemente tu consulta...' : 'Briefly describe your inquiry...'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#5BA1C8] hover:bg-[#4A8AB0] text-white font-semibold px-6 py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {locale === 'es' ? 'Enviando...' : 'Sending...'}
                    </span>
                  ) : (
                    locale === 'es' ? 'Enviar Mensaje' : 'Send Message'
                  )}
                </button>

                <p className="text-xs text-center text-[#4A5568] flex items-center justify-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {locale === 'es' ? 'Tus datos están protegidos' : 'Your data is protected'}
                </p>

                {submitStatus === 'success' && (
                  <div className="text-green-600 text-center font-semibold bg-green-50 py-3 px-4 rounded-lg">
                    ✓ {locale === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!'}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-600 text-center font-semibold bg-red-50 py-3 px-4 rounded-lg">
                    ✗ {locale === 'es' ? 'Error al enviar el mensaje. Intenta de nuevo.' : 'Error sending message. Please try again.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href={contactInfo.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float no-print"
        aria-label="Contact via WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </section>
  );
}
