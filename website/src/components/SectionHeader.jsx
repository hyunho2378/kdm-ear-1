import { color, font, type as t } from '../tokens/web.js';

// 모든 이어쉼표 섹션 공통 헤더
// 라벨: 블루 대문자 영문 아이브로우 / 헤드라인: Pretendard bold / 서브: lead inkMuted
// 데이터(eyebrow·title·lead)는 ear.json에서 부모가 주입. 하드코딩 금지.
export default function SectionHeader({ eyebrow, title, lead, align = 'left' }) {
  return (
    <div
      style={{
        fontFamily: font.family,
        textAlign: align,
        maxWidth: align === 'center' ? 760 : undefined,
        margin: align === 'center' ? '0 auto' : undefined,
      }}
    >
      {eyebrow && (
        <p
          style={{
            fontSize: t.eyebrow.size,
            fontWeight: t.eyebrow.weight,
            letterSpacing: t.eyebrow.ls,
            textTransform: t.eyebrow.transform,
            color: color.brand,
            margin: '0 0 14px',
          }}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          style={{
            fontSize: t.h2.size,
            fontWeight: t.h2.weight,
            lineHeight: t.h2.lh,
            letterSpacing: t.h2.ls,
            color: color.ink,
            margin: 0,
            wordBreak: 'keep-all',
          }}
        >
          {title}
        </h2>
      )}
      {lead && (
        <p
          style={{
            fontSize: t.lead.size,
            fontWeight: t.lead.weight,
            lineHeight: t.lead.lh,
            color: color.inkMuted,
            margin: '16px 0 0',
            wordBreak: 'keep-all',
          }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
