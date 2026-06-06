import Character from '../components/Character';
import PrimaryButton from '../components/PrimaryButton';
import TextButton from '../components/TextButton';
import ListeningStatus from '../components/ListeningStatus';
import SkipControl from '../components/SkipControl';
import { copy } from '../data/copy';

export default function HomeScreen({ fatigue, onRest, onIgnore, protectedDays, listeningMinutes, onDaySkip }) {
  const isFresh     = fatigue < 0.33;
  const isTiring    = fatigue >= 0.33 && fatigue < 0.8;
  const isThreshold = fatigue >= 0.8;

  return (
    <div className="flex flex-col flex-1 items-center px-lg py-xl">
      {/* 캐릭터 위 */}
      <div className="flex-1 flex flex-col items-center justify-end pb-xl w-full text-center min-h-0">
        {isFresh && (
          <p className="text-title2 font-pretendard text-textPrimary">
            {copy.fresh.headline}
          </p>
        )}
        {isTiring && <ListeningStatus minutes={listeningMinutes} />}
        {isThreshold && (
          <p className="text-title2 font-pretendard text-textPrimary">
            {copy.threshold.headline}
          </p>
        )}
      </div>

      {/* 캐릭터 */}
      <Character fatigue={fatigue} mode="active" />

      {/* 캐릭터 아래 */}
      <div className="flex-1 flex flex-col items-center justify-start pt-xl gap-md w-full min-h-0">
        {isFresh && (
          <p className="text-subhead font-pretendard text-textTertiary">
            {copy.fresh.sub(protectedDays)}
          </p>
        )}
        {isTiring && (
          <p className="text-subhead font-pretendard text-textTertiary text-center">
            {copy.tiring.sub}
          </p>
        )}
        {isThreshold && (
          <>
            <div className="w-full">
              <PrimaryButton onClick={onRest}>{copy.threshold.ctaPrimary}</PrimaryButton>
            </div>
            <TextButton onClick={onIgnore}>{copy.threshold.ctaSecondary}</TextButton>
          </>
        )}
        <div className="mt-auto">
          <SkipControl onSkip={onDaySkip} />
        </div>
      </div>
    </div>
  );
}
