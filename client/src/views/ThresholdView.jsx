import { copy } from '../data/copy';
import Eyebrow from '../components/Eyebrow';
import Character from '../components/Character';
import PrimaryButton from '../components/PrimaryButton';
import TextButton from '../components/TextButton';

export default function ThresholdView({ onRest, onIgnore }) {
  return (
    <div className="flex flex-col flex-1 pt-xl pb-xxl">
      {/* 아이브로우 */}
      <div className="flex justify-center">
        <Eyebrow>{copy.threshold.eyebrow}</Eyebrow>
      </div>

      {/* 캐릭터 */}
      <div className="mt-xxl flex justify-center">
        <Character state="muffled" progress={0} />
      </div>

      {/* 대사 */}
      <div className="mt-xl flex justify-center text-center">
        <p className="text-title1 font-pretendard text-textPrimary">{copy.threshold.headline}</p>
      </div>

      <div className="flex-1" />

      {/* 액션 존 */}
      <div className="flex flex-col items-center gap-sm w-full">
        <PrimaryButton onClick={onRest}>{copy.threshold.ctaPrimary}</PrimaryButton>
        <TextButton onClick={onIgnore}>{copy.threshold.ctaSecondary}</TextButton>
      </div>
    </div>
  );
}
