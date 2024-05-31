import React from 'react';
import '../../../styles/CharacterBox.css';

const CharacterBox = ({ imageUrl, number }) => (
  <div className="character-box">
    <div
      className="character-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label="Character Image"
    ></div>
    <div className="character-numbers">
      <div className="character-number">{number}</div>
      <div className="character-number">{number}</div>
      <div className="character-number">{number}</div>
    </div>
  </div>
);

export default CharacterBox;
