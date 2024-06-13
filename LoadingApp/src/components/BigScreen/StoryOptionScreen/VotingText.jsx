// Import React and the necessary CSS for styling
import React from 'react';
import '../../../styles/VotingPageStyles/votingHighlight.css';
import '../../../styles/VotingPageStyles/votingText.css';

// VotingText component definition
const VotingText = ({ text }) => {
  return (
    <div className="voting-text">
      {text}?
    </div>
  );
};

export default VotingText; // Export the component to be used in other parts of the app
