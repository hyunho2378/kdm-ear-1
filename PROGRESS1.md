# PROGRESS.md
이어쉼표 앱 개선 진행 추적

## 상태 범례
[ ] 대기  [~] 진행중  [x] 완료

## 개선 단계
- [x] FA0 진단  현재 앱과 목표 구조 차이 정리
- [x] FA1 구조 재편  3탭 + 탭바 + status-bar1.svg + safe area
- [x] FA2 캐릭터 라이브 모핑  fatigue 연속 구동, 중앙 대형
- [x] FA3 홈 자동 감지  시작 버튼 제거, fresh/tiring/threshold, dayClock 자동 진행, nightSummary 트리거
- [x] FA4 쉼 모드  카운트다운 제거, RestOverlay 다크 오버레이, 캐릭터 앰비언트 회복, SkipControl
- [x] FA5 밤 정리 화면  NightSummaryScreen 자동 전환, 오늘만, 내일로 없음, 돌아가기로 홈 복귀
- [x] FA6 기록과 설정  WeekCalendar 7일 도장, StatValue 누적, GrowthView 성장, SettingsList HIG 그룹
- [x] FA7 QA와 HIG  단독 검증 에이전트 전수 점검 + 결함 수정

## 현재 작업
FA6 FA7 완료. 빌드 0오류. 패널 01~05 + 덱 완료.

## 패널 작업
- [x] panel/panel-01-cover.html: 신규 — 워드마크 100px, 슬로건, 정의, 미니 목업 3종
- [x] panel/panel-03-user.html: 신규 — 퍼소나 카드, CJM 인라인 SVG, 인사이트 3카드
- [x] CJM 팔레트 정규화: #EEF2FF→var(--faint), #1D4ED8→var(--blue), #E6F1FB→var(--blue-faint), #F8FAFF→var(--faint)
- [x] panel/panel-04-solution.html: 신규 — THREE PILLARS + 5단계 사이클 목업 (Fresh/Tiring/임계점/쉼/밤정리), 시작버튼·카운트다운 없음, 3탭 표시
- [x] panel/panel-05-growth.html: 신규 — 4개 기록 목업 (주간달력/누적통계/캐릭터성장/복귀화면) + 브랜드 띠
- [x] panel/deck.html: 신규 — 5장 통합 발표 덱, transform scale-to-fit, 키보드+버튼 네비, 01/05 인디케이터, 페이드 0.18s, localStorage 금지
- [x] A1 잘림 없음 (1684×1190 고정 캔버스, flex 레이아웃)
- [x] 색 잠금 통과: 전 패널+덱 금지 hex 없음

## 구현 완료 파일 목록 (FA6~FA7)
- components/WeekCalendar.jsx: 신규 (7일, 쉰 날 도장 stamp-in, 오늘 accent 강조)
- components/StatValue.jsx: 기존 파일 확인 (이미 존재)
- components/GrowthView.jsx: 신규 (stage 1→2→3, 캐릭터 size="80px" 작게)
- components/SettingsList.jsx: 신규 (HIG 그룹 3개, 토글 5종, ChevronRight)
- components/Character.jsx: size prop 추가 (GrowthView 소형 렌더용)
- screens/RecordScreen.jsx: 전체 구현 (누적 전담, 오늘 요약 없음)
- screens/SettingsScreen.jsx: 전체 구현 (SettingsList 연결)
- App.jsx: speedRef/listening setter/restedDays/stage 파생/설정 핸들러 추가
- tailwind.config.js: layout.frameMax → max-w-frame 클래스 등록
- components/PhoneFrame.jsx: max-w-[430px] → max-w-frame
- components/TabBar.jsx: gap-[2px] → gap-xs (토큰 기반)

## QA 체크 결과 (FA7)
- [x] TypeScript localStorage 이모지 scale 없음
- [x] 색 폰트 간격 하드코딩 없음 (gap-[2px]→gap-xs, max-w-[430px]→max-w-frame 수정)
- [x] status-bar1.svg 사용, 임의 상태바 없음
- [x] 하단 탭바 3개, safe area top bottom
- [x] 청취 시작 버튼 없음
- [x] 쉼 모드 카운트다운 숫자 없음
- [x] 캐릭터 중앙 대형 연속 모핑
- [x] 밤 정리 별도 화면, 자연 전환, 내일로 스킵 없음
- [x] 기록 탭 누적 전담, 오늘 요약 중복 없음
- [x] 아이콘 lucide-react 단독, 사이즈 5단계만 (24, 20)
- [x] 터치 44 이상
- [x] 빌드 0오류

## 컨텍스트 관리
85% 도달 시 즉시 중단, 이 파일에 완료 진행중 다음 작업 기록 후 대기.