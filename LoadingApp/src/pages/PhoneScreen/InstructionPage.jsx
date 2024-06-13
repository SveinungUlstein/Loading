// Import necessary modules and components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructionComponent from '../../components/PhoneScreen/InstructionScreen/InstructionComponent';

// InstructionPage component definition
function InstructionPage() {
  const navigate = useNavigate(); // Initialize navigate to handle navigation programmatically

  return (
    <InstructionComponent /> 
  );
}

export default InstructionPage; // Export the component to be used in other parts of the app
