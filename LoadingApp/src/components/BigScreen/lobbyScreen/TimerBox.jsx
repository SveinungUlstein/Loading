// Import necessary modules and styles
import React, { useState, useEffect } from 'react';
import '../../../styles/LobbyStyles/lobbyScreen.css';

// TimerBox component definition
const TimerBox = ({ timerImageUrl }) => {
  const [time, setTime] = useState(300); // Initialize time state with 300 seconds (5 minutes)

  useEffect(() => {
    // Function to handle countdown
    const countdown = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0)); // Decrease time by 1 second
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdown);
  }, []);

  // Function to format time in minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Format to mm:ss
  };

  return (
    <div className="timer-section flex flex-col items-center">
      <div className="timer-text">Spillet begynner om</div> {}
      <div className="timer-image" style={{ backgroundImage: `url(${timerImageUrl})` }}></div> {/* Display timer image */}
      <div className="timer-seconds">{formatTime(time)}</div> {}
    </div>
  );
};

export default TimerBox; // Export the component to be used in other parts of the app
