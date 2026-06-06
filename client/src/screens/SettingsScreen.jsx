import SettingsList from '../components/SettingsList';

export default function SettingsScreen({
  notificationEnabled, onNotificationToggle,
  listeningEnabled, onListeningToggle,
  speedEnabled, onSpeedToggle,
}) {
  return (
    <div className="flex flex-col flex-1 px-lg py-xl gap-xl">
      <h1 className="text-title2 font-pretendard text-textPrimary">설정</h1>
      <SettingsList
        notificationEnabled={notificationEnabled}
        onNotificationToggle={onNotificationToggle}
        listeningEnabled={listeningEnabled}
        onListeningToggle={onListeningToggle}
        speedEnabled={speedEnabled}
        onSpeedToggle={onSpeedToggle}
      />
    </div>
  );
}
