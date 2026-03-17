const services = [
  {
    title: "Salesforce Services",
    description:
      "From foundational implementations to complex ecosystem overhauls — we architect, build, and optimize Salesforce environments that work the way your business actually operates.",
    bullets: [
      "Solution architecture & implementation",
      "Automation, Flows & process design",
      "Experience Cloud & third-party integrations",
    ],
  },
  {
    title: "AI Solutions",
    description:
      "Practical AI that reduces friction, accelerates decisions, and eliminates the manual work slowing your team down — deployed inside the tools your people already use.",
    bullets: [
      "Custom AI assistants & internal agents",
      "Workflow automation with intelligent routing",
      "Operational intelligence & process acceleration",
    ],
  },
  {
    title: "Strategic Consulting",
    description:
      "Senior advisory for companies at a pivot point — when the technology decisions you make today will define how well you scale tomorrow.",
    bullets: [
      "Technology strategy & systems planning",
      "Roadmap definition & architectural review",
      "Trusted advisory for founders and operators",
    ],
  },
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">What we do</div>
          <h2>Three practice areas. One integrated team.</h2>
          <p>
            Whether you need to fix what's broken, build what's missing, or figure out what
            comes next — Nodeana Labs brings the technical depth and strategic clarity to
            move with confidence.
          </p>
        </div>

        <div className="card-grid three">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon">◆</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="mini-list">
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className="text-link">
                Discuss this service →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}