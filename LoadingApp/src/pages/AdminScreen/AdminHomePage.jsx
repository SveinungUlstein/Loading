// Import necessary modules
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHomeComponent from '../../components/AdminScreen/AdminHome/AdminHomeComponent';

// AdminHomePage component definition
function AdminHomePage() {
  const navigate = useNavigate(); // Initialize navigate to handle navigation programmatically

  return (
    // Render the AdminHomeComponent
    <AdminHomeComponent />
  );
}

export default AdminHomePage; // Export the component to be used in other parts of the app
