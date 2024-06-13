// Import necessary modules and components
import React from 'react';
import Title1 from '../../components/Common/Title1';
import Image from '../../components/BigScreen/RatingScreen/Image';
import TextSection from '../../components/BigScreen/RatingScreen/TextSection';
import SoMeComponent from '../../components/BigScreen/RatingScreen/SoMeComponent';
import ArrowNavigationLeft from '../../components/Common/ArrowNavigationLeft';
import '../../styles/RatingPageStyles/ratingPage.css'

// RatingPage component definition
const RatingPage = () => {
  return (
    <div className="new-page-container grid grid-cols-2 gap-4 h-screen p-8 bg-cream">
      
      <div className="col-span-1 flex flex-col items-center">
        <Title1 />
        <Image />
      </div>
      
      <div className="col-span-1 flex justify-center items-center">
        <SoMeComponent />
      </div>
      
  
      <div className="col-span-2">
        <TextSection />
      </div>
      
     
      <div className="absolute bottom-4 left-4">
        <ArrowNavigationLeft nextPage="/totalscore" />
      </div> 
    </div>
  );
};

export default RatingPage; // Export the component to be used in other parts of the app
