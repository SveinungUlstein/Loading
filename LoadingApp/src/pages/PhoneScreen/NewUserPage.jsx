// Import necessary modules and components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewUserComponent from '../../components/PhoneScreen/NewUserScreen/NewUserComponent';

// NewUserPage component definition
function NewUserPage() {
  const navigate = useNavigate(); // Initialize navigate to handle navigation programmatically

  return (
    <NewUserComponent /> 
  );
}

export default NewUserPage; // Export the component to be used in other parts of the app
