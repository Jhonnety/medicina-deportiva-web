import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { TREATMENTS } from '@/lib/constants/treatments';
import treatmentContent from '@/lib/constants/treatment-content.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactSection from '@/components/ContactSection';
import TestimonialsSection from '@/components/TestimonialsSection';

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
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {langContent.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {langContent.subtitle}
                </p>
                <a href="#contacto" className="btn btn-primary">
                  {dictionary.nav.schedule}
                </a>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={treatment.image}
                  alt={langContent.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {langContent.whatIs.title}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {lang === 'es' ? 'Definición' : 'Definition'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {langContent.whatIs.definition}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {lang === 'es' ? 'Beneficio Fisiológico' : 'Physiological Benefit'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {langContent.whatIs.physiologicalBenefit}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {lang === 'es' ? 'Cómo Funciona' : 'How It Works'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {langContent.whatIs.howWorks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                {langContent.symptoms.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {langContent.symptoms.list.map((symptom, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                    <svg
                      className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                {langContent.results.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {langContent.results.items.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-bold text-primary mb-3">
                      {result.percentage}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {result.title}
                    </h3>
                    <p className="text-gray-600">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                {langContent.process.title}
              </h2>
              <div className="space-y-8">
                {langContent.process.steps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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
        <TestimonialsSection dictionary={dictionary} />

        {/* FAQs Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                {dictionary.faqs.title}
              </h2>
              <div className="space-y-4">
                {langContent.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 group"
                  >
                    <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-100 transition-colors list-none">
                      <div className="flex items-center justify-between">
                        <span className="pr-8">{faq.q}</span>
                        <svg
                          className="w-6 h-6 text-primary flex-shrink-0 transform group-open:rotate-180 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection dictionary={dictionary} locale={lang} />
      </main>

      <Footer dictionary={dictionary} locale={lang} />
    </>
  );
}

