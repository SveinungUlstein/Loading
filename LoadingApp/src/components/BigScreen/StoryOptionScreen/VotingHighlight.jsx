import React from 'react';
import '../../../styles/votingHighlight.css';

const VotingHighlight = ({ text }) => {
  return (
    <div className="voting-highlight">
      {text}
    </div>
  );
};

export default VotingHighlight;
