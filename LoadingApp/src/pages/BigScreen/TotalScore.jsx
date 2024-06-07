import React from 'react';
import ChoiceBox from '../../components/BigScreen/TotalScore/ChoiceBox';
import ArrowNavigationRight from '../../components/Common/ArrowNavigationRight';
import ArrowNavigationLeft from "../../components/Common/ArrowNavigationLeft.jsx";
import useChoicesAndVotes from '../../hooks/useChoiceAndVotes';
import '../../styles/Common/Header.css';

const TotalScore = () => {
  const { choices, votes, error } = useChoicesAndVotes();

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  if (!choices.length || !votes.length) {
    return <div>Loading...</div>;
  }

  const voteCounts = votes.reduce((acc, vote) => {
    acc[vote.choice.choiceId] = (acc[vote.choice.choiceId] || 0) + 1;
    return acc;
  }, {});

  const totalVotes = votes.length;
  const sortedChoices = choices.sort((a, b) => (voteCounts[b.choiceId] || 0) - (voteCounts[a.choiceId] || 0));
  const mostVotedChoice = sortedChoices[0] || { choiceTxt: 'Loading...', choiceId: 0 };

  return (
    <div className="total-score-container bg-cream h-screen flex flex-col items-center">
      <h1 className="score-header text-5xl font-vt323 text-mustard bg-brown mb-4 text-center w-4/5">TOTAL SCORE</h1>
      <div className="w-4/5">
        <ChoiceBox
          imageSrc={`/src/images/${mostVotedChoice.choiceTxt}.png`} // Assuming images are named after the choices
          altText={mostVotedChoice.choiceTxt}
          additionalText={`... beseiret trollet med ${mostVotedChoice.choiceTxt}`}
          scoreText={`${voteCounts[mostVotedChoice.choiceId]} spillere valgte ${mostVotedChoice.choiceTxt}`}
        />
        {sortedChoices.slice(1).map((choice, index) => (
          <ChoiceBox
            key={index}
            scoreText={`${voteCounts[choice.choiceId]} spillere valgte ${choice.choiceTxt}`}
            additionalText={`... med ${choice.choiceTxt}`}
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
