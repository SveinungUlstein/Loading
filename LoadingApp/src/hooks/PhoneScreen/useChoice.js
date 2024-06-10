// src/hooks/PhoneScreen/useChoices.js
import { useState } from 'react';
import axios from 'axios';

const useChoices = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitChoice = async (choice, questionId) => {
    setLoading(true);
    setError(null);
    try {
      const payload = {
        choice: {
          choiceTxt: choice,
          choiceImage: null,
          questions: {
            questionId: questionId
          }
        },
        questionId: questionId
      };

      console.log("Submitting choice:", payload);

      const response = await axios.post(
        'http://localhost:8080/choices/create',
        JSON.stringify(payload),
        {
          headers: {
            'Content-Type': 'application/json',
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

  return { submitChoice, loading, error };
};

export default useChoices;
