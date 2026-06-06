# PATTERNS.md
이어쉼표 하루 사이클 프로토타입 반복 패턴

## 1 단계 뷰 스켈레톤
모든 단계는 같은 세로 골격을 공유한다. 위계로 읽히게 하고 빽빽하지 않게 둔다.
```
[상단 여백]
Eyebrow            영문 아이브로우
[gap xxl]
Character          중앙, 고정 높이
[gap xl]
대사 (헤드라인)     title1 또는 title2, 중앙
[gap md]
보조 설명           subhead, text-secondary, 중앙
[하단으로 밀기 flex]
액션 존             PrimaryButton + 필요 시 TextButton
[하단 여백 + SkipButton(데모)]
```
세로 중앙보다 약간 위에 캐릭터, 액션은 하단 고정 느낌. 좌우 패딩 lg(20).

## 2 위계 원칙
색이 아니라 크기와 굵기와 투명도로 위계를 만든다.
- 주인공 하나만 크게. 한 화면에 큰 요소 하나, 보조는 작고 흐리게.
- 라벨은 작고 tertiary, 값은 크고 primary.
- 영문 아이브로우는 항상 가장 작게 위에.

## 3 라벨과 값 행
```
[footnote tertiary 라벨]   [값]
```
밤 정리와 수치 표시에 사용. SPURT의 목표 진행방식 행과 같은 구조.

## 4 버튼 상태
PrimaryButton
- 기본 배경 accent, 글자 on-accent
- press opacity 0.9 + translateY 1px
- scale 금지, transition motion.ui
TextButton
- 글자 text-secondary, press opacity 0.6
두 버튼 모두 탭 영역 최소 44.

## 5 테마 적용
- 기본 라이트. CSS 변수 root에 라이트 역할 토큰.
- 쉼 모드만 다크. PhoneFrame에 theme-dark 클래스가 붙으면 같은 변수명을 다크 값으로 override.
- 색 트랜지션 motion.theme(400ms). 컴포넌트는 항상 역할 변수만 참조하므로 테마 전환에 자동 대응.
- 컴포넌트 안에서 라이트 다크 분기 하드코딩 금지.

## 6 캐릭터 배치
- 중앙 정렬, 컨테이너 높이 고정. 상태 전이로 레이아웃 흔들리지 않게.
- 상태 전이는 채움과 눈 도형의 보간으로만. 위치 점프 금지.

## 7 타이머와 진행
- DAY 진행은 캐릭터 상태가 1차 신호. ProgressLine은 보조이고 과하면 제거.
- REST 카운트다운은 TimerDisplay로 명확히. 0 도달 시 회복 완료 카피와 선택지 노출.

## 8 도장 적립
- 새 도장은 stamp-in(opacity와 translateY, motion.stamp). 튀지 않게 잔잔히.
- 누적은 점 또는 작은 마크 행. 숫자 강조는 StatValue로 분리.

## 9 실패 허용 카피
- 임계점에서 지금은 어려워 선택 또는 0번으로 끝난 밤.
- 죄책감 어조 금지. 채근 금지. 내일 다시 챙기자 수준의 담담한 회복 여지.
- 부정 평가 단어 금지. 못 쉬었네 정도까지만, 비난 없음.

## 10 모션 공통
- UI 트랜지션 motion.ui(200ms) ease.
- 캐릭터 motion.character(500ms).
- 테마 motion.theme(400ms).
- 도장 motion.stamp(300ms).
- scale transform 전면 금지. 모든 변형은 opacity translate 도형 교체로.

## 11 카피 출처
화면 텍스트는 전부 data/copy.js 경유. 컴포넌트 안 문자열 하드코딩 금지. 휴머나이징 규칙은 copy.js에서 단일 점검.