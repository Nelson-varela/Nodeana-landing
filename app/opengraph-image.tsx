import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Nodeana Labs | Salesforce, AI & Consulting for Growth Companies';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 90px',
          background: 'linear-gradient(135deg, #07111f 0%, #0c2540 45%, #123f59 75%, #1a5f72 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #7dd3fc, #c4b5fd)',
        }} />

        {/* Eyebrow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(125,211,252,0.1)',
          border: '1px solid rgba(125,211,252,0.25)',
          borderRadius: 999,
          padding: '8px 20px',
          marginBottom: 32,
        }}>
          <span style={{ color: '#7dd3fc', fontSize: 18, fontWeight: 600, letterSpacing: '0.05em' }}>
            AI · Salesforce · Consulting
          </span>
        </div>

        {/* Logo / Brand */}
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 24 }}>
          <span style={{ color: '#ffffff', fontSize: 64, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>
            Node
          </span>
          <span style={{ color: '#67d6ff', fontSize: 64, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>
            ana
          </span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 22, fontWeight: 400, letterSpacing: '0.15em', marginLeft: 12, textTransform: 'uppercase' }}>
            Labs
          </span>
        </div>

        {/* Tagline */}
        <div style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: 28,
          fontWeight: 400,
          lineHeight: 1.45,
          maxWidth: 700,
          marginBottom: 48,
        }}>
          Salesforce &amp; AI consulting for growth-stage companies ready to scale without the noise.
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['Salesforce Implementation', 'AI Automation', 'Strategic Consulting'].map((label) => (
            <div key={label} style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 999,
              padding: '10px 22px',
              color: 'rgba(255,255,255,0.75)',
              fontSize: 17,
              fontWeight: 500,
            }}>
              {label}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          right: 90,
          color: 'rgba(255,255,255,0.35)',
          fontSize: 18,
        }}>
          nodeanalabs.com
        </div>
      </div>
    ),
    { ...size }
  );
}
