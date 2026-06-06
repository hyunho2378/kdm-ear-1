import WeekCalendar from '../components/WeekCalendar';
import StatValue from '../components/StatValue';
import GrowthView from '../components/GrowthView';

export default function RecordScreen({ restCount, protectedDays, restedDays, stage }) {
  return (
    <div className="flex flex-col flex-1 px-lg py-xl gap-xxl">
      <h1 className="text-title2 font-pretendard text-textPrimary">기록</h1>

      <WeekCalendar restedDays={restedDays} />

      <div className="flex justify-center">
        <StatValue value={protectedDays} label="지켜낸 청력" />
      </div>

      <GrowthView stage={stage} restedCount={restCount} />
    </div>
  );
}
