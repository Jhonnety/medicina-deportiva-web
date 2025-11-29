'use client';

import { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';
import type { Dictionary } from '@/lib/types';
import { getWhatsAppLink } from '@/lib/constants/contact';
import { sendWhatsAppConversion } from '@/lib/analytics';

interface ContactSectionProps {
  dictionary: Dictionary;
  locale: string;
}

export default function ContactSection({ locale }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('consultoriomedicodrjamesmadrid@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = 'consultoriomedicodrjamesmadrid@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } catch {
        // Si todo falla, simplemente no hacer nada
      }
      document.body.removeChild(textArea);
    }
  };

  const contactInfo = locale === 'es' ? {
    whatsapp: {
      title: 'WhatsApp',
      subtitle: 'Respuesta inmediata',
      value: '+57 304 438 62 08',
      link: getWhatsAppLink(),
    },
    email: {
      title: 'Email',
      value: 'consultoriomedicodrjamesmadrid@gmail.com',
      link: 'mailto:consultoriomedicodrjamesmadrid@gmail.com',
    },
    instagram: {
      title: 'Instagram',
      value: '@deportologojames',
      link: 'https://www.instagram.com/deportologojames',
    },
    location: {
      title: 'Ubicación',
      value: 'Calle 7 #39-107, Torre Medical, Consultorio 1009',
      address: 'El Poblado, Medellín',
      link: 'https://www.google.com/maps/place/Torre+Medical/@6.2064271,-75.5700729,17z/data=!4m6!3m5!1s0x8e46838bcf647399:0x2f2c9225c743dbb3!8m2!3d6.2064271!4d-75.5700729!16s%2Fg%2F11rl51cqx2?authuser=0&hl=es-419&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D',
      detail: 'Ver en Google Maps →',
    },
    hours: {
      title: 'Horarios de Atención',
      weekdays: 'Lunes - Viernes',
      weekdaysTime: '8:00 AM - 5:00 PM',
      closed: 'Sábados, Domingos y Festivos',
      closedTime: 'Cerrado',
    },
  } : {
    whatsapp: {
      title: 'WhatsApp',
      subtitle: 'Immediate response',
      value: '+57 304 438 62 08',
      link: getWhatsAppLink(),
    },
    email: {
      title: 'Email',
      value: 'consultoriomedicodrjamesmadrid@gmail.com',
      link: 'mailto:consultoriomedicodrjamesmadrid@gmail.com',
    },
    instagram: {
      title: 'Instagram',
      value: '@deportologojames',
      link: 'https://www.instagram.com/deportologojames',
    },
    location: {
      title: 'Location',
      value: 'Calle 7 #39-107, Torre Medical, Office 1009',
      address: 'El Poblado, Medellín',
      link: 'https://www.google.com/maps/place/Torre+Medical/@6.2064271,-75.5700729,17z/data=!4m6!3m5!1s0x8e46838bcf647399:0x2f2c9225c743dbb3!8m2!3d6.2064271!4d-75.5700729!16s%2Fg%2F11rl51cqx2?authuser=0&hl=es-419&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D',
      detail: 'View on Google Maps →',
    },
    hours: {
      title: 'Office Hours',
      weekdays: 'Monday - Friday',
      weekdaysTime: '8:00 AM - 5:00 PM',
      closed: 'Saturdays, Sundays & Holidays',
      closedTime: 'Closed',
    },
  };

  return (
    <section id="contacto" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #283838 0%, #1a2626 50%, #283838 100%)' }}>
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, #6ba5a5 0%, transparent 70%)' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 font-semibold"
            style={{ backgroundColor: 'rgba(107, 165, 165, 0.2)', border: '1px solid rgba(107, 165, 165, 0.3)', color: '#6ba5a5' }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">
              {locale === 'es' ? 'Consulta Personalizada' : 'Personalized Consultation'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-4 leading-tight">
            {locale === 'es'
              ? '¿Listo para comenzar tu recuperación?'
              : 'Ready to start your recovery?'}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#6ba5a5' }}>
            {locale === 'es' ? 'Agenda tu Consulta' : 'Schedule Your Consultation'}
          </h3>
          <p className="text-lg md:text-xl !text-gray-300 leading-relaxed">
            {locale === 'es'
              ? 'Estamos aquí para ayudarte a recuperar tu movilidad y bienestar. Respuesta garantizada en menos de 24 horas'
              : 'We are here to help you recover your mobility and well-being. Guaranteed response within 24 hours'}
          </p>
        </div>

        {/* Main Content - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-200">
              <h3 className="text-lg font-bold mb-2" style={{ color: '#182121' }}>
                {locale === 'es' ? 'Información de Contacto' : 'Contact Information'}
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                {locale === 'es'
                  ? 'Estamos disponibles para atenderte'
                  : 'We are available to assist you'}
              </p>

              {/* WhatsApp */}
              <a
                href={contactInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendWhatsAppConversion('contact_section_card')}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 mb-4 group hover:scale-105"
                style={{ backgroundColor: '#6ba5a5' }}
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" style={{ color: '#6ba5a5' }} />
                </div>
                <div className="flex-1 text-white">
                  <div className="text-sm font-semibold">{contactInfo.whatsapp.title}</div>
                  <div className="text-xs opacity-90">{contactInfo.whatsapp.subtitle}</div>
                  <div className="text-sm font-bold mt-1">{contactInfo.whatsapp.value}</div>
                </div>
              </a>

              {/* Email */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 mb-4 group relative"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(107, 165, 165, 0.1)' }}>
                  <Mail className="w-6 h-6" style={{ color: '#6ba5a5' }} />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm font-semibold" style={{ color: '#182121' }}>{contactInfo.email.title}</div>
                  <div className="text-xs text-gray-600 break-all">{contactInfo.email.value}</div>
                  {emailCopied && (
                    <div className="text-xs font-semibold mt-1" style={{ color: '#6ba5a5' }}>
                      ✓ {locale === 'es' ? 'Email copiado' : 'Email copied'}
                    </div>
                  )}
                </div>
                <div className="flex-shrink-0 text-xs text-gray-500">
                  {locale === 'es' ? 'Click para copiar' : 'Click to copy'}
                </div>
              </button>

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
                  <div className="text-sm font-semibold" style={{ color: '#182121' }}>{contactInfo.instagram.title}</div>
                  <div className="text-xs text-gray-600">{contactInfo.instagram.value}</div>
                </div>
              </a>

              {/* Location */}
              <a
                href={contactInfo.location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 mb-4 group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(107, 165, 165, 0.1)' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#6ba5a5' }} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold" style={{ color: '#182121' }}>{contactInfo.location.title}</div>
                  <div className="text-xs text-gray-600">{contactInfo.location.value}</div>
                  <div className="text-xs text-gray-500">{contactInfo.location.address}</div>
                  <div className="text-xs font-semibold mt-1" style={{ color: '#6ba5a5' }}>{contactInfo.location.detail}</div>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: 'rgba(107, 165, 165, 0.1)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(107, 165, 165, 0.2)' }}>
                  <Clock className="w-6 h-6" style={{ color: '#6ba5a5' }} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-2" style={{ color: '#182121' }}>{contactInfo.hours.title}</div>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{contactInfo.hours.weekdays}</span>
                      <span className="font-semibold" style={{ color: '#6ba5a5' }}>{contactInfo.hours.weekdaysTime}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{contactInfo.hours.closed}</span>
                        <span className="text-red-600 font-semibold">{contactInfo.hours.closedTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map and Form */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold" style={{ color: '#182121' }}>
                    {locale === 'es' ? 'Torre Medical - Consultorio 1009' : 'Torre Medical - Office 1009'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {locale === 'es' ? 'Calle 7 #39-107, El Poblado' : 'Calle 7 #39-107, El Poblado'}
                  </p>
                </div>
                <a
                  href={contactInfo.location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold hover:underline flex-shrink-0"
                  style={{ color: '#6ba5a5' }}
                >
                  {locale === 'es' ? 'Abrir' : 'Open'}
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2558827537897!2d-75.57246892408893!3d6.206427193784748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46838bcf647399%3A0x2f2c9225c743dbb3!2sTorre%20Medical!5e0!3m2!1ses!2sco!4v1730000000000!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Dr. James Madrid - Torre Medical"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-200">
              <h3 className="text-lg font-bold mb-2" style={{ color: '#182121' }}>
                {locale === 'es' ? 'Enviar Mensaje' : 'Send Message'}
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                {locale === 'es'
                  ? 'Te responderemos en menos de 24 horas'
                  : 'We will respond within 24 hours'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#182121' }}>
                      {locale === 'es' ? 'Nombre *' : 'Name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ba5a5] focus:border-transparent"
                      placeholder={locale === 'es' ? 'Tu nombre' : 'Your name'}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: '#182121' }}>
                      {locale === 'es' ? 'Teléfono' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ba5a5] focus:border-transparent"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#182121' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ba5a5] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#182121' }}>
                    {locale === 'es' ? 'Mensaje *' : 'Message *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6ba5a5] focus:border-transparent resize-none"
                    placeholder={locale === 'es' ? 'Describe brevemente tu consulta...' : 'Briefly describe your inquiry...'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-bold px-6 py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg"
                  style={{ backgroundColor: '#6ba5a5' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a9494'}
                  onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#6ba5a5')}
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

                <p className="text-xs text-center text-gray-600 flex items-center justify-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {locale === 'es' ? 'Tus datos están protegidos' : 'Your data is protected'}
                </p>

                {submitStatus === 'success' && (
                  <div className="text-green-700 text-center font-semibold bg-green-50 py-3 px-4 rounded-lg border border-green-200">
                    ✓ {locale === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!'}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-700 text-center font-semibold bg-red-50 py-3 px-4 rounded-lg border border-red-200">
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
        onClick={() => sendWhatsAppConversion('floating_button')}
        className="whatsapp-float no-print"
        aria-label="Contact via WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488Z" />
        </svg>
      </a>
    </section>
  );
}
