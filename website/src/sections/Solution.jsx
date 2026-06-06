import { color, type as t } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import data from '../data/ear.json';

export default function Solution() {
  const { solution: s } = data;
  const c = s.character;
  return (
    <Section id="solution" background={color.bg}>
      <SectionHeader eyebrow={s.eyebrow} title={s.title} lead={s.scope.conclusion} />

      {/* 범위: 범위 밖 vs 범위 안 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12, marginTop: 32 }}>
        {[s.scope.uncontrollable, s.scope.controllable].map((b, i) => {
          const inScope = i === 1;
          return (
            <div key={b.label} style={{ border: `1.5px solid ${inScope ? color.brand : color.line}`, background: inScope ? color.brandPale : color.white, borderRadius: 16, padding: '18px 20px' }}>
              <p style={{ fontSize: 16, fontWeight: 800, color: inScope ? color.brand : color.inkFaint, margin: '0 0 8px', wordBreak: 'keep-all' }}>{b.label}</p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{b.desc}</p>
            </div>
          );
        })}
      </div>

      {/* 세 기둥 */}
      <h3 style={subHead}>핵심 경험 세 기둥</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
        {s.pillars.map((p, i) => (
          <div key={p.key} style={{ border: `1.5px solid ${color.line}`, background: color.white, borderRadius: 16, padding: '22px 24px' }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: color.brand }}>{String(i + 1).padStart(2, '0')}</span>
            <p style={{ fontSize: 'clamp(20px,2vw,26px)', fontWeight: 800, color: color.ink, margin: '6px 0 10px', letterSpacing: '-0.02em' }}>{p.title}</p>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* 캐릭터 동일시 = 내 귀 자체 */}
      <h3 style={subHead}>{c.title}</h3>
      <div style={{ padding: 'clamp(24px,3vw,40px)', background: color.brand, borderRadius: 20 }}>
        <p style={{ fontSize: 'clamp(18px,2vw,26px)', fontWeight: 800, lineHeight: 1.5, color: color.white, margin: '0 0 14px', letterSpacing: '-0.02em', wordBreak: 'keep-all' }}>
          {c.identity}
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: color.whiteA60, margin: 0, wordBreak: 'keep-all' }}>{c.differenceFromMamimu}</p>
        <span style={{ display: 'inline-block', marginTop: 14, fontSize: 12, fontWeight: 700, color: color.brand, background: color.white, borderRadius: 100, padding: '4px 12px' }}>
          {c.naming}
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginTop: 12 }}>
        {[c.shortTerm, c.longTerm].map((b) => (
          <div key={b.label} style={{ border: `1.5px solid ${color.line}`, background: color.white, borderRadius: 14, padding: '16px 18px' }}>
            <p style={{ fontSize: 14, fontWeight: 800, color: color.brand, margin: '0 0 6px' }}>{b.label}</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const subHead = {
  fontSize: t.h3.size, fontWeight: t.h3.weight, color: color.ink,
  margin: '40px 0 18px', letterSpacing: t.h3.ls, wordBreak: 'keep-all',
};
