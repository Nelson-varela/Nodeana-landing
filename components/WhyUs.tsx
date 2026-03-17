const items = [
  "Senior practitioners on every engagement — no bait-and-switch with junior resources.",
  "Deep Salesforce fluency paired with real AI implementation experience.",
  "Communication that's direct, structured, and free of unnecessary complexity.",
  "A lean, agile model built for companies that value speed and accountability.",
];

export function WhyUs() {
  return (
    <section className="section section-soft" id="why-us">
      <div className="container split-grid">
        <div>
          <div className="eyebrow">Why Nodeana</div>
          <h2>The expertise you need. Without the overhead you don't.</h2>
          <p>
            Most consulting engagements fail not because of bad intentions, but because the
            people solving the problem never fully understood it. At Nodeana Labs, we slow
            down at the start so we can move fast when it matters.
          </p>
        </div>

        <div className="glass-card stacked-list">
          {items.map((item) => (
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