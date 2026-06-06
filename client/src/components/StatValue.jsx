export default function StatValue({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-xs">
      <span className="text-display font-pretendard text-accent">{value}</span>
      <span className="text-footnote font-pretendard text-textTertiary">{label}</span>
    </div>
  );
}
