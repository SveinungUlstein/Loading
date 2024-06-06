import React from 'react';
import ChoiceBox from '../../components/BigScreen/TotalScore/ChoiceBox';
import ArrowNavigationRight from '../../components/Common/ArrowNavigationRight';
import ArrowNavigationLeft from "../../components/Common/ArrowNavigationLeft.jsx";
import '../../styles/TotalScorePageStyles/totalScore.css'
import '../../styles/Common/Header.css';

const TotalScore = () => {
  const mainChoice = {
    imageSrc: "/src/images/PilOgBue.png",
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
    <div className="total-score-container bg-cream h-screen">
      <h1 className="score-header">TOTAL SCORE</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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
