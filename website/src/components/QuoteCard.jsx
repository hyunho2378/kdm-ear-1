import { color, font } from '../tokens/web.js';

// 인용 카드 (DESIGN_WEB_EAR.md 스펙)
// quote: 인용구 / source: 출처 / pendingBadge: "검증 예정" 배지 (또래 5인 등 미완료 발화)
export default function QuoteCard({ quote, source, pendingBadge }) {
  return (
    <div
      style={{
        background: color.brandPale,
        borderLeft: `3px solid ${color.brand}`,
        borderRadius: 8,
        padding: '14px 18px',
        fontFamily: font.family,
      }}
    >
      {pendingBadge && (
        <span
          style={{
            display: 'inline-block',
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '0.02em',
            color: color.brand,
            background: color.white,
            border: `1px solid ${color.brand}`,
            borderRadius: 100,
            padding: '3px 9px',
            marginBottom: 8,
          }}
        >
          {pendingBadge}
        </span>
      )}
      <p
        style={{
          fontSize: 16,
          fontWeight: 600,
          lineHeight: 1.6,
          color: color.ink,
          margin: 0,
          wordBreak: 'keep-all',
        }}
      >
        “{quote}”
      </p>
      {source && (
        <span style={{ display: 'block', marginTop: 8, fontSize: 12, color: color.inkFaint }}>
          — {source}
        </span>
      )}
    </div>
  );
}
