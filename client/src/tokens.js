// tokens.js
// 이어쉼표 하루 사이클 프로토타입 단일 토큰 소스
// 색 간격 폰트 모션 전부 여기서만. 하드코딩 금지.

// 원색 세 값. 새 색상 추가 금지. 나머지는 세 값의 투명도 파생.
export const color = {
  white: '#FFFFFF',
  black: '#000000',
  blue: '#1F6FEB',
};

// 역할 토큰. index.css의 CSS 변수와 동일하게 유지.
export const lightRole = {
  bg: '#FFFFFF',
  textPrimary: '#000000',
  textSecondary: 'rgba(0,0,0,0.56)',
  textTertiary: 'rgba(0,0,0,0.36)',
  line: 'rgba(0,0,0,0.10)',
  surfaceFaint: 'rgba(0,0,0,0.04)',
  accent: '#1F6FEB',
  onAccent: '#FFFFFF',
};

export const darkRole = {
  bg: '#000000',
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255,255,255,0.60)',
  textTertiary: 'rgba(255,255,255,0.36)',
  line: 'rgba(255,255,255,0.12)',
  surfaceFaint: 'rgba(255,255,255,0.06)',
  accent: '#1F6FEB',
  onAccent: '#FFFFFF',
};

// 타이포그래피 px 무게. 폰트 Pretendard.
export const typography = {
  display:    { size: 48, weight: 600 },
  largeTitle: { size: 34, weight: 700 },
  title1:     { size: 28, weight: 700 },
  title2:     { size: 22, weight: 700 },
  title3:     { size: 20, weight: 600 },
  body:       { size: 17, weight: 400 },
  callout:    { size: 16, weight: 400 },
  subhead:    { size: 15, weight: 400 },
  footnote:   { size: 13, weight: 400 },
  caption:    { size: 12, weight: 500, tracking: '0.08em' },
};

// 간격 8pt 시스템
export const space = {
  xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, xxxl: 40, huge: 48,
};

export const radius = { chip: 12, card: 20, pill: 9999 };

// 모션 ms
export const motion = { ui: 200, character: 500, stamp: 300, theme: 400 };

// 캐릭터
export const character = {
  size: 180,
  freshOpacity: 1,
  tiredOpacity: 0.55,
  muffledOpacity: 0.28,
};

// 레이아웃
export const layout = { frameMax: 430, frameBase: 390, padX: 20 };

// 데모 압축 타이밍 ms. 진행자가 조절 가능하게 한곳.
export const timing = {
  DAY_DURATION: 18000,       // fatigue 0→1 소요 시간 (18초)
  REST_DURATION: 12000,      // 회복 0→1 소요 시간 (12초)
  DAY_START: 9,              // 시뮬레이션 시작 시각 (9시)
  NIGHT_THRESHOLD: 23,       // nightSummary 발동 시각 (23시)
  DAY_CLOCK_DURATION: 90000, // 9시→23시 소요 실제 시간 (90초)
};
