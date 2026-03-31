import './globals.css';
import type { Metadata } from 'next';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';
import { Providers } from '@/components/Providers';

const SITE_URL = 'https://www.nodeanalabs.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Nodeana Labs | Salesforce, AI & Consulting for Growth Companies',
    template: '%s | Nodeana Labs',
  },

  description:
    'Nodeana Labs LLC is a Wyoming-based Salesforce and AI consulting firm helping US growth-stage companies modernize operations, automate workflows, and scale with confidence. Expert Salesforce architecture, AI automation, and senior-level strategic consulting.',

  keywords: [
    // English — core services
    'Salesforce consulting', 'Salesforce implementation', 'Salesforce partner',
    'AI consulting', 'AI automation', 'artificial intelligence consulting',
    'CRM consulting', 'digital transformation', 'business process automation',
    'Salesforce architect', 'Salesforce developer', 'Salesforce integration',
    'growth company consulting', 'B2B consulting', 'tech consulting',
    'workflow automation', 'operational consulting', 'revenue operations',
    'Salesforce Experience Cloud', 'Salesforce Flow automation',
    'AI agents', 'custom AI assistants', 'intelligent automation',
    'strategic consulting', 'technology strategy', 'systems planning',
    // English — AI automation (deep)
    'AI workflow automation', 'AI process automation', 'AI business automation',
    'artificial intelligence automation', 'AI-powered automation',
    'machine learning automation', 'LLM automation', 'generative AI automation',
    'AI operations', 'AIOps', 'AI-driven workflows', 'intelligent workflow automation',
    'no-code AI automation', 'AI integration services', 'AI implementation company',
    'enterprise AI automation', 'AI solutions for business', 'AI for B2B companies',
    'conversational AI', 'AI chatbot development', 'AI assistant development',
    'agentic AI', 'AI agents for business', 'autonomous AI agents',
    'AI productivity tools', 'AI operational efficiency', 'AI digital transformation',
    'predictive AI', 'AI decision support', 'AI data processing',
    'OpenAI integration', 'ChatGPT for business', 'GPT integration services',
    'AI API integration', 'AI software development', 'AI consulting firm USA',
    // English — Salesforce Flow (deep)
    'Salesforce Flow', 'Salesforce Flow builder', 'Salesforce Flow automation',
    'Salesforce process automation', 'Salesforce workflow automation',
    'Salesforce record-triggered flow', 'Salesforce scheduled flow',
    'Salesforce autolaunched flow', 'Salesforce screen flow',
    'Salesforce automation specialist', 'Salesforce Flow consultant',
    'replace Salesforce workflow rules', 'Salesforce process builder migration',
    'Salesforce CPQ', 'Salesforce Einstein', 'Salesforce Einstein AI',
    'Salesforce AI features', 'Salesforce Agentforce', 'Salesforce Data Cloud',
    // English — headhunting & talent
    'tech headhunting', 'Salesforce headhunting', 'technology talent acquisition',
    'Salesforce recruiter', 'AI talent recruitment', 'tech executive search',
    'Salesforce staffing', 'RevOps talent', 'digital operations recruitment',
    'senior tech placement', 'technology headhunter USA',
    // English — US / Wyoming
    'US Salesforce consulting firm', 'Wyoming LLC consulting',
    'American AI consulting company', 'United States Salesforce partner',
    'US-based digital transformation', 'remote Salesforce consulting US',
    'Salesforce consulting company USA', 'AI automation company USA',
    // Spanish — core services
    'consultoría Salesforce', 'implementación Salesforce', 'partner Salesforce',
    'consultoría de inteligencia artificial', 'automatización con IA',
    'automatizaciones con inteligencia artificial', 'automatización de procesos con IA',
    'consultoría CRM', 'transformación digital', 'automatización de procesos',
    'arquitecto Salesforce', 'desarrollador Salesforce', 'integración Salesforce',
    'consultoría empresarial', 'consultoría B2B', 'consultoría tecnológica',
    'agentes de IA', 'asistentes de IA personalizados', 'automatización inteligente',
    'consultoría estratégica', 'estrategia tecnológica', 'operaciones de negocio',
    'empresa de consultoría en Estados Unidos', 'empresa de IA en Estados Unidos',
    'consultoría Salesforce en inglés y español', 'IA para empresas en crecimiento',
    // Spanish — AI automation (deep)
    'automatización con inteligencia artificial', 'automatización de flujos con IA',
    'automatización empresarial con IA', 'IA para automatización de negocios',
    'soluciones de IA para empresas', 'implementación de IA empresarial',
    'inteligencia artificial aplicada', 'IA aplicada a negocios',
    'agentes de inteligencia artificial', 'agentes autónomos de IA',
    'asistentes virtuales con IA', 'chatbots con inteligencia artificial',
    'automatización robótica con IA', 'RPA con inteligencia artificial',
    'IA generativa para empresas', 'integración de IA generativa',
    'integración de ChatGPT empresarial', 'GPT para empresas',
    'modelos de lenguaje para negocios', 'LLM para empresas',
    'IA para operaciones empresariales', 'optimización con IA',
    'decisiones basadas en IA', 'análisis predictivo con IA',
    'flujos de trabajo inteligentes', 'procesos automatizados con IA',
    'eficiencia operativa con inteligencia artificial',
    'empresa de desarrollo de IA', 'desarrollo de software con IA',
    'transformación digital con IA', 'IA para startups',
    'IA para empresas B2B', 'IA para equipos de ventas',
    // Spanish — Salesforce Flow (deep)
    'Salesforce Flow', 'automatización con Salesforce Flow',
    'Salesforce Flow Builder en español', 'consultor Salesforce Flow',
    'automatización de procesos Salesforce', 'flujos Salesforce',
    'migración de Process Builder a Flow', 'Salesforce Einstein en español',
    'Salesforce Agentforce', 'Salesforce Data Cloud en español',
    'IA en Salesforce', 'inteligencia artificial en Salesforce',
    // Spanish — headhunting & talent
    'headhunting tecnológico', 'headhunting Salesforce', 'reclutamiento de talento tech',
    'búsqueda ejecutiva tecnología', 'reclutador Salesforce', 'cazatalentos tecnológico',
    'reclutamiento ingenieros de IA', 'talento RevOps', 'headhunting para startups',
    'selección de talento tecnológico', 'headhunter tech Estados Unidos',
  ],

  authors: [{ name: 'Nodeana Labs', url: SITE_URL }],
  creator: 'Nodeana Labs',
  publisher: 'Nodeana Labs LLC',

  alternates: {
    canonical: SITE_URL,
    languages: {
      'en': SITE_URL,
      'es': SITE_URL,
      'x-default': SITE_URL,
    },
  },

  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Nodeana Labs',
    title: 'Nodeana Labs | Salesforce, AI & Consulting for Growth Companies',
    description:
      'Expert Salesforce delivery, applied AI, and strategic consulting for companies building serious digital operations. Senior-level execution. No junior handoffs.',
    locale: 'en_US',
    alternateLocale: ['es_ES', 'es_CO'],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nodeana Labs | Salesforce, AI & Consulting',
    description:
      'Salesforce architecture, AI automation, and consulting for modern growth teams. Senior practitioners. Outcomes-driven.',
    creator: '@nodeanalabs',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },

  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://flagcdn.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Nodeana Labs',
              url: SITE_URL,
              logo: `${SITE_URL}/icon.svg`,
              description:
                'Wyoming-incorporated Salesforce and AI consulting firm for US growth-stage companies. Expert architecture, AI automation, workflow automation, and strategic advisory.',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'WY',
                addressCountry: 'US',
              },
              legalName: 'Nodeana Labs LLC',
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
              serviceType: [
                'Salesforce Consulting',
                'AI Consulting',
                'Digital Transformation',
                'Strategic Consulting',
                'CRM Implementation',
                'Tech Talent Acquisition',
                'Executive Search',
                'Technology Headhunting',
              ],
              knowsLanguage: ['en', 'es'],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@nodeanalabs.com',
                contactType: 'customer service',
                availableLanguage: ['English', 'Spanish'],
              },
              sameAs: [
                'https://wa.me/573197995257',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          {children}
          <WhatsAppFAB />
        </Providers>
      </body>
    </html>
  );
}
