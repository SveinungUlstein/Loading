import { useState } from 'react';
import axios from 'axios';

// Custom hook for casting votes
const useVotes = () => {
    const [response, setResponse] = useState(null); // Response state
    const [error, setError] = useState(null); // Error state
    const [loading, setLoading] = useState(false); // Loading state

    // Function to cast a vote
    const castVote = async (userId, choiceId) => {
        setLoading(true);
        try {
            const payload = JSON.stringify({ userId, choiceId }); // Prepare payload
            const response = await axios.post(
                'http://localhost:8080/votes/cast',
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            setResponse(response.data); // Set response data
            setLoading(false);
        } catch (error) {
            setError(error); // Set error state
            setLoading(false);
        }
    };

    return { castVote, response, error, loading }; // Return hook data
};

export default useVotes;
