export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">AI · Salesforce · Consulting</div>

          <h1>
            AI and Salesforce consulting for companies ready to{" "}
            <span>scale without the noise.</span>
          </h1>

          <p className="hero-copy">
            Nodeana Labs partners with growth-stage companies to modernize their operations,
            eliminate broken workflows, and build the digital foundations that actually hold
            under pressure — through expert Salesforce delivery, applied AI, and senior-level
            consulting.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button">
              Start a conversation
            </a>
            <a href="#services" className="button button-secondary">
              See what we do
            </a>
          </div>

          <div className="hero-proof">
            <div>
              <strong>Senior-level execution</strong>
              <span>No junior handoffs. Every engagement is led by practitioners who've built real systems.</span>
            </div>
            <div>
              <strong>Outcomes, not deliverables</strong>
              <span>We measure success by what changes in your operations — not by what we ship.</span>
            </div>
            <div>
              <strong>Built to scale with you</strong>
              <span>From a focused sprint to a long-term partnership, our model grows as your needs do.</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="glass-card hero-panel">
            <div className="card-tag">The Nodeana approach</div>
            <h3>Clarity before code. Strategy before systems.</h3>
            <ul className="feature-list">
              <li>Deep discovery before any solution is proposed</li>
              <li>Salesforce, AI, and advisory work under one roof</li>
              <li>Every engagement tied to a measurable business outcome</li>
              <li>Architecture that supports your next three moves, not just today's problem</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}