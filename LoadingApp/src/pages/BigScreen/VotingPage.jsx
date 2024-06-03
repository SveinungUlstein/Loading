import React from 'react';
import VotingText from '../../components/BigScreen/StoryOptionScreen/VotingText';
import VotingHighlight from '../../components/BigScreen/StoryOptionScreen/VotingHighlight';
import '../../styles/votingPage.css';

const VotingPage = () => {
  return (
    <div className="voting-container flex flex-col justify-center items-center h-screen">
      <VotingText text="{mainText}" /> 
      {/* Maintext skal kunne endres fra admin */}
      <VotingHighlight text="Ta opp telefonen nå og STEM" />
    </div>
  );
};

export default VotingPage;
