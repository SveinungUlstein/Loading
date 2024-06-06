import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/PhoneScreenStyles/NewUserStyle/newUserScreen.css';

function NewUserComponent() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isPortrait, setIsPortrait] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    handleOrientationChange();
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    console.log("Character Selected: ", character);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Character Selected with Name: ", selectedCharacter, name);
    navigate('/phonevoting');
  };

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark text-white font-vt323 relative">
      <div className="flex justify-between items-center w-full max-w-4xl p-4 bg-brown-dark rounded-lg">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl mb-4">Hvem vil du være?</h1>
          <div className="flex items-center">
            <button onClick={() => handleCharacterClick('Character 1')} className="mr-4 cursor-pointer">
              <img src="src/images/Karakter1.png" alt="Character 1" className="character-img"/>
            </button>
            <button onClick={() => handleCharacterClick('Character 2')} className="mr-4 cursor-pointer">
              <img src="src/images/Karakter2.png" alt="Character 2" className="character-img"/>
            </button>
            <button onClick={() => handleCharacterClick('Character 3')} className="cursor-pointer">
              <img src="src/images/Karakter3.png" alt="Character 3" className="character-img"/>
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col items-start">
          <h1 className="text-2xl mb-4">Hva vil du kalle deg?</h1>
          <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-xs relative">
            <input 
              type="text" 
              placeholder="Skriv inn" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="p-2 bg-yellow-300 text-black rounded w-full"
            />
          </form>
        </div>
      </div>
      <button type="button" onClick={handleButtonClick} className="absolute bottom-0 right-4 mb-6">
        <img src="src/images/load.png" alt="LOAD" className="w-20" />
      </button>
      <div className={`orientation-warning ${isPortrait ? 'visible' : ''}`}>
        <img src="src/images/turnphone.png" alt="Please rotate your device" />
      </div>
    </div>
  );
}

export default NewUserComponent;
