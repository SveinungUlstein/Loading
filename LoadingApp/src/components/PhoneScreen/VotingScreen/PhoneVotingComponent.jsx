import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useVotes from '../../../hooks/PhoneScreen/useVotes.js';
import '../../../styles/PhoneScreenStyles/phoneVotingStyles/phonevoting.css'; 

function PhoneVotingComponent() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(9); // Timer state
  const [orientationLocked, setOrientationLocked] = useState(true); // Orientation lock state
  const [showPopup, setShowPopup] = useState(false); // Popup visibility state
  const [isPortrait, setIsPortrait] = useState(false); // Portrait orientation state
  const [hasVoted, setHasVoted] = useState(false); // State to track if user has voted
  const { castVote, loading, error } = useVotes(); // Custom hook for votes

  useEffect(() => {
    // Function to lock screen orientation to landscape
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

    // Function to handle orientation change
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

  // Handle vote button click
  const handleClick = async (choiceId) => {
    if (hasVoted) return; // Prevent multiple votes

    console.log(`You clicked ${choiceId}`);
    try {
      const userId = 1;  // Assuming 1 is the userId for simplicity
      const response = await castVote(userId, choiceId);  // Pass userId and choiceId
      console.log('Vote cast successfully:', response);
      setHasVoted(true); // Mark that the user has voted
      
      // Save user's choice to local storage
      localStorage.setItem('userChoice', JSON.stringify({ choiceId, choiceTxt: choiceId === 1 ? 'øks' : 'bue' }));
    } catch (error) {
      console.error('Error casting vote:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: 'rgba(77,59,43,255)' }}>
      <div className="p-6 max-w-sm mx-auto bg-brown rounded-xl shadow-md space-y-4 text-center">
        <div className="grid grid-cols-2 gap-4">
          <button
            className="p-4 border rounded-lg hover:bg-yellow-200 cursor-pointer"
            onClick={() => handleClick(1)}  
            disabled={loading || hasVoted} // Disable if loading or user has voted
          >
            <img src="src/images/Axe button.png" alt="Axe Button" className="button-img" />
          </button>
          <button
            className="p-4 border rounded-lg hover:bg-yellow-200 cursor-pointer"
            onClick={() => handleClick(2)}  
            disabled={loading || hasVoted} // Disable if loading or user has voted
          >
            <img src="src/images/Bow and arrow button.png" alt="Bow and Arrow Button" className="button-img" />
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
