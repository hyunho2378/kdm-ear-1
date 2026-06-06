import { copy } from '../data/copy';
import Eyebrow from '../components/Eyebrow';
import Character from '../components/Character';
import PrimaryButton from '../components/PrimaryButton';
import TextButton from '../components/TextButton';
import StampRow from '../components/StampRow';
import StatValue from '../components/StatValue';

export default function NightView({ restCount, protectedDays, onNextDay, onReset }) {
  const rested = restCount >= 1;

  return (
    <div className="flex flex-col flex-1 pt-xl pb-xxl">
      {/* 아이브로우 */}
      <div className="flex justify-center">
        <Eyebrow>{copy.night.eyebrow}</Eyebrow>
      </div>

      {/* 캐릭터: 쉬었으면 recovered, 못 쉬었으면 tired */}
      <div className="mt-xxl flex justify-center">
        <Character state={rested ? 'recovered' : 'tired'} progress={0} />
      </div>

      {/* 대사 + 적립 콘텐츠 */}
      <div className="mt-xl flex flex-col items-center text-center gap-md">
        {rested ? (
          <>
            <p className="text-title1 font-pretendard text-textPrimary">
              {copy.night.headlineRested(restCount)}
            </p>
            <div className="mt-sm">
              <StampRow count={restCount} />
            </div>
            <div className="mt-md">
              {/* protectedDays + 1: 오늘 쉰 날 반영한 새 누적 */}
              <StatValue
                value={protectedDays + 1}
                label={copy.night.protectedLabel}
              />
            </div>
          </>
        ) : (
          /* 실패 허용 카피: 죄책감 채근 비난 없음 */
          <p className="text-title2 font-pretendard text-textPrimary">
            {copy.night.headlineFailed}
          </p>
        )}
      </div>

      <div className="flex-1" />

      {/* 액션 존 */}
      <div className="flex flex-col items-center gap-sm w-full">
        <PrimaryButton onClick={onNextDay}>{copy.night.ctaNextDay}</PrimaryButton>
        <TextButton onClick={onReset}>{copy.night.ctaReset}</TextButton>
      </div>
    </div>
  );
}
