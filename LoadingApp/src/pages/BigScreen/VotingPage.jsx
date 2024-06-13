// Import necessary modules and components
import React from 'react';
import VotingText from '../../components/BigScreen/StoryOptionScreen/VotingText';
import VotingHighlight from '../../components/BigScreen/StoryOptionScreen/VotingHighlight';
import ArrowNavigationRight from '../../components/Common/ArrowNavigationRight';
import ArrowNavigationLeft from '../../components/Common/ArrowNavigationLeft';
import useQuestions from '../../hooks/useQuestions';
import '../../styles/VotingPageStyles/votingPage.css';

// VotingPage component definition
const VotingPage = () => {
  const { questions, error } = useQuestions(); // Fetch questions using custom hook
  const mainText = questions.length > 0 ? questions[0].questionTxt : 'Loading...'; // Get the main question text or show loading

  return (
    <div className="voting-container flex flex-col justify-center items-center h-screen">
      {/* Display error message if there's an error */}
      {error ? (
        <div>Error loading question</div>
      ) : (
        <VotingText text={mainText} /> // Display the main question text
      )}
      {/* Voting highlight section */}
      <VotingHighlight text="Ta opp telefonen nå og STEM" />
      {/* Navigation Arrows */}
      <div className="absolute bottom-4 left-4">
        <ArrowNavigationLeft nextPage="/lobby" />
      </div>
      <div className="absolute bottom-4 right-4">
        <ArrowNavigationRight nextPage="/score" />
      </div>
    </div>
  );
};

export default VotingPage; // Export the component to be used in other parts of the app
