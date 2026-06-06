// 화면 안 모든 한글 카피 단일 소스. 휴머나이징 규칙 적용.
// 엠대시 작은따옴표 이탤릭 수동태 금지. 부탁과 돌봄 어조.

export const copy = {
  fresh: {
    headline: '오늘 컨디션 좋아요',
    sub: (days) => `지켜낸 청력 ${days}일째`,
  },
  tiring: {
    status: '이어폰 듣는 중',
    duration: (min) => `연속 청취 ${min}분`,
    sub: '조금씩 지쳐가고 있어요',
  },
  threshold: {
    headline: '나 좀 지쳤어. 잠깐 쉬게 해줄래',
    ctaPrimary: '쉼표 누르기',
    ctaSecondary: '지금은 어려워',
  },
  rest: {
    during: '쉬는 중. 잠깐 귀를 내려놓자',
    recovered: '한결 나아졌어',
    back: '돌아가기',
  },
  night: {
    headlineRested: (n) => `오늘 ${n}번 쉬게 해줬어`,
    headlineFailed: '오늘은 못 쉬었네. 내일은 조금 더 챙겨줘',
    protectedLabel: '오늘 지켜낸 청력',
    back: '돌아가기',
  },
  skip: '건너뛰기',
};
