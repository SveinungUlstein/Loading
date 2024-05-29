import React from 'react';
import { Link } from 'react-router-dom';

function TestPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Velkommen til en enkel routing, tailwind, boilerplate / mappestruktur test!</h2>
        <p className="text-gray-600">Her kan du gå igjennom og dobbeltsjekke at alle sidene eksisterer:</p>
        <div className="space-y-4">
          <h3 className="text-xl text-gray-900 font-bold">Storskjerm:</h3>
          <div className="flex flex-wrap justify-center space-x-2 space-y-2">
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" to="/lobby">Lobby</Link>
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" to="/pin">Pin</Link>
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" to="/rating">Rating</Link>
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" to="/score">Score</Link>
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" to="/totalscore">Total Score</Link>
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" to="/voting">Voting</Link>
          </div>
          <h3 className="text-xl text-gray-900 font-bold">Telefonskjerm:</h3>
          <div className="flex flex-wrap justify-center space-x-2 space-y-2">
            <Link className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" to="/instruction">Instruction</Link>
            <Link className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" to="/loading">Loading</Link>
            <Link className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" to="/newuser">New User</Link>
            <Link className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" to="/phonerating">Phone Rating</Link>
            <Link className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" to="/phonevoting">Phone Voting</Link>
            <Link className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" to="/userchoice">User Choice</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
