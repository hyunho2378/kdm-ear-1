export default function StampRow({ count }) {
  return (
    <div className="flex gap-sm flex-wrap">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="stamp-in inline-block">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="var(--accent)" fillOpacity="0.15" />
            <circle cx="12" cy="12" r="5" fill="var(--accent)" />
          </svg>
        </span>
      ))}
    </div>
  );
}
