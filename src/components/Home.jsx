// Import necessary libraries and components
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Card from './Card';
import { Link } from 'react-router-dom';
import backgroundImage from '../components/images/backgroundImage.png'; // import of images

import '../components/css/home.css';

// Define the Home component
    const Home = () => {
    return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        {/* Overlay to make text readable */}
        <div className="dark-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff' }}>
          <h1 className="hero-heading">Cricket Where Every Ball Counts</h1>
          <p className="hero-text">
            Dive into the thrilling world of cricket with insightful analysis,
            in-depth statistics, and captivating stories from the sport's rich history.
          </p>
          {/* Button overlay */}
          <Link to="/about" className="btn-overlay bg-yellow-400 cursor-pointer font-semibold hover:bg-yellow-300">About Us</Link>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
