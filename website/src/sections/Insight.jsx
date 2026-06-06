import { color } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import data from '../data/ear.json';

export default function Insight() {
  const { insight: ins } = data;
  return (
    <Section id="insight" background={color.bg}>
      <SectionHeader eyebrow={ins.eyebrow} title={ins.title} lead={ins.implication} />

      {/* 인사이트 3카드 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 32 }}>
        {ins.cards.map((c, i) => (
          <div key={i} style={{ border: `1.5px solid ${color.line}`, background: color.white, borderRadius: 16, padding: '20px 22px' }}>
            <p style={{ fontSize: 17, fontWeight: 800, color: color.ink, margin: '0 0 8px', wordBreak: 'keep-all' }}>{c.title}</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{c.desc}</p>
          </div>
        ))}
      </div>

      {/* 전환점 강조 */}
      <div style={{ marginTop: 24, padding: 'clamp(24px,3vw,40px)', background: color.brand, borderRadius: 20 }}>
        <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', color: color.whiteA60, margin: '0 0 12px' }}>
          {ins.turningPoint.title}
        </p>
        <p style={{ fontSize: 'clamp(20px,2.4vw,30px)', fontWeight: 800, lineHeight: 1.5, letterSpacing: '-0.02em', color: color.white, margin: 0, wordBreak: 'keep-all' }}>
          {ins.turningPoint.body}
        </p>
      </div>

      {/* 레퍼런스 (마미무) */}
      <div style={{ marginTop: 20, borderLeft: `3px solid ${color.brand}`, background: color.brandPale, borderRadius: 8, padding: '18px 22px' }}>
        <p style={{ fontSize: 14, fontWeight: 800, color: color.brand, margin: '0 0 6px' }}>{ins.reference.title}</p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: color.ink, margin: 0, wordBreak: 'keep-all' }}>{ins.reference.body}</p>
      </div>
    </Section>
  );
}
