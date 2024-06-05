import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TestPage(){
  const [gameRoomStatus, setGameRoomStatus] = useState(null);
  const [gameRooms, setGameRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const fetchGameRoomStatus = (id) => {
    setLoading(true);
    setError(null);

    axios.get(`http://localhost:8080/gameroom/status/${id}`)
      .then((response) => {
        console.log('Data received:', response.data);
        setResponseData(response.data); // Set the received data
        setGameRoomStatus(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  };

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
          <h3 className="text-xl text-gray-900 font-bold">Adminskjerm:</h3>
          <div className="flex flex-wrap justify-center space-x-2 space-y-2">
            <Link className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-green-700" to="/adminreport">Report / rapporter</Link>
            <Link className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-green-700" to="/adminlibrary">Library / bibliotek</Link>
            <Link className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-green-700" to="/adminhome">Home / hjem</Link>
          </div>
        </div>
        <button
          onClick={() => fetchGameRoomStatus(1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mt-4"
        >
          Retrieve Game Rooms
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {responseData && ( // Render if responseData exists
          <div className="mt-4 text-left">
            <h3 className="text-xl text-gray-900 font-bold">Response Data:</h3>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
        {gameRooms.length > 0 && (
          <div className="mt-4 text-left">
            <h3 className="text-xl text-gray-900 font-bold">Game Rooms:</h3>
            <ul>
              {gameRooms.map((room, index) => (
                <li key={index} className="border p-2 mb-2 rounded">
                  <h4 className="text-lg font-bold">QR Code: <a href={room.qrCodeData} className="text-blue-500">{room.qrCodeData}</a></h4>
                  <p>Active: {room.active ? 'Yes' : 'No'}</p>
                  <p>Link: <a href={room._links.self.href} className="text-blue-500">{room._links.self.href}</a></p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestPage;
