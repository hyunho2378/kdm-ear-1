import { color, type as t } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import data from '../data/ear.json';

// CJM은 CSS Grid로만 구성 (table 금지). 라벨 1열 + 5단계.
// 컬럼 어긋남·한글 세로 분해 방지: 고정 grid-template-columns + wordBreak keep-all.
export default function Journey() {
  const { journey: j } = data;
  const phases = j.phases;
  const lowIndex = phases.reduce((lo, p, i, a) => (p.level < a[lo].level ? i : lo), 0);

  const levels = phases.map((p) => p.level);
  const maxL = Math.max(...levels);
  const minL = Math.min(...levels);
  const topPct = (lv) => 12 + ((maxL - lv) / (maxL - minL)) * 76; // 12%~88%

  const GRID = `minmax(76px, 108px) repeat(${phases.length}, minmax(120px, 1fr))`;

  return (
    <Section id="journey" background={color.white}>
      <SectionHeader eyebrow={j.eyebrow} title={j.title} lead={j.lead} />

      <div style={{ overflowX: 'auto', marginTop: 32 }}>
        <div style={{ display: 'grid', gridTemplateColumns: GRID, gap: 0, minWidth: 640 }}>
          {/* 단계 헤더 */}
          <Cell label />
          {phases.map((p, i) => (
            <Cell key={p.no} head accent={i === lowIndex} top>
              <span style={{ fontSize: 12, fontWeight: 800, color: i === lowIndex ? color.white : color.brand }}>{p.no}</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: i === lowIndex ? color.white : color.ink, wordBreak: 'keep-all' }}>{p.stage}</span>
            </Cell>
          ))}

          {/* 감정 곡선 (라벨 + col2~끝 스팬) */}
          <Cell label>감정 곡선</Cell>
          <div style={{ gridColumn: '2 / -1', position: 'relative', height: 116, borderBottom: `1px solid ${color.line}`, borderTop: `1px solid ${color.line}` }}>
            <svg width="100%" height="100%" viewBox="0 0 1000 116" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
              <polyline
                points={phases.map((p, i) => `${((i + 0.5) / phases.length) * 1000},${(topPct(p.level) / 100) * 116}`).join(' ')}
                fill="none"
                stroke={color.brandAlt}
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            {phases.map((p, i) => (
              <div
                key={p.no}
                style={{
                  position: 'absolute',
                  left: `${((i + 0.5) / phases.length) * 100}%`,
                  top: `${topPct(p.level)}%`,
                  transform: 'translate(-50%, -50%)',
                  width: i === lowIndex ? 16 : 12,
                  height: i === lowIndex ? 16 : 12,
                  borderRadius: 100,
                  background: i === lowIndex ? color.brand : color.white,
                  border: `2.5px solid ${color.brand}`,
                }}
              />
            ))}
          </div>

          {/* 감정 */}
          <Cell label>감정</Cell>
          {phases.map((p, i) => (
            <Cell key={p.no} accent={i === lowIndex}>
              <span style={{ fontSize: 13, fontWeight: 700, color: i === lowIndex ? color.brand : color.inkMuted, wordBreak: 'keep-all' }}>{p.emotion}</span>
            </Cell>
          ))}

          {/* 속마음 */}
          <Cell label>속마음</Cell>
          {phases.map((p) => (
            <Cell key={p.no}>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {p.thoughts.map((th, k) => (
                  <li key={k} style={{ fontSize: 12.5, lineHeight: 1.45, color: color.ink, wordBreak: 'keep-all' }}>“{th}”</li>
                ))}
              </ul>
            </Cell>
          ))}

          {/* 상황 */}
          <Cell label>상황</Cell>
          {phases.map((p) => (
            <Cell key={p.no} last>
              <span style={{ fontSize: 12.5, lineHeight: 1.5, color: color.inkMuted, wordBreak: 'keep-all' }}>{p.desc}</span>
            </Cell>
          ))}
        </div>
      </div>

      {/* Needs / Wants / Direction */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 28 }}>
        {[
          { k: 'Needs', items: j.needs.needs },
          { k: 'Wants', items: j.needs.wants },
          { k: 'Direction', items: j.needs.direction },
        ].map((b) => (
          <div key={b.k} style={{ border: `1px solid ${color.line}`, background: color.white, borderRadius: 16, padding: '18px 20px' }}>
            <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.02em', color: color.brand, margin: '0 0 12px' }}>{b.k}</p>
            <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {b.items.map((it, i) => (
                <li key={i} style={{ fontSize: 14, lineHeight: 1.5, color: color.ink, wordBreak: 'keep-all' }}>· {it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 또래 인터뷰 계획 (검증 예정) */}
      <div style={{ marginTop: 24, border: `1px solid ${color.line}`, borderRadius: 16, padding: '20px 22px', background: color.white }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
          <span style={{ fontSize: 16, fontWeight: 800, color: color.ink }}>{j.interviewPlan.title}</span>
          <span style={{ fontSize: 11, fontWeight: 800, color: color.white, background: color.brand, borderRadius: 100, padding: '3px 10px' }}>{j.interviewPlan.status}</span>
        </div>
        <p style={{ fontSize: 14, color: color.inkMuted, margin: '0 0 12px', wordBreak: 'keep-all' }}>{j.interviewPlan.note}</p>
        <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {j.interviewPlan.questions.map((q, i) => (
            <li key={i} style={{ fontSize: 13.5, lineHeight: 1.55, color: color.ink, wordBreak: 'keep-all' }}>{q}</li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function Cell({ children, label, head, accent, top, last }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        justifyContent: head ? 'center' : 'flex-start',
        alignItems: label || head ? 'center' : 'flex-start',
        textAlign: label || head ? 'center' : 'left',
        padding: head ? '12px 10px' : '12px 12px',
        background: accent ? (head ? color.ink : 'rgba(0,0,0,0.04)') : label ? color.bg : color.white,
        borderTop: top ? `1px solid ${color.line}` : 'none',
        borderBottom: last ? 'none' : `1px solid ${color.line}`,
        borderRight: `1px solid ${color.line}`,
        borderLeft: label ? `1px solid ${color.line}` : 'none',
        fontWeight: label ? 800 : 400,
        fontSize: label ? 12.5 : undefined,
        color: label ? color.inkMuted : undefined,
        minWidth: 0,
      }}
    >
      {children}
    </div>
  );
}
