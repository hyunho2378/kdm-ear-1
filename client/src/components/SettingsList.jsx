import { ChevronRight } from 'lucide-react';
import { typography } from '../tokens';

function Toggle({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={enabled}
      className="min-h-[44px] min-w-[44px] flex items-center justify-end"
    >
      <div
        className={`relative rounded-pill transition-colors duration-ui ease ${enabled ? 'bg-accent' : 'bg-line'}`}
        style={{ width: 51, height: 31 }}
      >
        <div
          className="absolute top-[2px] rounded-full transition-all duration-ui ease"
          style={{
            width: 27,
            height: 27,
            backgroundColor: 'var(--on-accent)',
            left: enabled ? 22 : 2,
          }}
        />
      </div>
    </button>
  );
}

function Row({ label, children, isLast }) {
  return (
    <div
      className={`flex items-center justify-between min-h-[44px] px-base ${
        !isLast ? 'border-b border-line' : ''
      }`}
    >
      <p className="text-body font-pretendard text-textPrimary">{label}</p>
      {children}
    </div>
  );
}

function Group({ label, children }) {
  return (
    <div className="flex flex-col gap-xs">
      {label && (
        <p
          className="text-caption font-pretendard text-textTertiary px-xs"
          style={{ letterSpacing: typography.caption.tracking }}
        >
          {label.toUpperCase()}
        </p>
      )}
      <div className="rounded-card bg-surfaceFaint overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default function SettingsList({
  notificationEnabled, onNotificationToggle,
  listeningEnabled, onListeningToggle,
  speedEnabled, onSpeedToggle,
}) {
  return (
    <div className="flex flex-col gap-xxl">
      <Group>
        <Row label="오늘의 쉼표 알림" isLast>
          <Toggle enabled={notificationEnabled} onToggle={onNotificationToggle} />
        </Row>
      </Group>

      <Group>
        <Row label="60-60 규칙 안내">
          <ChevronRight size={20} className="text-textTertiary" />
        </Row>
        <Row label="앱 정보" isLast>
          <ChevronRight size={20} className="text-textTertiary" />
        </Row>
      </Group>

      <Group label="데모">
        <Row label="이어폰 감지">
          <Toggle enabled={listeningEnabled} onToggle={onListeningToggle} />
        </Row>
        <Row label="시간 빠르게" isLast>
          <Toggle enabled={speedEnabled} onToggle={onSpeedToggle} />
        </Row>
      </Group>
    </div>
  );
}
