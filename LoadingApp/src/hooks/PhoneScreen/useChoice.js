import { useState } from 'react';
import axios from 'axios';

const useChoice = () => {
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getVotesByUserId = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/choices`);
      setChoices(response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(error);
      setLoading(false);
      throw error;
    }
  };

  return { getVotesByUserId, choices, loading, error };
};

export default useChoice;
