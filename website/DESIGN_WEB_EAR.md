# DESIGN_WEB_EAR.md
이어쉼표 웹사이트 디자인 시스템

---

## 1. 색상 토큰 (src/tokens/web.js)

### 허용 팔레트: #1F6FEB · #FFFFFF · #000000 + 투명도 파생만

```
color.brand       #1F6FEB                     브랜드 블루 (유일한 채도 색)
color.brandPale   rgba(31,111,235,0.10)        카드 배경·하이라이트
color.brandSky    rgba(31,111,235,0.05)        섹션 배경 연한 틴트
color.brandAlt    rgba(31,111,235,0.45)        미드 강조 (차트 보조)
color.bg          #FFFFFF                      페이지 배경
color.white       #FFFFFF
color.ink         #000000                      본문 최고 강도
color.inkMuted    rgba(0,0,0,0.62)             본문 보조 (== --t2)
color.inkFaint    rgba(0,0,0,0.40)             캡션 (== --t3)
color.line        rgba(0,0,0,0.12)             구분선
color.warn        #E5484D                      오류·경고 (최소 사용)
color.ok          #10B981                      성공 상태 (최소 사용)
```

> rgba(0,0,0,X) 값은 이어쉼표 앱 토큰(--t1/t2/t3)과 정합.  
> 채도 있는 색은 #1F6FEB 하나뿐. 다른 색 추가 금지.

### 강릉페이 잔재 — 코드 전체에서 제거 대상

| 제거 대상 | 대체 |
|---|---|
| `#1D4ED8` | `#1F6FEB` |
| `#1B4FD8` | `#1F6FEB` |
| `#EEF2FF` | `rgba(31,111,235,0.10)` |
| `#F1F7FF` | `rgba(31,111,235,0.05)` |
| `#4B82DF` | `rgba(31,111,235,0.45)` |
| `#F5F5F5` (배경) | `#FFFFFF` |
| `#111111` (잉크) | `#000000` |

---

## 2. 타이포그래피

**폰트** Pretendard Variable (CDN 또는 로컬 폰트 파일)  
fallback 없음 (강릉페이 system-ui 계열 폴백 제거).

```
type.display  clamp(32px,3.75vw,54px)  weight:800  ls:-0.03em  lh:1.12
type.h1       clamp(28px,3vw,44px)     weight:800  ls:-0.02em  lh:1.15
type.h2       clamp(24px,2.5vw,38px)   weight:800  ls:-0.02em  lh:1.22
type.h3       clamp(16px,1.5vw,22px)   weight:700  ls:-0.01em  lh:1.3
type.lead     clamp(14px,1.2vw,20px)   weight:600             lh:1.55
type.body     clamp(16px,1.1vw,19px)   weight:500             lh:1.65
type.caption  clamp(14px,1vw,16px)     weight:500             lh:1.5
type.eyebrow  14px  weight:800  ls:0.04em  uppercase  lh:1.4
```

---

## 3. 컴포넌트 패턴

### SectionHeader
```jsx
<div style={{ color: color.brand, ...eyebrowStyle }}>EYEBROW LABEL</div>
<h2 style={{ ...h2Style }}>섹션 헤드라인</h2>
<p style={{ color: color.inkMuted, ...leadStyle }}>서브 설명</p>
```
- 레이블: 블루 대문자 eyebrow 타입
- 헤드라인: h2 토큰
- 서브: lead 토큰, inkMuted

### Card
```jsx
<div style={{
  border: `1.5px solid ${color.line}`,
  borderRadius: layout.rLg,
  padding: '18px 20px',
  display: 'flex', flexDirection: 'column'
}}>
```
- featured 변형: `border: 1.5px solid ${color.brand}`, `background: ${color.brandPale}`

### BarChart
```jsx
// 막대 컨테이너
<div style={{ height: 14, background: color.brandSky, borderRadius: 7, overflow: 'hidden' }}>
  {/* 채워진 막대 */}
  <div style={{ height: '100%', width: `${pct}%`, background: color.brand, borderRadius: 7 }} />
</div>
```
- pending: 사선 패턴 fill + dashed border. 수치 대신 "수치 확인 중" 레이블.

### DonutChart
- SVG `<circle>` stroke, stroke-dasharray
- 채운 호: `stroke={color.brand}`, 배경 호: `stroke={color.brandSky}`
- 중앙 텍스트: fill={color.brand}, weight:800

### QuoteCard
```jsx
<div style={{ background: color.brandPale, borderLeft: `3px solid ${color.brand}`, padding: '14px 18px' }}>
  <p style={{ color: color.ink }}>"인용구"</p>
  <span style={{ color: color.inkFaint, fontSize: 12 }}>— 출처</span>
</div>
```
- 유저 인터뷰 인용 전용. 또래 5인은 "검증 예정" 배지 부착.

### StatNumber (useCountUp 연동)
```jsx
const [ref, val] = useCountUp(target, 1200);
<span ref={ref} style={{ color: color.brand, fontWeight: 800 }}>{val}</span>
```
- 허용 수치만. pending 수치에 StatNumber 사용 금지.

---

## 4. 레이아웃 토큰

```
layout.container  1440px
layout.gut        clamp(40px,5vw,80px)    좌우 패딩
layout.sectionY   clamp(40px,5vw,72px)    섹션 상하 패딩
layout.rLg        clamp(12px,1.5vw,24px)  카드 큰 반경
layout.rMd        clamp(8px,1vw,16px)     카드 중간 반경
layout.rSm        clamp(4px,0.5vw,8px)    소형 반경
```

---

## 5. 강릉페이 잔재 제거 체크리스트

- [ ] src/tokens/web.js — brand/brandStrong/brandPale/brandSky/brandAlt/bg/ink 교체 완료
- [ ] 기존 강릉페이 섹션 28개 사용 금지 (새 이어쉼표 섹션으로 교체)
- [ ] 강릉페이 전용 mini 컴포넌트(HomeCoachMini ChargeMini RefundMini BottomNavBar) 사용 안 함
- [ ] gangneung_facts.json — 사용하지 않음 (ear.json으로 대체)
- [ ] src/assets/ 강릉페이 스크린샷(asis-*, coah-*, coach-*) — 새 섹션에서 참조하지 않음
- [ ] 폰트 fallback에서 system-ui / Apple SD Gothic Neo 제거 (Pretendard로 충분)
