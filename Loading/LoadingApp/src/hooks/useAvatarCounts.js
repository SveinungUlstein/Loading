import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/playerUser'; // Updated URL

const useAvatarCounts = () => {
  const [avatarCounts, setAvatarCounts] = useState({ avatar1: 0, avatar2: 0, avatar3: 0 });

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(`${API_URL}`, { withCredentials: true });
        const players = response.data;
        const counts = { avatar1: 0, avatar2: 0, avatar3: 0 };

        players.forEach(player => {
          if (player.avatar === 1) counts.avatar1++;
          else if (player.avatar === 2) counts.avatar2++;
          else if (player.avatar === 3) counts.avatar3++;
        });

        setAvatarCounts(counts);
      } catch (error) {
        console.error("Error fetching players: ", error);
      }
    };

    fetchPlayers();
  }, []);

  return avatarCounts;
};

export default useAvatarCounts;
