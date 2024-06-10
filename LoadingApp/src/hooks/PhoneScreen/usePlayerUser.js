
import { useState } from 'react';
import axios from 'axios';

const usePlayerUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPlayerUser = async (name, avatar) => {
    setLoading(true);
    setError(null);
    try {

      const formData = new URLSearchParams();
      formData.append('userName', name);
      formData.append('avatar', avatar);

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
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err);
      throw err;
    }
  };

  return { createPlayerUser, loading, error };
};

export default usePlayerUser;
