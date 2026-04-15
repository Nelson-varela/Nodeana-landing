'use client';

import { useEffect, useRef, useState } from 'react';
import { useT } from '@/lib/i18n';

// Parse a metric string like "3x", "-2", "95%", "+40%" into parts
function parseMetric(metric: string): { prefix: string; value: number; suffix: string } {
  const prefix = metric.startsWith('+') ? '+' : metric.startsWith('-') ? '-' : '';
  const suffix = metric.endsWith('%') ? '%' : metric.endsWith('x') ? 'x' : '';
  const numStr = metric.replace(/[+\-x%]/g, '');
  return { prefix, value: parseInt(numStr, 10) || 0, suffix };
}

function AnimatedMetric({ metric }: { metric: string }) {
  const { prefix, value, suffix } = parseMetric(metric);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1600;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve
      const progress = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.round(progress * value));

      if (step >= steps) {
        clearInterval(timer);
        setCount(value);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="result-metric">
      {prefix}{count}{suffix}
    </div>
  );
}

export function Results() {
  const { t } = useT();

  return (
    <section className="section section-soft" id="results">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">{t.results.eyebrow}</div>
          <h2>{t.results.h2}</h2>
          <p>{t.results.intro}</p>
        </div>

        <div className="results-grid">
          {t.results.items.map((item) => (
            <article key={item.title} className="result-card">
              <AnimatedMetric metric={item.metric} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="results-cta">
          <p>You don&apos;t need more hands. Just an intelligent solution that works for you.</p>
          <a href="#contact" className="button button-glow">Get my free diagnosis</a>
        </div>
      </div>
    </section>
  );
}
