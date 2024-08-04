import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from '../images/tournament.jpg';
import '../css/home.css';
import MatchCardList from './MatchCardList';

const Tournament = () => {
  const [showMoreSeries, setShowMoreSeries] = useState(false);
  const [showMoreWorldCup, setShowMoreWorldCup] = useState(false);
  const [showMorePSL, setShowMorePSL] = useState(false);
  const [showMoreIPL, setShowMoreIPL] = useState(false);
  const [showMoreBB, setShowMoreBB] = useState(false);

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
            <h1 className="mb-5 text-5xl font-bold">Series & Tournaments </h1>
            <p className="mb-5">
              From iconic World Cups to thrilling series, delve into cricket's ultimate contests and timeless moments.
            </p>
          </div>
        </div>
      </div>

      <h1 className='text-4xl font-semibold text-center mt-5'>
        <span className='text-yellow-500'>Recent</span> & <span className='text-green-500'>Upcoming</span> Series
      </h1>
      <MatchCardList league="series" />
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setShowMoreSeries(prev => !prev)}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
        >
          {showMoreSeries ? 'Hide Matches' : 'View More Matches'}
        </button>
      </div>
      {showMoreSeries && (
        <>
          <MatchCardList league="series" />
          <MatchCardList league="series" />
        </>
      )}

      <h1 className='text-4xl font-semibold text-center mt-5'>
        <span className='text-green-500'>World Cup</span> Matches
      </h1>
      <MatchCardList league="worldcup" />
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setShowMoreWorldCup(prev => !prev)}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
        >
          {showMoreWorldCup ? 'Hide Matches' : 'View More Matches'}
        </button>
      </div>
      {showMoreWorldCup && (
        <>
          <MatchCardList league="worldcup" />
          <MatchCardList league="worldcup" />
        </>
      )}

      <h1 className='text-4xl font-semibold text-center mt-5'>
        <span className='text-green-500'>Pakistan </span> Super League<span className='text-yellow-500'> Matches</span>
      </h1>
      <MatchCardList league="psl" />
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setShowMorePSL(prev => !prev)}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
        >
          {showMorePSL ? 'Hide Matches' : 'View More Matches'}
        </button>
      </div>
      {showMorePSL && (
        <>
          <MatchCardList league="psl" />
          <MatchCardList league="psl" />
        </>
      )}

      <h1 className='text-4xl font-semibold text-center mt-5'>
        <span className='text-orange-500'>Indian </span> Premier League<span className='text-blue-500'> Matches</span>
      </h1>
      <MatchCardList league="ipl" />
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setShowMoreIPL(prev => !prev)}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
        >
          {showMoreIPL ? 'Hide Matches' : 'View More Matches'}
        </button>
      </div>
      {showMoreIPL && (
        <>
          <MatchCardList league="ipl" />
          <MatchCardList league="ipl" />
        </>
      )}

      <h1 className='text-4xl font-semibold text-center mt-5'>
        <span className='text-yellow-500'>Big Bash </span> <span className='text-green-500'> Matches</span>
      </h1>
      <MatchCardList league="bigbash" />
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setShowMoreBB(prev => !prev)}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
        >
          {showMoreBB ? 'Hide Matches' : 'View More Matches'}
        </button>
      </div>
      {showMoreBB && (
        <>
          <MatchCardList league="bigbash" />
          <MatchCardList league="bigbash" />
        </>
      )}

      <Footer />
    </div>
  );
}

export default Tournament;
