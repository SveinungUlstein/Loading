// Import React and the necessary CSS for styling
import React from 'react';
import '../../../styles/VotingPageStyles/votingHighlight.css';

// VotingHighlight component definition
const VotingHighlight = ({ text }) => {
  return (
    <div className="voting-highlight">
      {text}
    </div>
  );
};

export default VotingHighlight; // Export the component to be used in other parts of the app
