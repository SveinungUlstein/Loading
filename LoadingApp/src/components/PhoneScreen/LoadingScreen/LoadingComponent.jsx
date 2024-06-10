import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/PhoneScreenStyles/LoadingScreen/Loadingstyles.css';

function LoadingScreen() {
  const navigate = useNavigate();
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.innerHeight > window.innerWidth) {
        setIsPortrait(true);
      } else {
        setIsPortrait(false);
      }
    };

    handleOrientationChange();
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-brown text-white relative">
      <div className="text-center">
        <h1 className="text-6xl font-pixel text-yellow-300">LOADING...</h1>
      </div>
      <div className={`orientation-warning ${isPortrait ? 'visible' : ''}`}>
        <img src="src/images/turnphone.png" alt="Please rotate your device" />
      </div>
      <button
        className="small-button"
        onClick={() => navigate('/newuser')}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <img src="src/images/arrowright.png" alt="Go to new user" style={{ width: '50px', height: '50px' }}/>
      </button>
    </div>
  );
}

export default LoadingScreen;
