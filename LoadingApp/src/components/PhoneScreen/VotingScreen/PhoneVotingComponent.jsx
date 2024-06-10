import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useChoices from '../../../hooks/PhoneScreen/useChoice.js';
import '../../../styles/PhoneScreenStyles/phoneVotingStyles/phonevoting.css'; 

function PhoneVotingComponent() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(9);
  const [orientationLocked, setOrientationLocked] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const { submitChoice, loading } = useChoices();

  useEffect(() => {
    const lockOrientation = async () => {
      if (screen.orientation && screen.orientation.lock) {
        try {
          await screen.orientation.lock('landscape');
          setOrientationLocked(true);
        } catch (error) {
          console.error('Failed to lock orientation:', error);
          setOrientationLocked(false);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 5000);
        }
      } else {
        setOrientationLocked(false);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
      }
    };

    const handleOrientationChange = () => {
      if (window.innerHeight > window.innerWidth) {
        setIsPortrait(true);
      } else {
        setIsPortrait(false);
      }
    };

    lockOrientation();
    handleOrientationChange();
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          navigate('/userchoice');
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleClick = async (choice) => {
    console.log(`You clicked ${choice}`);
    try {
      const response = await submitChoice(choice, 1); // Assuming 1 is the questionId for simplicity
      console.log('Choice submitted successfully:', response);
      // Add any effect or logic after successful submission
    } catch (error) {
      console.error('Error submitting choice:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: 'rgba(77,59,43,255)' }}>
      <div className="p-6 max-w-sm mx-auto bg-brown rounded-xl shadow-md space-y-4 text-center">
        <div className="grid grid-cols-2 gap-4">
          <button
            className="p-4 border rounded-lg hover:bg-yellow-200 cursor-pointer"
            onClick={() => handleClick('bow')}
          >
            <img src="src/images/Bow and arrow button.png" alt="Bow and Arrow Button" className="button-img" />
          </button>
          <button
            className="p-4 border rounded-lg hover:bg-yellow-200 cursor-pointer"
            onClick={() => handleClick('axe')}
          >
            <img src="src/images/Axe button.png" alt="Axe Button" className="button-img" />
          </button>
        </div>
        <p className="mt-4 text-lg text-yellow">{timeLeft} sekunder igjen å stemme...</p>
        <div className="time-bar-container">
          <div
            className="time-bar"
            style={{ width: `${(timeLeft / 9) * 100}%` }}
          />
        </div>
      </div>
      <div className={`orientation-warning ${isPortrait ? 'visible' : ''}`}>
        <img src="src/images/turnphone.png" alt="Please rotate your device" />
      </div>
    </div>
  );
}

export default PhoneVotingComponent;
