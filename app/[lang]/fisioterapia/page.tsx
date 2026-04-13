import { Metadata } from 'next';
import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactSection from '@/components/ContactSection';
import FisioterapiaHero from '@/components/FisioterapiaHero';
import FisioterapiaContent from '@/components/FisioterapiaContent';
import TestimonialsSection from '@/components/TestimonialsSection';
import FisioterapiaFAQs from '@/components/FisioterapiaFAQs';

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
  const content = dictionary.fisioterapia?.seo;
  const baseUrl = 'https://clinicadelmovimiento.com';

  return {
    title: content?.title || 'Fisioterapia Especializada | Dr. James Madrid',
    description: content?.description || 'Recupera tu calidad de vida con fisioterapia especializada en Medellín.',
    keywords: [
      lang === 'es' ? 'Fisioterapia Medellín' : 'Physical Therapy Medellin',
      lang === 'es' ? 'rehabilitación física' : 'physical rehabilitation',
      'Dr. James Madrid',
      lang === 'es' ? 'medicina deportiva' : 'sports medicine',
      lang === 'es' ? 'dolor articular' : 'joint pain',
    ],
    authors: [{ name: 'Dr. James Madrid' }],
    openGraph: {
      title: content?.title || 'Fisioterapia Especializada | Dr. James Madrid',
      description: content?.description || 'Recupera tu calidad de vida con fisioterapia especializada en Medellín.',
      url: `${baseUrl}/${lang}/fisioterapia`,
      siteName: 'Dr. James Madrid',
      images: [
        {
          url: `${baseUrl}/assets/images_fisioterapia/1_horizontal.png`,
          width: 1200,
          height: 630,
          alt: content?.title || 'Fisioterapia',
        },
      ],
      locale: lang === 'es' ? 'es_CO' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: content?.title,
      description: content?.description,
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/fisioterapia`,
      languages: {
        es: `${baseUrl}/es/fisioterapia`,
        en: `${baseUrl}/en/fisioterapia`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function FisioterapiaPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: dictionary.fisioterapia?.seo?.title,
    description: dictionary.fisioterapia?.seo?.description,
    procedureType: 'Therapeutic',
    provider: {
      '@type': 'MedicalClinic',
      name: 'Clínica del Movimiento - Dr. James Madrid',
      medicalSpecialty: 'Physiotherapy',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'es' ? 'Inicio' : 'Home',
        item: `https://clinicadelmovimiento.com/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: dictionary.fisioterapia?.nav_title || 'Fisioterapia',
        item: `https://clinicadelmovimiento.com/${lang}/fisioterapia`,
      },
    ],
  };

  const breadcrumbItems = [
    { label: lang === 'es' ? 'Inicio' : 'Home', href: `/${lang}` },
    { label: dictionary.fisioterapia?.nav_title || 'Fisioterapia' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header dictionary={dictionary} locale={lang} />

      <main className="pt-20">
        <div className="bg-gray-50 py-4 absolute w-full z-20">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <FisioterapiaHero dictionary={dictionary} locale={lang} />
        
        <FisioterapiaContent dictionary={dictionary} locale={lang} />

        <TestimonialsSection dictionary={dictionary} locale={lang} />

        <FisioterapiaFAQs dictionary={dictionary} locale={lang} />

        <ContactSection dictionary={dictionary} locale={lang} />
      </main>

      <Footer dictionary={dictionary} locale={lang} />
    </>
  );
}
