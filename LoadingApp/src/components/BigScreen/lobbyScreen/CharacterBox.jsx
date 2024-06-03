import React from 'react';
import '../../../styles/LobbyStyles/CharacterBox.css';

const CharacterBox = ({ imageUrl, avatarNumber1, avatarNumber2, avatarNumber3 }) => (
  <div className="character-box">
    <div
      className="character-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label="Character Image"
    ></div>
    <div className="character-numbers">
      <div className="character-number">{avatarNumber1}</div>
      <div className="character-number">{avatarNumber2}</div>
      <div className="character-number">{avatarNumber3}</div>
    </div>
  </div>
);

export default CharacterBox;
