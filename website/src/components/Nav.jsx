import { useState, useEffect } from 'react';
import { color, font, layout } from '../tokens/web.js';
import { useBreakpoint } from '../lib/useBreakpoint.js';

// 단일 스크롤 앵커 내비. 14개 섹션을 5개 국면으로 묶어 점프.
const LINKS = [
  { label: 'Intro', id: 'hero' },
  { label: 'Research', id: 'desk-research' },
  { label: 'Insights', id: 'persona' },
  { label: 'Solution', id: 'solution' },
  { label: 'Build', id: 'prototype' },
];

export default function Nav() {
  const { isMobile } = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  // 스크롤스파이: 화면 상단에 걸린 섹션을 활성화
  useEffect(() => {
    const targets = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-64px 0px -70% 0px', threshold: 0 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: color.bgAlpha,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${color.line}`,
        fontFamily: font.family,
        padding: `0 ${layout.gut}`,
      }}
    >
      <div
        style={{
          maxWidth: layout.container,
          margin: '0 auto',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        {/* 로고: 이어쉼표 */}
        <a href="#hero" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 19, fontWeight: 800, color: color.brand, letterSpacing: '-0.02em' }}>이어쉼표</span>
          {!isMobile && (
            <span style={{ fontSize: 12, fontWeight: 600, color: color.inkFaint, letterSpacing: '-0.01em' }}>
              청력 회복 경험 설계
            </span>
          )}
        </a>

        {/* 데스크탑: 앵커 링크 */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: 'clamp(14px,2vw,32px)', listStyle: 'none', margin: 0, padding: 0 }}>
            {LINKS.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  style={{
                    textDecoration: 'none',
                    fontSize: 14,
                    fontWeight: active === id ? 800 : 500,
                    color: active === id ? color.brand : color.inkMuted,
                    letterSpacing: '-0.01em',
                    transition: 'color 0.18s',
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* 모바일: 햄버거 */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'flex', flexDirection: 'column', gap: 5, flexShrink: 0 }}
          >
            <span style={{ display: 'block', width: 22, height: 2, background: color.ink, borderRadius: 1, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: color.ink, borderRadius: 1, transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: color.ink, borderRadius: 1, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        )}
      </div>

      {/* 모바일 드롭다운 */}
      {isMobile && menuOpen && (
        <div
          style={{
            background: color.bgAlpha,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: `1px solid ${color.line}`,
            padding: `12px ${layout.gut} 20px`,
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {LINKS.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    textDecoration: 'none',
                    fontSize: 15,
                    fontWeight: active === id ? 800 : 600,
                    color: active === id ? color.brand : color.ink,
                    letterSpacing: '-0.01em',
                    borderBottom: `1px solid ${color.line}`,
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
