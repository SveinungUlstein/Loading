// Import necessary modules
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLibraryComponent from '../../components/AdminScreen/AdminLibrary/AdminLibraryComponent';

// AdminLibraryPage component definition
function AdminLibraryPage() {
  const navigate = useNavigate(); // Initialize navigate to handle navigation programmatically

  return (
    // Render the AdminLibraryComponent
    <AdminLibraryComponent />
  );
}

export default AdminLibraryPage; // Export the component to be used in other parts of the app
