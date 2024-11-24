import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from '../images/matches.jpg';
import '../css/home.css';
import '../css/matches.css';
import MatchCardList from './MatchCardList';
import PAK from '../images/pak.png';
import IND from '../images/india.png';
import record from '../images/record.png';
import ScrollToTopButton from './scrollupbtn/ScrollToTopButton';


const Matches = () => {
  const [showMoreRecent, setShowMoreRecent] = useState(false);
  const [showMoreUpcoming, setShowMoreUpcoming] = useState(false);

  return (
    <div>
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        {/* Your content here */}


        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Matches </h1>
            <p className="mb-5">
              Explore thrilling recent matches and anticipate exciting upcoming clashes.
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
      <div>
        <h1 className='text-4xl font-semibold text-center mt-5'>
          Match<span className='text-yellow-500'> Analysis</span>
        </h1>
        <div className="match-analysis">
          <div className="match-date">
            <h3>Tuesday, 12th March 2024, 11:00</h3>
          </div>
          <div className="match-details">
            <h1>Hong Kong, China T20 Tri-Series, 2024 - March 3</h1>
          </div>
          <div className="ground">
            <p >Tin Kwong Road Recreation Ground</p>
          </div>
          <div className="teams">
            <div className="team">
              <img src={PAK} alt="Pakistan Flag" className="team-flag" />
              <h1>Pakistan</h1>
              <p className="team-score">339-5 (50)</p>
            </div>
            <div className="match-result">
              <p>Pakistan beat India, by 180 runs</p>
            </div>
            <div className="team">
              <img src={IND} alt="India Flag" className="team-flag" />
              <h1>India</h1>
              <p className="team-score">158-10 (41.2)</p>
            </div>
          </div>
        </div>
        <div className='graph grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
          <div className="">
            <p className='text-center font-semibold'>Average on both team batting</p>
            <img src={record} alt="Graph Image" />
          </div>
          <div className="p-4">
            <div className="batting-average-content" >
              <p>Our analysis leverages advanced AI algorithms to provide an insightful comparison of the batting averages between both teams. The graph below illustrates the batting performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
            </div>
            <Link to='/MatchAnalysis'><button className="watch-analysis-btn bg-yellow-300 hover:bg-yellow-500">Watch Full Analysis</button></Link>
          </div>
        </div>
      </div>

      {/* Scroll-to-top button */}
      <ScrollToTopButton />

      <Footer />
    </div>
  );
}

export default Matches;
