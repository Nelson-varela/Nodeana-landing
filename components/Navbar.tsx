"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useT } from "@/lib/i18n";

export function Navbar() {
  const { t, lang, setLang } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-inner">
          <a href="#top" className="brand" aria-label="Nodeana Labs home" onClick={close}>
            <div className="brand-stack">
              <span className="brand-main">
                <span className="brand-node">Nodə</span>
                <span className="brand-ana">ana</span>
              </span>
              <span className="brand-labs"> Labs</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="nav" aria-label="Primary">
            <a href="#automations" className="nav-highlight">{t.nav.automations}</a>
            <a href="#services">{t.nav.salesforce}</a>
            <a href="#process">{t.nav.process}</a>
            <a href="#faq">{t.nav.faq}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="navbar-actions">
            <div className="lang-switcher">
              <button
                className={`lang-btn${lang === 'en' ? ' lang-btn--active' : ''}`}
                onClick={() => setLang('en')}
                aria-label="Switch to English"
                title="English"
              >
                <img src="https://flagcdn.com/gb.svg" alt="English" width={22} height={16} style={{ borderRadius: 3, display: 'block' }} />
              </button>
              <button
                className={`lang-btn${lang === 'es' ? ' lang-btn--active' : ''}`}
                onClick={() => setLang('es')}
                aria-label="Cambiar a español"
                title="Español"
              >
                <img src="https://flagcdn.com/es.svg" alt="Español" width={22} height={16} style={{ borderRadius: 3, display: 'block' }} />
              </button>
            </div>

            <a
              href="https://wa.me/573197995257?text=Hi%20Nodeana%20Labs,%20I%20have%20a%20question%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a href="#contact" className="cta hide-on-mobile">
              {t.nav.bookCall}
            </a>

            <button
              className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav" onClick={close}>
          <a href="#automations" className="nav-highlight">{t.nav.automations}</a>
          <a href="#services">{t.nav.salesforce}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="mobile-menu-cta">
          <a href="#contact" className="button full-width" onClick={close}>
            {t.nav.bookCall}
          </a>
          <a
            href="https://wa.me/573197995257?text=Hi%20Nodeana%20Labs,%20I%20have%20a%20question%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary full-width"
            onClick={close}
          >
            <FaWhatsapp style={{ marginRight: 8 }} /> {t.nav.chatWhatsApp}
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={close} aria-hidden />
      )}
    </>
  );
}
