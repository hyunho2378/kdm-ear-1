export default function TimerDisplay({ msLeft }) {
  const totalSec = Math.max(0, Math.ceil(msLeft / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  const formatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  return (
    <p className="text-display font-pretendard text-textPrimary tabular-nums">
      {formatted}
    </p>
  );
}
