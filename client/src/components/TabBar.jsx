import { Home, BookOpen, Settings } from 'lucide-react';

const TABS = [
  { id: 'home',     label: '홈',  Icon: Home },
  { id: 'record',   label: '기록', Icon: BookOpen },
  { id: 'settings', label: '설정', Icon: Settings },
];

export default function TabBar({ activeTab, onChange }) {
  return (
    <nav
      className="w-full bg-bg border-t border-line"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex h-[56px]">
        {TABS.map(({ id, label, Icon }) => {
          const active = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={`flex-1 flex flex-col items-center justify-center gap-xs min-h-[44px] font-pretendard transition-colors duration-ui ease ${active ? 'text-accent' : 'text-textTertiary'}`}
            >
              <Icon size={24} />
              <span className="text-footnote">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
