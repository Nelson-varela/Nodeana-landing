'use client';

import { NeuralBackground } from './NeuralBackground';
import { useT } from '@/lib/i18n';

export function Process() {
  const { t } = useT();

  return (
    <section className="section" id="process">
      <NeuralBackground dim={0.35} />
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">{t.process.eyebrow}</div>
          <h2>{t.process.h2}</h2>
          <p>{t.process.intro}</p>
        </div>

        <div className="card-grid three">
          {t.process.steps.map((item) => (
            <article key={item.step} className="process-card">
              <span className="process-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
