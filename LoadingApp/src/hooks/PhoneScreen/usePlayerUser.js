import { useState } from 'react';
import axios from 'axios';

// Custom hook for creating a player user
const usePlayerUser = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to create a player user
  const createPlayerUser = async (name, avatar) => {
    setLoading(true);
    setError(null);
    try {
      const formData = new URLSearchParams();
      formData.append('userName', name); // Append user name
      formData.append('avatar', avatar); // Append avatar

      const response = await axios.post(
        'http://localhost:8080/playerUser',
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      setLoading(false);
      return response.data; // Return response data
    } catch (err) {
      setLoading(false);
      setError(err); // Set error state
      throw err; // Re-throw error
    }
  };

  return { createPlayerUser, loading, error }; // Return hook data
};

export default usePlayerUser;
