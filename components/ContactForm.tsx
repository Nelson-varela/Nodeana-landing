"use client";

import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  service: "Salesforce Services",
  message: "",
};

export function ContactForm() {
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
    setFeedback("Sending your inquiry...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "The form could not be submitted.");
      }

      setStatus("success");
      setFeedback(
        "Your inquiry was sent successfully. We will follow up from info@nodeanalabs.com."
      );
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
    }
  }

  return (
    <section className="section section-soft" id="contact">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow">Contact</div>
          <h2>Tell us what you are building, fixing, or trying to improve</h2>
          <p>
            Share a few details about your company, current challenge, or
            project scope. Every form submission is delivered directly to{" "}
            <strong>info@nodeanalabs.com</strong> so you can reply personally
            and schedule the next step.
          </p>

          <div className="contact-aside glass-card">
            <h3>Prefer to book directly?</h3>
            <p>
              Open your scheduling page and let qualified leads book a discovery
              meeting without the back-and-forth.
            </p>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary full-width"
            >
              Open scheduling page
            </a>
          </div>
        </div>

        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <div className="field-grid">
            <label>
              Full name
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
              Work email
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
              Company
              <input
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Your company"
              />
            </label>

            <label>
              Service of interest
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              >
                <option>Salesforce Services</option>
                <option>AI Solutions</option>
                <option>Strategic Consulting</option>
              </select>
            </label>
          </div>

          <label>
            Project details
            <textarea
              required
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell us about your current systems, the challenge you need to solve, and what success should look like."
            />
          </label>

          <button
            className="button"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? "Sending..." : "Send inquiry"}
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
