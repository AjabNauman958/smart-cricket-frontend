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
import Home from './components/Home'; // Import the Home component

import './App.css';

function App() {
  return (
    <>
      <Router>
       {/* Include Navbar if you want it to be displayed on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/playerlogin" element={<PlayerLogin />} />
          <Route path="/PlayerSignup" element={<PlayerSignup />} />
          <Route path="/Teamlogin" element={<Teamlogin />} />
          <Route path="/TeamSignup" element={<TeamSignup />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/TwoFactor" element={<TwoFactor />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/Otpcode" element={<Otpcode />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
