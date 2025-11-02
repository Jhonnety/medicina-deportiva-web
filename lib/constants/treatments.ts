import { Treatment } from '@/lib/types';
import artrosis_5 from '@/assets/images/artrosis_5.jpeg';
import celulas_madre_mesenquimales from '@/assets/images/celulas_madre.jpg';
import exosomas from '@/assets/images/exosomas_1.jpg';
import artrosis_7 from '@/assets/images/artrosis_6.jpeg';
import artrosis_6 from '@/assets/images/artrosis_6.jpg';
import proloterapia_1 from '@/assets/images/proloterapia_1.jpeg';
import proloterapia_2 from '@/assets/images/proloterapia_2.jpeg';
import prp_1 from '@/assets/images/prp_1.jpeg';
import proloterapia_4 from '@/assets/images/proloterapia_4.jpg';
import adelgazar_1 from '@/assets/images/adelgazar_1.png';
import diagnostico_ecoguiado_1 from '@/assets/images/diagnostico_ecoguiado_1.png';
import alto_rendimiento_deportivo_1 from '@/assets/images/alto_rendimiento_deportivo_1.png';

export const TREATMENTS: Treatment[] = [
  {
    id: '1',
    slug: 'celulas-madre-mesenquimales',
    title: 'Células Madre Mesenquimales',
    description: 'Células totipotenciales con capacidad de convertir tejido enfermo en sano',
    benefits: ['Regeneración total', 'Autólogas o alogénicas', 'Tratamiento avanzado'],
    image: celulas_madre_mesenquimales,
  },
  {
    id: '2',
    slug: 'exosomas',
    title: 'Exosomas',
    description: 'Vesículas extraídas de células madre con microRNA, proteínas y factores de crecimiento',
    benefits: ['Alta concentración', 'Regeneración celular', 'Tecnología avanzada'],
    image: exosomas
  },
  {
    id: '3',
    slug: 'plasma-rico-plaquetas',
    title: 'Plasma Rico en Plaquetas (PRP)',
    description: 'Fracción de plasma con concentración superior de plaquetas y altos niveles de factores de crecimiento',
    benefits: ['100% autólogo', 'Factores de crecimiento', 'Recuperación rápida'],
    image: artrosis_6
  },
  {
    id: '4',
    slug: 'acido-hialuronico',
    title: 'Ácido Hialurónico',
    description: 'Lubricante articular que acelera la cicatrización y fomenta la producción de colágeno',
    benefits: ['Lubricación articular', 'Efecto analgésico', 'Estimula colágeno'],
    image: prp_1,
  },
  {
    id: '5',
    slug: 'infiltracion-convencional',
    title: 'Infiltración Convencional',
    description: 'Control de inflamación mediante esteroides o biorreguladores con anestésicos locales',
    benefits: ['Control de inflamación', 'Alivio inmediato', 'Mínimamente invasivo'],
    image: proloterapia_2,
  },
  {
    id: '6',
    slug: 'sueroterapia',
    title: 'Sueroterapia',
    description: 'Fórmula personalizada por vía intravenosa para restaurar el equilibrio y bienestar',
    benefits: ['Personalizada', 'Restauración integral', 'Resultados inmediatos'],
    image: proloterapia_4
  },
  {
    id: '7',
    slug: 'programa-adelgazamiento',
    title: 'Programa de Adelgazamiento',
    description: 'Programa integral multidisciplinario para cambios permanentes en hábitos alimenticios y actividad física',
    benefits: ['Equipo multidisciplinario', 'Cambios permanentes', 'Manejo psicológico'],
    image: adelgazar_1
  },
  {
    id: '8',
    slug: 'alto-rendimiento-deportivo',
    title: 'Alto Rendimiento Deportivo',
    description: 'Evaluación y manejo de deportistas élite y aficionados para prevenir y rehabilitar lesiones',
    benefits: ['Prevención de lesiones', 'Mejora de rendimiento', 'Condiciones seguras'],
    image: alto_rendimiento_deportivo_1
  },
];


