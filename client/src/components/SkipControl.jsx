import { copy } from '../data/copy';

export default function SkipControl({ onSkip }) {
  return (
    <button
      onClick={onSkip}
      className="min-h-[44px] px-base text-footnote font-pretendard text-textTertiary transition-opacity duration-ui ease active:opacity-60"
    >
      {copy.skip}
    </button>
  );
}
