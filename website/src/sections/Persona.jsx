import { color } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import QuoteCard from '../components/QuoteCard.jsx';
import data from '../data/ear.json';

export default function Persona() {
  const { persona: p } = data;
  return (
    <Section id="persona" background={color.bg}>
      <SectionHeader eyebrow={p.eyebrow} title={p.title} lead={p.note} />

      <div
        style={{
          marginTop: 32,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
          alignItems: 'start',
        }}
      >
        {/* 좌: 인물 카드 */}
        <div style={{ border: `1.5px solid ${color.brand}`, background: color.brandPale, borderRadius: 20, padding: '24px 26px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 'clamp(24px,2.6vw,32px)', fontWeight: 800, color: color.ink, letterSpacing: '-0.02em' }}>{p.name}</span>
            <span style={{ fontSize: 13, color: color.inkFaint }}>{p.nameNote}</span>
            <span style={{ fontSize: 15, fontWeight: 600, color: color.inkMuted, marginLeft: 4 }}>{p.age}세 · {p.role}</span>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '14px 0 18px' }}>
            {p.tags.map((tag) => (
              <span key={tag} style={{ fontSize: 13, fontWeight: 700, color: color.white, background: color.brand, borderRadius: 100, padding: '5px 12px' }}>
                {tag}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {p.story.map((s, i) => (
              <p key={i} style={{ fontSize: 14, lineHeight: 1.65, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{s}</p>
            ))}
          </div>
        </div>

        {/* 우: 인용 + 페인포인트 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <QuoteCard quote={p.quote} source={`${p.name} (${p.nameNote})`} />
          <div>
            <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.02em', color: color.brand, margin: '0 0 12px' }}>PAIN POINT</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {p.painPoints.map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', border: `1.5px solid ${color.line}`, background: color.white, borderRadius: 12, padding: '14px 16px' }}>
                  <span style={{ flex: 'none', width: 22, height: 22, borderRadius: 100, background: color.brand, color: color.white, fontSize: 12, fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                  <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.5, color: color.ink, margin: 0, wordBreak: 'keep-all' }}>{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
