# COMPONENTS.md
이어쉼표 앱 개선판 컴포넌트

## 0 파일 구조
```
src/
  main.jsx
  App.jsx
  index.css
  tokens.js
  assets/
    status-bar1.svg        사용자 제공, 그대로 사용
  data/
    copy.js
  components/
    PhoneFrame.jsx
    StatusBar.jsx
    TabBar.jsx
    Character.jsx
    PrimaryButton.jsx
    TextButton.jsx
    ListeningStatus.jsx
    RestOverlay.jsx
    WeekCalendar.jsx
    StatValue.jsx
    GrowthView.jsx
    SettingsList.jsx
    SkipControl.jsx
  screens/
    HomeScreen.jsx
    NightSummaryScreen.jsx
    RecordScreen.jsx
    SettingsScreen.jsx
```
탭 전환은 App의 activeTab 상태. React Router 미사용.

## 1 App.jsx
상태 머신 본체. activeTab(home record settings)와 세션 상태(fatigue listening resting restCount protectedDays restedDays stage dayClock nightSummary) 보유.
- listening true면 fatigue를 압축 시간 동안 0에서 1로 자동 상승(setInterval 또는 raf, 정리 필수). 시작 버튼 없음.
- dayClock도 같은 타임라인으로 자동 진행. fatigue와 별개로 멈추지 않는다.
- fatigue 0.8 도달 시 threshold 상태.
- 쉼표 → resting true(RestOverlay). 회복 완료 시 fatigue 0, restCount 1 증가, resting false. dayClock은 계속.
- dayClock이 밤 임계(예 23시)에 도달하면 nightSummary true. 홈 위에 NightSummaryScreen 전체 표시.
- NightSummaryScreen 돌아가기 → nightSummary false, 홈 복귀. 같은 날 유지, 날짜 리셋 없음. 자동 다음 날 없음.
- 테마는 resting이면 dark, 그 외 light. PhoneFrame에 전달.
- RestOverlay는 현재 탭 위에, NightSummaryScreen도 현재 화면 위에 올라간다.

## 2 PhoneFrame.jsx
A형 고정 컨테이너. width 100% max 430 중앙. theme prop으로 theme-dark 토글. safe area top과 bottom 패딩. 내부에 StatusBar 상단 고정, 화면 콘텐츠, TabBar 하단 고정.

## 3 StatusBar.jsx
src/assets/status-bar1.svg를 렌더한다. 상단 safe area. 임의 9:41 텍스트 새로 그리지 않는다. svg 그대로.

## 4 TabBar.jsx
하단 고정 탭바. 3탭 홈 기록 설정. 각 탭 lucide-react 아이콘 + 라벨(footnote). 활성 accent, 비활성 text-tertiary. 탭 높이 56, 터치 44 이상. safe area bottom.
props activeTab, onChange.

## 5 Character.jsx
귀 캐릭터. SVG 도형만. 이모지 금지. scale 금지. 중앙 크게(화면 높이 약 40%). 상단에 붙이지 않는다.
props
- fatigue 0에서 1
- mode active 또는 resting
연속 모핑(끊김 없이)
- 본체 원. 채움 color.blue. fillOpacity는 fatigue로 보간. fatigue 0이면 1, 0.8 이상이면 0.28까지 점진. resting이면 0.28에서 1로 회복 보간.
- 눈. fatigue 낮으면 동그란 점 둘, 오르면 반쯤, 0.8 이상이면 찡그린 선. resting이면 감은 선.
- fatigue 0.8 이상이면 본체 둘레 얇은 동심 호 둘셋(이명 먹먹 신호).
- 자세. fresh 미세 호흡 bob(translateY 느린 루프). 지칠수록 살짝 처짐. resting 정지 + 느린 호흡 펄스(opacity).
- 전이는 fillOpacity와 눈 도형 500ms ease로 연속. 위치 점프 없음. 컨테이너 높이 고정.

## 6 PrimaryButton.jsx
풀폭 pill. accent 배경, on-accent 글자. 높이 52 이상. press opacity와 translateY 1px. scale 금지.

## 7 TextButton.jsx
텍스트형 2차. text-secondary. 탭 44 이상. press opacity 0.6.

## 8 ListeningStatus.jsx
홈 tiring 상태에서 이어폰 듣는 중과 연속 청취 N분을 작게 보여준다. 캐릭터가 주신호이므로 보조로만, 크지 않게.
props minutes.

## 9 RestOverlay.jsx
쉼 모드. 현재 화면 위 다크 오버레이. 중앙 Character mode resting. 숫자 카운트다운 없음. 대사 쉬는 중과 잠깐 귀를 내려놓자, 회복 완료 시 한결 나아졌어. 잔잔한 앰비언트만. TextButton 돌아가기. SkipControl(데모).
props recovered(boolean), onBack.

## 10 WeekCalendar.jsx
주간 7일. 쉰 날에 도장 마크(inline SVG). 오늘 표시. stamp-in(opacity와 translateY, motion.stamp).
props restedDays.

## 11 StatValue.jsx
지켜낸 청력 등 수치. 수치 typography.display 색 accent, 라벨 footnote text-tertiary.
props value, label.

## 12 GrowthView.jsx
캐릭터 성장 단계 표시. stage에 따라 캐릭터가 자라거나 사는 공간이 풍성. 프로토타입은 단순 단계 시각화.
props stage, restedCount.

## 13 SettingsList.jsx
HIG 그룹 리스트. 행은 라벨 + 토글 또는 chevron. 항목 오늘의 쉼표 알림, 60-60 규칙 안내, 이어폰 감지(데모 토글), 시간 빠르게(데모), 앱 정보.

## 14 SkipControl.jsx
데모용 시간 빠르게. footnote text-tertiary, 눈에 안 띄게. 낮 진행과 쉼 회복을 즉시 진행.

## 15 화면 4종
- HomeScreen  props fatigue, listening, onRest, onIgnore. fresh tiring threshold를 fatigue로 분기. 캐릭터 중앙, 상태 카피, 쉼표 버튼(threshold).
- NightSummaryScreen  props restCount, todayProtected, onBack. dayClock 밤 임계에서 자동 표시. 오늘 하루만. restCount 1 이상이면 오늘 N번 쉬게 해줬어 + 오늘 도장 + 오늘 지켜낸 청력 + 더 건강한 캐릭터. 0이면 담담한 카피, 도장 없음, 채근 금지. 돌아가기로 홈 복귀(날짜 리셋 없음). 내일로 없음.
- RecordScreen  props protectedDays, restedDays, stage. 누적 전담. WeekCalendar + StatValue(지켜낸 청력 N일째) + GrowthView. 오늘 요약 카드는 두지 않는다(밤 정리가 담당).
- SettingsScreen  SettingsList.

## 16 data/copy.js
화면 안 모든 한글 카피 집중. 휴머나이징 규칙 단일 점검. 경고 아닌 부탁과 돌봄 어조. 채근 금지.