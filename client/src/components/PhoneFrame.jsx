import StatusBar from './StatusBar';
import TabBar from './TabBar';

export default function PhoneFrame({ children, overlays, theme, activeTab, onTabChange }) {
  return (
    <div className="min-h-screen flex justify-center bg-surfaceFaint">
      <div
        className={`w-full max-w-frame min-h-screen bg-bg flex flex-col transition-colors duration-theme ease relative${theme === 'dark' ? ' theme-dark' : ''}`}
      >
        <StatusBar />
        <div className="flex-1 flex flex-col overflow-y-auto min-h-0">
          {children}
        </div>
        <TabBar activeTab={activeTab} onChange={onTabChange} />
        {overlays}
      </div>
    </div>
  );
}
