import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Locale } from '@/lib/i18n/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === 'es' ? 'Preguntas Frecuentes | Clínica del Movimiento' : 'Frequently Asked Questions | Clínica del Movimiento',
    description: lang === 'es' 
      ? 'Resuelve todas tus dudas sobre medicina deportiva, tratamientos, precios, seguros y ubicación.'
      : 'Answer all your questions about sports medicine, treatments, prices, insurance, and location.',
    alternates: {
      canonical: `https://clinicadelmovimiento.com/${lang}/faqs`,
    }
  };
}

export default async function FAQsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const breadcrumbItems = [
    { label: lang === 'es' ? 'Inicio' : 'Home', href: `/${lang}` },
    { label: lang === 'es' ? 'Preguntas Frecuentes' : 'FAQs' },
  ];

  const generalFaqsEs = [
    {
      q: "¿Qué es la medicina deportiva y quién puede beneficiarse?",
      a: "La medicina deportiva es una especialidad médica enfocada en prevenir, diagnosticar y tratar lesiones relacionadas con la actividad física. Tratamos desde deportistas de alto rendimiento hasta personas con actividades cotidianas que presentan molestias. Además, tenemos como objetivo prevenir la muerte súbita durante la actividad física, por eso analizamos el sistema cardiovascular. Por último, evaluamos de manera integral el sistema metabólico y tenemos las competencias para ayudar al paciente al control del peso."
    },
    {
      q: "¿Necesito cita previa?",
      a: "Trabajamos con cita previa para garantizar atención personalizada. Contáctanos por WhatsApp al +57 304 438 62 08 y haremos lo posible por atenderte el mismo día. Contamos con la modalidad virtual y presencial para agendamiento de acuerdo a la necesidad. Modalidad muy útil para pacientes que viven fuera de Medellín, útil para citas iniciales y seguimiento."
    },
    {
      q: "¿Cuántas sesiones necesito?",
      a: "Depende de tu condición específica. Algunas condiciones mejoran en 2-4 sesiones, mientras que lesiones complejas pueden requerir 8-12 sesiones. El Dr. Madrid te dará un estimado en la primera consulta."
    },
    {
      q: "¿Los tratamientos requieren cirugía?",
      a: "No, realizamos tratamiento médico con células madre, exosomas, péptidos, plasma rico en plaquetas, ácido hialurónico, medicina funcional y convencional. Utilizamos técnicas de fisioterapia avanzada, tales como: ondas de choque y medicina hiperbárica."
    },
    {
      q: "¿Dónde están ubicados?",
      a: "Estamos en Torre Medical, El Poblado, Medellín. Zona accesible con parqueadero, cerca del Metro Estación Poblado. Calle 7 #39-107, Torre Medical, Consultorio 1009."
    },
    {
      q: "¿Aceptan seguros médicos?",
      a: "Solo Sura pólizas y Coomeva medicina prepagada."
    },
    {
      q: "¿Cuánto vale la consulta?",
      a: "Cita particular el costo es de $253.000 e incluye una revisión gratuita antes del mes."
    },
    {
      q: "¿Atienden por las pólizas? ¿Cuáles?",
      a: "Si , tenemos convenio con póliza de Sura y Coomeva Medicina Prepagada."
    },
    {
      q: "¿Qué incluye la consulta particular?",
      a: "Entrevista, examen físico, revisión de exámenes (ecografías, radiografías, resonancias, entre otros), diagnóstico, plan de tratamiento y cita de revisión sin costo antes del mes."
    },
    {
      q: "¿Después del tratamiento se hincha la rodilla?",
      a: "Los tratamientos causan una respuesta inflamatoria controlada, que es justamente lo que estimula la reparación del tejido. Por eso, durante los primeros días pueden aparecer: Hinchazón leve a moderada, calor local, molestia o sensación de presión, dolor al mover la articulación. Esto suele durar entre 2 y 5 días, aunque en algunas personas puede prolongarse hasta una semana."
    },
    {
      q: "¿Especialidades del doctor?",
      a: "Médico Deportólogo especialista en medicina regenerativa."
    },
    {
      q: "¿Qué enfermedades trata el doctor?",
      a: "Artrosis, lesiones deportivas, alto rendimiento deportivo, obesidad y fibromialgia."
    },
    {
      q: "¿Los tratamientos tienen garantía?",
      a: "Ninguno de los tratamientos con medicina biológica ofrece garantía de resultado. Pueden ayudar a reducir el dolor o mejorar la función en algunos casos, pero la respuesta depende de cada persona y del estado de la articulación."
    },
    {
      q: "¿Puedo hacer ejercicio al día siguiente?",
      a: "No, se recomienda realizar ejercicio de 7 a 30 días después, dependiendo el diagnóstico y la evolución."
    },
    {
      q: "¿Me puedo infiltrar las dos rodillas el mismo día?",
      a: "Si, pero genera gran incapacidad, lo recomendado es infiltrar una rodilla y a la semana siguiente infiltrar la otra."
    },
    {
      q: "¿Tengo que pagar todo el tratamiento de una?",
      a: "No, el paciente puede cancelar por sesión realizada."
    },
    {
      q: "¿Qué cubre la póliza?",
      a: "La póliza cubre los honorarios médicos, el paciente debe cancelar el copago correspondiente a su plan, los medicamentos o productos biológicos a utilizar en el procedimiento."
    },
    {
      q: "¿Medios de pago?",
      a: "Tenemos todos los medios de pago, para uso del datáfono tiene un costo adicional del 3.2% y para link de Epayco del 6.25% sobre el valor total del pago."
    },
    {
      q: "¿Costo de los tratamientos?",
      a: "El costo depende de los diagnósticos del paciente y el tratamiento a utilizar. El día de la consulta de valoración el doctor orienta al paciente sobre el tratamiento más indicado para su caso y en base a esto se le envía una cotización."
    },
    {
      q: "¿Dónde puedo enviar los resultados de los exámenes?",
      a: "WhatsApp al +57 304 438 62 08 o Correo electrónico consultoriomedicodrjamesmadrid@gmail.com"
    },
    {
      q: "¿Cómo puedo enviar los resultados de los exámenes?",
      a: "El paciente los puede enviar en medio digital de fácil visualización, descargados en su solo archivo PDF y con su respectiva lectura (si corresponde)."
    },
    {
      q: "¿Cómo debo ir a consulta?",
      a: "Con ropa deportiva cómoda, que facilite el examen físico."
    },
    {
      q: "¿Debo ir acompañado a consulta?",
      a: "Si, en especial si eres menor de edad, adulto mayor o tienes alguna condición medica que amerite el acompañamiento."
    },
    {
      q: "¿Puedo usar mi celular en la consulta?",
      a: "El uso de celular no está permitido durante la consulta médica. Esta medida tiene como finalidad asegurar la adecuada prestación del servicio, preservar la confidencialidad de la información y mantener un ambiente de atención óptimo. Además, es una estrategia para disminuir los fómites que son considerados focos de contaminación."
    }
  ];

  const generalFaqsEn = [
    {
      q: "What is sports medicine and who can benefit?",
      a: "Sports medicine is a medical specialty focused on preventing, diagnosing, and treating injuries related to physical activity. We treat everyone from high-performance athletes to individuals with daily activity discomfort. Additionally, we aim to prevent sudden death during physical activity by analyzing the cardiovascular system. Finally, we comprehensively evaluate the metabolic system and are qualified to assist patients with weight control."
    },
    {
      q: "Do I need an appointment?",
      a: "We work by appointment to guarantee personalized attention. Contact us via WhatsApp at +57 304 438 62 08, and we will do our best to see you the same day. We offer both virtual and in-person appointments depending on your needs. The virtual option is very useful for patients living outside Medellín for initial consultations and follow-ups."
    },
    {
      q: "How many sessions do I need?",
      a: "It depends on your specific condition. Some conditions improve in 2-4 sessions, while complex injuries may require 8-12 sessions. Dr. Madrid will provide an estimate during the first consultation."
    },
    {
      q: "Do treatments require surgery?",
      a: "No, we perform medical treatments using stem cells, exosomes, peptides, platelet-rich plasma (PRP), hyaluronic acid, and functional and conventional medicine. We use advanced physiotherapy techniques such as shock waves and hyperbaric medicine."
    },
    {
      q: "Where are you located?",
      a: "We are located at Torre Medical, El Poblado, Medellín. An accessible area with parking, near the Poblado Metro Station. Calle 7 #39-107, Torre Medical, Office 1009."
    },
    {
      q: "Do you accept medical insurance?",
      a: "We only accept Sura policies and Coomeva prepaid medicine."
    },
    {
      q: "How much does the consultation cost?",
      a: "The private consultation cost is COP $253,000 and includes a free follow-up visit within the month."
    },
    {
      q: "Do you see patients with insurance policies? Which ones?",
      a: "Yes, we have agreements with Sura policies and Coomeva Prepaid Medicine."
    },
    {
      q: "What does the private consultation include?",
      a: "Interview, physical examination, review of tests (ultrasounds, X-rays, MRIs, etc.), diagnosis, treatment plan, and a free follow-up appointment within the month."
    },
    {
      q: "Does the knee swell after treatment?",
      a: "Treatments cause a controlled inflammatory response, which stimulates tissue repair. Therefore, during the first few days, you may experience: mild to moderate swelling, local heat, discomfort or pressure sensation, and pain when moving the joint. This usually lasts between 2 and 5 days, although in some people it can extend up to a week."
    },
    {
      q: "Doctor's specialties?",
      a: "Sports Medicine Physician specialized in regenerative medicine."
    },
    {
      q: "What diseases does the doctor treat?",
      a: "Osteoarthritis, sports injuries, high-performance sports issues, obesity, and fibromyalgia."
    },
    {
      q: "Is there a guarantee for the treatments?",
      a: "None of the biological medicine treatments offer a guarantee of results. They can help reduce pain or improve function in some cases, but the response depends on each person and the state of the joint."
    },
    {
      q: "Can I exercise the next day?",
      a: "No, it is recommended to resume exercise 7 to 30 days later, depending on the diagnosis and progress."
    },
    {
      q: "Can I have both knees injected on the same day?",
      a: "Yes, but it causes significant disability. It is recommended to inject one knee and then the other the following week."
    },
    {
      q: "Do I have to pay for the entire treatment at once?",
      a: "No, the patient can pay per session performed."
    },
    {
      q: "What does the policy cover?",
      a: "The policy covers medical fees. The patient must pay the copayment corresponding to their plan, as well as the medications or biological products used in the procedure."
    },
    {
      q: "Payment methods?",
      a: "We accept all payment methods. Using a card terminal has an additional cost of 3.2%, and Epayco link payments have a 6.25% fee on the total payment value."
    },
    {
      q: "Cost of treatments?",
      a: "The cost depends on the patient's diagnosis and the treatment used. On the day of the evaluation consultation, the doctor guides the patient on the most indicated treatment for their case, and a quote is sent based on this."
    },
    {
      q: "Where can I send test results?",
      a: "WhatsApp to +57 304 438 62 08 or Email to consultoriomedicodrjamesmadrid@gmail.com"
    },
    {
      q: "How can I send test results?",
      a: "The patient can send them in an easily viewable digital format, downloaded as a single PDF file with the respective report (if applicable)."
    },
    {
      q: "How should I dress for the consultation?",
      a: "With comfortable sportswear that facilitates the physical examination."
    },
    {
      q: "Should I go accompanied to the consultation?",
      a: "Yes, especially if you are a minor, an older adult, or have a medical condition that warrants accompaniment."
    },
    {
      q: "Can I use my cell phone during the consultation?",
      a: "Cell phone use is not allowed during the medical consultation. This measure aims to ensure adequate service provision, preserve information confidentiality, and maintain an optimal care environment. Additionally, it is a strategy to reduce fomites considered sources of contamination."
    }
  ];

  const faqs = lang === 'es' ? generalFaqsEs : generalFaqsEn;

  // Schema.org FAQPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header dictionary={dictionary} locale={lang} />
      <main className="pt-24 lg:pt-32">
        {/* Hero de la sección */}
        <div className="bg-gray-50 py-12 mb-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4 text-[#182121]">
              {lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              {lang === 'es' 
                ? 'Resolvemos tus dudas sobre nuestros tratamientos, seguros, precios y procesos médicos.'
                : 'We answer your questions about our treatments, insurance, prices, and medical processes.'}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-24">
          <div className="max-w-4xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#182121] flex gap-3">
                  <span className="text-[#6ba5a5]">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8 border-l-2 border-gray-100">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ContactSection dictionary={dictionary} locale={lang} />
      </main>
      <Footer dictionary={dictionary} locale={lang} />
    </>
  );
}
