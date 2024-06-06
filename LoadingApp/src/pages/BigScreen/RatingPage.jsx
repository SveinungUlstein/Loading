import React from 'react';
import Title1 from '../../components/Common/Title1';
import Image from '../../components/BigScreen/RatingScreen/Image';
import TextSection from '../../components/BigScreen/RatingScreen/TextSection';
import SoMeComponent from '../../components/BigScreen/RatingScreen/SoMeComponent';

const NewPage = () => {
  return (
    <div className="new-page-container grid grid-cols-2 h-screen p-8">
      <div className="col-span-1 flex flex-col">
        <div className="flex flex-col items-center">
          <Title1 />
          <Image />
        </div>
        <TextSection />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <SoMeComponent />
      </div>
    </div>
  );
};

export default NewPage;
