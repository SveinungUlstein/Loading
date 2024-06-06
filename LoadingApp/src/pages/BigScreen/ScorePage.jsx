import React from 'react';
import ScoreHeader from '../../components/BigScreen/ScoreScreen/ScoreHeader';
import ChoiceImage from '../../components/BigScreen/ScoreScreen/ChoiceImage';
import ChoiceText from '../../components/BigScreen/ScoreScreen/ChoiceText';
import Chart from '../../components/BigScreen/ScoreScreen/Chart';
import ArrowNavigationRight from '../../components/Common/ArrowNavigationRight';
import ArrowNavigationLeft from '../../components/Common/ArrowNavigationLeft';
import useMostVotedChoice from '../../hooks/useMostVotedChoice';
import '../../styles/ScorePageStyles/scorePage.css';
import '../../styles/ScorePageStyles/scoreHeader.css';


const ScorePage = () => {
  const { mostVoted, error } = useMostVotedChoice();
  const weaponChoice = mostVoted ? mostVoted.choice.name : 'Loading...'; // Update as per your backend response structure
  const weaponImage = '/src/images/PilOgBue.png'; // Update this path as needed
  const chartData = [
    { percentage: 35, label: '35%' },
    { percentage: 65, label: '65%' }
  ];
  const chartImages = [
    '/src/images/PilOgBue.png', // Update this path as needed
    '/src/images/PilOgBue.png' // Update this path as needed
  ];

  return (
    <div className="score-container flex flex-col items-center h-screen">
      <ScoreHeader className="score-header" />
      <div className="score-content grid grid-cols-2 gap-4 w-full max-w-screen-lg mt-20 flex-grow">
        <div className="score-left flex flex-col items-center mt-auto mb-auto">
          <ChoiceImage imageUrl={weaponImage} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2" />
          <ChoiceText text={`... valgte ${weaponChoice}`} className="mt-6 text-2xl md:text-3xl lg:text-4xl font-semibold text-[#4E3B2B]" />
        </div>
        <div className="score-right flex flex-col items-center h-full">
          <Chart data={chartData} images={chartImages} className="w-full h-64 md:h-full" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4">
        <ArrowNavigationLeft nextPage="/voting" />
      </div>
      <div className="absolute bottom-4 right-4">
        <ArrowNavigationRight nextPage="/totalScore" />
      </div>
    </div>
  );
};

export default ScorePage;
