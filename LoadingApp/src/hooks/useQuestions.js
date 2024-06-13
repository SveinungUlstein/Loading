// Import necessary modules
import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the API URL for fetching questions
const API_URL = 'http://localhost:8080/question'; 

// Custom hook to fetch questions
const useQuestions = () => {
  const [questions, setQuestions] = useState([]); // State to store questions
  const [error, setError] = useState(null); // State to store any errors

  useEffect(() => {
    // Function to fetch questions from the API
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(API_URL, { withCredentials: true }); // Fetch questions with credentials
        setQuestions(response.data); // Update state with fetched questions
      } catch (error) {
        setError(error); // Update state with error
        console.error("Error fetching questions: ", error); // Log error to console
      }
    };

    fetchQuestions(); // Invoke the fetch function
  }, []); // Empty dependency array ensures this runs once when component mounts

  return { questions, error }; // Return the questions and error state
};

export default useQuestions; // Export the custom hook
