import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewUserComponent() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to the next screen or handle the character selection
    console.log("Character Selected with Name: ", name);
    navigate('/next-route'); // Modify as necessary
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-brown-dark text-white font-vt323">
      <div className="flex justify-between items-center w-full max-w-4xl p-4">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl mb-4">Hvem vil du være?</h1>
          <div className="flex">
            <img src="/path/to/character1.png" alt="Character 1" className="w-24 h-24 mr-4 cursor-pointer"/>
            <img src="/path/to/character2.png" alt="Character 2" className="w-24 h-24 mr-4 cursor-pointer"/>
            <img src="/path/to/character3.png" alt="Character 3" className="w-24 h-24 cursor-pointer"/>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-2xl mb-4">Hva vil du kalle deg?</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-xs">
            <input 
              type="text" 
              placeholder="Skriv inn" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="p-2 bg-yellow-300 text-black rounded w-full"
            />
            <button type="submit" className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded font-bold">LOAD</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserComponent;
