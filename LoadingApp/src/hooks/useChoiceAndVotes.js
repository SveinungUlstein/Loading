// Import necessary modules
import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the API URLs for fetching choices and votes
const API_URL_CHOICES = 'http://localhost:8080/choices'; 
const API_URL_VOTES = 'http://localhost:8080/votes'; 

// Custom hook to fetch choices and votes
const useChoicesAndVotes = () => {
  const [choices, setChoices] = useState([]); // State to store choices
  const [votes, setVotes] = useState([]); // State to store votes
  const [error, setError] = useState(null); // State to store any errors

  useEffect(() => {
    // Function to fetch choices and votes from the API
    const fetchChoicesAndVotes = async () => {
      try {
        const [choicesResponse, votesResponse] = await Promise.all([
          axios.get(API_URL_CHOICES, { withCredentials: true }), // Fetch choices with credentials
          axios.get(API_URL_VOTES, { withCredentials: true }) // Fetch votes with credentials
        ]);

        setChoices(choicesResponse.data); // Update state with fetched choices
        setVotes(votesResponse.data); // Update state with fetched votes
      } catch (error) {
        setError(error); // Update state with error
        console.error("Error fetching choices and votes: ", error); // Log error to console
      }
    };

    fetchChoicesAndVotes(); // Invoke the fetch function
  }, []); // Empty dependency array ensures this runs once when component mounts

  return { choices, votes, error }; // Return the choices, votes, and error state
};

export default useChoicesAndVotes; // Export the custom hook
