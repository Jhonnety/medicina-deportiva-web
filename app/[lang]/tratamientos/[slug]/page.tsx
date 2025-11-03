import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { TREATMENTS } from '@/lib/constants/treatments';
import treatmentContent from '@/lib/constants/treatment-content.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TreatmentHero from '@/components/TreatmentHero';
import TreatmentFAQs from '@/components/TreatmentFAQs';
import SymptomsShowcase from '@/components/SymptomsShowcase';

export async function generateStaticParams() {
  const paths = [];
  
  for (const locale of i18n.locales) {
    for (const treatment of TREATMENTS) {
      paths.push({
        lang: locale,
        slug: treatment.slug,
      });
    }
  }
  
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  if (!treatment) return {};

  const content = treatmentContent[slug as keyof typeof treatmentContent];
  if (!content) return {};

  const langContent = content[lang];
  const baseUrl = 'https://drjamesmadrid.com';

  return {
    title: langContent.metaTitle,
    description: langContent.metaDescription,
    keywords: [
      langContent.title,
      lang === 'es' ? 'Medellín Colombia' : 'Medellin Colombia',
      'Dr. James Madrid',
      lang === 'es' ? 'medicina deportiva' : 'sports medicine',
      lang === 'es' ? 'tratamiento regenerativo' : 'regenerative treatment',
    ],
    authors: [{ name: 'Dr. James Madrid' }],
    openGraph: {
      title: langContent.metaTitle,
      description: langContent.metaDescription,
      url: `${baseUrl}/${lang}/tratamientos/${slug}`,
      siteName: 'Dr. James Madrid',
      images: [
        {
          url: `${baseUrl}${treatment.image}`,
          width: 1200,
          height: 630,
          alt: langContent.title,
        },
      ],
      locale: lang === 'es' ? 'es_CO' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: langContent.metaTitle,
      description: langContent.metaDescription,
      images: [`${baseUrl}${treatment.image}`],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}/tratamientos/${slug}`,
      languages: {
        es: `${baseUrl}/es/tratamientos/${slug}`,
        en: `${baseUrl}/en/tratamientos/${slug}`,
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

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>;
}) {
  const { lang, slug } = await params;
  const dictionary = await getDictionary(lang);
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  
  if (!treatment) {
    notFound();
  }

  const content = treatmentContent[slug as keyof typeof treatmentContent];
  if (!content) {
    notFound();
  }

  const langContent = content[lang];

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: langContent.title,
    description: langContent.metaDescription,
    procedureType: 'Therapeutic',
    bodyLocation: {
      '@type': 'BodyPart',
      name: 'Joint',
    },
    preparation: langContent.whatIs.definition,
    followup: langContent.process.steps[2].description,
    howPerformed: langContent.whatIs.howWorks,
    provider: {
      '@type': 'Physician',
      name: 'Dr. James Madrid',
      medicalSpecialty: 'SportsMedicine',
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
        item: `https://drjamesmadrid.com/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: lang === 'es' ? 'Tratamientos' : 'Treatments',
        item: `https://drjamesmadrid.com/${lang}#tratamientos`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: langContent.title,
        item: `https://drjamesmadrid.com/${lang}/tratamientos/${slug}`,
      },
    ],
  };

  const breadcrumbItems = [
    { label: lang === 'es' ? 'Inicio' : 'Home', href: `/${lang}` },
    { label: lang === 'es' ? 'Tratamientos' : 'Treatments', href: `/${lang}#tratamientos` },
    { label: langContent.title },
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
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <TreatmentHero treatment={treatment} langContent={langContent} lang={lang} />

        {/* What Is Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: '#182121' }}>
                {langContent.whatIs.title}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                     style={{ borderColor: '#6ba5a5' }}>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3" style={{ color: '#182121' }}>
                    <svg className="w-6 h-6" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {lang === 'es' ? 'Definición' : 'Definition'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {langContent.whatIs.definition}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                     style={{ borderColor: '#6ba5a5' }}>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3" style={{ color: '#182121' }}>
                    <svg className="w-6 h-6" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {lang === 'es' ? 'Beneficio Fisiológico' : 'Physiological Benefit'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {langContent.whatIs.physiologicalBenefit}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                     style={{ borderColor: '#6ba5a5' }}>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3" style={{ color: '#182121' }}>
                    <svg className="w-6 h-6" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {lang === 'es' ? 'Cómo Funciona' : 'How It Works'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {langContent.whatIs.howWorks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms Showcase */}
        <SymptomsShowcase symptoms={langContent.symptoms.list} lang={lang} />

        {/* Results Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#182121' }}>
                {langContent.results.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {langContent.results.items.map((result, index) => (
                  <div key={index} className="text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-xl"
                       style={{ backgroundColor: 'rgba(107, 165, 165, 0.05)' }}>
                    <div className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#6ba5a5' }}>
                      {result.percentage}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#182121' }}>
                      {result.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#182121' }}>
                {langContent.process.title}
              </h2>
              <div className="space-y-6">
                {langContent.process.steps.map((step, index) => (
                  <div key={index} className="flex gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                           style={{ backgroundColor: '#6ba5a5' }}>
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#182121' }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection dictionary={dictionary} locale={lang} />

        {/* FAQs Section */}
        <TreatmentFAQs faqs={langContent.faqs} title={dictionary.faqs.title} />

        {/* Contact Section */}
        <ContactSection dictionary={dictionary} locale={lang} />
      </main>

      <Footer dictionary={dictionary} locale={lang} />
    </>
  );
}

