export interface Episode {
  id: string; // YouTube video ID or unique slug
  episodeNumber: number | string;
  title: string;
  vehicle: string;
  owner: string;
  yearModel: string;
  category: string;
  youtubeId?: string;
  instagramUrl?: string;
  localThumbnail: string;
  osdTimestamp: string;
  shortDescription: string;
  fullChronicle: string[];
  specs: {
    label: string;
    value: string;
  }[];
  quote: string;
  featured?: boolean;
}

export interface ArchiveItem {
  id: string;
  title: string;
  category: 'all' | 'vhs' | 'armados' | 'kodak' | 'musculo' | 'jdm_euro';
  mediaType: 'image' | 'video';
  mediaSrc: string;
  youtubeId?: string;
  instagramUrl: string;
  osdTimestamp: string;
  location: string;
  story: string[];
  tags: string[];
  year: string;
}

export interface Spot {
  id: string;
  title: string;
  zone: string;
  peakHour: string;
  era: string;
  photo: string;
  osdTimestamp: string;
  coordinates: string;
  leadChronicle: string;
  rituals: string[];
  iconicCars: string[];
}

export interface CommunityTestimony {
  id: string;
  author: string;
  car: string;
  year: string;
  location: string;
  testimony: string;
}

export interface GalvezCategory {
  clase: string;
  name: string;
  timeRange: string;
  typicalCars: string;
  tuningRules: string;
  mythicRecord: string;
}
