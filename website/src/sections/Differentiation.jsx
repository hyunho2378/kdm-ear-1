import { color, type as t } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import data from '../data/ear.json';

export default function Differentiation() {
  const { differentiation: d } = data;
  return (
    <Section id="differentiation" background={color.white}>
      <SectionHeader eyebrow={d.eyebrow} title={d.title} lead={d.oneLine} />

      {/* 포지셔닝 비교 (CSS Grid, table 미사용) */}
      <div style={{ marginTop: 32, border: `1px solid ${color.line}`, borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(96px,140px) 1fr 1fr' }}>
          <HeadCell>구분</HeadCell>
          <HeadCell>기존 서비스</HeadCell>
          <HeadCell accent>이어쉼표</HeadCell>
          {d.positioning.map((row, i) => (
            <RowGroup key={row.axis} row={row} last={i === d.positioning.length - 1} />
          ))}
        </div>
      </div>
      <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.65, color: color.inkMuted, wordBreak: 'keep-all' }}>{d.note}</p>

      {/* 수상작 비교 */}
      <h3 style={subHead}>대디전 수상작에서 빌린 것</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
        {d.awardComparison.map((a) => (
          <div key={a.name} style={{ border: `1px solid ${color.line}`, background: color.white, borderRadius: 16, padding: '18px 20px' }}>
            <p style={{ fontSize: 16, fontWeight: 800, color: color.ink, margin: '0 0 8px', wordBreak: 'keep-all' }}>{a.name}</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' }}>{a.borrowed}</p>
          </div>
        ))}
      </div>

      {/* 결정적으로 다른 점 */}
      <div style={{ marginTop: 20, padding: 'clamp(24px,3vw,40px)', background: color.brand, borderRadius: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {d.decisiveDifference.map((line, i) => (
          <p key={i} style={{ fontSize: 'clamp(16px,1.8vw,22px)', fontWeight: i === 0 ? 800 : 600, lineHeight: 1.55, letterSpacing: '-0.01em', color: i === 0 ? color.white : color.whiteA60, margin: 0, wordBreak: 'keep-all' }}>
            {line}
          </p>
        ))}
      </div>
    </Section>
  );
}

function RowGroup({ row, last }) {
  const border = last ? 'none' : `1px solid ${color.line}`;
  return (
    <>
      <div style={{ ...cell, borderBottom: border, background: color.bg, fontWeight: 800, color: color.ink }}>{row.axis}</div>
      <div style={{ ...cell, borderBottom: border, color: color.inkMuted }}>{row.others}</div>
      <div style={{ ...cell, borderBottom: border, background: 'rgba(0,0,0,0.03)', color: color.ink, fontWeight: 600 }}>{row.ours}</div>
    </>
  );
}

function HeadCell({ children, accent }) {
  return (
    <div style={{ ...cell, background: accent ? color.ink : 'rgba(0,0,0,0.04)', color: accent ? color.white : color.inkMuted, fontWeight: 800, borderBottom: `1px solid ${color.line}` }}>
      {children}
    </div>
  );
}

const cell = {
  padding: '14px 16px',
  fontSize: 14,
  lineHeight: 1.5,
  wordBreak: 'keep-all',
  borderRight: `1px solid ${color.line}`,
  display: 'flex',
  alignItems: 'center',
};

const subHead = {
  fontSize: t.h3.size, fontWeight: t.h3.weight, color: color.ink,
  margin: '40px 0 18px', letterSpacing: t.h3.ls, wordBreak: 'keep-all',
};
