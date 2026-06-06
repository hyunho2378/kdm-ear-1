import { color, font, type as t } from '../tokens/web.js';
import { useCountUp } from '../lib/useCountUp.js';

// 가로 막대 차트 (DESIGN_WEB_EAR.md 스펙)
// items: [{ label, value, unit, pending, source }]
// pending: true → 사선 패턴 fill + dashed border + "수치 확인 중"
// max: 막대 100% 기준값 (기본 100)
export default function BarChart({ items = [], max = 100 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, fontFamily: font.family }}>
      {items.map((it, i) => (
        <Bar key={it.label ?? i} item={it} max={max} />
      ))}
    </div>
  );
}

function Bar({ item, max }) {
  const { label, value, unit = '', pending = false, source } = item;
  const decimals = value == null ? 0 : (String(value).split('.')[1] || '').length;
  const factor = 10 ** decimals;
  const [ref, animated] = useCountUp(pending || value == null ? 0 : Math.round(value * factor), 1200);
  const real = animated / factor;
  const pct = pending || value == null ? 0 : Math.min((real / max) * 100, 100);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 12,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            fontSize: t.caption.size,
            fontWeight: 600,
            color: color.ink,
            wordBreak: 'keep-all',
          }}
        >
          {label}
        </span>
        <span
          ref={ref}
          style={{
            fontSize: pending ? 14 : 18,
            fontWeight: 800,
            color: pending ? color.inkFaint : color.brand,
            whiteSpace: 'nowrap',
            letterSpacing: '-0.01em',
          }}
        >
          {pending ? '수치 확인 중' : `${real.toFixed(decimals)}${unit}`}
        </span>
      </div>

      <div
        style={{
          height: 14,
          background: color.brandSky,
          borderRadius: 7,
          overflow: 'hidden',
          border: pending ? `1.5px dashed ${color.line}` : 'none',
          backgroundImage: pending
            ? `repeating-linear-gradient(45deg, ${color.brandSky} 0 6px, ${color.brandPale} 6px 12px)`
            : undefined,
        }}
      >
        {!pending && (
          <div
            style={{
              height: '100%',
              width: `${pct}%`,
              background: color.brand,
              borderRadius: 7,
            }}
          />
        )}
      </div>

      {source && (
        <p
          style={{
            fontSize: 12,
            color: color.inkFaint,
            margin: '6px 0 0',
            wordBreak: 'keep-all',
          }}
        >
          {source}
        </p>
      )}
    </div>
  );
}
