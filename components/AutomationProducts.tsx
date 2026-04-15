'use client';

import { useT } from '@/lib/i18n';

export function AutomationProducts() {
  const { t } = useT();

  return (
    <section className="section" id="automations">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">{t.automations.eyebrow}</div>
          <h2>{t.automations.h2}</h2>
          <p>{t.automations.intro}</p>
        </div>

        {/* Tag cloud */}
        <div className="automation-tags">
          {t.automations.tags.map((tag) => (
            <span key={tag} className="automation-tag">{tag}</span>
          ))}
        </div>

        {/* Product cards */}
        <div className="automation-grid">
          {t.automations.items.map((item) => (
            <article key={item.title} className="automation-card">
              <div className="automation-card-icon">{item.icon}</div>
              <div className="automation-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="automation-card-stat">
                <span className="automation-stat-value">{item.stat}</span>
                <span className="automation-stat-label">{item.statLabel}</span>
              </div>
              <a href="#contact" className="automation-card-cta">
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
