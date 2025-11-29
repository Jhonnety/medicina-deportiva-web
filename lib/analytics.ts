import { sendGAEvent } from '@next/third-parties/google';

export const sendWhatsAppConversion = (location: string) => {
  // Evento personalizado para fácil lectura en reportes
  sendGAEvent('event', 'whatsapp_click', {
    event_category: 'conversion',
    event_label: 'whatsapp_contact',
    location: location
  });

  // Evento de conversión estándar (opcional, pero bueno para tener redundancia si usan el evento 'generate_lead' por defecto)
  sendGAEvent('event', 'generate_lead', {
    currency: 'COP',
    value: 0,
    source: location
  });
};

export const sendEmailConversion = () => {
  // Evento personalizado para fácil lectura en reportes
  sendGAEvent('event', 'email_sent', {
    event_category: 'conversion',
    event_label: 'contact_form_submit'
  });

  // Evento de conversión estándar
  sendGAEvent('event', 'generate_lead', {
    currency: 'COP',
    value: 0,
    source: 'contact_form'
  });
};
