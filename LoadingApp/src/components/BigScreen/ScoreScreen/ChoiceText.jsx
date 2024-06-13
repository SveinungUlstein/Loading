// Import React and the necessary CSS for styling
import React from 'react';
import '../../../styles/ScorePageStyles/chart.css';

// ChoiceText component definition
const ChoiceText = ({ text }) => {
  return (
    <div className="choice-text mt-4 text-brown">
      {text}
    </div>
  );
};

export default ChoiceText; // Export the component to be used in other parts of the app
