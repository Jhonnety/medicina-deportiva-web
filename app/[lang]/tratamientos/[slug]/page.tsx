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
        <section className="relative section-padding overflow-hidden"
                 style={{ 
                   background: 'linear-gradient(135deg, #283838 0%, #1a2626 50%, #283838 100%)'
                 }}>
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5"
                 style={{ background: 'radial-gradient(circle, rgba(107, 165, 165, 0.3) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-5"
                 style={{ background: 'radial-gradient(circle, rgba(107, 165, 165, 0.3) 0%, transparent 70%)' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header with Badge */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                     style={{ backgroundColor: 'rgba(107, 165, 165, 0.15)' }}>
                  <svg className="w-5 h-5" style={{ color: '#6ba5a5' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: '#6ba5a5' }}>
                    {lang === 'es' ? 'Beneficios Reales' : 'Real Benefits'}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold !text-white mb-4">
                  {langContent.results.title}
                </h2>
                <p className="text-xl !text-white/80 max-w-2xl mx-auto">
                  {lang === 'es' 
                    ? 'Tu vida puede cambiar, estos son los resultados que puedes alcanzar' 
                    : 'Your life can change, these are the results you can achieve'}
                </p>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {langContent.results.items.map((result, index) => (
                  <div key={index} 
                       className="group relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl 
                                  hover:shadow-[0_20px_60px_rgba(107,165,165,0.4)] 
                                  hover:scale-105 transition-all duration-500 border border-white/20
                                  overflow-hidden">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6ba5a5] to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center 
                                      shadow-lg group-hover:shadow-xl transition-all duration-300 
                                      group-hover:scale-110 group-hover:rotate-6"
                           style={{ backgroundColor: 'rgba(107, 165, 165, 0.15)' }}>
                        {index === 0 ? (
                          <svg className="w-8 h-8" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} 
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        ) : index === 1 ? (
                          <svg className="w-8 h-8" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} 
                                  d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} 
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300" 
                        style={{ color: '#182121' }}>
                      {result.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {result.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                         style={{ 
                           background: index === 0 
                             ? 'linear-gradient(90deg, rgba(107,165,165,0.8) 0%, rgba(107,165,165,0.4) 100%)'
                             : index === 1
                             ? 'linear-gradient(90deg, rgba(107,165,165,0.4) 0%, rgba(107,165,165,0.8) 50%, rgba(107,165,165,0.4) 100%)'
                             : 'linear-gradient(90deg, rgba(107,165,165,0.4) 0%, rgba(107,165,165,0.8) 100%)'
                         }} />
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-16 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: 'rgba(107, 165, 165, 0.2)' }}>
                      <svg className="w-6 h-6" style={{ color: '#6ba5a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold !text-white">
                      {lang === 'es' 
                        ? '¿Listo para comenzar tu transformación?' 
                        : 'Ready to start your transformation?'}
                    </span>
                  </div>
                  <a href={`https://wa.me/573044386208?text=${encodeURIComponent(lang === 'es' ? '¡Hola! Me interesa el tratamiento y quiero más información' : 'Hello! I am interested in the treatment and would like more information')}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-6 py-3 rounded-full font-bold !text-white shadow-lg 
                                hover:shadow-2xl transform hover:scale-105 transition-all duration-300
                                flex items-center gap-2"
                     style={{ backgroundColor: '#6ba5a5' }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    {lang === 'es' ? 'Agenda tu Consulta' : 'Schedule Consultation'}
                  </a>
                </div>
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

