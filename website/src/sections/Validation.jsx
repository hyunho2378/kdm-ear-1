import { color } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import data from '../data/ear.json';

export default function Validation() {
  const { validation: v } = data;
  return (
    <Section id="validation" background={color.bg}>
      <SectionHeader eyebrow={v.eyebrow} title={v.title} lead={v.justification} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginTop: 32 }}>
        {v.methods.map((m, i) => (
          <div key={i} style={{ border: `1.5px solid ${color.line}`, background: color.white, borderRadius: 16, padding: '20px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
              <span style={{ fontSize: 16, fontWeight: 800, color: color.ink, wordBreak: 'keep-all' }}>{m.title}</span>
              {m.status && (
                <span style={{ fontSize: 11, fontWeight: 800, color: color.white, background: color.brand, borderRadius: 100, padding: '3px 10px' }}>
                  {m.status}
                </span>
              )}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{m.desc}</p>
          </div>
        ))}
      </div>

      {/* 정직성 원칙 */}
      <div style={{ marginTop: 20, border: `1px solid ${color.line}`, background: color.white, borderRadius: 16, padding: '18px 22px' }}>
        <p style={{ fontSize: 13, fontWeight: 800, color: color.brand, margin: '0 0 6px' }}>정직성 원칙</p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: color.ink, margin: 0, wordBreak: 'keep-all' }}>{v.honesty}</p>
      </div>
    </Section>
  );
}
