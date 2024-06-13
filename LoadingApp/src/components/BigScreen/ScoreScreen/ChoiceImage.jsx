// Import React and the necessary CSS for styling
import React from 'react';
import '../../../styles/ScorePageStyles/chart.css';

// ChoiceImage component definition
const ChoiceImage = ({ imageUrl }) => {
  return (
    <div className="choice-image border-2 border-dark-brown rounded-lg" style={{ backgroundImage: `url(${imageUrl})` }}></div>
  );
};

export default ChoiceImage; // Export the component to be used in other parts of the app
