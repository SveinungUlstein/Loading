// Import necessary modules and components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneVotingComponent from '../../components/PhoneScreen/VotingScreen/PhoneVotingComponent';

// PhoneVotingPage component definition
function PhoneVotingPage() {
  const navigate = useNavigate(); // Initialize navigate to handle navigation programmatically

  return (
    <PhoneVotingComponent /> 
  );
}

export default PhoneVotingPage; // Export the component to be used in other parts of the app
