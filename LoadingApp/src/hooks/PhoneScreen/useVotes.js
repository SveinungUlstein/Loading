import { useState } from 'react';
import axios from 'axios';

const useVotes = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const castVote = async (userId, choiceId) => {
        setLoading(true);
        try {
            const payload = JSON.stringify({ userId, choiceId }); 
            const response = await axios.post('http://localhost:8080/votes/cast', payload, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setResponse(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { castVote, response, error, loading };
};

export default useVotes;
