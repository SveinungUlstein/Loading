// Import React and the useNavigate hook from react-router-dom
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Common/ArrowNavigation.css';

// ArrowNavigationLeft component definition
const ArrowNavigationLeft = ({ nextPage }) => {
  const navigate = useNavigate(); // Initialize navigate to handle navigation programmatically

  // Handle click event to navigate to the next page
  const handleClick = () => {
    navigate(nextPage);
  };

  return (
    <div className="arrow-navigation-left-container" onClick={handleClick}>
      <img 
        src="\src\images\ArrowLeft.png" // Path to the left arrow image
        alt="Arrow Left" 
        className="h-20 w-20 cursor-pointer" 
        style={{ width: '150px', height: '150px' }} // Inline styling for image dimensions
      />
    </div>
  );
};

export default ArrowNavigationLeft; // Export the component to be used in other parts of the app
