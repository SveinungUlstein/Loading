// Import necessary modules and components
import React from 'react';
import ScoreHeader from '../../components/BigScreen/ScoreScreen/ScoreHeader';
import ChoiceImage from '../../components/BigScreen/ScoreScreen/ChoiceImage';
import ChoiceText from '../../components/BigScreen/ScoreScreen/ChoiceText';
import ArrowNavigationRight from '../../components/Common/ArrowNavigationRight';
import ArrowNavigationLeft from '../../components/Common/ArrowNavigationLeft';
import useChoicesAndVotes from '../../hooks/useChoiceAndVotes';
import Chart from '../../components/BigScreen/ScoreScreen/Chart';
import '../../styles/ScorePageStyles/scorePage.css';
import '../../styles/Common/Header.css';

// ScorePage component definition
const ScorePage = () => {
  const { choices, votes, error } = useChoicesAndVotes(); // Fetch choices and votes using custom hook

  if (error) {
    return <div>Error loading data: {error.message}</div>; // Display error message if there's an error
  }

  // Calculate vote counts for each choice
  const voteCounts = votes.reduce((acc, vote) => {
    acc[vote.choice.choiceId] = (acc[vote.choice.choiceId] || 0) + 1;
    return acc;
  }, {});

  const totalVotes = votes.length; // Calculate total votes
  const sortedChoices = choices.sort((a, b) => (voteCounts[b.choiceId] || 0) - (voteCounts[a.choiceId] || 0)); // Sort choices by vote count
  const mostVotedChoice = sortedChoices[0] || { choiceTxt: 'Loading...', choiceId: 0 }; // Get the most voted choice
  const weaponChoice = mostVotedChoice.choiceTxt; // Get the text of the most voted choice

  // Prepare chart data
  const chartData = choices.map(choice => ({
    percentage: ((voteCounts[choice.choiceId] || 0) / totalVotes) * 100,
    label: `${Math.round(((voteCounts[choice.choiceId] || 0) / totalVotes) * 100)}%`,
    choiceTxt: choice.choiceTxt,
  }));

  return (
    <div className="score-container bg-cream p-8 h-screen">
      <ScoreHeader className="score-header" />
      <div className="score-content">
        <div className="score-left">
          <ChoiceImage imageUrl={'/src/images/PilOgBue.png'} className="choice-image" />
          <ChoiceText text={`Publikum valgte ${weaponChoice}`} className="choice-text" />
        </div>
        <div className="score-right">
          <Chart data={chartData} />
        </div>
      </div>
      <div className="absolute bottom-4 left-4">
        <ArrowNavigationLeft nextPage="/voting" />
      </div> 
      <div className="absolute bottom-4 right-4">
        <ArrowNavigationRight nextPage="/totalscore" />
      </div>
    </div>
  );
};

export default ScorePage; // Export the component to be used in other parts of the app
