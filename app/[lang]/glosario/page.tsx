import { Metadata } from 'next';
import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import GlossaryPage from '@/components/GlossaryPage';

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const titleEs = 'Glosario de medicina del deporte y terapias regenerativas en Medellín';
  const titleEn = 'Glossary of sports medicine and regenerative therapies in Medellín';
  const descriptionEs =
    'Glosario para pacientes con definiciones claras de lesiones, dolor, terapias regenerativas, control de peso y rehabilitación en Medellín.';
  const descriptionEn =
    'Patient-friendly glossary with clear definitions of injuries, pain, regenerative therapies, weight management and rehabilitation in Medellín.';
  const baseUrl = 'https://drjamesmadrid.com';

  return {
    title: lang === 'es' ? titleEs : titleEn,
    description: lang === 'es' ? descriptionEs : descriptionEn,
    alternates: {
      canonical: `${baseUrl}/${lang}/glosario`,
      languages: {
        es: `${baseUrl}/es/glosario`,
        en: `${baseUrl}/en/glosario`,
      },
    },
  };
}

export default async function GlossaryRoute({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name:
          lang === 'es'
            ? '¿Cuál es el mejor tratamiento para la artrosis de rodilla sin cirugía?'
            : 'What is the best non-surgical treatment for knee osteoarthritis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'es'
              ? 'Depende de la evaluación clínica. Opciones como PRP, ácido hialurónico e infiltraciones pueden ayudar según cada caso.'
              : 'It depends on the clinical evaluation. Options like PRP, hyaluronic acid and infiltrations can help depending on each case.',
        },
      },
      {
        '@type': 'Question',
        name:
          lang === 'es'
            ? '¿En qué casos se recomienda el plasma rico en plaquetas (PRP)?'
            : 'When is platelet-rich plasma (PRP) recommended?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'es'
              ? 'Dolor tendinoso, lesiones musculares y artrosis leves a moderadas. Se valora según historia clínica y examen físico.'
              : 'Tendinous pain, muscle injuries and mild to moderate osteoarthritis. Assessed based on history and physical exam.',
        },
      },
      {
        '@type': 'Question',
        name:
          lang === 'es'
            ? '¿Cuánto peso se puede perder con el balón gástrico Allurion?'
            : 'How much weight can be lost with the Allurion gastric balloon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'es'
              ? 'Varía por paciente. El promedio reportado es del 10–15% del peso corporal con acompañamiento integral.'
              : 'It varies by patient. The reported average is 10–15% of body weight with comprehensive support.',
        },
      },
      {
        '@type': 'Question',
        name:
          lang === 'es'
            ? '¿Cuándo debo consultar a un médico del deporte?'
            : 'When should I see a sports medicine physician?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'es'
              ? 'Dolor o lesión por actividad física, bajo rendimiento, o si planeas iniciar un programa de ejercicios.'
              : 'Pain or injury from physical activity, low performance, or if you plan to start an exercise program.',
        },
      },
      {
        '@type': 'Question',
        name:
          lang === 'es'
            ? '¿Las terapias regenerativas duelen o requieren hospitalización?'
            : 'Do regenerative therapies hurt or require hospitalization?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lang === 'es'
              ? 'Generalmente son ambulatorias y bien toleradas. Según el procedimiento, se usa anestesia local.'
              : 'They are generally outpatient and well tolerated. Depending on the procedure, local anesthesia is used.',
        },
      },
    ],
  };

  const breadcrumbItems = [
    { label: lang === 'es' ? 'Inicio' : 'Home', href: `/${lang}` },
    { label: lang === 'es' ? 'Servicios' : 'Services', href: `/${lang}#tratamientos` },
    { label: lang === 'es' ? 'Glosario' : 'Glossary' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header dictionary={dictionary} locale={lang} />
      <main className="pt-20">
        <div className="bg-gray-50 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <GlossaryPage locale={lang} />
      </main>
      <Footer dictionary={dictionary} locale={lang} />
    </>
  );
}


