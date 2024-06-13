// Import necessary modules
import React from 'react';
import { FiInstagram } from 'react-icons/fi'; // Import Instagram icon from react-icons

// SoMeComponent definition
const SoMeComponent = () => {
  return (
    <div className="some-component">
      <p className="mb-2">Følg oss videre</p> 
      <p className="mb-2">www.loading.no/om_oss</p> 
      <p className="mb-2">www.Instagram.com/Loading</p> 

      <div className="instagram-section flex items-center">
        <FiInstagram className="instagram-icon mr-2" size={24} /> 
        <p>@loading</p> 
      </div>
    </div>
  );
};

export default SoMeComponent; // Export the component to be used in other parts of the app
