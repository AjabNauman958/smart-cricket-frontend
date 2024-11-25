import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from '../images/tournament.jpg';
import '../css/home.css';
import MatchCardList from './MatchCardList';
import ScrollToTopButton from './scrollupbtn/ScrollToTopButton';

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

      <h1 className="text-4xl font-semibold text-center mt-5">
        <span className="text-yellow-500">Recent</span> & <span className="text-green-500">Upcoming</span> Series
      </h1>

      {/* Initial MatchCardList */}
      <MatchCardList league="series" />

      {/* Render additional series and button conditionally */}
      {showMoreSeries ? (
        <>
          {/* Additional MatchCardLists */}
          <MatchCardList league="series" />
          <MatchCardList league="series" />

          {/* Button appears below newly loaded cards */}
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowMoreSeries(false)}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
            >
              Hide Matches
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowMoreSeries(true)}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
          >
            View More Matches
          </button>
        </div>
      )}

      <h1 className="text-4xl font-semibold text-center mt-5">
        <span className="text-green-500">World Cup</span> Matches
      </h1>

      {/* Initial MatchCardList */}
      <MatchCardList league="worldcup" />

      {/* Render additional matches and button conditionally */}
      {showMoreWorldCup ? (
        <>
          {/* Additional MatchCardLists */}
          <MatchCardList league="worldcup" />
          <MatchCardList league="worldcup" />

          {/* Button below newly loaded cards */}
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowMoreWorldCup(false)}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
            >
              Hide Matches
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowMoreWorldCup(true)}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
          >
            View More Matches
          </button>
        </div>
      )}


      <h1 className="text-4xl font-semibold text-center mt-5">
        <span className="text-green-500">Pakistan</span> Super League <span className="text-yellow-500">Matches</span>
      </h1>

      {/* Initial MatchCardList */}
      <MatchCardList league="psl" />

      {/* Render additional matches and button conditionally */}
      {showMorePSL ? (
        <>
          {/* Additional MatchCardLists */}
          <MatchCardList league="psl" />
          <MatchCardList league="psl" />

          {/* Button below newly loaded cards */}
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowMorePSL(false)}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
            >
              Hide Matches
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowMorePSL(true)}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
          >
            View More Matches
          </button>
        </div>
      )}


      <h1 className="text-4xl font-semibold text-center mt-5">
        <span className="text-orange-500">Indian</span> Premier League <span className="text-blue-500">Matches</span>
      </h1>

      {/* Initial MatchCardList */}
      <MatchCardList league="ipl" />

      {/* Render additional matches and button conditionally */}
      {showMoreIPL ? (
        <>
          {/* Additional MatchCardLists */}
          <MatchCardList league="ipl" />
          <MatchCardList league="ipl" />

          {/* Button below newly loaded cards */}
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowMoreIPL(false)}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
            >
              Hide Matches
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowMoreIPL(true)}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
          >
            View More Matches
          </button>
        </div>
      )}


      <h1 className="text-4xl font-semibold text-center mt-5">
        <span className="text-yellow-500">Big Bash</span> <span className="text-green-500">Matches</span>
      </h1>

      {/* Initial MatchCardList */}
      <MatchCardList league="bigbash" />

      {/* Render additional matches and button conditionally */}
      {showMoreBB ? (
        <>
          {/* Additional MatchCardLists */}
          <MatchCardList league="bigbash" />
          <MatchCardList league="bigbash" />

          {/* Button below newly loaded cards */}
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowMoreBB(false)}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
            >
              Hide Matches
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowMoreBB(true)}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
          >
            View More Matches
          </button>
        </div>
      )}

      {/* Scroll-to-top button */}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Tournament;
