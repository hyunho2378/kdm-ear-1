import { color, type as t } from '../tokens/web.js';
import Section from '../components/Section.jsx';
import data from '../data/ear.json';

export default function Outro() {
  const { outro: o, meta } = data;
  return (
    <Section id="outro" background={color.brand}>
      <p style={{ fontSize: t.eyebrow.size, fontWeight: t.eyebrow.weight, letterSpacing: t.eyebrow.ls, textTransform: t.eyebrow.transform, color: color.whiteA60, margin: '0 0 16px' }}>
        {o.eyebrow}
      </p>
      <h2 style={{ fontSize: t.h1.size, fontWeight: 800, lineHeight: t.h1.lh, letterSpacing: t.h1.ls, color: color.white, margin: '0 0 24px', wordBreak: 'keep-all' }}>
        {o.title}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 680 }}>
        {o.body.map((b, i) => (
          <p key={i} style={{ fontSize: 'clamp(15px,1.4vw,19px)', lineHeight: 1.7, color: color.white, opacity: 0.92, margin: 0, wordBreak: 'keep-all' }}>
            {b}
          </p>
        ))}
      </div>

      <div style={{ marginTop: 36, borderTop: `1px solid ${color.whiteA50}`, paddingTop: 24 }}>
        <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', color: color.whiteA60, margin: '0 0 14px' }}>
          NEXT STEPS
        </p>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {o.nextSteps.map((s, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ flex: 'none', width: 22, height: 22, borderRadius: 100, background: color.white, color: color.brand, fontSize: 12, fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
              <span style={{ fontSize: 15, lineHeight: 1.5, color: color.white, wordBreak: 'keep-all' }}>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <p style={{ marginTop: 40, fontSize: 13, color: color.whiteA60 }}>
        {meta.event} · {meta.author}
      </p>
    </Section>
  );
}
