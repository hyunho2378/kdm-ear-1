import { useState, useEffect, useRef } from 'react';
import { timing } from './tokens';
import PhoneFrame from './components/PhoneFrame';
import RestOverlay from './components/RestOverlay';
import HomeScreen from './screens/HomeScreen';
import RecordScreen from './screens/RecordScreen';
import SettingsScreen from './screens/SettingsScreen';
import NightSummaryScreen from './screens/NightSummaryScreen';

const TICK = 100;        // ms
const TODAY_IDX = 4;     // 목요일 — 데모 고정

function App() {
  const [activeTab, setActiveTab]           = useState('home');
  const [fatigue, setFatigue]               = useState(0);
  const [listening, setListening]           = useState(true);
  const [resting, setResting]               = useState(false);
  const [restRecovered, setRestRecovered]   = useState(false);
  const [restCount, setRestCount]           = useState(0);
  const [protectedDays]                     = useState(3);
  const [restedDays, setRestedDays]         = useState([0, 2]); // 월 수 — 데모 초기값
  const [dayClock, setDayClock]             = useState(timing.DAY_START);
  const [nightSummary, setNightSummary]     = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [speedEnabled, setSpeedEnabled]     = useState(false);

  const restStartFatigueRef = useRef(0);
  const restStartTimeRef    = useRef(0);
  const speedRef            = useRef(1);

  // stage는 restCount에서 파생 — 2회마다 단계 상승
  const stage = Math.min(3, 1 + Math.floor(restCount / 2));

  const theme = resting ? 'dark' : 'light';
  const listeningMinutes = Math.floor(fatigue * 60);

  // dayClock 타이머 — resting 무관하게 항상 진행
  useEffect(() => {
    if (!listening) return;
    const dayRange = timing.NIGHT_THRESHOLD - timing.DAY_START;
    const id = setInterval(() => {
      setDayClock(prev => {
        const next = prev + dayRange * TICK * speedRef.current / timing.DAY_CLOCK_DURATION;
        if (prev < timing.NIGHT_THRESHOLD && next >= timing.NIGHT_THRESHOLD) {
          setNightSummary(true);
          console.log('[이어쉼표] nightSummary=true — dayClock', timing.NIGHT_THRESHOLD, '도달');
        }
        return Math.min(24, next);
      });
    }, TICK);
    return () => clearInterval(id);
  }, [listening]);

  // fatigue 타이머 — listening && !resting 시 자동 상승
  useEffect(() => {
    if (!listening || resting) return;
    const id = setInterval(() => {
      setFatigue(prev => Math.min(1, prev + TICK * speedRef.current / timing.DAY_DURATION));
    }, TICK);
    return () => clearInterval(id);
  }, [listening, resting]);

  // 회복 타이머 — resting 시 fatigue 점진 감소
  useEffect(() => {
    if (!resting) return;
    const startFatigue = restStartFatigueRef.current;
    const startTime    = restStartTimeRef.current;
    const id = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const effectiveDuration = timing.REST_DURATION / speedRef.current;
      if (elapsed >= effectiveDuration) {
        clearInterval(id);
        setFatigue(0);
        setRestRecovered(true);
      } else {
        setFatigue(Math.max(0, startFatigue * (1 - elapsed / effectiveDuration)));
      }
    }, TICK);
    return () => clearInterval(id);
  }, [resting]);

  // 회복 완료 후 1.2s → 자동 홈 복귀
  useEffect(() => {
    if (!restRecovered) return;
    const t = setTimeout(() => {
      setResting(false);
      setRestCount(c => c + 1);
      setRestedDays(prev => prev.includes(TODAY_IDX) ? prev : [...prev, TODAY_IDX]);
      setRestRecovered(false);
    }, 1200);
    return () => clearTimeout(t);
  }, [restRecovered]);

  const handleRest = () => {
    restStartFatigueRef.current = fatigue;
    restStartTimeRef.current    = Date.now();
    setResting(true);
  };

  const handleIgnore = () => {
    // 지금은 어려워 — fatigue 유지, 쉼 없음
  };

  const handleRestBack = () => {
    if (restRecovered) {
      setRestCount(c => c + 1);
      setRestedDays(prev => prev.includes(TODAY_IDX) ? prev : [...prev, TODAY_IDX]);
      setFatigue(0);
    }
    setResting(false);
    setRestRecovered(false);
  };

  const handleRestSkip = () => {
    setFatigue(0);
    setResting(false);
    setRestRecovered(false);
    setRestCount(c => c + 1);
    setRestedDays(prev => prev.includes(TODAY_IDX) ? prev : [...prev, TODAY_IDX]);
  };

  const handleDaySkip = () => {
    setDayClock(timing.NIGHT_THRESHOLD);
    setNightSummary(true);
    console.log('[이어쉼표] day skip → nightSummary=true');
  };

  const handleNightBack = () => {
    setNightSummary(false);
  };

  const handleNotificationToggle = () => setNotificationEnabled(prev => !prev);

  const handleListeningToggle = () => setListening(prev => !prev);

  const handleSpeedToggle = () => {
    setSpeedEnabled(prev => {
      const next = !prev;
      speedRef.current = next ? 10 : 1;
      return next;
    });
  };

  return (
    <PhoneFrame
      theme={theme}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      overlays={
        <>
          {resting && (
            <RestOverlay
              fatigue={fatigue}
              recovered={restRecovered}
              onBack={handleRestBack}
              onSkip={handleRestSkip}
            />
          )}
          {nightSummary && !resting && (
            <NightSummaryScreen
              restCount={restCount}
              onBack={handleNightBack}
            />
          )}
        </>
      }
    >
      {activeTab === 'home' && (
        <HomeScreen
          fatigue={fatigue}
          onRest={handleRest}
          onIgnore={handleIgnore}
          protectedDays={protectedDays}
          listeningMinutes={listeningMinutes}
          onDaySkip={handleDaySkip}
        />
      )}
      {activeTab === 'record' && (
        <RecordScreen
          restCount={restCount}
          protectedDays={protectedDays}
          restedDays={restedDays}
          stage={stage}
        />
      )}
      {activeTab === 'settings' && (
        <SettingsScreen
          notificationEnabled={notificationEnabled}
          onNotificationToggle={handleNotificationToggle}
          listeningEnabled={listening}
          onListeningToggle={handleListeningToggle}
          speedEnabled={speedEnabled}
          onSpeedToggle={handleSpeedToggle}
        />
      )}
    </PhoneFrame>
  );
}

export default App;
