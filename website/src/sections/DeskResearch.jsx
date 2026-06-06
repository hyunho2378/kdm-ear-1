import { color, type as t } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import DonutChart from '../components/DonutChart.jsx';
import BarChart from '../components/BarChart.jsx';
import data from '../data/ear.json';

export default function DeskResearch() {
  const { deskResearch: d } = data;
  const m = d.medical;
  const scale = d.stats.find((s) => s.key === 'scale');
  const tinnitus = d.stats.find((s) => s.key === 'tinnitus');
  const trend = d.stats.find((s) => s.key === 'hearingLossTrend');

  return (
    <Section id="desk-research" background={color.bg}>
      <SectionHeader eyebrow={d.eyebrow} title={d.title} lead={d.lead} />

      {/* ── 의학적 근거 ── */}
      <h3 style={subHead}>{m.title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        <div style={card}>
          <p style={cardLabel}>{m.tts.term}</p>
          <p style={cardBody}>{m.tts.desc}</p>
          <p style={{ ...cardBody, color: color.inkMuted }}>{m.tts.caveat}</p>
          <p style={{ ...cardBody, fontWeight: 700, color: color.ink }}>{m.tts.point}</p>
          <span style={src}>{m.tts.source}</span>
        </div>
        <div style={{ ...card, background: color.brandPale, border: `1.5px solid ${color.brand}` }}>
          <p style={cardLabel}>{m.recoveryWindow.title}</p>
          <p style={{ fontSize: 'clamp(28px,3.4vw,44px)', fontWeight: 800, color: color.brand, letterSpacing: '-0.02em', margin: '4px 0 10px' }}>
            {m.recoveryWindow.value}
          </p>
          <p style={cardBody}>{m.recoveryWindow.desc}</p>
          <span style={src}>{m.recoveryWindow.source}</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginTop: 16 }}>
        {m.guidelines.map((g) => (
          <div key={g.name} style={{ ...card, padding: '16px 18px' }}>
            <p style={{ fontSize: 16, fontWeight: 800, color: color.brand, margin: '0 0 6px' }}>{g.name}</p>
            <p style={{ ...cardBody, margin: '0 0 6px' }}>{g.desc}</p>
            <span style={src}>{g.source}</span>
          </div>
        ))}
      </div>
      <p style={{ ...cardBody, fontWeight: 600, color: color.ink, marginTop: 16, wordBreak: 'keep-all' }}>{m.conclusion}</p>

      {/* ── 규모 · 피해 (도넛) ── */}
      <h3 style={subHead}>규모와 피해</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}
      >
        <StatDonut s={scale} />
        <StatDonut s={tinnitus} />
        <StatDonut s={trend} />
      </div>

      {/* ── 방치 (순위 + 분포 pending) ── */}
      <h3 style={subHead}>{d.neglect.title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
        {d.neglect.reasons.map((r) => (
          <div key={r.rank} style={{ ...card, padding: '16px 18px' }}>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 24, height: 24, borderRadius: 100, background: color.brand,
                color: color.white, fontSize: 12, fontWeight: 800, marginBottom: 10,
              }}
            >
              {r.rank}
            </span>
            <p style={{ fontSize: 15, fontWeight: 700, color: color.ink, margin: '0 0 4px', wordBreak: 'keep-all' }}>{r.label}</p>
            <p style={{ ...cardBody, margin: 0 }}>{r.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, maxWidth: 520 }}>
        <BarChart items={[{ label: d.neglect.distribution.label, value: null, pending: true }]} />
        <p style={{ ...src, marginTop: 8 }}>{d.neglect.distribution.note} · {d.neglect.source}</p>
      </div>
    </Section>
  );
}

function StatDonut({ s }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <p style={{ fontSize: 14, fontWeight: 800, color: color.ink, textAlign: 'center', margin: 0, wordBreak: 'keep-all' }}>{s.title}</p>
      <DonutChart value={s.value ?? 0} unit={s.unit} label={s.label} pending={s.pending} />
      <p style={{ ...src, textAlign: 'center', maxWidth: 240 }}>{s.source}</p>
    </div>
  );
}

const subHead = {
  fontSize: t.h3.size, fontWeight: t.h3.weight, color: color.ink,
  margin: '40px 0 18px', letterSpacing: t.h3.ls, wordBreak: 'keep-all',
};
const card = {
  border: `1.5px solid ${color.line}`, borderRadius: 16, padding: '20px 22px',
  background: color.white, display: 'flex', flexDirection: 'column', gap: 8,
};
const cardLabel = { fontSize: 15, fontWeight: 800, color: color.ink, margin: 0, wordBreak: 'keep-all' };
const cardBody = { fontSize: 14, lineHeight: 1.65, color: color.inkMuted, margin: 0, wordBreak: 'keep-all' };
const src = { fontSize: 12, color: color.inkFaint };
