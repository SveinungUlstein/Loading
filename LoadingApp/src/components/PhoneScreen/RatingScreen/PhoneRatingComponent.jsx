import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from 'react-rating-stars-component';
import '../../../styles/PhoneScreenStyles/NewUserStyle/newUserScreen.css'; // Adjust this import to your actual CSS file location

function PhoneRatingComponent() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    console.log(`Selected Rating: ${newRating}`);
  };

  const handleSubmit = () => {
    console.log(`Submitted Rating: ${rating}`);
    console.log(`Feedback: ${feedback}`);
    navigate('/'); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-light-bg relative" style={{ backgroundColor: 'rgba(231, 227, 193, 1)' }}>
      {isPortrait && (
        <div className="orientation-warning absolute inset-0 flex items-center justify-center bg-white bg-opacity-30 visible">
          <img src="src/images/turnphone.png" alt="Please rotate your device" />
        </div>
      )}
      {!isPortrait && (
        <div className="p-6 max-w-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto rounded-xl shadow-md space-y-4 text-center" style={{ backgroundColor: 'rgba(250, 248, 235, 1)' }}>
          <div className="flex items-start justify-center space-x-4">
            <img src="src/images/Karakter2.png" alt="Character" className="w-24 h-24" />
            <div className="flex flex-col items-center">
              <div className="flex justify-center mb-4">
                <Rating
                  count={5}
                  onChange={handleRatingChange}
                  size={isPortrait ? 70 : 50} 
                  activeColor="rgba(250, 204, 21, 1)" 
                  color="rgba(211, 211, 211, 1)" 
                  isHalf={false}
                />
              </div>
              <textarea
                className="textarea-responsive"
                rows="4"
                placeholder="Hvordan var opplevelsen din?"
                style={{ height: '100px' }}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
          </div>
          <button
            className="mt-4 px-4 py-2 text-black rounded"
            onClick={handleSubmit}
            style={{ fontFamily: 'VT323, monospace', backgroundColor: 'rgba(231, 227, 193, 1)' }} // Use the project's font and new color
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default PhoneRatingComponent;
