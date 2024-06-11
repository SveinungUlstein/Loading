import { useState } from 'react';
import axios from 'axios';

// Custom hook for handling feedback submission
const useFeedback = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to submit feedback
  const submitFeedback = async (rating, feedbackText) => {
    setLoading(true);
    setError(null);
    try {
      const feedback = new URLSearchParams();
      feedback.append('stars', rating); // Append rating
      feedback.append('feedbackTxt', feedbackText.trim()); // Append feedback text

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
      return response.data; // Return response data
    } catch (err) {
      console.error("Axios error:", err);
      setLoading(false);
      setError(err); // Set error state
      throw err; // Re-throw error
    }
  };

  return { submitFeedback, loading, error }; // Return hook data
};

export default useFeedback;
