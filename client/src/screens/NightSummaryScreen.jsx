import Character from '../components/Character';
import TextButton from '../components/TextButton';
import { copy } from '../data/copy';

export default function NightSummaryScreen({ restCount, onBack }) {
  const rested = restCount > 0;

  return (
    <div className="absolute inset-0 z-40 overlay-in bg-bg flex flex-col items-center px-lg">
      <div className="flex-1 flex flex-col items-center justify-center gap-xl">
        <Character fatigue={rested ? 0 : 0.4} mode="active" />

        <div className="flex flex-col items-center gap-sm text-center">
          <p className="text-title2 font-pretendard text-textPrimary">
            {rested ? copy.night.headlineRested(restCount) : copy.night.headlineFailed}
          </p>

          {rested && (
            <div className="flex flex-col items-center gap-xs mt-sm">
              <div className="flex gap-sm">
                {Array.from({ length: Math.min(restCount, 5) }).map((_, i) => (
                  <svg key={i} width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                    <circle cx="16" cy="16" r="14" fill="none" stroke="var(--accent)" strokeWidth="2" />
                    <circle cx="16" cy="16" r="8" fill="var(--accent)" />
                  </svg>
                ))}
              </div>
              <p className="text-footnote font-pretendard text-textTertiary mt-xs">
                {copy.night.protectedLabel}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="pb-xl">
        <TextButton onClick={onBack}>{copy.night.back}</TextButton>
      </div>
    </div>
  );
}
