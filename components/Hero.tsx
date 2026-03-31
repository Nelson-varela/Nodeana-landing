'use client';

import { NeuralBackground } from './NeuralBackground';
import { useT } from '@/lib/i18n';

export function Hero() {
  const { t } = useT();

  return (
    <section className="hero section" id="top">
      <NeuralBackground dim={0.5} />
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">{t.hero.eyebrow}</div>

          <h1>
            {t.hero.h1a}{" "}
            <span>{t.hero.h1span}</span>
          </h1>

          <p className="hero-copy">
            {t.hero.copy}
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button">
              {t.hero.cta1}
            </a>
            <a href="#services" className="button button-secondary">
              {t.hero.cta2}
            </a>
          </div>

          <div className="hero-proof">
            {t.hero.proof.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card">
          <div className="glass-card hero-panel">
            <div className="card-tag">{t.hero.cardTag}</div>
            <h3>{t.hero.cardH3}</h3>
            <ul className="feature-list">
              {t.hero.cardList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
