import React from 'react';
import ChoiceBox from '../../components/BigScreen/TotalScore/ChoiceBox';
import ArrowNavigationRight from '../../components/Common/ArrowNavigationRight';
import ArrowNavigationLeft from "../../components/Common/ArrowNavigationLeft.jsx";
import '../../styles/TotalScorePageStyles/totalScore.css'

const TotalScore = () => {
  const mainChoice = {
    imageSrc: "/path/to/bow-and-arrow.png",
    altText: "Pil og bue",
    additionalText: "... beseiret trollet med pil og bue",
    scoreText: "53 spillere valgte pil og bue"
  };

  const additionalChoices = [
    {
      scoreText: "Et annet valg man tar ila spillet"
    },
    {
      scoreText: "Et annet valg man tar ila spillet"
    }
  ];

  return (
    <div className="total-score-container bg-cream p-8 h-screen">
      <h1 className="total-score-title text-5xl font-vt323 text-mustard bg-brown mb-4 text-center">TOTAL SCORE</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChoiceBox
          imageSrc={mainChoice.imageSrc}
          altText={mainChoice.altText}
          additionalText={mainChoice.additionalText}
          scoreText={mainChoice.scoreText}
        />
        {additionalChoices.map((choice, index) => (
          <ChoiceBox
            key={index}
            scoreText={choice.scoreText}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-4">
        <ArrowNavigationLeft nextPage="/score" />
      </div> 
      <div className="absolute bottom-4 right-4">
        <ArrowNavigationRight nextPage="/rating" />
      </div>
    </div>
  );
};

export default TotalScore;
