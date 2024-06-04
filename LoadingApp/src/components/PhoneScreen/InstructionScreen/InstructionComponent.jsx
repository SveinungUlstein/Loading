import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/instructionScreen.css';

function InstructionComponent() {
  const navigate = useNavigate();
  const [orientationLocked, setOrientationLocked] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

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

  return (
    <div className="flex items-center justify-center h-screen bg-light-bg font-vt323 p-4 landscape relative">

      <div className="flex flex-row items-start space-x-4 p-4">
        <div className="flex flex-col items-start space-y-20">
          <div className="flex items-center">
            <img src="/src/images/snakkejente.png" alt="Character 1" className="character-img"/>
            <div className="bubble-left">
              <p>Valgene du tar underveis i forestillingen vil påvirke historien vår</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="/src/images/snakkejente.png" alt="Character 1" className="character-img"/>
            <div className="bubble-left">
              <p>Det valget med mest stemmer bestemmer hva vi gjør</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-6">
          <div className="flex items-center" style={{ marginTop: '80px' }}>
            <div className="bubble-right">
              <p>Du har 30 sekunder på å bestemme deg</p>
            </div>
            <img src="src/images/snakkegutt.png" alt="Character 2" className="character-img"/>
          </div>
        </div>
      </div>
      <button
        className="next-button"
        onClick={() => navigate(-1)}
      >
        <img src="/src/images/Group.png" alt="Videre" />
    
      </button>
      <div className={`orientation-warning ${isPortrait ? 'visible' : ''}`}>
        <img src="/src/images/turnphone.png" alt="Please rotate your device" />
      </div>
    </div>
  );
}

export default InstructionComponent;
