// src/hooks/PhoneScreen/useVotes.js
import { useState } from 'react';
import axios from 'axios';

const useVotes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const castVote = async (userId, choiceId) => {
    setLoading(true);
    setError(null);
    try {
      const formData = new URLSearchParams();
      formData.append('userId', userId);
      formData.append('choiceId', choiceId);

      console.log("Casting vote:", formData.toString());

      const response = await axios.post(
        'http://localhost:8080/votes/cast',
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      console.log("Response:", response);

      setLoading(false);
      return response.data;
    } catch (err) {
      console.error("Axios error:", err);
      setLoading(false);
      setError(err);
      throw err;
    }
  };

  const getVotesByUserId = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:8080/votes/user/${userId}`);
      setLoading(false);
      return response.data;
    } catch (err) {
      console.error("Axios error:", err);
      setLoading(false);
      setError(err);
      throw err;
    }
  };

  return { castVote, getVotesByUserId, loading, error };
};

export default useVotes;
