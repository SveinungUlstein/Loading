import React, { useState, useEffect } from 'react';
import '../../../styles/lobbyScreen.css';

const TimerBox = ({ timerImageUrl }) => {
  const [time, setTime] = useState(300); // 300 seconds = 5 minutes

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="timer-section flex flex-col items-center">
      <div className="timer-text">Spillet begynner om</div>
      <div className="timer-image" style={{ backgroundImage: `url(${timerImageUrl})` }}></div>
      <div className="timer-seconds">{formatTime(time)}</div>
    </div>
  );
};

export default TimerBox;
