import Character from './Character';
import { typography } from '../tokens';

const STAGE_LABELS = ['새싹 단계', '자라는 단계', '건강한 단계'];

export default function GrowthView({ stage, restedCount }) {
  const s = Math.max(1, Math.min(3, stage));

  return (
    <div className="flex flex-col items-center gap-md">
      <p
        className="text-caption font-pretendard text-accent"
        style={{ letterSpacing: typography.caption.tracking }}
      >
        GROWTH
      </p>

      <div
        className="relative flex items-center justify-center"
        style={{ width: 120, height: 120 }}
      >
        {s >= 2 && (
          <svg
            width="120" height="120" viewBox="0 0 120 120"
            className="absolute inset-0" aria-hidden="true"
          >
            <circle cx="60" cy="60" r="50" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.18" />
          </svg>
        )}
        {s >= 3 && (
          <svg
            width="120" height="120" viewBox="0 0 120 120"
            className="absolute inset-0" aria-hidden="true"
          >
            <circle cx="60" cy="60" r="57" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.10" />
          </svg>
        )}
        <Character fatigue={0} mode="active" size="80px" />
      </div>

      <p className="text-footnote font-pretendard text-textTertiary">
        {STAGE_LABELS[s - 1]}
      </p>
    </div>
  );
}
