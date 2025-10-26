export interface Treatment {
  id: string;
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  condition: string;
  quote: string;
  rating: number;
  image?: string;
  videoUrl?: string;
  type: 'text' | 'video';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  instagram?: string;
  facebook?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

// Dictionary types
export interface Dictionary {
  nav: {
    home: string;
    treatments: string;
    about: string;
    testimonials: string;
    contact: string;
    schedule: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    tag1: string;
    tag2: string;
    tag3: string;
  };
  process: {
    title: string;
    subtitle: string;
    step1: {
      number: string;
      title: string;
      description: string;
    };
    step2: {
      number: string;
      title: string;
      description: string;
    };
    step3: {
      number: string;
      title: string;
      description: string;
    };
  };
  treatments: {
    title: string;
    subtitle: string;
    artrosis: {
      title: string;
      description: string;
      benefits: string[];
    };
    proloterapia: {
      title: string;
      description: string;
      benefits: string[];
    };
    prp: {
      title: string;
      description: string;
      benefits: string[];
    };
    lesiones: {
      title: string;
      description: string;
      benefits: string[];
    };
    ecoguiado: {
      title: string;
      description: string;
      benefits: string[];
    };
    adelgazamiento: {
      title: string;
      description: string;
      benefits: string[];
    };
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    credentials: string[];
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  faqs: {
    title: string;
    subtitle: string;
    question1: {
      q: string;
      a: string;
    };
    question2: {
      q: string;
      a: string;
    };
    question3: {
      q: string;
      a: string;
    };
    question4: {
      q: string;
      a: string;
    };
    question5: {
      q: string;
      a: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    location: string;
    hours: string;
    hoursDetail: string;
    address: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    formSubmit: string;
    instagram: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    followUs: string;
    rights: string;
  };
  seo: {
    home: {
      title: string;
      description: string;
    };
  };
}
