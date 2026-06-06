이어쉼표 멘토링 브리핑용 사이트. 강릉페이 website 재활용. 6페이지 라우트 유지 + 데이터 json 새로. 안티그래비티 Claude Code 순차 프롬프트
확정 구조 (STEP0 파악 반영)

라우트 6페이지 유지. 라우터 Nav 안 건드린다.
우리 섹션만 ear.json을 읽게 새로 짠다. 기존 28개 하드코딩 섹션은 쓰지 않고 우리 걸로 교체.
훅은 src/lib/ (useCountUp useReveal useParallax useBreakpoint). 그대로 사용.
mini는 src/mini/ (PhoneFrame 등). PhoneFrame만 재사용, 강릉페이 전용(HomeCoachMini ChargeMini RefundMini BottomNavBar)은 안 씀.

페이지에 우리 섹션 매핑

/ 인트로  Hero, Context(주제 전환), Overview
/research  DeskResearch, MarketGap
/insights  Persona, Journey, Insight
/solution  Solution, ActiveRest, Differentiation
/build  Prototype, Validation, Outro
/design  디자인시스템. 멘토링 핵심 아님. 맨 뒤 또는 비움

색 토큰 교체 (STEP0에서 나온 실제 변수, 전부 교체)
src/tokens/web.js

color.bg #F5F5F5 → #FFFFFF
color.brand #1D4ED8 → #1F6FEB
color.brandStrong #1B4FD8 → #1F6FEB
color.brandPale #EEF2FF → rgba(31,111,235,0.10)
color.brandSky #F1F7FF → rgba(31,111,235,0.05)
color.brandAlt #4B82DF → rgba(31,111,235,0.45)
color.ink #111111 → #000000
강릉페이 블루(#1D4ED8 #EEF2FF 계열) 잔재 0개가 목표.

정직성 원칙 (전 STEP 공통, 절대)

수상 사용자수 다운로드수 성과 수치 금지. 출품 전이라 없다. 지어내면 멘토가 잡는다.
근거 수치만. 1/3 착용, 28.9% 사용비중, 이명 25%, WHO 50%. 출처 명시.
또래 5인은 검증 예정으로만. 했다고 쓰지 마라. userResearch.json은 안 만든다(인터뷰 후 추가).
완치 주장 금지. 영구화를 늦추는 예방까지.
난청 추이, 볼륨 미감소 분포는 정확 수치 없음. pending true로 비워라. 지어내지 마라.

컨텍스트 (STEP1 STEP2에 붙임)
프로젝트명 ear-portfolio. 서비스명 이어쉼표. 개인 출품 KDM+ 7기 주현호. 2026 대디전 서비스경험디자인 부문.
한 줄 설명 이어폰 청취 습관으로 망가지는 청년층 청력을 경고가 아니라 회복으로 지키는 경험 설계.
메인 #1F6FEB, 배경 #FFFFFF(쉼 모드만 #000000), 폰트 Pretendard.
Stats 3개 깨어 있는 시간 약 1/3 이어폰 착용, 청소년 4명 중 1명 이명, WHO 10-29세 약 절반 위험 노출.