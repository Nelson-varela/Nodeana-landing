const steps = [
  {
    step: "01",
    title: "You reach out",
    description:
      "Submit a quick inquiry with your context, goals, and timeline. It goes directly to our team — no forms that disappear into a CRM.",
  },
  {
    step: "02",
    title: "We assess the fit",
    description:
      "We review your service area, business context, and what success looks like before we schedule a single meeting.",
  },
  {
    step: "03",
    title: "Discovery conversation",
    description:
      "A focused session where we go deep on your challenge, validate assumptions, and define what an engagement should actually accomplish.",
  },
];

export function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">How it works</div>
          <h2>From first contact to first delivery — a process built for clarity.</h2>
          <p>
            We keep the path short on purpose. No bloated onboarding, no committees. Just a
            focused intake, a sharp discovery session, and a team that starts moving
            immediately.
          </p>
        </div>

        <div className="card-grid three">
          {steps.map((item) => (
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