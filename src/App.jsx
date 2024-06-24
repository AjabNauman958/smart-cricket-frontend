import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PlayerLogin from './components/Playerlogin';
import ManagementLogin from './components/Managementlogin';
import Home from './components/Home'; // Import the Home component
import tournamentImage from './components/images/ipl.png'; // import of images
import Card from './components/Card'; // Import the Card component
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
          <Route path="/managementlogin" element={<ManagementLogin />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
