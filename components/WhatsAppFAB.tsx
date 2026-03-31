'use client';

import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/573197995257?text=Hi%20Nodeana%20Labs,%20I%20have%20a%20question%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-fab-label">Chat with us</span>
    </a>
  );
}
