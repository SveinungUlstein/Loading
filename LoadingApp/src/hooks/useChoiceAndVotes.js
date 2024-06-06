import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL_CHOICES = 'http://localhost:8080/choices'; // Ensure this URL is correct
const API_URL_VOTES = 'http://localhost:8080/votes'; // Ensure this URL is correct

const useChoicesAndVotes = () => {
  const [choices, setChoices] = useState([]);
  const [votes, setVotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChoicesAndVotes = async () => {
      try {
        const [choicesResponse, votesResponse] = await Promise.all([
          axios.get(API_URL_CHOICES, { withCredentials: true }),
          axios.get(API_URL_VOTES, { withCredentials: true })
        ]);

        setChoices(choicesResponse.data);
        setVotes(votesResponse.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching choices and votes: ", error);
      }
    };

    fetchChoicesAndVotes();
  }, []);

  return { choices, votes, error };
};

export default useChoicesAndVotes;
