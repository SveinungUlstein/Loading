import React from 'react';
import '../../../styles/votingText.css';

const VotingText = ({ text }) => {
  return (
    <div className="voting-text">
      {text}
    </div>
  );
};

export default VotingText;
