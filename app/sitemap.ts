import type { MetadataRoute } from 'next';

const BASE = 'https://www.nodeanalabs.com';

const sections = [
  { id: 'services',  priority: 0.9, changeFrequency: 'monthly'  as const },
  { id: 'why-us',   priority: 0.8, changeFrequency: 'monthly'  as const },
  { id: 'process',  priority: 0.8, changeFrequency: 'monthly'  as const },
  { id: 'faq',      priority: 0.7, changeFrequency: 'monthly'  as const },
  { id: 'contact',  priority: 0.9, changeFrequency: 'weekly'   as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const homepage = {
    url: BASE,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
    alternates: {
      languages: {
        en: BASE,
        es: BASE,
      },
    },
  };

  const sectionEntries = sections.map(({ id, priority, changeFrequency }) => ({
    url: `${BASE}/#${id}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: `${BASE}/#${id}`,
        es: `${BASE}/#${id}`,
      },
    },
  }));

  return [homepage, ...sectionEntries];
}
