export default function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full min-h-[52px] rounded-pill bg-accent text-onAccent text-body font-pretendard transition-all duration-ui ease active:opacity-90 active:translate-y-[1px]"
      style={{ fontWeight: 600 }}
    >
      {children}
    </button>
  );
}
