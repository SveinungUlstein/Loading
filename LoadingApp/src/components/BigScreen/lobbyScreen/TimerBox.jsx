import React from 'react';
import '../../../styles/lobbyScreen.css';

const TimerBox = ({ timerImageUrl }) => (
  <div className="timer-section flex flex-col items-center">
    <div className="timer-text">Spillet begynner om</div>
    <div className="timer-image" style={{ backgroundImage: `url(${timerImageUrl})` }}></div>
    <div className="timer-seconds">40 sekunder</div>
  </div>
);

export default TimerBox; 
