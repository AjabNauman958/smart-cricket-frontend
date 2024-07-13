import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PlayerLogin from './components/Playerlogin';
import PlayerSignup from './components/PlayerSignup';
import Teamlogin from './components/Teamlogin';
import TeamSignup from './components/TeamSignup';
import Forget from './components/Forget';
import TwoFactor from './components/TwoFactor';
import NewPassword from './components/NewPassword';
import Otpcode from './components/Otpcode';
import Home from './components/Home';
import About from './components/About';
import Tournament from './components/Tournament';
import Ranking from './components/Ranking';
import Comparison from './components/Comparison';
import Matches from './components/Matches';
import MatchCardList from './components/MatchCardList'; 
import RankingCard from './components/RankingCard'; 
import TeamProfile from './components/TeamProfile'; 
import MatchAnalysis from './components/MatchAnalysis'; 
import Contact from './components/Contact'; 

import './App.css';
// 111
function App() {
  return (
    <>
      <Router>
        <Routes>
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
