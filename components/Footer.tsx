'use client';

import { useT } from '@/lib/i18n';

export function Footer() {
  const { t } = useT();
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';

  const footerGroups = t.footer.groups.map((group) => ({
    ...group,
    links: group.links.map((link) => ({
      ...link,
      href: link.href === '__CALENDLY__' ? calendlyUrl : link.href,
    })),
  }));

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
          <p className="footer-copy">{t.footer.tagline}</p>
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
        <span>{t.footer.bottomLeft.replace('{year}', String(new Date().getFullYear()))}</span>
        <span>{t.footer.bottomRight}</span>
      </div>
    </footer>
  );
}
