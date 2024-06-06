import React from 'react';
import '../../../styles/ScorePageStyles/chart.css';

const ChoiceText = ({ text }) => {
  return (
    <div className="choice-text mt-4 text-dark-brown">
      {text}
    </div>
  );
};

export default ChoiceText;
