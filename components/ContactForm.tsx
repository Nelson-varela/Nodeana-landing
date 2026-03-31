"use client";

import { FormEvent, useState } from "react";
import { NeuralBackground } from './NeuralBackground';
import { useT } from '@/lib/i18n';

const initialState = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const { t } = useT();
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/";
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback(t.contact.feedbackSending);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || t.contact.feedbackError);
      }

      setStatus("success");
      setFeedback(t.contact.feedbackSuccess);
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : t.contact.feedbackUnexpected
      );
    }
  }

  return (
    <section className="section section-soft" id="contact">
      <NeuralBackground dim={0.35} />
      <div className="container contact-grid">
        <div>
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <h2>{t.contact.h2}</h2>
          <p>
            {t.contact.paragraph}{" "}
            <strong>info@nodeanalabs.com</strong>{" "}
            {t.contact.paragraphSuffix}
          </p>

          <div className="contact-aside glass-card">
            <h3>{t.contact.asideH3}</h3>
            <p>{t.contact.asideP}</p>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary full-width"
            >
              {t.contact.asideBtn}
            </a>
          </div>
        </div>

        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <div className="field-grid">
            <label>
              {t.contact.labelName}
              <input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Jane Smith"
              />
            </label>

            <label>
              {t.contact.labelEmail}
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="jane@company.com"
              />
            </label>
          </div>

          <div className="field-grid">
            <label>
              {t.contact.labelCompany}
              <input
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Your company"
              />
            </label>

            <label>
              {t.contact.labelService}
              <select
                required
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              >
                <option value="" disabled>— select one —</option>
                {t.contact.selectOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </label>
          </div>

          <label>
            {t.contact.textareaLabel}
            <textarea
              required
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder={t.contact.textareaPlaceholder}
            />
          </label>

          <button
            className="button"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? t.contact.btnSending : t.contact.btnSend}
          </button>

          {feedback ? (
            <p className={`form-feedback ${status}`} aria-live="polite">
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
