// Import necessary modules and components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneRatingComponent from '../../components/PhoneScreen/RatingScreen/PhoneRatingComponent';

// PhoneRatingPage component definition
function PhoneRatingPage() {
  const navigate = useNavigate(); // Initialize navigate to handle navigation programmatically

  return (
    <PhoneRatingComponent /> 
  );
}

export default PhoneRatingPage; // Export the component to be used in other parts of the app
