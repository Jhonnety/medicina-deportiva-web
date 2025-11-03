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
                
                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Botón principal - WhatsApp */}
                  <a
                    href="https://wa.me/573044386208"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    {dictionary.nav.schedule}
                  </a>

                  {/* Botón secundario - Solo en mobile */}
                  <a
                    href="tel:+573044386208"
                    className="sm:hidden inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {lang === 'es' ? 'Llamar' : 'Call'}
                  </a>
                </div>
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

