import type { Locale } from './config';

const dictionaries = {
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: Locale | string) => {
  const key = (locale === 'en' ? 'en' : 'es') as keyof typeof dictionaries;
  const loader = dictionaries[key];
  return loader();
};


