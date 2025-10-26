import { Treatment } from '@/lib/types';
import artrosis_5 from '@/assets/images/artrosis_5.jpeg';
import artrosis_6 from '@/assets/images/artrosis_6.jpeg';
import proloterapia_1 from '@/assets/images/proloterapia_1.jpeg';
import proloterapia_2 from '@/assets/images/proloterapia_2.jpeg';
import prp_1 from '@/assets/images/prp_1.jpeg';
import proloterapia_4 from '@/assets/images/proloterapia_4.jpg';
import adelgazar_1 from '@/assets/images/adelgazar_1.png';
import diagnostico_ecoguiado_1 from '@/assets/images/diagnostico_ecoguiado_1.png';

export const TREATMENTS: Treatment[] = [
  {
    id: '1',
    slug: 'tratamiento-artrosis',
    title: 'Tratamiento de Artrosis',
    description: 'Terapias regenerativas para aliviar el dolor articular y mejorar la movilidad',
    benefits: ['Reducción del dolor', 'Mejora de movilidad', 'Evita cirugía mayor'],
    image: artrosis_6,
  },
  {
    id: '2',
    slug: 'proloterapia',
    title: 'Proloterapia',
    description: 'Estimulación natural del proceso de curación de ligamentos y tendones',
    benefits: ['Regeneración natural', 'Sin cirugía', 'Resultados duraderos'],
    image:  proloterapia_4
  },
  {
    id: '3',
    slug: 'plasma-rico-plaquetas',
    title: 'Plasma Rico en Plaquetas (PRP)',
    description: 'Uso de factores de crecimiento de tu propia sangre para acelerar la curación',
    benefits: ['100% natural', 'Sin efectos secundarios', 'Recuperación rápida'],
    image: prp_1
  },
  {
    id: '4',
    slug: 'lesiones-deportivas',
    title: 'Lesiones Deportivas',
    description: 'Diagnóstico y tratamiento especializado para atletas y personas activas',
    benefits: ['Retorno rápido al deporte', 'Prevención de recaídas', 'Rehabilitación integral'],
    image: artrosis_5,
  },
  {
    id: '5',
    slug: 'diagnostico-ecoguiado',
    title: 'Diagnóstico Ecoguiado',
    description: 'Diagnóstico preciso mediante ultrasonido de alta resolución',
    benefits: ['Precisión máxima', 'Sin radiación', 'Resultados inmediatos'],
    image: diagnostico_ecoguiado_1
  },
  {
    id: '6',
    slug: 'programa-adelgazamiento',
    title: 'Programa de Adelgazamiento',
    description: 'Plan integral para pérdida de peso saludable y sostenible',
    benefits: ['Seguimiento médico', 'Planes personalizados', 'Resultados duraderos'],
    image: adelgazar_1
  },
];


