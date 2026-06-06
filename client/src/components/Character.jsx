import { character, motion } from '../tokens';

function clamp01(v) { return Math.max(0, Math.min(1, v)); }
function lerp(a, b, t) { return a + (b - a) * clamp01(t); }

const CX = 90, CY = 90;
const BODY_R = 60;
const EYE_L = { cx: 74, cy: 78 };
const EYE_R = { cx: 106, cy: 78 };
const FADE = `opacity ${motion.character}ms ease`;

export default function Character({ fatigue = 0, mode = 'active', size }) {
  const f = clamp01(fatigue);
  const isResting = mode === 'resting';

  // 본체 opacity: fatigue 0→1 선형 보간, 0이면 진하게 0.8+ 이상이면 흐리게
  const bodyOpacity = lerp(character.freshOpacity, character.muffledOpacity, clamp01(f / 0.8));

  // 눈 상태별 가시성 — 임계값 교차 시 CSS 500ms 트랜지션으로 크로스페이드
  const openOp    = isResting ? 0 : (f < 0.35 ? 1 : 0);
  const tiredOp   = isResting ? 0 : (f >= 0.3 && f < 0.8 ? 1 : 0);
  const muffledOp = isResting ? 0 : (f >= 0.75 ? 1 : 0);
  const restingOp = isResting ? 1 : 0;

  // tired 눈 타원 ry: 5(열림)→1(반쯤) 연속 보간
  const tiredRy = lerp(5, 1, clamp01((f - 0.3) / 0.5));

  // 이명 호 opacity: fatigue 0.7부터 서서히 등장
  const ringOp = isResting ? 0 : clamp01((f - 0.7) / 0.3);

  // 자세 처짐: fatigue 상승에 따라 translateY + rotate
  const ty  = isResting ? 0 : lerp(0, 4, f);
  const rot = isResting ? 0 : lerp(0, 2, f);

  // fatigue 낮음 미세 bob, resting 호흡 펄스
  const isFresh = !isResting && f < 0.15;

  const postureStyle = isFresh
    ? undefined
    : {
        transform: ty === 0 && rot === 0 ? 'none' : `translateY(${ty}px) rotate(${rot}deg)`,
        transformOrigin: `${CX}px ${CY}px`,
        transition: `transform ${motion.character}ms ease`,
      };

  const containerSize = size || 'clamp(160px, 40vh, 260px)';

  return (
    <div
      className="flex items-center justify-center text-textPrimary"
      style={{
        width: containerSize,
        height: containerSize,
        flexShrink: 0,
        overflow: 'visible',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 180 180"
        style={{ overflow: 'visible' }}
        aria-hidden="true"
      >
        <g
          className={isFresh ? 'char-bob' : (isResting ? 'char-pulse' : undefined)}
          style={postureStyle}
        >
          {/* 본체 원 */}
          <circle
            cx={CX} cy={CY} r={BODY_R}
            fill="var(--accent)"
            fillOpacity={bodyOpacity}
            style={{ transition: `fill-opacity ${motion.character}ms ease` }}
          />

          {/* 열린 눈 (fresh) */}
          <g style={{ opacity: openOp, transition: FADE }}>
            <circle cx={EYE_L.cx} cy={EYE_L.cy} r={5} fill="currentColor" />
            <circle cx={EYE_R.cx} cy={EYE_R.cy} r={5} fill="currentColor" />
          </g>

          {/* 반쯤 감긴 눈 (tired) */}
          <g style={{ opacity: tiredOp, transition: FADE }}>
            <ellipse cx={EYE_L.cx} cy={EYE_L.cy} rx={6} ry={tiredRy} fill="currentColor" />
            <ellipse cx={EYE_R.cx} cy={EYE_R.cy} rx={6} ry={tiredRy} fill="currentColor" />
          </g>

          {/* 찡그린 눈 (muffled / threshold) */}
          <g style={{ opacity: muffledOp, transition: FADE }}>
            <line
              x1={EYE_L.cx - 7} y1={EYE_L.cy - 2}
              x2={EYE_L.cx + 7} y2={EYE_L.cy + 2}
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            />
            <line
              x1={EYE_R.cx - 7} y1={EYE_R.cy + 2}
              x2={EYE_R.cx + 7} y2={EYE_R.cy - 2}
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            />
          </g>

          {/* 감은 눈 (resting) */}
          <g style={{ opacity: restingOp, transition: FADE }}>
            <line
              x1={EYE_L.cx - 7} y1={EYE_L.cy}
              x2={EYE_L.cx + 7} y2={EYE_L.cy}
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            />
            <line
              x1={EYE_R.cx - 7} y1={EYE_R.cy}
              x2={EYE_R.cx + 7} y2={EYE_R.cy}
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            />
          </g>

          {/* 이명 동심 호 (fatigue 0.7+) */}
          <g style={{ opacity: ringOp, transition: FADE }}>
            <circle cx={CX} cy={CY} r={BODY_R + 12}
              fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.20" />
            <circle cx={CX} cy={CY} r={BODY_R + 22}
              fill="none" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.13" />
            <circle cx={CX} cy={CY} r={BODY_R + 32}
              fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.07" />
          </g>
        </g>
      </svg>
    </div>
  );
}
