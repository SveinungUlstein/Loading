import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/instructionScreen.css';

function InstructionComponent() {
  const navigate = useNavigate();
  const [orientationLocked, setOrientationLocked] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lockOrientation = async () => {
      if (screen.orientation && screen.orientation.lock) { // Check if the Screen Orientation API is supported
        try {
          await screen.orientation.lock('landscape'); // Attempt to lock orientation to landscape
          setOrientationLocked(true);
        } catch (error) {
          console.error('Failed to lock orientation:', error); // Log any errors
          setOrientationLocked(false);
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
        }
      } else {
        setOrientationLocked(false);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
      }
    };

    lockOrientation(); // Lock orientation on component mount

    window.addEventListener('orientationchange', lockOrientation); // Re-lock on orientation change

    return () => {
      window.removeEventListener('orientationchange', lockOrientation); // Clean up event listener
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock(); // Unlock orientation on component unmount
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-light-bg font-vt323 p-4 landscape relative">
      {!orientationLocked && showPopup && ( // Show popup if orientation is not locked and popup should be shown
        <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded">
          Please rotate your device to landscape mode.
        </div>
      )}
      <div className="flex flex-row items-start space-x-4 p-4">
        <div className="flex flex-col items-start space-y-20"> {/* Adjusted spacing */}
          <div className="flex items-center">
            <img src="/path/to/your/character1.png" alt="Character 1" className="character-img"/>
            <div className="bubble-left">
              <p>Valgene du tar underveis i forestillingen vil påvirke historien vår</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="/path/to/your/character1.png" alt="Character 1" className="character-img"/>
            <div className="bubble-left">
              <p>Det valget med mest stemmer bestemmer hva vi gjør</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-6"> {/* Adjusted spacing */}
          <div className="flex items-center" style={{ marginTop: '80px' }}> {/* Added margin-top to move the bubble down */}
            <div className="bubble-right">
              <p>Du har 30 sekunder på å bestemme deg</p>
            </div>
            <img src="/path/to/your/character2.png" alt="Character 2" className="character-img"/>
          </div>
        </div>
      </div>
      <button
        id="back-button"
        onClick={() => navigate(-1)} // Navigate back on button click
      >
        Back
      </button>
    </div>
  );
}

export default InstructionComponent;
