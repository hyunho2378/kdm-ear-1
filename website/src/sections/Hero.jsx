import { color, font, type as t, layout } from '../tokens/web.js';
import { useReveal } from '../lib/useReveal.js';
import { useCountUp } from '../lib/useCountUp.js';
import { useBreakpoint } from '../lib/useBreakpoint.js';
import data from '../data/ear.json';

export default function Hero() {
  const { hero } = data;
  const [textRef, textVisible] = useReveal({ threshold: 0.05 });
  const { isMobile } = useBreakpoint();

  return (
    <section
      id="hero"
      style={{
        background: color.bg,
        fontFamily: font.family,
        padding: `clamp(72px,9vw,140px) ${layout.gut} clamp(48px,6vw,88px)`,
        scrollMarginTop: 64,
      }}
    >
      <div
        ref={textRef}
        style={{
          maxWidth: layout.container,
          margin: '0 auto',
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? 'none' : 'translateY(28px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <p
          style={{
            fontSize: t.eyebrow.size,
            fontWeight: t.eyebrow.weight,
            letterSpacing: t.eyebrow.ls,
            textTransform: t.eyebrow.transform,
            color: color.brand,
            margin: '0 0 20px',
          }}
        >
          {hero.eyebrow}
        </p>

        <h1
          style={{
            fontSize: t.display.size,
            fontWeight: t.display.weight,
            lineHeight: t.display.lh,
            letterSpacing: t.display.ls,
            color: color.ink,
            margin: '0 0 16px',
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
          }}
        >
          {hero.slogan}
        </h1>

        <p
          style={{
            fontSize: 'clamp(20px,2vw,30px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: color.brand,
            margin: '0 0 20px',
          }}
        >
          {hero.title}
        </p>

        <p
          style={{
            fontSize: t.lead.size,
            fontWeight: t.lead.weight,
            lineHeight: t.lead.lh,
            color: color.inkMuted,
            margin: '0 0 8px',
            maxWidth: 560,
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
          }}
        >
          {hero.lead}
        </p>

        <p style={{ fontSize: 13, color: color.inkFaint, margin: '0 0 clamp(36px,4vw,56px)' }}>
          {hero.author}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 'clamp(20px,3vw,40px)',
            maxWidth: 820,
          }}
        >
          {hero.stats.map((s) => (
            <HeroStat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroStat({ label, value, unit, source }) {
  const decimals = (String(value).split('.')[1] || '').length;
  const factor = 10 ** decimals;
  const [ref, animated] = useCountUp(Math.round(value * factor), 1400);
  const display = (animated / factor).toFixed(decimals);
  return (
    <div style={{ borderTop: `2px solid ${color.brand}`, paddingTop: 14 }}>
      <span ref={ref} style={{ fontSize: 'clamp(34px,4vw,52px)', fontWeight: 800, color: color.brand, letterSpacing: '-0.02em' }}>
        {display}
        <span style={{ fontSize: '0.5em' }}>{unit}</span>
      </span>
      <p style={{ fontSize: t.caption.size, fontWeight: 600, color: color.ink, margin: '6px 0 2px', wordBreak: 'keep-all' }}>
        {label}
      </p>
      <p style={{ fontSize: 12, color: color.inkFaint, margin: 0 }}>{source}</p>
    </div>
  );
}
