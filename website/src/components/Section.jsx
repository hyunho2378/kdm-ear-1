import { font, layout } from '../tokens/web.js';
import { useReveal } from '../lib/useReveal.js';

// 이어쉼표 섹션 공통 셸: useReveal 페이드업 + 표준 패딩 + 컨테이너 정렬
// 8개 섹션이 동일 boilerplate를 반복하지 않도록 묶음. 데이터는 children이 ear.json에서 읽음.
export default function Section({ id, background, children }) {
  const [ref, visible] = useReveal();
  return (
    <section
      id={id}
      style={{
        background,
        fontFamily: font.family,
        padding: `${layout.sectionY} ${layout.gut}`,
        scrollMarginTop: 64,
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: layout.container,
          margin: '0 auto',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(28px)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        {children}
      </div>
    </section>
  );
}
