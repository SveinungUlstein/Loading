// Import React and the useNavigate hook from react-router-dom
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Common/ArrowNavigation.css';

// ArrowNavigationRight component definition
const ArrowNavigationRight = ({ nextPage }) => {
  const navigate = useNavigate(); // Initialize navigate to handle navigation programmatically

  // Handle click event to navigate to the next page
  const handleClick = () => {
    navigate(nextPage);
  };

  return (
    <div className="arrow-navigation-right-container" onClick={handleClick}>
      <img 
        src="\src\images\ArrowRight.png" // Path to the right arrow image
        alt="Arrow Right" 
        className="h-auto w-auto cursor-pointer" 
        style={{ width: '150px', height: '150px' }} // Inline styling for image dimensions
      />
    </div>
  );
};

export default ArrowNavigationRight; // Export the component to be used in other parts of the app
