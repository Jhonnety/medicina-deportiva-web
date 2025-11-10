import { Treatment } from '@/lib/types';
// Nuevas imágenes (desktop). De momento se usan también en mobile.
import treatment_stem_cells_desktop_1 from '@/assets/images/treaments/treatment_stem_cells_desktop_1.jpg';
import treatment_exosomes_desktop_1 from '@/assets/images/treaments/treatment_exosomes_desktop_1.jpg';
import treatment_platelet_rich_plasma_desktop_1 from '@/assets/images/treaments/treatment_platelet_rich_plasma_desktop_1.jpg';
import treatment_hyaluronic_acid_desktop_2 from '@/assets/images/treaments/treatment_hyaluronic_acid_desktop_2.jpg';
import treatment_hyaluronic_acid_mobile_2 from '@/assets/images/treaments/treatment_hyaluronic_acid_mobile_2.jpg';
import treatment_conventional_infiltration_desktop_1 from '@/assets/images/treaments/treatment_conventional_infiltration_desktop_1.jpeg';
import treatment_serum_therapy_desktop_1 from '@/assets/images/treaments/treatment_serum_therapy_desktop_1.jpg';
import treatment_serum_therapy_mobile_1 from '@/assets/images/treaments/treatment_serum_therapy_mobile_1.jpg';
import treatment_high_performance_sports_mobile_1 from '@/assets/images/treaments/treatment_high_performance_sports_mobile_1.jpg';
import treatment_platelet_rich_plasma_mobile_1 from '@/assets/images/treaments/treatment_platelet_rich_plasma_mobile_1.jpg';
import treatment_weight_loss_program_desktop_1 from '@/assets/images/treaments/treatment_weight_loss_program_desktop_1.png';
import treatment_high_performance_sports_desktop_1 from '@/assets/images/treaments/treatment_high_performance_sports_desktop_1.png';

export const TREATMENTS: Treatment[] = [
  {
    id: '1',
    slug: 'celulas-madre-mesenquimales',
    title: 'Células Madre Mesenquimales',
    description: 'Células totipotenciales con capacidad de convertir tejido enfermo en sano',
    benefits: ['Regeneración total', 'Autólogas o alogénicas', 'Tratamiento avanzado'],
    image: treatment_stem_cells_desktop_1,
    mobileImage: treatment_stem_cells_desktop_1,
    mobileImagePosition: 'center', // Prioriza la parte superior de la imagen en mobile
  },
  {
    id: '2',
    slug: 'exosomas',
    title: 'Exosomas',
    description: 'Vesículas extraídas de células madre con microRNA, proteínas y factores de crecimiento',
    benefits: ['Alta concentración', 'Regeneración celular', 'Tecnología avanzada'],
    image: treatment_exosomes_desktop_1,
    mobileImage: treatment_exosomes_desktop_1,
    mobileImagePosition: 'center', // Centra el contenido de la imagen en mobile
  },
  {
    id: '3',
    slug: 'plasma-rico-plaquetas',
    title: 'Plasma Rico en Plaquetas (PRP)',
    description: 'Fracción de plasma con concentración superior de plaquetas y altos niveles de factores de crecimiento',
    benefits: ['100% autólogo', 'Factores de crecimiento', 'Recuperación rápida'],
    image: treatment_platelet_rich_plasma_desktop_1,
    mobileImage: treatment_platelet_rich_plasma_mobile_1,
    mobileImagePosition: 'center', // Prioriza la parte inferior de la imagen en mobile
  },
  {
    id: '4',
    slug: 'acido-hialuronico',
    title: 'Ácido Hialurónico',
    description: 'Lubricante articular que acelera la cicatrización y fomenta la producción de colágeno',
    benefits: ['Lubricación articular', 'Efecto analgésico', 'Estimula colágeno'],
    image: treatment_hyaluronic_acid_desktop_2,
    mobileImage: treatment_hyaluronic_acid_mobile_2,
    mobileImagePosition: 'top', // Prioriza la parte superior de la imagen en mobile
  },
  {
    id: '5',
    slug: 'infiltracion-convencional',
    title: 'Infiltración Convencional',
    description: 'Control de inflamación mediante esteroides o biorreguladores con anestésicos locales',
    benefits: ['Control de inflamación', 'Alivio inmediato', 'Mínimamente invasivo'],
    image: treatment_conventional_infiltration_desktop_1,
    mobileImage: treatment_conventional_infiltration_desktop_1,
    mobileImagePosition: 'center', // Centra el contenido de la imagen en mobile
  },
  {
    id: '6',
    slug: 'sueroterapia',
    title: 'Sueroterapia',
    description: 'Fórmula personalizada por vía intravenosa para restaurar el equilibrio y bienestar',
    benefits: ['Personalizada', 'Restauración integral', 'Resultados inmediatos'],
    image: treatment_serum_therapy_desktop_1,
    mobileImage: treatment_serum_therapy_mobile_1,
    mobileImagePosition: 'top', // Prioriza la parte superior de la imagen en mobile
  },
  {
    id: '7',
    slug: 'programa-adelgazamiento',
    title: 'Programa de Adelgazamiento',
    description: 'Programa integral multidisciplinario para cambios permanentes en hábitos alimenticios y actividad física',
    benefits: ['Equipo multidisciplinario', 'Cambios permanentes', 'Manejo psicológico'],
    image: treatment_weight_loss_program_desktop_1,
    mobileImage: treatment_weight_loss_program_desktop_1,
    mobileImagePosition: 'top', // Prioriza la parte inferior de la imagen en mobile
  },
  {
    id: '8',
    slug: 'alto-rendimiento-deportivo',
    title: 'Alto Rendimiento Deportivo',
    description: 'Evaluación y manejo de deportistas élite y aficionados para prevenir y rehabilitar lesiones',
    benefits: ['Prevención de lesiones', 'Mejora de rendimiento', 'Condiciones seguras'],
    image: treatment_high_performance_sports_desktop_1,
    mobileImage: treatment_high_performance_sports_mobile_1,
    mobileImagePosition: 'top', // Centra el contenido de la imagen en mobile
  },
];


