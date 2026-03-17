import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nodeanalabs.com'),
  title: 'Nodeana Labs | Salesforce, AI, and Digital Consulting',
  description:
    'Nodeana Labs helps companies modernize operations, improve customer journeys, and scale with Salesforce, AI automation, and strategic consulting.',
  openGraph: {
    title: 'Nodeana Labs',
    description:
      'Salesforce architecture, AI automation, and consulting for modern growth teams.',
    url: 'https://www.nodeanalabs.com',
    siteName: 'Nodeana Labs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nodeana Labs',
    description:
      'Salesforce architecture, AI automation, and consulting for modern growth teams.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
