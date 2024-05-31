import React from 'react';
import '../../../styles/choiceImage.css';

const ChoiceImage = ({ imageUrl }) => {
  return (
    <div className="choice-image border-2 border-dark-brown rounded-lg" style={{ backgroundImage: `url(${imageUrl})` }}></div>
  );
};

export default ChoiceImage;
