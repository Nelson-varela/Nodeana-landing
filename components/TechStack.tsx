'use client';

import { useT } from '@/lib/i18n';
import {
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiWhatsapp,
  SiTelegram,
  SiStripe,
  SiGooglecalendar,
  SiCaldotcom,
  SiAirtable,
  SiMeta,
  SiMake,
  SiFirebase,
  SiSupabase,
  SiElevenlabs,
  SiJavascript,
  SiTailwindcss,
  SiSalesforce,
  SiHubspot,
  SiZapier,
  SiSlack,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type TechItem =
  | { type: 'icon'; icon: IconType; color: string; name: string; category: string }
  | { type: 'img'; src: string; name: string; category: string };

const techItems: TechItem[] = [
  { type: 'icon', icon: SiOpenai,        color: '#ffffff', name: 'OpenAI',          category: 'AI Models' },
  { type: 'icon', icon: SiAnthropic,     color: '#D97757', name: 'Claude',           category: 'AI Models' },
  { type: 'icon', icon: SiGooglegemini,  color: '#8E75B2', name: 'Gemini',           category: 'AI Models' },
  { type: 'icon', icon: SiWhatsapp,      color: '#25D366', name: 'WhatsApp',         category: 'Communication' },
  { type: 'icon', icon: SiTelegram,      color: '#26A5E4', name: 'Telegram',         category: 'Communication' },
  { type: 'icon', icon: SiSlack,         color: '#4A154B', name: 'Slack',            category: 'Communication' },
  { type: 'icon', icon: SiStripe,        color: '#635BFF', name: 'Stripe',           category: 'Payments' },
  { type: 'icon', icon: SiGooglecalendar,color: '#4285F4', name: 'Google Calendar',  category: 'Productivity' },
  { type: 'icon', icon: SiCaldotcom,     color: '#ffffff', name: 'Cal.com',          category: 'Scheduling' },
  { type: 'icon', icon: SiAirtable,      color: '#18BFFF', name: 'Airtable',         category: 'Database' },
  { type: 'icon', icon: SiMeta,          color: '#0082FB', name: 'META',             category: 'Social Media' },
  { type: 'icon', icon: SiMake,          color: '#6D00CC', name: 'Make.com',         category: 'Automation' },
  { type: 'img',  src: 'https://cdn.simpleicons.org/n8n/EA4B71', name: 'N8N', category: 'Automation' },
  { type: 'icon', icon: SiZapier,        color: '#FF4A00', name: 'Zapier',           category: 'Automation' },
  { type: 'icon', icon: SiFirebase,      color: '#FFCA28', name: 'Firebase',         category: 'Backend' },
  { type: 'icon', icon: SiSupabase,      color: '#3ECF8E', name: 'Supabase',         category: 'Backend' },
  { type: 'icon', icon: SiElevenlabs,    color: '#ffffff', name: 'ElevenLabs',       category: 'Voice AI' },
  { type: 'icon', icon: SiSalesforce,    color: '#00A1E0', name: 'Salesforce',       category: 'CRM' },
  { type: 'icon', icon: SiHubspot,       color: '#FF7A59', name: 'HubSpot',          category: 'CRM' },
  { type: 'icon', icon: SiJavascript,    color: '#F7DF1E', name: 'JavaScript',       category: 'Development' },
  { type: 'icon', icon: SiTailwindcss,   color: '#06B6D4', name: 'Tailwind CSS',     category: 'Styling' },
];

function TechPill({ item }: { item: TechItem }) {
  return (
    <div className="tech-pill">
      <span className="tech-icon-wrap">
        {item.type === 'icon' ? (
          <item.icon style={{ color: item.color, fontSize: '1.25rem', flexShrink: 0 }} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.src} alt={item.name} width={20} height={20} style={{ objectFit: 'contain' }} />
        )}
      </span>
      <span className="tech-name">{item.name}</span>
      <span className="tech-category">{item.category}</span>
    </div>
  );
}

const row1 = techItems.slice(0, 11);
const row2 = techItems.slice(11);

export function TechStack() {
  const { t } = useT();

  return (
    <section className="section" id="tech-stack">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">{t.techStack.eyebrow}</div>
          <h2>{t.techStack.h2}</h2>
          <p>{t.techStack.intro}</p>
        </div>
      </div>

      {/* Row 1 */}
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee">
          {[...row1, ...row1].map((item, i) => (
            <TechPill key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee tech-marquee-reverse">
          {[...row2, ...row2].map((item, i) => (
            <TechPill key={i} item={item} />
          ))}
        </div>
      </div>

      <div className="container">
        <p className="tech-suffix">{t.techStack.suffix}</p>
      </div>
    </section>
  );
}
