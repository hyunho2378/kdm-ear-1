import { copy } from '../data/copy';
import Eyebrow from '../components/Eyebrow';
import Character from '../components/Character';
import PrimaryButton from '../components/PrimaryButton';
import StatValue from '../components/StatValue';

export default function MorningView({ restedWell, protectedDays, onStart }) {
  const headline = restedWell
    ? copy.morning.headlineRested
    : copy.morning.headlineNeutral;

  return (
    <div className="flex flex-col flex-1 pt-xl pb-xxl">
      {/* 아이브로우 */}
      <div className="flex justify-center">
        <Eyebrow>{copy.morning.eyebrow}</Eyebrow>
      </div>

      {/* 캐릭터 */}
      <div className="mt-xxl flex justify-center">
        <Character state="fresh" progress={0} />
      </div>

      {/* 대사 + 수치 */}
      <div className="mt-xl flex flex-col items-center text-center gap-md">
        <p className="text-title1 font-pretendard text-textPrimary">{headline}</p>
        <StatValue value={protectedDays} label={copy.morning.protectedLabel} />
      </div>

      <div className="flex-1" />

      {/* 액션 존 */}
      <div className="flex flex-col items-center w-full">
        <PrimaryButton onClick={onStart}>{copy.morning.cta}</PrimaryButton>
      </div>
    </div>
  );
}
