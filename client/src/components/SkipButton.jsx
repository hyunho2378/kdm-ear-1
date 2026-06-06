export default function SkipButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="min-h-[44px] text-footnote font-pretendard text-textTertiary transition-opacity duration-ui ease active:opacity-60"
    >
      {children}
    </button>
  );
}
