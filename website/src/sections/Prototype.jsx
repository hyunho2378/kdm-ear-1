import { color } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import PhoneFrame from '../mini/PhoneFrame.jsx';
import data from '../data/ear.json';

export default function Prototype() {
  const { prototype: p } = data;
  return (
    <Section id="prototype" background={color.bg}>
      <SectionHeader eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: 20,
          marginTop: 32,
          justifyItems: 'center',
        }}
      >
        {p.screens.map((s) => (
          <div key={s.state} style={{ textAlign: 'center', maxWidth: 260 }}>
            <PhoneFrame scale={0.58} screenHeight={620}>
              <ScreenPlaceholder screen={s} />
            </PhoneFrame>
            <p style={{ fontSize: 15, fontWeight: 800, color: color.ink, margin: '4px 0 4px' }}>{s.title}</p>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* 설계 원칙 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 36 }}>
        {p.principles.map((pr, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', border: `1.5px solid ${color.line}`, background: color.white, borderRadius: 14, padding: '14px 16px' }}>
            <span style={{ flex: 'none', width: 8, height: 8, borderRadius: 100, background: color.brand, marginTop: 7 }} />
            <p style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.55, color: color.ink, margin: 0, wordBreak: 'keep-all' }}>{pr}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// 실제 화면은 이어쉼표 앱 본 구현이다. 여기서는 상태별 자리표시(placeholder)만 둔다.
// 3탭 하단 내비 + 중앙 대형 캐릭터 자리. 시작 버튼·카운트다운 숫자 없음(밤 정리는 별도 화면).
function ScreenPlaceholder({ screen }) {
  const isRest = screen.state === 'rest';
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: isRest ? color.ink : color.white }}>
      {/* status bar placeholder */}
      <div style={{ height: 44, background: isRest ? 'rgba(255,255,255,0.06)' : color.brandSky }} />

      {/* 중앙 대형 캐릭터 자리 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, padding: 24 }}>
        <div
          style={{
            width: 150, height: 150, borderRadius: 100,
            background: isRest ? color.brandStrong : color.brandPale,
            border: `3px solid ${color.brand}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 17, fontWeight: 800, color: isRest ? color.white : color.brand }}>{screen.title}</span>
        </div>
        <div style={{ width: 130, height: 14, borderRadius: 7, background: isRest ? 'rgba(255,255,255,0.14)' : color.brandSky }} />
        <div style={{ width: 90, height: 14, borderRadius: 7, background: isRest ? 'rgba(255,255,255,0.10)' : color.brandPale }} />
      </div>

      {/* 3탭 하단 내비 placeholder */}
      <div style={{ height: 72, display: 'flex', borderTop: `1px solid ${isRest ? 'rgba(255,255,255,0.10)' : color.line}` }}>
        {[0, 1, 2].map((tab) => (
          <div key={tab} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: tab === 0 ? color.brand : (isRest ? 'rgba(255,255,255,0.16)' : color.brandSky) }} />
            <div style={{ width: 28, height: 7, borderRadius: 4, background: isRest ? 'rgba(255,255,255,0.12)' : color.brandPale }} />
          </div>
        ))}
      </div>
    </div>
  );
}
