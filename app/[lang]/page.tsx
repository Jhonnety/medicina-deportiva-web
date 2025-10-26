import { Metadata } from 'next';
import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProcessSection from '@/components/ProcessSection';
import TreatmentsSection from '@/components/TreatmentsSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQsSection from '@/components/FAQsSection';
import ContactSection from '@/components/ContactSection';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const baseUrl = 'https://drjamesmadrid.com';

  return {
    title: dictionary.seo.home.title,
    description: dictionary.seo.home.description,
    keywords: [
      'medicina deportiva',
      'deportólogo Medellín',
      'PRP',
      'proloterapia',
      'tratamiento artrosis',
      'lesiones deportivas',
      'Dr. James Madrid',
      'sports medicine',
      'sports doctor Medellin',
      'arthritis treatment',
    ],
    authors: [{ name: 'Dr. James Madrid' }],
    openGraph: {
      title: dictionary.seo.home.title,
      description: dictionary.seo.home.description,
      url: `${baseUrl}/${lang}`,
      siteName: 'Dr. James Madrid',
      images: [
        {
          url: `${baseUrl}/assets/images/dc_james_1.png`,
          width: 1200,
          height: 630,
          alt: 'Dr. James Madrid - Medicina Deportiva',
        },
      ],
      locale: lang === 'es' ? 'es_CO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.seo.home.title,
      description: dictionary.seo.home.description,
      images: [`${baseUrl}/assets/images/dc_james_1.png`],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Dr. James Madrid - Medicina Deportiva',
    image: 'https://drjamesmadrid.com/assets/images/dc_james_1.png',
    '@id': 'https://drjamesmadrid.com',
    url: `https://drjamesmadrid.com/${lang}`,
    telephone: '+573001234567',
    email: 'contacto@drjamesmadrid.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle 123 #45-67',
      addressLocality: 'Medellín',
      addressRegion: 'Antioquia',
      postalCode: '050001',
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.2442,
      longitude: -75.5812,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
    medicalSpecialty: 'SportsMedicine',
  };

  const doctorJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. James Madrid',
    jobTitle: lang === 'es' ? 'Especialista en Medicina Deportiva' : 'Sports Medicine Specialist',
    worksFor: {
      '@type': 'MedicalBusiness',
      name: 'Dr. James Madrid - Medicina Deportiva',
    },
    medicalSpecialty: 'SportsMedicine',
    yearsOfExperience: 15,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorJsonLd) }}
      />
      
      <Header dictionary={dictionary} locale={lang} />
      
      <main>
        <HeroSection dictionary={dictionary} locale={lang} />
        <ProcessSection locale={lang} />
        <TreatmentsSection dictionary={dictionary} locale={lang} />
        <AboutSection dictionary={dictionary} />
        <TestimonialsSection dictionary={dictionary} />
        <FAQsSection dictionary={dictionary} />
        <ContactSection dictionary={dictionary} locale={lang} />
      </main>
      
      <Footer dictionary={dictionary} locale={lang} />
    </>
  );
}

