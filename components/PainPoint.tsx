'use client';

import { useT } from '@/lib/i18n';

export function PainPoint() {
  const { t } = useT();

  return (
    <section className="section section-pain" id="why-automate">
      <div className="container pain-grid">

        {/* Left: The story */}
        <div className="pain-story">
          <div className="pain-time">{t.painPoint.time}</div>
          <p className="pain-line">{t.painPoint.story1}</p>
          <p className="pain-line pain-muted">{t.painPoint.story2}</p>
          <p className="pain-line pain-muted">{t.painPoint.story3}</p>
          <p className="pain-lost">{t.painPoint.story4}</p>

          <div className="pain-list">
            <p className="pain-list-title">{t.painPoint.listTitle}</p>
            <ul>
              {t.painPoint.listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: The solution */}
        <div className="pain-solution">
          <div className="solution-card">
            <div className="solution-icon">⚡</div>
            <h3>{t.painPoint.solutionTitle}</h3>
            <ul className="solution-steps">
              {t.painPoint.solutionSteps.map((step) => (
                <li key={step}>
                  <span className="solution-check">✓</span> {step}
                </li>
              ))}
            </ul>
            <p className="solution-result">{t.painPoint.solutionResult}</p>
          </div>

          <div className="pain-stat-banner">
            <span className="pain-stat-icon">📈</span>
            <p>{t.painPoint.stat}</p>
          </div>

          <a href="#contact" className="button button-glow" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>
            Book your free diagnosis →
          </a>
        </div>

      </div>
    </section>
  );
}
