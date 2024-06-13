// Import necessary modules and components
import React from 'react';
import LoadingComponent from '../../components/PhoneScreen/LoadingScreen/LoadingComponent';

// LoadingPage component definition
function LoadingPage() {
  return (
    <div className="relative h-screen w-screen">
      <LoadingComponent /> 
    </div>
  );
}

export default LoadingPage; // Export the component to be used in other parts of the app
