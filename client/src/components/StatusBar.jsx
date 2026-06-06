import statusBarUrl from '../assets/status-bar1.svg';

export default function StatusBar() {
  return (
    <div style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <img src={statusBarUrl} alt="" aria-hidden="true" className="w-full h-auto block" />
    </div>
  );
}
