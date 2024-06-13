// Import necessary modules and components
import React from 'react';
import ChoiceBox from '../../components/BigScreen/TotalScore/ChoiceBox';
import ArrowNavigationRight from '../../components/Common/ArrowNavigationRight';
import ArrowNavigationLeft from "../../components/Common/ArrowNavigationLeft.jsx";
import useChoicesAndVotes from '../../hooks/useChoiceAndVotes';
import '../../styles/Common/Header.css';

// TotalScore component definition
const TotalScore = () => {
  const { choices, votes, error } = useChoicesAndVotes(); // Fetch choices and votes using custom hook

  if (error) {
    return <div>Error loading data: {error.message}</div>; // Display error message if there's an error
  }

  if (!choices.length || !votes.length) {
    return <div>Loading...</div>; // Display loading message if data is not yet available
  }

  // Calculate vote counts for each choice
  const voteCounts = votes.reduce((acc, vote) => {
    acc[vote.choice.choiceId] = (acc[vote.choice.choiceId] || 0) + 1;
    return acc;
  }, {});

  const totalVotes = votes.length; // Calculate total votes
  const sortedChoices = choices.sort((a, b) => (voteCounts[b.choiceId] || 0) - (voteCounts[a.choiceId] || 0)); // Sort choices by vote count
  const mostVotedChoice = sortedChoices[0] || { choiceTxt: 'Loading...', choiceId: 0 }; // Get the most voted choice

  return (
    <div className="total-score-container bg-cream h-screen flex flex-col items-center">
      <h1 className="score-header text-5xl font-vt323 text-mustard bg-brown mb-4 text-center w-4/5">
        TOTAL SCORE
      </h1>
      <div className="w-4/5">
        {/* Display the most voted choice */}
        <ChoiceBox
          imageSrc={`/src/images/${mostVotedChoice.choiceTxt}.png`} 
          altText={mostVotedChoice.choiceTxt}
          additionalText={`... beseiret trollet med ${mostVotedChoice.choiceTxt}`}
          scoreText={`${voteCounts[mostVotedChoice.choiceId]} spillere valgte ${mostVotedChoice.choiceTxt}`}
        />
        {/* Display the remaining choices */}
        {sortedChoices.slice(1).map((choice, index) => (
          <ChoiceBox
            key={index}
            scoreText={`${voteCounts[choice.choiceId]} spillere valgte ${choice.choiceTxt}`}
            additionalText={`... med ${choice.choiceTxt}`}
          />
        ))}
      </div>
      {/* Navigation Arrows */}
      <div className="absolute bottom-4 left-4">
        <ArrowNavigationLeft nextPage="/score" />
      </div> 
      <div className="absolute bottom-4 right-4">
        <ArrowNavigationRight nextPage="/rating" />
      </div>
    </div>
  );
};

export default TotalScore; // Export the component to be used in other parts of the app
