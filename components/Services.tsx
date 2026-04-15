'use client';

import { useT } from '@/lib/i18n';

export function Services() {
  const { t } = useT();

  return (
    <section className="section section-soft" id="services">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">{t.services.eyebrow}</div>
          <h2>{t.services.h2}</h2>
          <p>{t.services.intro}</p>
        </div>

        <div className="card-grid four">
          {t.services.items.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon-emoji">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="mini-list">
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className="text-link">
                {t.services.linkText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
