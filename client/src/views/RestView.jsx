import { copy } from '../data/copy';
import Eyebrow from '../components/Eyebrow';
import Character from '../components/Character';
import TimerDisplay from '../components/TimerDisplay';
import PrimaryButton from '../components/PrimaryButton';
import TextButton from '../components/TextButton';
import SkipButton from '../components/SkipButton';

export default function RestView({ msLeft, restProgress, done, onContinue, onFinish, onSkip }) {
  return (
    <div className="flex flex-col flex-1 pt-xl pb-xxl">
      {/* 아이브로우 */}
      <div className="flex justify-center">
        <Eyebrow>{copy.rest.eyebrow}</Eyebrow>
      </div>

      {/* 캐릭터: 쉬는 중이면 resting, 완료면 recovered */}
      <div className="mt-xxl flex justify-center">
        <Character
          state={done ? 'recovered' : 'resting'}
          progress={restProgress}
        />
      </div>

      {/* 타이머 또는 완료 대사 */}
      <div className="mt-xl flex flex-col items-center text-center gap-md">
        {done ? (
          <p className="text-title2 font-pretendard text-textPrimary">
            {copy.rest.headlineDone}
          </p>
        ) : (
          <>
            <TimerDisplay msLeft={msLeft} />
            <p className="text-subhead font-pretendard text-textSecondary">{copy.rest.sub}</p>
          </>
        )}
      </div>

      <div className="flex-1" />

      {/* 액션 존 */}
      <div className="flex flex-col items-center gap-sm w-full">
        {done ? (
          <>
            <PrimaryButton onClick={onContinue}>{copy.rest.ctaContinue}</PrimaryButton>
            <TextButton onClick={onFinish}>{copy.rest.ctaFinish}</TextButton>
          </>
        ) : (
          <SkipButton onClick={onSkip}>{copy.rest.skip}</SkipButton>
        )}
      </div>
    </div>
  );
}
