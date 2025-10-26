import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drjamesmadrid.com';
  
  const treatments = [
    'tratamiento-artrosis',
    'proloterapia',
    'plasma-rico-plaquetas',
    'lesiones-deportivas',
    'diagnostico-ecoguiado',
    'programa-adelgazamiento',
  ];

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    },
  ];

  // Add treatment pages for both languages
  treatments.forEach((treatment) => {
    routes.push({
      url: `${baseUrl}/es/tratamientos/${treatment}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es/tratamientos/${treatment}`,
          en: `${baseUrl}/en/tratamientos/${treatment}`,
        },
      },
    });

    routes.push({
      url: `${baseUrl}/en/tratamientos/${treatment}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es/tratamientos/${treatment}`,
          en: `${baseUrl}/en/tratamientos/${treatment}`,
        },
      },
    });
  });

  return routes;
}


