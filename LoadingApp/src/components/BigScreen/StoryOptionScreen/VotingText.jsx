import React from 'react';
import '../../../styles/VotingPageStyles/votingHighlight.css';
import '../../../styles/VotingPageStyles/votingText.css';

const VotingText = ({ text }) => {
  return (
    <div className="voting-text">
      {text}
    </div>
  );
};

export default VotingText;
