import { useEffect, useState } from 'react';
import TimeCheckLottie from './lotties/timecheck';
// import TimeCheckLottie from './lotties/TimeCheckLottie';

const TimeCheck = () => {
  const [myTime, setMyTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

    const options = {
      timezone: 'America/New_York',
      hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    }
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
      setMyTime(formattedTime);
      // setMyTime(now.toLocaleTimeString());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-max rounded-xl border border-[color:var(--border)] bg-white/90 p-3 md:absolute md:right-0 md:top-0 md:p-4 shadow-[var(--shadow-soft)] flex items-center gap-4">
      <div className="w-10 h-10 md:w-14 md:h-14">
        <TimeCheckLottie />
      </div>

      <div className="text-left">
        <h3 className="text-sm font-bold text-[color:var(--ink)]">Time Check</h3>
        <p className="text-[12px] sm:text-sm text-[color:var(--ink-muted)]">My Time: {myTime}</p>
        <p className="text-[12px] sm:text-sm text-[color:var(--ink-muted)]">Time Zone: GMT+2</p>
      </div>
    </div>

  );
};

export default TimeCheck;
