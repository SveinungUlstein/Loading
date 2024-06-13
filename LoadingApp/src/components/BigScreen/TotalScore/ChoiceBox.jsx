// Import React
import React from 'react';

// ChoiceBox component definition
const ChoiceBox = ({ imageSrc, altText, scoreText, additionalText }) => {
  return (
    <div className="choice-box flex flex-col md:flex-row items-center justify-center border-2 border-mustard p-4 mb-4">
     
      {imageSrc && <img src={imageSrc} alt={altText} className="h-12 w-12 md:mr-4 mb-4 md:mb-0" />}
      <div className="text-center md:text-left">
        
        {additionalText && <p className="text-sm font-vt323 text-brown mb-2">{additionalText}</p>}
        <p className="text-lg font-vt323 text-brown">{scoreText}</p> 
      </div>
    </div>
  );
};

export default ChoiceBox; // Export the component to be used in other parts of the app
