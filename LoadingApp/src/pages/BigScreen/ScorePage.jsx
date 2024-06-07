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



const ScorePage = () => {
  const { choices, votes, error } = useChoicesAndVotes();

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  const voteCounts = votes.reduce((acc, vote) => {
    acc[vote.choice.choiceId] = (acc[vote.choice.choiceId] || 0) + 1;
    return acc;
  }, {});

  const totalVotes = votes.length;
  const sortedChoices = choices.sort((a, b) => (voteCounts[b.choiceId] || 0) - (voteCounts[a.choiceId] || 0));
  const mostVotedChoice = sortedChoices[0] || { choiceTxt: 'Loading...', choiceId: 0 };
  const weaponChoice = mostVotedChoice.choiceTxt;

  const chartData = choices.map(choice => ({
    percentage: ((voteCounts[choice.choiceId] || 0) / totalVotes) * 100,
    label: `${Math.round(((voteCounts[choice.choiceId] || 0) / totalVotes) * 100)}%`,
    choiceTxt: choice.choiceTxt,
  }));

  return (
    <div className="score-container">
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
      <div className="navigation">
        <ArrowNavigationLeft nextPage="/voting" />
        <ArrowNavigationRight nextPage="/totalScore" />
      </div>
    </div>
  );
};

export default ScorePage;
