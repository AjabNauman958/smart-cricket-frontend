import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import backgroundImage from '../components/images/matches.jpg'; 
import '../components/css/home.css'; 
import '../components/css/matches.css'; 
import MatchCardList from './MatchCard';
import PAK from '../components/images/pak.png';


const Matches = () => {
  const [showMoreRecent, setShowMoreRecent] = useState(false);
  const [showMoreUpcoming, setShowMoreUpcoming] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div className="dark-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="content" style={{ width: '50%', textAlign: 'center', color: '#fff' }}>
            <h1 className="hero-heading" style={{ fontWeight: 'bold' }}>Matches</h1>
            <p className="hero-text">
              Explore thrilling recent matches and anticipate exciting upcoming clashes
            </p>
          </div>
        </div>
      </div>

      <h1 className='text-4xl font-semibold text-center mt-5'>
        <span className='text-green-500'>Recent</span> Matches
      </h1>
      <MatchCardList league="recent" />
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setShowMoreRecent(prev => !prev)}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
        >
          {showMoreRecent ? 'Hide Matches' : 'View More Matches'}
        </button>
      </div>
      {showMoreRecent && (
        <>
          <MatchCardList league="recent" />
          <MatchCardList league="recent" />
        </>
      )}

      <h1 className='text-4xl font-semibold text-center mt-5'>
        <span className='text-yellow-500'>Upcoming</span> Matches
      </h1>
      <MatchCardList league="upcoming" />
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setShowMoreUpcoming(prev => !prev)}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
        >
          {showMoreUpcoming ? 'Hide Matches' : 'View More Matches'}
        </button>
      </div>
      {showMoreUpcoming && (
        <>
          <MatchCardList league="upcoming" />
          <MatchCardList league="upcoming" />
        </>
      )}

{/* match analysis */}
<h1 className='text-4xl font-semibold text-center mt-5'>
        Match<span className='text-yellow-500'> Analysis</span>
      </h1>
      <div className="match-analysis">
      <div className="match-date">
        <h3>Tuesday, 12th March 2024, 11:00</h3>
      </div>
      <div className="match-details">
        <h3>Hong Kong, China T20 Tri-Series, 2024 - March 3</h3>
      </div>
      <div className="divider1"></div>
      <div className="ground">
        <p>Tin Kwong Road Recreation Ground</p>
      </div>
      <div className="teams">
        <div className="team-details">
          <div className="team-left">
            <h1>Pakistan</h1>
            <img src={PAK} alt="Pakistan Flag" />
            <p>Country Name</p>
          </div>
          <div className="team-right">
            <p>339-5 (50)</p>
          </div>
        </div>
        <div className="match-result">
          <p>Pakistan beat India, by 180 runs</p>
        </div>
      </div>
      <div className="divider2"></div>
      <div className="opponent-team">
        <p>India losing team details</p>
      </div>
    </div>


      <Footer />
    </div>
  );
}

export default Matches;
