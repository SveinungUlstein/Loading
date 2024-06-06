import React, { useState } from 'react';
import axios from 'axios';

const TestController = () => {
  const [gameRooms, setGameRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGameRooms = () => {
    setLoading(true);
    axios.get('http://localhost:8080/gameRoomEntities')
      .then((response) => {
        const gameRoomsData = response.data._embedded.gameRoomEntities;
        setGameRooms(gameRoomsData);
        console.log('Fetched game rooms:', gameRoomsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <button
        onClick={fetchGameRooms}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mt-4"
      >
        Retrieve Game Rooms
      </button>
      {loading && <p>Loading...</p>}
      {gameRooms.length > 0 && (
        <div className="mt-4 text-left">
          <h3 className="text-xl text-gray-900 font-bold">Game Rooms:</h3>
          <ul>
            {gameRooms.map((room) => (
              <li key={room._links.self.href} className="border p-2 mb-2 rounded">
                <h4 className="text-lg font-bold">QR Code: <a href={room.qrCodeData} className="text-blue-500">{room.qrCodeData}</a></h4>
                <p>Active: {room.active ? 'Yes' : 'No'}</p>
                <p>Link: <a href={room._links.self.href} className="text-blue-500">{room._links.self.href}</a></p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestController;
