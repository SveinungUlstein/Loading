import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/votes/most-voted'; // Ensure this URL is correct

const useMostVotedChoice = () => {
  const [mostVoted, setMostVoted] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMostVotedChoice = async () => {
      try {
        const response = await axios.get(API_URL, { withCredentials: true });
        setMostVoted(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching most voted choice: ", error);
      }
    };

    fetchMostVotedChoice();
  }, []);

  return { mostVoted, error };
};

export default useMostVotedChoice;
