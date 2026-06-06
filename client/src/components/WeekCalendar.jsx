import { typography } from '../tokens';

const DAYS = ['월', '화', '수', '목', '금', '토', '일'];
const TODAY = 4; // 목요일 — 데모 고정

export default function WeekCalendar({ restedDays }) {
  const restedSet = new Set(restedDays);

  return (
    <div className="flex justify-between w-full gap-xs">
      {DAYS.map((label, i) => {
        const isToday  = i === TODAY;
        const isRested = restedSet.has(i);
        const isFuture = i > TODAY;

        return (
          <div key={i} className="flex flex-col items-center gap-xs flex-1">
            <p
              className={`text-caption font-pretendard ${isToday ? 'text-accent' : 'text-textTertiary'}`}
              style={{ letterSpacing: typography.caption.tracking }}
            >
              {label}
            </p>
            <div
              className={`aspect-square w-full max-w-[40px] rounded-full flex items-center justify-center border ${
                isToday  ? 'border-accent' :
                isFuture ? 'border-line opacity-40' :
                           'border-line'
              }`}
            >
              {isRested && (
                <svg
                  width="20" height="20" viewBox="0 0 20 20"
                  className="stamp-in" aria-hidden="true"
                >
                  <circle cx="10" cy="10" r="8" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="4.5" fill="var(--accent)" />
                </svg>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
