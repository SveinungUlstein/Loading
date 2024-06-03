import React, { useState, useEffect } from 'react';

const TestController = () => {
  const [gameRooms, setGameRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/gameRoomEntities')
      .then((response) => response.json())
      .then((data) => {
        const gameRoomsData = data._embedded.gameRoomEntities;
        setGameRooms(gameRoomsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Game Rooms</h1>
      <ul>
        {gameRooms.map((room) => (
          <li key={room._links.self.href}>
            <h2>QR Code: <a href={room.qrCodeData}>{room.qrCodeData}</a></h2>
            <p>Active: {room.active ? 'Yes' : 'No'}</p>
            <p>Link: <a href={room._links.self.href}>{room._links.self.href}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestController;
