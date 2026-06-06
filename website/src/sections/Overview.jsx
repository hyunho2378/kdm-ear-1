import { color } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import data from '../data/ear.json';

export default function Overview() {
  const { overview } = data;
  return (
    <Section id="overview" background={color.white}>
      <SectionHeader eyebrow={overview.eyebrow} title={overview.title} lead={overview.lead} />

      {/* 해결 장면 */}
      <div
        style={{
          marginTop: 32,
          padding: 'clamp(24px,3vw,40px)',
          background: color.white,
          border: `1px solid ${color.line}`,
          borderRadius: 20,
        }}
      >
        <p
          style={{
            fontSize: 'clamp(18px,2vw,26px)',
            fontWeight: 800,
            lineHeight: 1.5,
            letterSpacing: '-0.02em',
            color: color.ink,
            margin: 0,
            wordBreak: 'keep-all',
          }}
        >
          “{overview.scene}”
        </p>
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {overview.body.map((b, i) => (
            <p key={i} style={{ fontSize: 15, lineHeight: 1.7, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>
              {b}
            </p>
          ))}
        </div>
      </div>

      {/* 악순환 플로우 */}
      <div style={{ marginTop: 40 }}>
        <p style={{ fontSize: 16, fontWeight: 800, color: color.ink, margin: '0 0 4px' }}>{overview.cycle.title}</p>
        <p style={{ fontSize: 14, color: color.inkMuted, margin: '0 0 20px', wordBreak: 'keep-all' }}>
          {overview.cycle.note}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 12,
          }}
        >
          {overview.cycle.steps.map((s, i) => (
            <div
              key={s.label}
              style={{
                position: 'relative',
                border: `1px solid ${color.line}`,
                borderRadius: 14,
                padding: '16px 16px',
                background: color.white,
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 26,
                  height: 26,
                  borderRadius: 100,
                  background: color.brand,
                  color: color.white,
                  fontSize: 13,
                  fontWeight: 800,
                  marginBottom: 10,
                }}
              >
                {i + 1}
              </span>
              <p style={{ fontSize: 15, fontWeight: 700, color: color.ink, margin: '0 0 4px' }}>{s.label}</p>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p
        style={{
          marginTop: 28,
          fontSize: 15,
          fontWeight: 600,
          lineHeight: 1.7,
          color: color.ink,
          wordBreak: 'keep-all',
        }}
      >
        {overview.coreProblem}
      </p>
    </Section>
  );
}
