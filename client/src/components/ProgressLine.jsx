export default function ProgressLine({ value }) {
  const pct = `${Math.max(0, Math.min(1, value)) * 100}%`;
  return (
    <div className="w-full h-[3px] rounded-pill bg-surfaceFaint overflow-hidden">
      <div
        className="h-full bg-accent rounded-pill transition-all duration-ui ease"
        style={{ width: pct }}
      />
    </div>
  );
}
