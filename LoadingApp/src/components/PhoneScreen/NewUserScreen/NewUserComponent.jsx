import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/newUserScreen.css'; // Ensure this path matches your project structure

function NewUserComponent() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [isPortrait, setIsPortrait] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Character Selected with Name: ", name);
    navigate('/'); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark text-white font-vt323 relative">
      <div className="flex justify-between items-center w-full max-w-4xl p-4 bg-brown-dark rounded-lg">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl mb-4">Hvem vil du være?</h1>
          <div className="flex items-center">
            <img src="src/images/snakkegutt.png" alt="Character 1" className="character-img mr-4 cursor-pointer"/>
            <img src="src/images/character2.png" alt="Character 2" className="character-img mr-4 cursor-pointer"/>
            <img src="src/images/snakkejente.png" alt="Character 3" className="character-img cursor-pointer"/>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col items-start">
          <h1 className="text-2xl mb-4">Hva vil du kalle deg?</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-xs relative">
            <input 
              type="text" 
              placeholder="Skriv inn" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="p-2 bg-yellow-300 text-black rounded w-full"
            />
            <button type="submit" className="absolute bottom-4 right-4">
              <img src="src/images/load-button.png" alt="LOAD" className="w-20" />
            </button>
          </form>
        </div>
      </div>
      <div className={`orientation-warning ${isPortrait ? 'visible' : ''}`}>
        <img src="src/images/turnphone.png" alt="Please rotate your device" />
      </div>
    </div>
  );
}

export default NewUserComponent;
