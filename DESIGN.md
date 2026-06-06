# DESIGN.md
이어쉼표 하루 사이클 프로토타입

## 0 목적과 범위
또래 5인 개념검증용 하루 사이클 클릭 프로토타입. 단일 화면 상태 머신 하나. 실제 측정 없음. 시간은 압축 시뮬레이션. 누적 데이터는 인메모리(새로고침 시 초기화, 단일 세션 데모라 무방).
스택 React 18 + Vite + Tailwind, JavaScript(JSX). 안티그래비티 Claude Code 라이브 빌드.

## 1 플랫폼
A형 앱 고정. 기준 뷰포트 390px, 최대 너비 430px, 중앙 정렬. 웹에서 열면 양옆 neutral 처리. 터치 타깃 최소 44px. 기준 Apple HIG 2024.
세로 1화면 안에서 상태 전이로 모든 흐름을 처리한다. React Router 미사용. ROUTES.md 불필요.

## 2 톤
레퍼런스 SPURT(Depromeet)에서 색이 아니라 구조를 가져온다. 색은 본 프로젝트 잠금 규칙 유지.
- 위계는 색이 아니라 크기와 굵기와 투명도로 만든다. 큰 볼드 헤드라인, 작고 흐린 보조문, 더 작은 회색 라벨.
- 영문 아이브로우 + 한글 볼드 헤드라인 조합.
- 정보는 라벨과 값 행으로 묶는다.
- 카드로 구획하되 빽빽하지 않게. 여백이 위계를 만든다.
- 한 캐릭터가 상태를 연기한다. 키우는 별도 마스코트 없음.
- 사용자 발화와 설계 응답을 짝으로 보여주는 포맷은 검증 결과 정리에 쓴다(프로토타입 화면 밖, 패널과 문서용).

## 3 색
세 값만. 나머지는 세 값의 투명도 단계로만 파생한다. 새 색상 추가 금지.
- white #FFFFFF
- black #000000
- blue #1F6FEB

역할 토큰(라이트 베이스)
- bg #FFFFFF
- text-primary #000000
- text-secondary rgba(0,0,0,0.56)
- text-tertiary rgba(0,0,0,0.36)
- line rgba(0,0,0,0.10)
- surface-faint rgba(0,0,0,0.04)
- accent #1F6FEB
- on-accent #FFFFFF

역할 토큰(쉼 모드 다크)
- bg #000000
- text-primary #FFFFFF
- text-secondary rgba(255,255,255,0.60)
- accent #1F6FEB
- on-accent #FFFFFF

테마 권고
기본은 라이트(아침 낮 임계점 밤). 쉼 모드 단계만 다크로 전환한다. 화면을 어둑하게 낮추는 동작 자체가 귀를 쉬게 한다는 의미와 맞고, 모드 전환을 색으로 알린다. 라이트 다크 교차 페이드 400ms. 전면 라이트 또는 전면 다크로 바꾸고 싶으면 이 항목만 뒤집으면 된다.

## 4 타이포그래피
폰트 Pretendard. CDN 로드. fallback 금지(generic sans-serif system-ui 등 비허용).
스케일(px 무게)
- display 48 / 600  타이머 숫자, 지켜낸 청력 수치
- largeTitle 34 / 700
- title1 28 / 700  캐릭터 대사 강조
- title2 22 / 700  단계 헤드라인
- title3 20 / 600
- body 17 / 400  기본 본문
- callout 16 / 400
- subhead 15 / 400  보조 설명
- footnote 13 / 400  라벨, 건너뛰기
- caption 12 / 500  영문 아이브로우(대문자, letter-spacing 0.08em, accent 또는 tertiary)

## 5 간격과 형태
간격 8pt 시스템 4 8 12 16 20 24 32 40 48.
화면 좌우 패딩 20. 단계 블록 간 수직 간격 32에서 40.
radius 카드 20, 버튼 풀 pill 9999, 작은 칩 12.
구분은 line 보더 또는 surface-faint 채움으로만. 그림자 최소.

## 6 캐릭터
정체는 내 귀를 대신 사는 작은 생물. 프로토타입에서는 원과 단순 도형으로 자리만 잡되 대충 만들지 않는다. 실제 비주얼은 이후 AI 생성으로 교체. 표정은 SVG 도형으로만 그린다. 이모지 금지.
배치 화면 중앙에 크게. 화면 높이 약 40%. 상단에 작게 붙이지 않는다.
구동 fatigue 0에서 1 한 값으로 끊김 없이 연속 모핑한다. 단계 점프 금지.
- fatigue 낮음 쌩쌩  채움 blue 진하게. 눈 동그란 점 둘 열림. 미세 호흡 bob.
- fatigue 중간 지침  채움 옅어짐. 눈 반쯤. 살짝 처짐.
- fatigue 높음 먹먹  채움 흐림. 눈 찡그린 선. 둘레 얇은 동심 호 둘셋으로 이명 먹먹 신호.
- resting 쉼  눈 감은 선. 다크 위에서 서서히 밝아지며 회복. 느린 호흡 펄스(opacity).
전이는 채움과 눈 도형을 500ms ease로 연속 보간. scale 금지. 변형은 translate와 opacity와 도형 교체로만.

## 6-1 HIG 앱 구조
- 상단 status-bar1.svg(src/assets) 그대로 사용. safe area top. 임의 상태바 텍스트 새로 그리지 않는다.
- 하단 탭바 3개 홈 기록 설정. lucide-react 아이콘 + 라벨. 활성 accent 비활성 tertiary. 탭 높이 56, 터치 44 이상, safe area bottom.
- 청취는 자동 감지. 시작 버튼 없음.
- 쉼 모드 카운트다운 숫자 금지. 캐릭터가 밝아지는 회복과 잔잔한 앰비언트로만.
- 텍스트 대비 충분히. 본문 검정, 보조도 너무 흐리지 않게. 안 보이면 안 된다.

## 7 모션
- UI 트랜지션 200ms ease.
- 캐릭터 상태 전이 500ms ease.
- 낮 단계 닳기 fresh에서 tired로 압축 타이머 동안 점진 보간.
- 쉼 모드 회복 muffled에서 recovered로 쉼 타이머 동안 점진 보간. 동시에 배경 라이트에서 다크로.
- 도장 적립 opacity 0에서 1 + translateY 8에서 0, 300ms.
- 1차 버튼 press 피드백 opacity와 translateY 1px. scale 금지.

## 8 데모 시간 상수
한 곳에 모아 조절 가능하게 둔다.
- DAY_DURATION 18s  낮 단계 fresh에서 임계점까지
- REST_DURATION 12s  쉼 모드 muffled에서 recovered까지
- 임계점 도달은 DAY_DURATION 경과 시 자동
진행자가 기다리기 싫을 때를 위해 낮과 쉼 단계 하단에 건너뛰기를 footnote text-tertiary로 작게 둔다. 데모 외에는 노출 안 함.

## 9 카피 규칙
화면 안 모든 텍스트에 휴머나이징 규칙 적용. 엠대시 금지. 작은따옴표 금지. 큰따옴표 지양. 이탤릭 금지. 수동태 금지. 불필요한 조사 금지. 추상어 금지. 경고가 아니라 부탁과 돌봄 어조.

## 10 절대 규칙
- TypeScript 금지. JS JSX만.
- localStorage sessionStorage 금지. 상태는 useState 인메모리.
- 색 간격 폰트 하드코딩 금지. tokens.js 경유.
- 이모지 아이콘 금지. inline SVG만.
- scale transform 금지.
- 최소 터치 타깃 44px.

## 11 아이콘
- 기본 lucide-react 단독. 모든 인터페이스 아이콘은 여기서만. https://lucide.dev
- 보조 라이브러리 Bootstrap Icons react-icons Heroicons는 사용자 사전 승인 후에만. AGENT 임의 도입 금지.
- 한 화면에서 아이콘 라이브러리 섞지 않는다. 보조 도입 시 그 화면 전체를 한 라이브러리로 통일.
- 아이콘 사이즈 16 20 24 32 48 다섯 단계만. 임의 사이즈 금지.
- 아이콘 색은 본 프로젝트 토큰만. textPrimary textSecondary textTertiary accent onAccent 중 하나.
- 주의 다른 프로젝트의 토큰명 text-text-pri sec meta와 색 #60A5FA는 본 프로젝트와 다르다. 본 프로젝트는 tokens.js의 textPrimary textSecondary textTertiary accent(#1F6FEB) onAccent만 쓴다.
- 본 프로토타입은 인터페이스 아이콘 수요가 거의 없다. 캐릭터와 핵심 동작 위주. 캐릭터는 아이콘 아님, SVG 도형 직접 그림.

## 12 일러스트
- 본 프로토타입은 일러스트 라이브러리 미사용. 단일 화면 상태 머신이라 EmptyState 로그인 온보딩 404 500 같은 일러스트 자리 자체가 없다.
- 유일한 일러스트는 캐릭터. SVG 도형 직접 그림 후 AI 생성으로 교체.
- 붙여넣으려던 unDraw 규칙은 메인 컬러 #60A5FA를 지정하는데 본 프로젝트 잠금색은 #1F6FEB라 그대로 안 넣는다. 색 잠금 위반. 후속 화면에서 unDraw가 필요하면 #1F6FEB 또는 흑백 재색만 허용.