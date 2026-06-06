import { color, type as t } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import data from '../data/ear.json';

export default function ActiveRest() {
  const ard = data.solution.activeRestDesign;
  const { activeRest: ar } = data;
  return (
    <Section id="active-rest" background={color.white}>
      <SectionHeader eyebrow="ACTIVE REST" title={ard.title} lead={ard.problem} />

      {/* 문제 → 비틀기 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, marginTop: 32, alignItems: 'stretch' }}>
        <div style={{ border: `1.5px solid ${color.line}`, background: color.bg, borderRadius: 16, padding: '20px 22px' }}>
          <p style={{ fontSize: 13, fontWeight: 800, color: color.inkFaint, margin: '0 0 8px' }}>자동 적립이라면</p>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{ard.problem}</p>
        </div>
        <div style={{ border: `1px solid ${color.line}`, background: color.white, borderRadius: 16, padding: '20px 22px' }}>
          <p style={{ fontSize: 13, fontWeight: 800, color: color.brand, margin: '0 0 8px' }}>능동적 쉼으로 비튼다</p>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: color.ink, margin: 0, wordBreak: 'keep-all' }}>{ard.solution}</p>
        </div>
      </div>

      {/* 정보 앱 아니냐 방어 */}
      <div style={{ marginTop: 16, border: `1px solid ${color.line}`, background: color.white, borderRadius: 16, padding: '18px 22px' }}>
        <p style={{ fontSize: 13, fontWeight: 800, color: color.brand, margin: '0 0 6px' }}>“정보·알림 앱 아니냐”에 대한 답</p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: color.ink, margin: 0, wordBreak: 'keep-all' }}>{ard.notificationFatigue}</p>
      </div>

      {/* 하루 흐름: 능동적 쉼이 실제로 작동하는 모습 */}
      <h3 style={subHead}>{ar.title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {ar.steps.map((st, i) => (
          <div key={st.no} style={{ display: 'grid', gridTemplateColumns: '40px 110px 1fr', alignItems: 'center', gap: 14, border: `1px solid ${color.line}`, background: color.white, borderRadius: 14, padding: '14px 18px' }}>
            <span style={{ width: 32, height: 32, borderRadius: 100, background: i === 3 ? color.ink : 'rgba(0,0,0,0.06)', color: i === 3 ? color.white : color.inkMuted, fontSize: 14, fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{st.no}</span>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: color.inkFaint, margin: '0 0 2px' }}>{st.time}</p>
              <p style={{ fontSize: 15, fontWeight: 800, color: color.ink, margin: 0, wordBreak: 'keep-all' }}>{st.title}</p>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{st.desc}</p>
          </div>
        ))}
      </div>

      {/* 범위와 한계 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12, marginTop: 24 }}>
        {ar.limits.map((l) => (
          <div key={l.label} style={{ border: `1px solid ${color.line}`, borderRadius: 14, padding: '16px 18px', background: color.white }}>
            <p style={{ fontSize: 13, fontWeight: 800, color: color.inkFaint, margin: '0 0 6px' }}>한계 · {l.label}</p>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{l.desc}</p>
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
