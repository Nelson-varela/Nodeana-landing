import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.nodeanalabs.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://www.nodeanalabs.com',
          es: 'https://www.nodeanalabs.com',
        },
      },
    },
  ];
}
