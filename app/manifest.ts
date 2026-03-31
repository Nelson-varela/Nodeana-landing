import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nodeana Labs',
    short_name: 'Nodeana',
    description: 'Salesforce, AI & Consulting for Growth Companies',
    start_url: '/',
    display: 'standalone',
    background_color: '#07111f',
    theme_color: '#07111f',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
