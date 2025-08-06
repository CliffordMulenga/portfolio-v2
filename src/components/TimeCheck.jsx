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
    <div className="absolute top-[15%] right-[20%] md:right-[5%] md:top-[15%] sm:top-[20%] bg-white/90 p-2 md:p-4 rounded-xl shadow-lg flex items-center gap-4">
  <div className="w-12 h-12 md:w-16 md:h-16">
    <TimeCheckLottie />
  </div>

  <div className="text-left">
    <h3 className="text-sm font-bold">Time Check</h3>
    <p className="text-[12px] sm:text-sm">My Time: {myTime}</p>
    <p className="text-[12px] sm:text-sm">Time Zone: GMT+2</p>
  </div>
</div>

  );
};

export default TimeCheck;
