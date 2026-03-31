'use client';

import { NeuralBackground } from './NeuralBackground';
import { useT } from '@/lib/i18n';

export function WhyUs() {
  const { t } = useT();

  return (
    <section className="section section-soft" id="why-us">
      <NeuralBackground dim={0.35} />
      <div className="container split-grid">
        <div>
          <div className="eyebrow">{t.whyUs.eyebrow}</div>
          <h2>{t.whyUs.h2}</h2>
          <p>{t.whyUs.paragraph}</p>
        </div>

        <div className="glass-card stacked-list">
          {t.whyUs.items.map((item) => (
            <div key={item} className="stacked-item">
              <span className="dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
