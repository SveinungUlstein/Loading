
import { useState } from 'react';
import axios from 'axios';

const useFeedback = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitFeedback = async (rating, feedbackText) => {
    setLoading(true);
    setError(null);
    try {
      const feedback = new URLSearchParams();
      feedback.append('stars', rating);
      feedback.append('feedbackTxt', feedbackText.trim());

      console.log("Submitting feedback:", feedback.toString());

      const response = await axios.post(
        'http://localhost:8080/Feedback',
        feedback,
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

  return { submitFeedback, loading, error };
};

export default useFeedback;
