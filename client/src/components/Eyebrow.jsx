export default function Eyebrow({ children, tone = 'accent' }) {
  const colorClass = tone === 'tertiary' ? 'text-textTertiary' : 'text-accent';
  return (
    <p className={`text-caption font-pretendard uppercase tracking-[0.08em] ${colorClass}`}>
      {children}
    </p>
  );
}
