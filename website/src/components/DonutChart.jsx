import { color, font } from '../tokens/web.js';
import { useCountUp } from '../lib/useCountUp.js';

// 도넛 차트 (DESIGN_WEB_EAR.md 스펙)
// value: 채울 비율(0~100) / label: 중앙 보조 텍스트 / pending: 수치 미정
// 채운 호 stroke=brand, 배경 호 stroke=brandSky, 중앙 텍스트 brand bold
export default function DonutChart({ value = 0, unit = '%', label, pending = false, size = 168 }) {
  const r = size / 2 - 12;
  const circ = 2 * Math.PI * r;
  const decimals = (String(value).split('.')[1] || '').length;
  const factor = 10 ** decimals;
  const [ref, animated] = useCountUp(pending ? 0 : Math.round(value * factor), 1200);
  const real = animated / factor;
  const dash = pending ? 0 : (Math.min(real, 100) / 100) * circ;

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        fontFamily: font.family,
      }}
    >
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color.brandSky}
            strokeWidth={12}
            strokeDasharray={pending ? '4 6' : undefined}
          />
          {!pending && (
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={color.brand}
              strokeWidth={12}
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circ}`}
            />
          )}
        </svg>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {pending ? (
            <span style={{ fontSize: 15, fontWeight: 700, color: color.inkFaint }}>수치 확인 중</span>
          ) : (
            <span style={{ fontSize: 34, fontWeight: 800, color: color.brand, letterSpacing: '-0.02em' }}>
              {real.toFixed(decimals)}
              <span style={{ fontSize: 18 }}>{unit}</span>
            </span>
          )}
        </div>
      </div>
      {label && (
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: color.inkMuted,
            textAlign: 'center',
            wordBreak: 'keep-all',
            maxWidth: size + 60,
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
