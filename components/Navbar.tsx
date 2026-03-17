"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#top" className="brand" aria-label="Nodeana Labs home">
          <div className="brand-stack">
            <span className="brand-main">
              <span className="brand-node">Nodə</span>
              <span className="brand-ana">ana</span>
            </span>
            <span className="brand-labs"> Labs</span>
          </div>
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#why-us">Why Nodeana</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-actions">
          <a
            href="https://wa.me/573197995257?text=Hi%20Nodeana%20Labs,%20I%20have%20a%20question%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a href="#contact" className="cta">
            Book discovery call
          </a>
        </div>
      </div>
    </header>
  );
}
