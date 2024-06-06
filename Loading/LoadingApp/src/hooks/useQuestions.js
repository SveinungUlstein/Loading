import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/question'; // Ensure this URL is correct

const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(API_URL, { withCredentials: true });
        setQuestions(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching questions: ", error);
      }
    };

    fetchQuestions();
  }, []);

  return { questions, error };
};

export default useQuestions;
