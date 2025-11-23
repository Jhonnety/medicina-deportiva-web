'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroImageDesktop from '@/assets/images/team_desktop_1.png';
import heroImageMobile from '@/assets/images/team_mobile_1.png';
import { getWhatsAppLink } from '@/lib/constants/contact';

type Locale = 'es' | 'en';

type GlossaryCategory = 'all' | 'pain' | 'regenerative' | 'weight' | 'cardio';

type Term = {
  id: string;
  category: GlossaryCategory;
  title: { es: string; en: string };
  description: { es: string; en: string };
  links: Array<{
    label: { es: string; en: string };
    href: (lang: Locale) => string;
  }>;
  cta?: boolean;
};

interface GlossaryPageProps {
  locale: Locale;
}

const CATEGORIES: { key: GlossaryCategory; label: { es: string; en: string } }[] = [
  { key: 'all', label: { es: 'Todos', en: 'All' } },
  { key: 'pain', label: { es: 'Lesiones y dolor', en: 'Injuries and pain' } },
  { key: 'regenerative', label: { es: 'Terapias regenerativas', en: 'Regenerative therapies' } },
  { key: 'weight', label: { es: 'Control de peso', en: 'Weight management' } },
  { key: 'cardio', label: { es: 'Cardio y rehabilitación', en: 'Cardio and rehabilitation' } },
];

function buildTerms(): Term[] {
  const terms: Term[] = [
    // Dolor y lesiones
    {
      id: 'artrosis-rodilla',
      category: 'pain',
      title: { es: 'Artrosis de rodilla', en: 'Knee osteoarthritis' },
      description: {
        es: 'Desgaste del cartílago que causa dolor al caminar, rigidez matutina y limitación del movimiento.',
        en: 'Cartilage wear that causes pain when walking, morning stiffness and limited range of motion.',
      },
      links: [
        {
          label: { es: '👉 Ver tratamiento para artrosis de rodilla', en: '👉 See knee osteoarthritis treatment' },
          href: (lang) => `/${lang}/tratamientos/acido-hialuronico`,
        },
        {
          label: { es: '👉 Síntomas: dolor al caminar, rigidez', en: '👉 Symptoms: pain when walking, stiffness' },
          href: (lang) => `/${lang}#sintomas`,
        },
      ],
    },
    {
      id: 'lesion-ligamento-rodilla',
      category: 'pain',
      title: { es: 'Lesión de ligamento de rodilla', en: 'Knee ligament injury' },
      description: {
        es: 'Daño en los ligamentos (LCA/LCP/LCM/LCL) por torsiones o impactos. Rehabilitación guiada.',
        en: 'Ligament damage (ACL/PCL/MCL/LCL) due to twists or impacts. Guided rehabilitation.',
      },
      links: [
        {
          label: { es: '👉 Rehabilitación deportiva', en: '👉 Sports rehabilitation' },
          href: (lang) => `/${lang}/tratamientos/alto-rendimiento-deportivo`,
        },
        {
          label: { es: '👉 Medicina del deporte', en: '👉 Sports medicine' },
          href: (lang) => `/${lang}`,
        },
      ],
    },
    {
      id: 'tendinitis-hombro',
      category: 'pain',
      title: { es: 'Tendinitis de hombro', en: 'Shoulder tendinitis' },
      description: {
        es: 'Inflamación de los tendones del manguito rotador. Dolor al elevar el brazo o por la noche.',
        en: 'Inflammation of the rotator cuff tendons. Pain raising the arm or at night.',
      },
      links: [
        {
          label: { es: '👉 Manejo del dolor / infiltraciones', en: '👉 Pain management / infiltrations' },
          href: (lang) => `/${lang}/tratamientos/infiltracion-convencional`,
        },
      ],
    },

    // Regenerativas
    {
      id: 'prp',
      category: 'regenerative',
      title: { es: 'Plasma rico en plaquetas (PRP)', en: 'Platelet-Rich Plasma (PRP)' },
      description: {
        es: 'Concentrado autólogo de plaquetas con factores de crecimiento para acelerar la recuperación.',
        en: 'Autologous platelet concentrate with growth factors to accelerate recovery.',
      },
      links: [
        {
          label: { es: '👉 Ver PRP en Medellín', en: '👉 See PRP in Medellín' },
          href: (lang) => `/${lang}/tratamientos/plasma-rico-plaquetas`,
        },
        {
          label: {
            es: '👉 Testimonios de pacientes',
            en: '👉 Patient testimonials',
          },
          href: (lang) => `/${lang}#testimonios`,
        },
      ],
    },
    {
      id: 'celulas-madre',
      category: 'regenerative',
      title: { es: 'Células madre mesenquimales', en: 'Mesenchymal stem cells' },
      description: {
        es: 'Terapia avanzada para regeneración de tejidos en articulaciones con dolor crónico.',
        en: 'Advanced therapy for tissue regeneration in joints with chronic pain.',
      },
      links: [
        {
          label: { es: '👉 Ver Células madre en Medellín', en: '👉 See Stem cells in Medellín' },
          href: (lang) => `/${lang}/tratamientos/celulas-madre-mesenquimales`,
        },
      ],
    },
    {
      id: 'exosomas',
      category: 'regenerative',
      title: { es: 'Exosomas', en: 'Exosomes' },
      description: {
        es: 'Vesículas con microRNA y proteínas que modulan la reparación celular.',
        en: 'Vesicles with microRNA and proteins that modulate cellular repair.',
      },
      links: [
        {
          label: { es: '👉 Ver Exosomas', en: '👉 See Exosomes' },
          href: (lang) => `/${lang}/tratamientos/exosomas`,
        },
      ],
    },
    {
      id: 'acido-hialuronico',
      category: 'regenerative',
      title: { es: 'Ácido hialurónico intraarticular', en: 'Intra-articular hyaluronic acid' },
      description: {
        es: 'Lubrica y mejora el dolor articular, especialmente en artrosis.',
        en: 'Lubricates and improves joint pain, especially in osteoarthritis.',
      },
      links: [
        {
          label: { es: '👉 Ver Ácido hialurónico', en: '👉 See Hyaluronic acid' },
          href: (lang) => `/${lang}/tratamientos/acido-hialuronico`,
        },
      ],
    },
    {
      id: 'infiltraciones-ecoguiadas',
      category: 'regenerative',
      title: { es: 'Infiltraciones ecoguiadas', en: 'Ultrasound-guided infiltrations' },
      description: {
        es: 'Técnica precisa para colocar el medicamento exactamente donde se necesita.',
        en: 'Precise technique to place medication exactly where needed.',
      },
      links: [
        {
          label: { es: '👉 Ver Infiltración convencional', en: '👉 See Conventional infiltration' },
          href: (lang) => `/${lang}/tratamientos/infiltracion-convencional`,
        },
      ],
    },

    // Peso y metabolismo
    {
      id: 'balon-gastrico',
      category: 'weight',
      title: { es: 'Balón gástrico ingerible (Allurion)', en: 'Ingestible gastric balloon (Allurion)' },
      description: {
        es: 'Dispositivo temporal que ayuda a reducir el apetito sin cirugía.',
        en: 'Temporary device that helps reduce appetite without surgery.',
      },
      links: [
        {
          label: { es: '👉 Balón gástrico sin cirugía en Medellín', en: '👉 Non-surgical gastric balloon in Medellín' },
          href: (lang) => `/${lang}/tratamientos/programa-adelgazamiento`,
        },
      ],
    },
    {
      id: 'programa-adelgazamiento',
      category: 'weight',
      title: { es: 'Programa de adelgazamiento médico', en: 'Medical weight loss program' },
      description: {
        es: 'Plan integral con apoyo nutricional, actividad física y control médico.',
        en: 'Comprehensive plan with nutritional support, physical activity and medical control.',
      },
      links: [
        {
          label: { es: '👉 Ver Programa de adelgazamiento', en: '👉 See Weight loss program' },
          href: (lang) => `/${lang}/tratamientos/programa-adelgazamiento`,
        },
      ],
    },
    {
      id: 'sobrepeso-obesidad',
      category: 'weight',
      title: { es: 'Sobrepeso y obesidad', en: 'Overweight and obesity' },
      description: {
        es: 'Condiciones crónicas que aumentan el riesgo cardiovascular y articular.',
        en: 'Chronic conditions that increase cardiovascular and joint risk.',
      },
      links: [
        {
          label: { es: '👉 Agenda valoración', en: '👉 Schedule consultation' },
          href: (lang: string) => getWhatsAppLink(lang),
        },
      ],
    },
    {
      id: 'resistencia-insulina',
      category: 'weight',
      title: { es: 'Resistencia a la insulina', en: 'Insulin resistance' },
      description: {
        es: 'Asociada a aumento de peso y fatiga. Requiere intervención médica y hábitos.',
        en: 'Associated with weight gain and fatigue. Requires medical intervention and habits.',
      },
      links: [
        {
          label: { es: '👉 Programa de adelgazamiento', en: '👉 Weight loss program' },
          href: (lang) => `/${lang}/tratamientos/programa-adelgazamiento`,
        },
      ],
    },

    // Cardio y rehabilitación
    {
      id: 'rehabilitacion-cardiaca',
      category: 'cardio',
      title: { es: 'Rehabilitación cardíaca', en: 'Cardiac rehabilitation' },
      description: {
        es: 'Programa supervisado para recuperar condición física tras eventos cardíacos.',
        en: 'Supervised program to regain fitness after cardiac events.',
      },
      links: [
        {
          label: { es: '👉 Agenda valoración', en: '👉 Schedule consultation' },
          href: (lang: string) => getWhatsAppLink(lang),
        },
      ],
    },
    {
      id: 'medicina-deporte',
      category: 'cardio',
      title: { es: 'Medicina del deporte', en: 'Sports medicine' },
      description: {
        es: 'Prevención, diagnóstico y manejo no quirúrgico de lesiones y rendimiento.',
        en: 'Prevention, diagnosis and non-surgical management of injuries and performance.',
      },
      links: [
        {
          label: { es: '👉 Chequeo médico deportivo', en: '👉 Sports medical check-up' },
          href: (lang) => `/${lang}`,
        },
      ],
    },
    {
      id: 'alto-rendimiento',
      category: 'cardio',
      title: { es: 'Alto rendimiento deportivo', en: 'High-performance sports' },
      description: {
        es: 'Evaluación y manejo de deportistas élite y aficionados para optimizar su rendimiento.',
        en: 'Evaluation and management of elite and amateur athletes to optimize performance.',
      },
      links: [
        {
          label: { es: '👉 Ver Alto rendimiento', en: '👉 See High performance' },
          href: (lang) => `/${lang}/tratamientos/alto-rendimiento-deportivo`,
        },
      ],
    },
    {
      id: 'hipertension-arterial',
      category: 'cardio',
      title: { es: 'Hipertensión arterial', en: 'Hypertension' },
      description: {
        es: 'Presión elevada que requiere control médico y cambios de estilo de vida.',
        en: 'High blood pressure requiring medical control and lifestyle changes.',
      },
      links: [
        {
          label: { es: '👉 Agenda valoración', en: '👉 Schedule consultation' },
          href: (lang: string) => getWhatsAppLink(lang),
        },
      ],
    },
    {
      id: 'enfermedad-coronaria',
      category: 'cardio',
      title: { es: 'Enfermedad coronaria', en: 'Coronary artery disease' },
      description: {
        es: 'Afecta arterias del corazón. Rehabilitación y control de factores de riesgo.',
        en: 'Affects heart arteries. Rehabilitation and risk factor control.',
      },
      links: [
        {
          label: { es: '👉 Rehabilitación cardíaca', en: '👉 Cardiac rehabilitation' },
          href: (lang: string) => getWhatsAppLink(lang),
        },
      ],
    },
    {
      id: 'sincope-vasovagal',
      category: 'cardio',
      title: { es: 'Síncope vasovagal', en: 'Vasovagal syncope' },
      description: {
        es: 'Desmayo por respuesta del nervio vago. Requiere evaluación médica.',
        en: 'Fainting due to vagal response. Requires medical evaluation.',
      },
      links: [
        {
          label: { es: '👉 Agenda valoración', en: '👉 Schedule consultation' },
          href: (lang: string) => getWhatsAppLink(lang),
        },
      ],
    },
  ];
  return terms;
}

export default function GlossaryPage({ locale }: GlossaryPageProps) {
  const lang = (locale ?? 'es') as Locale;
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<GlossaryCategory>('all');

  const terms = useMemo(() => buildTerms(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return terms.filter((t) => {
      const byCategory = category === 'all' || t.category === category;
      if (!byCategory) return false;
      if (!q) return true;
      const title = t.title[lang].toLowerCase();
      const desc = t.description[lang].toLowerCase();
      return title.includes(q) || desc.includes(q);
    });
  }, [terms, category, query, lang]);

  const t = {
    heroTitle:
      lang === 'es'
        ? 'Glosario de medicina del deporte y terapias regenerativas en Medellín'
        : 'Glossary of sports medicine and regenerative therapies in Medellín',
    heroIntro:
      lang === 'es'
        ? 'Este glosario está pensado para pacientes: lenguaje claro, explicaciones simples y enlaces directos a servicios. Aquí encontrarás conceptos clave de dolor, lesiones, terapias regenerativas, control de peso y rehabilitación para ayudarte a tomar decisiones informadas.'
        : 'This glossary is designed for patients: plain language, simple explanations and direct links to services. Find key concepts on pain, injuries, regenerative therapies, weight management and rehabilitation to help you make informed decisions.',
    searchTitle:
      lang === 'es'
        ? 'Encuentra rápidamente el término que buscas'
        : 'Quickly find the term you are looking for',
    searchPlaceholder:
      lang === 'es'
        ? 'Ej: artrosis, PRP, dolor de rodilla…'
        : 'Ex: osteoarthritis, PRP, knee pain…',
    valueTitle:
      lang === 'es'
        ? '¿Qué encontrarás en este glosario médico?'
        : 'What will you find in this medical glossary?',
    ctaTitle:
      lang === 'es'
        ? '¿Te reconoces en alguno de estos términos?'
        : 'Do you identify with any of these terms?',
    ctaBtn:
      lang === 'es' ? 'Agendar valoración en Medellín' : 'Schedule consultation in Medellín',
    localNote:
      lang === 'es'
        ? 'Consulta presencial en Medellín (El Poblado) y opción de telemedicina para otras ciudades.'
        : 'In-person consultation in Medellín (El Poblado) and telemedicine option for other cities.',
    valueBullets: [
      lang === 'es'
        ? 'Definiciones sencillas de términos que escucharás en consulta.'
        : 'Simple definitions of terms you will hear in consultation.',
      lang === 'es'
        ? 'Explicación de síntomas, tratamientos y programas (artrosis, PRP, células madre, balón gástrico, rehabilitación).'
        : 'Explanation of symptoms, treatments and programs (osteoarthritis, PRP, stem cells, gastric balloon, rehabilitation).',
      lang === 'es'
        ? 'Enlaces directos a los servicios y a la agenda de citas.'
        : 'Direct links to services and to the appointment schedule.',
    ],
    h2Pain:
      lang === 'es'
        ? 'Términos sobre dolor y lesiones musculoesqueléticas'
        : 'Terms on musculoskeletal pain and injuries',
    h2Reg:
      lang === 'es'
        ? 'Términos sobre terapias regenerativas'
        : 'Terms on regenerative therapies',
    h2Weight:
      lang === 'es'
        ? 'Términos sobre control de peso y metabolismo'
        : 'Terms on weight management and metabolism',
    h2Cardio:
      lang === 'es'
        ? 'Términos sobre corazón, rendimiento y rehabilitación'
        : 'Terms on heart, performance and rehabilitation',
    filtersAria: lang === 'es' ? 'Filtros de glosario' : 'Glossary filters',
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <header className="relative overflow-hidden rounded-3xl px-6 md:px-10 py-14 md:py-20 mb-16 shadow-xl">
          <div className="absolute inset-0" style={{ backgroundColor: '#1e2b2b' }} />
          {/* Decorative radial lights */}
          <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(107,165,165,0.35) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, rgba(107,165,165,0.45) 0%, transparent 70%)' }} />
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Copy */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                  style={{ backgroundColor: 'rgba(107,165,165,0.15)' }}>
                  <span className="text-sm font-semibold" style={{ color: '#6ba5a5' }}>
                    {locale === 'es' ? 'Glosario Médico' : 'Medical Glossary'}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 !text-white">
                  {t.heroTitle}
                </h1>
                <p className="text-lg md:text-xl leading-relaxed !text-white/85">
                  {t.heroIntro}
                </p>
              </div>
              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Mobile image */}
                  <div className="relative lg:hidden bg-[#1e2b2b] min-h-[340px] sm:min-h-[380px]">
                    <Image
                      src={heroImageMobile}
                      alt={lang === 'es'
                        ? 'Médico del deporte en consulta explicando tratamiento'
                        : 'Sports medicine physician in consultation explaining treatment'}
                      fill
                      className="object-contain object-bottom"
                      sizes="100vw"
                      priority
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                  {/* Desktop image */}
                  <div className="hidden lg:block relative bg-[#1e2b2b] lg:min-h-[520px] xl:min-h-[640px]">
                    <Image
                      src={heroImageDesktop}
                      alt={lang === 'es'
                        ? 'Médico del deporte en consulta explicando tratamiento'
                        : 'Sports medicine physician in consultation explaining treatment'}
                      fill
                      className="object-contain object-bottom"
                      sizes="50vw"
                      priority
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Search + Filters */}
        <section className="mb-20 pt-12 border-t" style={{ borderColor: 'rgba(107,165,165,0.15)' }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#182121' }}>
            {t.searchTitle}
          </h2>
          <div className="max-w-3xl">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2"
              style={{ borderColor: 'rgba(107,165,165,0.3)' }}
              aria-label={t.searchTitle}
            />
          </div>
          <div className="flex flex-wrap gap-3 mt-5" role="tablist" aria-label={t.filtersAria}>
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${category === c.key
                  ? '!text-white'
                  : 'text-gray-700 hover:text-[#6ba5a5]'
                  }`}
                style={{
                  backgroundColor: category === c.key ? '#6ba5a5' : 'transparent',
                  borderColor: 'rgba(107,165,165,0.3)',
                }}
                role="tab"
                aria-selected={category === c.key}
              >
                {c.label[lang]}
              </button>
            ))}
          </div>
        </section>

        {/* Value */}
        <section className="mb-20 pt-12 border-t" style={{ borderColor: 'rgba(107,165,165,0.15)' }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#182121' }}>
            {t.valueTitle}
          </h2>
          <p className="text-gray-700 mb-3">
            {lang === 'es'
              ? 'Este recurso te ahorra tiempo y te orienta con términos claros para entender mejor tus opciones.'
              : 'This resource saves you time and guides you with clear terms to better understand your options.'}
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {t.valueBullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>

        {/* Terms by category */}
        <section className="space-y-12">
          {/* Pain and injuries */}
          <div id="dolor-lesiones" className="pt-12 border-t" style={{ borderColor: 'rgba(107,165,165,0.15)' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#182121' }}>
              {t.h2Pain}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered
                .filter((x) => x.category === 'pain')
                .map((term) => (
                  <article key={term.id} className="rounded-2xl p-6 border shadow-sm" style={{ borderColor: 'rgba(107,165,165,0.2)' }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#182121' }}>
                      {term.title[lang]}
                    </h3>
                    <p className="text-gray-700 mb-3">{term.description[lang]}</p>
                    <div className="flex flex-col gap-2">
                      {term.links.map((lnk, i) => (
                        <Link key={i} href={lnk.href(lang)}>
                          <span className="text-[#6ba5a5] font-semibold hover:underline">{lnk.label[lang]}</span>
                        </Link>
                      ))}
                    </div>
                  </article>
                ))}
            </div>
          </div>

          {/* Regenerative */}
          <div id="regenerativas" className="pt-12 border-t" style={{ borderColor: 'rgba(107,165,165,0.15)' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#182121' }}>
              {t.h2Reg}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered
                .filter((x) => x.category === 'regenerative')
                .map((term) => (
                  <article key={term.id} className="rounded-2xl p-6 border shadow-sm" style={{ borderColor: 'rgba(107,165,165,0.2)' }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#182121' }}>
                      {term.title[lang]}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {term.description[lang]}{' '}
                      <span className="text-gray-600">
                        {lang === 'es'
                          ? 'Tratamiento regenerativo para articulaciones en Medellín / El Poblado.'
                          : 'Regenerative treatment for joints in Medellín / El Poblado.'}
                      </span>
                    </p>
                    <div className="flex flex-col gap-2">
                      {term.links.map((lnk, i) => (
                        <Link key={i} href={lnk.href(lang)}>
                          <span className="text-[#6ba5a5] font-semibold hover:underline">{lnk.label[lang]}</span>
                        </Link>
                      ))}
                    </div>
                  </article>
                ))}
            </div>
          </div>

          {/* Weight */}
          <div id="peso-metabolismo" className="pt-12 border-t" style={{ borderColor: 'rgba(107,165,165,0.15)' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#182121' }}>
              {t.h2Weight}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered
                .filter((x) => x.category === 'weight')
                .map((term) => (
                  <article key={term.id} className="rounded-2xl p-6 border shadow-sm" style={{ borderColor: 'rgba(107,165,165,0.2)' }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#182121' }}>
                      {term.title[lang]}
                    </h3>
                    <p className="text-gray-700 mb-3">{term.description[lang]}</p>
                    <div className="flex flex-col gap-2">
                      {term.links.map((lnk, i) => (
                        <Link key={i} href={lnk.href(lang)}>
                          <span className="text-[#6ba5a5] font-semibold hover:underline">{lnk.label[lang]}</span>
                        </Link>
                      ))}
                    </div>
                  </article>
                ))}
            </div>
          </div>

          {/* Cardio */}
          <div id="cardio-rehabilitacion" className="pt-12 border-t" style={{ borderColor: 'rgba(107,165,165,0.15)' }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#182121' }}>
              {t.h2Cardio}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered
                .filter((x) => x.category === 'cardio')
                .map((term) => (
                  <article key={term.id} className="rounded-2xl p-6 border shadow-sm" style={{ borderColor: 'rgba(107,165,165,0.2)' }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#182121' }}>
                      {term.title[lang]}
                    </h3>
                    <p className="text-gray-700 mb-3">{term.description[lang]}</p>
                    <div className="flex flex-col gap-2">
                      {term.links.map((lnk, i) => (
                        <Link key={i} href={lnk.href(lang)}>
                          <span className="text-[#6ba5a5] font-semibold hover:underline">{lnk.label[lang]}</span>
                        </Link>
                      ))}
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* CTA + Local SEO */}
        <section className="mt-20 pt-12 border-t" style={{ borderColor: 'rgba(107,165,165,0.15)' }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#182121' }}>
            {t.ctaTitle}
          </h2>
          <p className="text-gray-700 mb-4">
            {lang === 'es'
              ? 'Da el siguiente paso con un plan claro y basado en evidencia.'
              : 'Take the next step with a clear, evidence-based plan.'}
          </p>
          <a
            href="https://wa.me/573044386208"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            style={{ backgroundColor: '#6ba5a5' }}
          >
            {t.ctaBtn}
          </a>
          <p className="text-gray-600 mt-3">{t.localNote}</p>
        </section>

        {/* FAQs (simple list; JSON-LD se inyecta desde la página servidor) */}
        <section className="mt-20 pt-12 border-t" style={{ borderColor: 'rgba(107,165,165,0.15)' }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#182121' }}>
            {lang === 'es'
              ? 'Preguntas frecuentes sobre nuestros tratamientos'
              : 'Frequently asked questions about our treatments'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                qEs: '¿Cuál es el mejor tratamiento para la artrosis de rodilla sin cirugía?',
                qEn: 'What is the best non-surgical treatment for knee osteoarthritis?',
                aEs:
                  'Depende de la evaluación clínica. Opciones como PRP, ácido hialurónico e infiltraciones pueden ayudar según cada caso.',
                aEn:
                  'It depends on the clinical evaluation. Options like PRP, hyaluronic acid and infiltrations can help depending on each case.',
              },
              {
                qEs: '¿En qué casos se recomienda el plasma rico en plaquetas (PRP)?',
                qEn: 'When is platelet-rich plasma (PRP) recommended?',
                aEs:
                  'Dolor tendinoso, lesiones musculares y artrosis leves a moderadas. Se valora según historia clínica y examen físico.',
                aEn:
                  'Tendinous pain, muscle injuries and mild to moderate osteoarthritis. Assessed based on history and physical exam.',
              },
              {
                qEs: '¿Cuánto peso se puede perder con el balón gástrico Allurion?',
                qEn: 'How much weight can be lost with the Allurion gastric balloon?',
                aEs:
                  'Varía por paciente. El promedio reportado es del 10–15% del peso corporal con acompañamiento integral.',
                aEn:
                  'It varies by patient. The reported average is 10–15% of body weight with comprehensive support.',
              },
              {
                qEs: '¿Cuándo debo consultar a un médico del deporte?',
                qEn: 'When should I see a sports medicine physician?',
                aEs:
                  'Dolor o lesión por actividad física, bajo rendimiento, o si planeas iniciar un programa de ejercicios.',
                aEn:
                  'Pain or injury from physical activity, low performance, or if you plan to start an exercise program.',
              },
              {
                qEs: '¿Las terapias regenerativas duelen o requieren hospitalización?',
                qEn: 'Do regenerative therapies hurt or require hospitalization?',
                aEs:
                  'Generalmente son ambulatorias y bien toleradas. Según el procedimiento, se usa anestesia local.',
                aEn:
                  'They are generally outpatient and well tolerated. Depending on the procedure, local anesthesia is used.',
              },
            ].map((f, i) => (
              <article key={i} className="rounded-2xl p-6 border shadow-sm" style={{ borderColor: 'rgba(107,165,165,0.2)' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#182121' }}>
                  {lang === 'es' ? f.qEs : f.qEn}
                </h3>
                <p className="text-gray-700">{lang === 'es' ? f.aEs : f.aEn}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Final CTA sin imagen */}
        <section className="mt-20">
          <div className="relative overflow-hidden rounded-3xl shadow-xl p-8 md:p-12" style={{ backgroundColor: '#1e2b2b' }}>
            <div className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, rgba(107,165,165,0.55) 0%, transparent 70%)' }} />
            <div className="relative text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 !text-white">
                {lang === 'es'
                  ? '¿Listo para dar el siguiente paso?'
                  : 'Ready to take the next step?'}
              </h2>
              <p className="text-white/85 mb-6 max-w-3xl mx-auto">
                {lang === 'es'
                  ? 'Agenda tu valoración y recibe una guía clara y personalizada sobre el mejor manejo para tu caso.'
                  : 'Schedule your consultation and receive clear, personalized guidance on the best management for your case.'}
              </p>
              <a
                href={getWhatsAppLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                style={{ backgroundColor: '#6ba5a5' }}
                aria-label={lang === 'es' ? 'Agendar valoración por WhatsApp' : 'Schedule consultation via WhatsApp'}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                </svg>
                {lang === 'es' ? 'Agendar valoración' : 'Schedule consultation'}
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}


