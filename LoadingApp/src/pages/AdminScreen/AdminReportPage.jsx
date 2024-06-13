// Import necessary modules
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminReportComponent from '../../components/AdminScreen/AdminReport/AdminReportComponent';

// AdminReportPage component definition
function AdminReportPage() {
  const navigate = useNavigate(); // Initialize navigate to handle navigation programmatically

  return (
    // Render the AdminReportComponent
    <AdminReportComponent />
  );
}

export default AdminReportPage; // Export the component to be used in other parts of the app
