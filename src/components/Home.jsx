// Import necessary libraries and components
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Card from './Card';
import { Link } from 'react-router-dom';
import backgroundImage from '../components/images/backgroundImage.png'; // import of images

import '../components/css/home.css';
import cardsData from './Data';

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
      
      <div className="container mt-4">
      <div className="card-container">
        {cardsData.map(card => (
          <div className="card-item" key={card.id}>
            <div className="card card-hover">
              <div
                className="card-img-top"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  );
}

export default Home;
