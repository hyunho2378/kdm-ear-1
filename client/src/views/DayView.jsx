import { copy } from '../data/copy';
import Eyebrow from '../components/Eyebrow';
import Character from '../components/Character';
import ProgressLine from '../components/ProgressLine';
import SkipButton from '../components/SkipButton';

export default function DayView({ progress, onSkip }) {
  return (
    <div className="flex flex-col flex-1 pt-xl pb-xxl">
      {/* 아이브로우 */}
      <div className="flex justify-center">
        <Eyebrow tone="tertiary">{copy.day.eyebrow}</Eyebrow>
      </div>

      {/* 캐릭터 */}
      <div className="mt-xxl flex justify-center">
        <Character state="tired" progress={progress} />
      </div>

      {/* 보조 대사 */}
      <div className="mt-xl flex justify-center text-center">
        <p className="text-subhead font-pretendard text-textSecondary">{copy.day.sub}</p>
      </div>

      <div className="flex-1" />

      {/* 진행 라인 + 건너뛰기 */}
      <div className="flex flex-col items-center gap-sm w-full">
        <ProgressLine value={progress} />
        <SkipButton onClick={onSkip}>{copy.day.skip}</SkipButton>
      </div>
    </div>
  );
}
