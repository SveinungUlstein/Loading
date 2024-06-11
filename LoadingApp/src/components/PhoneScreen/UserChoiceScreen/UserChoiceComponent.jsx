import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useChoicesAndVotes from '../../../hooks/useChoiceAndVotes.js';
import '../../../styles/PhoneScreenStyles/UserChoiceStyles/Userchoice.css';

// Component to display a picture
const PictureComponent = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-12 h-12 mr-4" />
);

// User choice component
function UserChoiceComponent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isPortrait, setIsPortrait] = useState(false); // Portrait orientation state
  const [showPopup, setShowPopup] = useState(false); // Popup visibility state
  const { choices, votes, error } = useChoicesAndVotes(); // Custom hook for choices and votes
  const [userChoice, setUserChoice] = useState(null); // User choice state

  useEffect(() => {
    // Function to lock screen orientation to landscape
    const lockOrientation = async () => {
      if (screen.orientation && screen.orientation.lock) {
        try {
          await screen.orientation.lock('landscape');
        } catch (error) {
          console.error('Failed to lock orientation:', error);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 5000);
        }
      } else {
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
    if (choices.length > 0 && id) {
      const selectedChoice = choices.find((c) => c.id === parseInt(id));
      setUserChoice(selectedChoice);
    }
  }, [choices, id]);

  // Function to get image source based on choice option
  const getImageSource = (choice) => {
    if (!choice) return '';
    switch (choice.option) {
      case 'axe':
        return 'src/images/Axe button.png';
      case 'bow and arrow':
        return 'src/images/PilOgBue.png';
      default:
        return '';
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-light-bg font-vt323 p-4 landscape-mode">
      <div className="choice-container">
        <div className="choice-header">Your Choices</div>
        {choices.length === 0 && !error && <p>Loading choices...</p>}
        {error && <p>Error: {error.message}</p>}
        {choices.length > 0 && choices.map(choice => (
          <div key={choice.id} className={`flex items-center bg-white p-4 border-2 border-black rounded-lg mb-4 ${userChoice && userChoice.id === choice.id ? 'bg-yellow-200' : ''}`}>
            <PictureComponent src={getImageSource(choice)} alt="Choice" />
            <div>
              <p>{choice.question}</p>
              <p>You and {votes.length} others chose this option</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="next-button"
        onClick={() => navigate('/phonerating')}
      >
        Next
      </button>
      <div className={`orientation-warning ${isPortrait ? 'visible' : ''}`}>
        <img src="src/images/turnphone.png" alt="Please rotate your device" />
      </div>
    </div>
  );
}

export default UserChoiceComponent;
