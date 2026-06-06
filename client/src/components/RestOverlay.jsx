import Character from './Character';
import TextButton from './TextButton';
import SkipControl from './SkipControl';
import { copy } from '../data/copy';

export default function RestOverlay({ fatigue, recovered, onBack, onSkip }) {
  return (
    <div className="absolute inset-0 z-50 overlay-in theme-dark bg-bg flex flex-col items-center px-lg">
      <div className="flex-1 flex flex-col items-center justify-center gap-xl">
        <Character fatigue={fatigue} mode="resting" />
        <p className="text-body font-pretendard text-textPrimary text-center">
          {recovered ? copy.rest.recovered : copy.rest.during}
        </p>
      </div>
      <div className="pb-xl flex flex-col items-center gap-md w-full">
        <TextButton onClick={onBack}>{copy.rest.back}</TextButton>
        <SkipControl onSkip={onSkip} />
      </div>
    </div>
  );
}
