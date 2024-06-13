// Import necessary modules and components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserChoiceComponent from '../../components/PhoneScreen/UserChoiceScreen/UserChoiceComponent';

// UserChoicePage component definition
function UserChoicePage() {
  const navigate = useNavigate(); // Initialize navigate to handle navigation programmatically

  return (
    <UserChoiceComponent /> 
  );
}

export default UserChoicePage; // Export the component to be used in other parts of the app
