import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LobbyPage from '../pages/BigScreen/LobbyPage';
import PinPage from '../pages/BigScreen/PinPage';
import RatingPage from '../pages/BigScreen/RatingPage';
import ScorePage from '../pages/BigScreen/ScorePage';
import TotalScore from '../pages/BigScreen/TotalScore';
import VotingPage from '../pages/BigScreen/VotingPage';
import InstructionPage from '../pages/PhoneScreen/InstructionPage';
import LoadingPage from '../pages/PhoneScreen/LoadingPage';
import NewUserPage from '../pages/PhoneScreen/NewUserPage';
import PhoneRatingPage from '../pages/PhoneScreen/PhoneRatingPage';
import PhoneVotingPage from '../pages/PhoneScreen/PhoneVotingPage';
import UserChoicePage from '../pages/PhoneScreen/UserChoicePage';
import TestPage from '../pages/TestPage';

function RoutingMain() {
  return (
    <Router>
      <Routes>
        {/* BigScreen Pages */}
        <Route path="/lobby" element={<LobbyPage />} />
        <Route path="/pin" element={<PinPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/totalscore" element={<TotalScore />} />
        <Route path="/voting" element={<VotingPage />} />
        {/* PhoneScreen Pages */}
        <Route path="/instruction" element={<InstructionPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/newuser" element={<NewUserPage />} />
        <Route path="/phonerating" element={<PhoneRatingPage />} />
        <Route path="/phonevoting" element={<PhoneVotingPage />} />
        <Route path="/userchoice" element={<UserChoicePage />} />
        {/* Test Page */}
        <Route path="/test" element={<TestPage />} />
        {/* Default Route */}
        <Route path="/" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default RoutingMain;
