# EAR_PROJECT.md
이어쉼표 — 포트폴리오 웹사이트 프로젝트 가이드

---

## 1. 프로젝트 정체성

**이름** 이어쉼표 (EarComma)
**슬로건** 들리지 않는 손상, 귀에게 쉴 틈을
**정의** 음악에 쉼표가 필요하듯 귀에도 쉼이 필요하다.

### 무엇인가
이어폰 청취로 지친 청년층의 귀를 보호하는 UX 설계 프로젝트.  
위험을 경고하지 않는다. 회복 행동을 설계한다.

### 목적
- 측정·경고에서 멈추는 기존 서비스의 공백을 채운다
- 캐릭터 기반 상태 가시화 → 부탁 방식의 쉼 유도 → 기록으로 행동 강화
- 타깃: 이어폰과 함께 하루를 보내는 20대 초반

### 차별점
| 기존 서비스 | 이어쉼표 |
|---|---|
| 측정·경고에서 멈춘다 | 회복 행동을 설계한다 |
| 판단을 사용자에게 떠넘긴다 | 캐릭터로 상태를 보이게 한다 |
| 경고 피로 → 결국 끈다 | 부탁·거절권으로 저항을 낮춘다 |
| 성과 없으면 포기 | 성장 기록으로 이어간다 |

---

## 2. 기술 스택

- **프레임워크** React + Vite
- **스타일** CSS-in-JS (인라인 style, src/tokens/web.js 토큰)
- **라우터** React Router v6, 6페이지 구조 (변경 금지)
- **훅** src/lib/ — useCountUp, useReveal, useParallax, useBreakpoint
- **미니 컴포넌트** src/mini/PhoneFrame 재사용, HomeCoachMini·ChargeMini·RefundMini·BottomNavBar 사용 안 함
- **데이터** src/data/ear.json 단일 소스 (아래 데이터 원칙 참조)
- **에셋** src/assets/ (이미지·SVG)

---

## 3. 데이터 원칙 (절대)

### 단일 소스 원칙
모든 텍스트·수치·인용·출처는 `src/data/ear.json`에서만 읽는다.  
섹션 컴포넌트에 수치·문구 하드코딩 금지.

### 허용 근거 수치
| 수치 | 출처 |
|---|---|
| 깨어 있는 시간의 약 1/3 이어폰 착용 | 사이언스타임즈·트렌드모니터 2024 |
| 수면 제외 하루 이어폰 사용 비중 28.9% | 사이언스타임즈·트렌드모니터 2024 |
| 청소년·청년 4명 중 1명 이명 경험 | MBC 뉴스데스크·헬스조선 2025 |
| WHO 10~29세 약 50% 위험 노출 | WHO |
| TTS 회복 구간 12~24시간 | 한국언어치료학회·SFU Handbook |
| 60-60 규칙 | WHO·CDC·Mayo Clinic·CDC NIOSH |

### pending 수치 (ear.json에서 `pending: true` 표시, UI에서 "수치 확인 중")
- 10대 난청 추이 (정확 수치 없음)
- 볼륨 미감소 이유 분포 (정확 수치 없음)

### 금지 사항
- 수상·수상 경력·다운로드 수·사용자 수·성과 수치 일절 금지 (출품 전, 없다)
- 또래 5인 인터뷰는 "검증 예정" 표기만. "진행했다·확인됐다" 금지.
- userResearch.json 생성 금지 (인터뷰 완료 후 별도 추가)
- "완치" "치료" "손상 제거" 주장 금지. "영구화를 늦추는 예방 개입"까지만.
- 근거 없는 효과 수치 지어내기 금지. 멘토가 검증한다.

---

## 4. 6페이지 섹션 매핑

```
/            IntroPage
  Hero                 — 서비스 슬로건 + 키비주얼
  Context              — 주제 전환 (청력 손상 맥락)
  Overview             — 프로젝트 개요 + 악순환 플로우

/research    ResearchPage
  DeskResearch         — 데스크 리서치 (통계 3종)
  MarketGap            — 기존 서비스 공백 분석

/insights    InsightsPage
  Persona              — 퍼소나 카드 (김도현)
  Journey              — Customer Journey Map
  Insight              — 핵심 인사이트 3카드

/solution    SolutionPage
  Solution             — Three Pillars (보이게·쉬게·쌓이게)
  ActiveRest           — 5단계 하루 사이클 목업
  Differentiation      — 차별점 비교

/build       BuildPage
  Prototype            — 프로토타입 목업·화면
  Validation           — 검증 (또래 5인 예정 표기)
  Outro                — 마무리 + 다음 단계

/design      DesignSystemPage
  DesignSystem         — 디자인 시스템 (색·타이포·컴포넌트)
```

> `/design`은 멘토링 핵심 아님. 섹션 1개로 충분하며 비워도 됨.

---

## 5. 절대 규칙

1. **수치 정직성** — 근거 없는 수치·효과 지어내기 금지.
2. **5인 검증 예정** — 인터뷰는 "예정"으로만. "완료" 표기 금지.
3. **완치 주장 금지** — 예방·영구화 지연까지만.
4. **강릉페이 잔재 0** — #1D4ED8 #EEF2FF #4B82DF #1B4FD8 #F1F7FF 계열 색·문구 완전 제거.
5. **ear.json 단일 소스** — 컴포넌트 하드코딩 금지.
6. **기존 28개 강릉페이 섹션 사용 금지** — 이어쉼표 전용 섹션으로만 교체.
7. **Nav·Router 수정 금지** — 라우트 6개 구조 유지.
