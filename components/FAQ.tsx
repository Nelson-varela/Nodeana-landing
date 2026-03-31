'use client';

import { useState } from 'react';
import { NeuralBackground } from './NeuralBackground';
import { useT } from '@/lib/i18n';

export function FAQ() {
  const { t } = useT();
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section className="section section-soft" id="faq">
      <NeuralBackground dim={0.35} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">{t.faq.eyebrow}</div>
          <h2>{t.faq.h2}</h2>
        </div>

        <div className="faq-list">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'faq-item--open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
