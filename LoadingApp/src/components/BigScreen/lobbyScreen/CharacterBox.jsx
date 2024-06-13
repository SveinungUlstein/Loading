// Import React and the necessary CSS for styling
import React from 'react';
import '../../../styles/LobbyStyles/CharacterBox.css';

// CharacterBox component definition
const CharacterBox = ({ imageUrl, avatarNumber1, avatarNumber2, avatarNumber3 }) => (
  <div className="character-box">
    {/* Character image section with a background image set via inline styles */}
    <div
      className="character-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
      aria-label="Character Image"
    ></div>
    {/* Section for displaying character numbers */}
    <div className="character-numbers">
      <div className="character-number">{avatarNumber1}</div>
      <div className="character-number">{avatarNumber2}</div>
      <div className="character-number">{avatarNumber3}</div>
    </div>
  </div>
);

export default CharacterBox; // Export the component to be used in other parts of the app
