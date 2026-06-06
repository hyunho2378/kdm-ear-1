import { color } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import data from '../data/ear.json';

export default function Context() {
  const { context } = data;
  return (
    <Section id="context" background={color.bg}>
      <SectionHeader eyebrow={context.eyebrow} title={context.title} lead={context.lead} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
          marginTop: 36,
        }}
      >
        {context.compare.map((c) => {
          const inScope = c.verdict === '범위 안';
          return (
            <div
              key={c.key}
              style={{
                border: `1.5px solid ${inScope ? color.brand : color.line}`,
                background: inScope ? color.brandPale : color.white,
                borderRadius: 16,
                padding: '20px 22px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: color.ink, wordBreak: 'keep-all' }}>{c.key}</span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: inScope ? color.white : color.inkFaint,
                    background: inScope ? color.brand : 'transparent',
                    border: inScope ? 'none' : `1px solid ${color.line}`,
                    borderRadius: 100,
                    padding: '4px 10px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {c.verdict}
                </span>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>
                {c.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 24,
          padding: '20px 22px',
          background: color.brandSky,
          borderRadius: 16,
          borderLeft: `3px solid ${color.brand}`,
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.02em', color: color.brand, margin: '0 0 8px' }}>
          {context.proof.title}
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: color.ink, margin: '0 0 6px', wordBreak: 'keep-all' }}>
          {context.proof.desc}
        </p>
        <span style={{ fontSize: 12, color: color.inkFaint }}>{context.proof.source}</span>
      </div>

      <p
        style={{
          marginTop: 28,
          fontSize: 'clamp(18px,1.8vw,24px)',
          fontWeight: 800,
          lineHeight: 1.45,
          letterSpacing: '-0.02em',
          color: color.ink,
          wordBreak: 'keep-all',
        }}
      >
        {context.conclusion}
      </p>
    </Section>
  );
}
