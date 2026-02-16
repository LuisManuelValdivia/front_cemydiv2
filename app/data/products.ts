export type Product = {
  id: string;
  title: string;
  priceMXN: number;
  warranty?: string;
  requiresRx?: boolean;
  image: string;
  description?: string;
  category: 'Sillas de ruedas' | 'Ortesis' | 'Equipo médico' | 'Rehabilitación';
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Silla de ruedas plegable',
    priceMXN: 2500,
    warranty: '12 meses',
    requiresRx: false,
    image: '/silla-ruedas.jpeg',
    description: 'Silla de ruedas estándar, ligera y fácil de transportar.',
    category: 'Sillas de ruedas',
  },
  {
    id: '2',
    title: 'Muletas ajustables',
    priceMXN: 450,
    warranty: '6 meses',
    requiresRx: false,
    image: '/muletas.jpg',
    description: 'Par de muletas de aluminio con altura ajustable.',
    category: 'Rehabilitación',
  },
  {
    id: '3',
    title: 'Andadera con ruedas',
    priceMXN: 1200,
    warranty: '12 meses',
    requiresRx: false,
    image: '/andadera.jpg',
    description: 'Andadera plegable con ruedas delanteras.',
    category: 'Rehabilitación',
  },
  {
    id: '4',
    title: 'Rodillera ortopédica',
    priceMXN: 690,
    warranty: '3 meses',
    requiresRx: true,
    image: '/rodillera.jpg',
    description: 'Soporte de rodilla con estabilizadores.',
    category: 'Ortesis',
  },
  {
    id: '5',
    title: 'Cama Hospitalaria Manual',
    priceMXN: 12500,
    warranty: '24 meses',
    requiresRx: false,
    image: '/camahospitalaria.webp',
    description: 'Cama de 3 posiciones con barandales.',
    category: 'Equipo médico',
  },
  {
    id: '6',
    title: 'Concentrador de Oxígeno 5L',
    priceMXN: 18900,
    warranty: '12 meses',
    requiresRx: true,
    image: '/concentradoroxigeno.jpg',
    description: 'Equipo silencioso de oxígeno.',
    category: 'Equipo médico',
  },
  {
    id: '7',
    title: 'Bota Walker Neumática',
    priceMXN: 1800,
    warranty: '3 meses',
    requiresRx: false,
    image: '/botawalker.webp',
    description: 'Bota inmovilizadora con sistema de aire.',
    category: 'Ortesis',
  },
  {
    id: '8',
    title: 'Nebulizador de Compresor',
    priceMXN: 850,
    warranty: '12 meses',
    requiresRx: false,
    image: '/nebulizador.jpg',
    description: 'Nebulizador compacto para uso doméstico.',
    category: 'Equipo médico',
  },
  {
    id: '9',
    title: 'Bastón de 4 Apoyos',
    priceMXN: 350,
    warranty: '6 meses',
    requiresRx: false,
    image: '/baston.webp',
    description: 'Bastón con base ancha para mayor estabilidad.',
    category: 'Rehabilitación',
  },
];
