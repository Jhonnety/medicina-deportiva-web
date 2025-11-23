import { ContactInfo } from '@/lib/types';

export const WHATSAPP_DEFAULT_MESSAGE = "Hola, vi su información en clinicadelmovimiento.com y quiero saber más. 🩺💬";

export const getWhatsAppLink = (message: string = WHATSAPP_DEFAULT_MESSAGE) => {
  return `https://wa.me/573044386208?text=${encodeURIComponent(message)}`;
};

export const CONTACT_INFO: ContactInfo = {
  phone: '+57 304 438 62 08',
  whatsapp: '573044386208',
  email: 'consultoriomedicodrjamesmadrid@gmail.com',
  address: 'Calle 7 #39-107, Torre Medical, Consultorio 1009, El Poblado, Medellín, Colombia',
  hours: 'Lunes a Viernes: 8:00 AM - 5:00 PM\nSábados, Domingos y Festivos: Cerrado',
  instagram: 'deportologojames',
  facebook: 'drjamesmadrid',
  coordinates: {
    lat: 6.2064271,
    lng: -75.5700729,
  },
};


