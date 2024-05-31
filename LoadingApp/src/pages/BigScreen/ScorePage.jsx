import React from 'react';
import ScoreHeader from '../../components/BigScreen/ScoreScreen/ScoreHeader';
import ChoiceImage from '../../components/BigScreen/ScoreScreen/ChoiceImage';
import ChoiceText from '../../components/BigScreen/ScoreScreen/ChoiceText';
import Chart from '../../components/BigScreen/ScoreScreen/Chart';
import '../../styles/scorePage.css';

const ScorePage = () => {
  const weaponImage = '/src/images/PilOgBue.png'; // Update this path as needed
  const weaponChoice = 'pil og bue';
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
      <ScoreHeader />
      <div className="score-content grid grid-cols-2 gap-4 w-full max-w-screen-lg mt-8">
        <div className="score-left flex flex-col items-center">
          <ChoiceImage imageUrl={weaponImage} />
          <ChoiceText text={`Ragnar valgte ${weaponChoice}`} />
        </div>
        <div className="score-right flex flex-col items-center h-full">
          <Chart data={chartData} images={chartImages} />
        </div>
      </div>
    </div>
  );
};
export default ScorePage;
