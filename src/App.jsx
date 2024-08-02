import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import PlayerLogin from './components/User/Playerlogin';
import PlayerSignup from './components/User/PlayerSignup';
import Teamlogin from './components/User/Teamlogin';
import TeamSignup from './components/User/TeamSignup';
import Forget from './components/User/Forget';
import TwoFactor from './components/User/TwoFactor';
import NewPassword from './components/User/NewPassword';
import Otpcode from './components/User/Otpcode';
import Home from './components/User/Home';
import About from './components/User/About';
import Tournament from './components/User/Tournament';
import Ranking from './components/User/Ranking';
import Comparison from './components/User/Comparison';
import Matches from './components/User/Matches';
import MatchCardList from './components/User/MatchCardList'; 
import RankingCard from './components/User/RankingCard'; 
import TeamProfile from './components/User/TeamProfile'; 
import MatchAnalysis from './components/User/MatchAnalysis'; 
import Contact from './components/User/Contact'; 
import FAQS from './components/User/FAQS'; 
import Topheader from './components/User/Topheader'; 
import UserProfile from './components/User/UserProfile'; 

import './App.css';
import MainDashboardApp from './components/Player/PlayerDashboard/MainDashboardApp';
import PlayerTeamSchedule from './components/Player/TeamSchedule/PlayerTeamSchedule';
import PlayerPerformancePrediction from './components/Player/PerformancePrediction/PlayerPerformancePrediction';
import PlayerPerformanceAnalysis from './components/Player/PerformanceAnalysis/PlayerPerformanceAnalysis';
import PlayerOpponentComparison from './components/Player/OpponentComparison/PlayerOpponentComparison';
import PlayerFaqs from './components/Player/FAQS/PlayerFaqs';
import MainProfile from './components/Player/RegisterPlayerProfile/MainProfile';
import MainDashboard from './components/TeamManagement/TeamDashboard/MainDashboard';
// 111
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* user or registered user  */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/playerlogin" element={<PlayerLogin />} />
          <Route path="/playersignup" element={<PlayerSignup />} />
          <Route path="/teamlogin" element={<Teamlogin />} />
          <Route path="/teamsignup" element={<TeamSignup />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/twofactor" element={<TwoFactor />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/otpcode" element={<Otpcode />} />
          <Route path="/MatchCardList" element={<MatchCardList />} />
          <Route path="/RankingCard" element={<RankingCard />} />
          <Route path="/TeamProfile" element={<TeamProfile />} />
          <Route path="/MatchAnalysis" element={<MatchAnalysis />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FAQS" element={<FAQS />} />
          <Route path="/Topheader" element={<Topheader />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          {/* player dashboard  */}
          <Route path="/Player/MainDashboardApp" element={<MainDashboardApp />} />
          <Route path="/Player/PlayerTeamSchedule" element={<PlayerTeamSchedule />} />
          <Route path="/Player/PlayerPerformancePrediction" element={<PlayerPerformancePrediction />} />
          <Route path="/Player/PlayerPerformanceAnalysis" element={<PlayerPerformanceAnalysis />} />
          <Route path="/Player/PlayerOpponentComparison" element={<PlayerOpponentComparison />} />
          <Route path="/Player/PlayerFaq" element={<PlayerFaqs />} />
          <Route path="/PlayerProfile" element={<MainProfile />} />

{/* Team Dashboard  */}
<Route path="/TeamManagement/MainDashboard" element={<MainDashboard />} />



          <Route path="*" element={<> not found</>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
