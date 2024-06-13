// Import necessary modules
import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the API URL for fetching player users
const API_URL = 'http://localhost:8080/playerUser'; // Updated URL

// Custom hook to fetch and count player avatars
const useAvatarCounts = () => {
  const [avatarCounts, setAvatarCounts] = useState({ avatar1: 0, avatar2: 0, avatar3: 0 }); // State to store avatar counts

  useEffect(() => {
    // Function to fetch players from the API
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(`${API_URL}`, { withCredentials: true }); // Fetch players with credentials
        const players = response.data; // Get players data from response
        const counts = { avatar1: 0, avatar2: 0, avatar3: 0 }; // Initialize counts

        // Count avatars based on player data
        players.forEach(player => {
          if (player.avatar === 1) counts.avatar1++;
          else if (player.avatar === 2) counts.avatar2++;
          else if (player.avatar === 3) counts.avatar3++;
        });

        setAvatarCounts(counts); // Update state with avatar counts
      } catch (error) {
        console.error("Error fetching players: ", error); // Log error to console
      }
    };

    fetchPlayers(); // Invoke the fetch function
  }, []); // Empty dependency array ensures this runs once when component mounts

  return avatarCounts; // Return the avatar counts state
};

export default useAvatarCounts; // Export the custom hook
