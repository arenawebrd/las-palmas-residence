import translationsData from './translations.json';
import siteDataJson from './site-data.json';

export type Language = 'es' | 'en';

export interface SiteData {
  site: {
    name: string;
    tagline: string;
    description: string;
  };
  contact: {
    phone: string;
    phoneRaw: string;
    email: string;
    address: string;
    coordinates: {
      lat: string;
      lng: string;
    };
  };
  social: {
    instagram: string;
    facebook: string;
    whatsapp: string;
  };
  ratings: {
    booking: {
      score: number;
      maxScore: number;
      source: string;
    };
  };
  stats: {
    beachDistance: string;
    villageDistance: string;
  };
  images: {
    hero: string;
    about: string;
    mapEmbed: string;
  };
  roomImages: string[];
  galleryImages: string[];
  airport: {
    code: string;
    name: string;
    distance: string;
  };
}

export function getTranslations(lang: Language) {
  return translationsData[lang];
}

export function getSiteData(): SiteData {
  return siteDataJson as SiteData;
}
