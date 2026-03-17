const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Salesforce Services", href: "#services" },
      { label: "AI Solutions", href: "#services" },
      { label: "Strategic Consulting", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Nodeana", href: "#why-us" },
      { label: "How it works", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@nodeanalabs.com", href: "mailto:info@nodeanalabs.com" },
      { label: "Book a discovery call", href: process.env.NEXT_PUBLIC_CALENDLY_URL || "#" },
      { label: "Chat on WhatsApp", href: "https://wa.me/573197995257?text=Hi%20Nodeana%20Labs,%20I%20have%20a%20question%20about%20your%20services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-shell">
        <div className="footer-brand-col">
          <a href="#top" className="brand footer-brand" aria-label="Nodeana Labs home">
            <span className="brand-text">
              <span className="brand-node">Node</span>
              <span className="brand-ana">ana</span>
              <span className="brand-labs"> Labs LLC</span>
            </span>
          </a>
          <p className="footer-copy">
            Expert Salesforce delivery, applied AI, and strategic consulting for companies
            building serious digital operations.
          </p>
          <a className="footer-email" href="mailto:info@nodeanalabs.com">
            info@nodeanalabs.com
          </a>
        </div>

        <div className="footer-links-grid">
          {footerGroups.map((group) => (
            <div key={group.title} className="footer-group">
              <h3>{group.title}</h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Nodeana Labs LLC. All rights reserved.</span>
        <span>Built for modern B2B teams. Operated from Colombia. Incorporated in Wyoming.</span>
      </div>
    </footer>
  );
}