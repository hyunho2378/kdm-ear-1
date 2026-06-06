export default function TextButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="min-h-[44px] text-subhead font-pretendard text-textSecondary transition-opacity duration-ui ease active:opacity-60"
    >
      {children}
    </button>
  );
}
