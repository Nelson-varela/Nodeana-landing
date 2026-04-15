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
            {t.hero.h1a}{' '}
            <span className="hero-gradient-text">{t.hero.h1span}</span>
          </h1>

          <p className="hero-copy">
            {t.hero.copy}
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-glow">
              {t.hero.cta1}
            </a>
            <a href="#automations" className="button button-secondary">
              {t.hero.cta2}
            </a>
          </div>

          <p className="hero-trust-line">
            ✓ {t.hero.trustLine.split('•')[0].replace('✓', '').trim()} &nbsp;•&nbsp; ✓ {t.hero.trustLine.split('•')[1]?.trim()}
          </p>

          <div className="hero-proof">
            {t.hero.proof.map((item) => (
              <div key={item.title} className="hero-proof-item">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live AI Dashboard Widget */}
        <div className="hero-widget-col">
          <div className="ai-dashboard">
            <div className="ai-dashboard-header">
              <span className="ai-dashboard-title">AI Operations</span>
              <span className="live-badge">● LIVE</span>
            </div>

            <div className="ai-dashboard-row">
              <div className="ai-status-card">
                <div className="ai-status-icon">🤖</div>
                <div className="ai-status-info">
                  <span className="ai-status-label">{t.hero.liveWidget.agentLabel}</span>
                  <span className="ai-status-value">{t.hero.liveWidget.agentStatus}</span>
                </div>
                <div className="ai-status-badge green">{t.hero.liveWidget.agentTime}</div>
              </div>
            </div>

            <div className="ai-dashboard-metrics">
              <div className="ai-metric">
                <span className="ai-metric-label">{t.hero.liveWidget.leadLabel}</span>
                <span className="ai-metric-value cyan">{t.hero.liveWidget.leadValue}</span>
              </div>
              <div className="ai-metric">
                <span className="ai-metric-label">{t.hero.liveWidget.apptLabel}</span>
                <span className="ai-metric-value">{t.hero.liveWidget.apptValue}</span>
                <span className="ai-metric-dot green">●</span>
              </div>
              <div className="ai-metric">
                <span className="ai-metric-label">{t.hero.liveWidget.syncLabel}</span>
                <span className="ai-metric-dot green" style={{ fontSize: '0.8rem' }}>●</span>
              </div>
            </div>

            <div className="ai-workflow-card">
              <div className="ai-workflow-header">
                <span className="ai-workflow-label">{t.hero.liveWidget.workflowLabel}</span>
                <span className="ai-workflow-status running">{t.hero.liveWidget.workflowStatus}</span>
              </div>
              <div className="ai-workflow-value">{t.hero.liveWidget.workflowValue}</div>
              <div className="ai-workflow-bar">
                <div className="ai-workflow-bar-fill" />
              </div>
            </div>

            <div className="ai-pulse-row">
              <div className="ai-pulse-dot" />
              <div className="ai-pulse-dot" style={{ animationDelay: '0.3s' }} />
              <div className="ai-pulse-dot" style={{ animationDelay: '0.6s' }} />
              <span className="ai-pulse-text">Processing 24/7...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
