import { color, type as t } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import data from '../data/ear.json';

export default function MarketGap() {
  const { marketGap: g } = data;
  return (
    <Section id="market-gap" background={color.white}>
      <SectionHeader eyebrow={g.eyebrow} title={g.title} lead={g.lead} />

      {/* 4층 스택 — 위에서부터 4층(빈칸) → 1층 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 32 }}>
        {[...g.layers].reverse().map((l) => {
          const empty = !l.filled;
          return (
            <div
              key={l.floor}
              style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr',
                alignItems: 'stretch',
                border: `1px solid ${color.line}`,
                background: color.white,
                borderRadius: 14,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: empty ? color.ink : 'rgba(0,0,0,0.06)',
                  color: empty ? color.white : color.inkMuted,
                  fontSize: 20, fontWeight: 800,
                }}
              >
                {l.floor}F
              </div>
              <div style={{ padding: '16px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                  <span style={{ fontSize: 17, fontWeight: 800, color: color.ink, wordBreak: 'keep-all' }}>{l.name}</span>
                  {empty && (
                    <span style={{ fontSize: 11, fontWeight: 800, color: color.white, background: color.ink, borderRadius: 100, padding: '3px 10px' }}>
                      이어쉼표가 설계할 빈칸
                    </span>
                  )}
                  <span style={{ marginLeft: 'auto', fontSize: 12, color: color.inkFaint, wordBreak: 'keep-all' }}>{l.examples}</span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{l.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 대기업 — 측정·누적에서 멈춤 */}
      <h3 style={{ fontSize: t.h3.size, fontWeight: t.h3.weight, color: color.ink, margin: '40px 0 18px', letterSpacing: t.h3.ls }}>
        대기업은 측정·누적에서 멈춘다
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
        {g.bigTech.map((b) => (
          <div key={b.name} style={{ border: `1px solid ${color.line}`, borderRadius: 16, padding: '18px 20px', background: color.white }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: 17, fontWeight: 800, color: color.ink }}>{b.name}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: color.inkMuted, background: 'rgba(0,0,0,0.06)', borderRadius: 100, padding: '3px 10px', whiteSpace: 'nowrap' }}>
                {b.stopsAt}
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{b.desc}</p>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 28, fontSize: 'clamp(16px,1.6vw,20px)', fontWeight: 700, lineHeight: 1.6, color: color.ink, wordBreak: 'keep-all' }}>
        {g.conclusion}
      </p>
      <span style={{ display: 'block', marginTop: 10, fontSize: 12, color: color.inkFaint }}>{g.source}</span>
    </Section>
  );
}
