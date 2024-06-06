import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneVotingComponent from '../../components/PhoneScreen/VotingScreen/PhoneVotingComponent';

function PhoneVotingPage() {
  const navigate = useNavigate();

  return (
    <PhoneVotingComponent></PhoneVotingComponent>
  );
}

export default PhoneVotingPage;
