import rawMedia from './rawMedia.json';

export interface VideoItem {
  id: string;
  filename: string;
  src: string;
  sizeMb: number;
  title: string;
  tapeLabel: string;
  osdTimestamp: string;
  durationEst: string;
}

export interface ImageItem {
  id: string;
  filename: string;
  src: string;
  width: number;
  height: number;
  isUltra: boolean;
  isHd: boolean;
  aspect: 'landscape' | 'portrait';
  title: string;
  category: 'playones' | 'galvez' | 'musculo' | 'jdm_euro' | 'taller' | 'recortes';
  location: string;
  year: string;
}

export const OFFICIAL_AVATAR: string = rawMedia.avatar;

export const VIDEOS_INVENTORY: VideoItem[] = rawMedia.videos;

// Hero video: choose the 2.74MB or 2.87MB video with smooth quality
export const HERO_VIDEO: VideoItem = VIDEOS_INVENTORY[0];

// Categorize all 83 images with rich period context
const categoriesOrder: ('playones' | 'galvez' | 'musculo' | 'jdm_euro' | 'taller' | 'recortes')[] = [
  'playones',
  'galvez',
  'musculo',
  'jdm_euro',
  'taller',
  'recortes',
];

const locationsList = [
  'Shell Libertador & Alvear, Martínez',
  'Autódromo Gálvez, Recta 402m',
  'General Paz & Constituyentes',
  'Av. Bunge & Playa, Pinamar',
  'Costanera Norte frente a los Carritos',
  'Taller G-Works Racing, Avellaneda',
  'Panamericana & Acceso Tigre',
  'YPF Alcorta & Pampa, Belgrano',
  'Rectificadora de Motores San Martín',
  'Esso de San Isidro Bajo'
];

export const ALL_ARCHIVE_IMAGES: ImageItem[] = rawMedia.images.map((img, idx) => {
  const cat = categoriesOrder[idx % categoriesOrder.length];
  const loc = locationsList[idx % locationsList.length];
  const year = `199${4 + (idx % 6)}`;

  const numStr = String(idx + 1).padStart(2, '0');
  let title = `Registro de Archivo #${numStr}`;
  if (img.isUltra) {
    title = `Pliego de Gran Formato // Noche de Encuentro #${numStr}`;
  } else if (cat === 'playones') {
    title = `Playón de Estación // Encuentro Nocturno #${numStr}`;
  } else if (cat === 'galvez') {
    title = `Cajón de Largada 402m // Viernes del Gálvez #${numStr}`;
  } else if (cat === 'musculo') {
    title = `Fierro Nacional Enfierrado // Escudería #${numStr}`;
  } else if (cat === 'jdm_euro') {
    title = `Desembarco 90s (JDM & Euro) // Línea #${numStr}`;
  } else if (cat === 'taller') {
    title = `Búnker Mecánico // Tapa & Carburación #${numStr}`;
  } else {
    title = `Recorte Documental de Época // Archivo #${numStr}`;
  }

  return {
    ...img,
    aspect: img.aspect as 'landscape' | 'portrait',
    title,
    category: cat,
    location: loc,
    year
  };
});

// 4 Ultra HD Images for Hero and Spreads
export const ULTRA_HD_IMAGES: ImageItem[] = ALL_ARCHIVE_IMAGES.filter((i) => i.isUltra);

// 26 Curated Images for the Continuous 35mm Filmstrip
export const FILMSTRIP_IMAGES: ImageItem[] = ALL_ARCHIVE_IMAGES.slice(0, 26);
