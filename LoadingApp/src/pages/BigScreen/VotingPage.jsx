import React from 'react';
import VotingText from '../../components/BigScreen/StoryOptionScreen/VotingText';
import VotingHighlight from '../../components/BigScreen/StoryOptionScreen/VotingHighlight';
import ArrowNavigationRight from '../../components/Common/ArrowNavigationRight';
import ArrowNavigationLeft from '../../components/Common/ArrowNavigationLeft';
import useQuestions from '../../hooks/useQuestions';
import '../../styles/VotingPageStyles/votingPage.css';

const VotingPage = () => {
  const { questions, error } = useQuestions();
  const mainText = questions.length > 0 ? questions[0].questionTxt : 'Loading...';

  return (
    <div className="voting-container flex flex-col justify-center items-center h-screen">
      {error ? <div>Error loading question</div> : <VotingText text={mainText} />}
      <VotingHighlight text="Ta opp telefonen nå og STEM" />
      <div className="absolute bottom-4 left-4">
        <ArrowNavigationLeft nextPage="/lobby" />
      </div>
      <div className="absolute bottom-4 right-4">
        <ArrowNavigationRight nextPage="/score" />
      </div>
    </div>
  );
};

export default VotingPage;
