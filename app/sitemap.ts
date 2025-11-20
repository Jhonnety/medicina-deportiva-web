import { MetadataRoute } from 'next';
import { TREATMENTS } from '@/lib/constants/treatments';
import { i18n } from '@/lib/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clinicadelmovimiento.com';
  
  const routes: MetadataRoute.Sitemap = [];

  // Add main pages for each language
  i18n.locales.forEach((locale) => {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          ...Object.fromEntries(
            i18n.locales.map((lang) => [lang, `${baseUrl}/${lang}`])
          ),
          // x-default apunta a la versión en español por defecto
          'x-default': `${baseUrl}/es`,
        },
      },
    });

    // Add glossary page
    routes.push({
      url: `${baseUrl}/${locale}/glosario`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          ...Object.fromEntries(
            i18n.locales.map((lang) => [lang, `${baseUrl}/${lang}/glosario`])
          ),
          'x-default': `${baseUrl}/es/glosario`,
        },
      },
    });
  });

  // Add treatment pages for both languages
  TREATMENTS.forEach((treatment) => {
    i18n.locales.forEach((locale) => {
      routes.push({
        url: `${baseUrl}/${locale}/tratamientos/${treatment.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            ...Object.fromEntries(
              i18n.locales.map((lang) => [
                lang,
                `${baseUrl}/${lang}/tratamientos/${treatment.slug}`,
              ])
            ),
            'x-default': `${baseUrl}/es/tratamientos/${treatment.slug}`,
          },
        },
      });
    });
  });

  return routes;
}


