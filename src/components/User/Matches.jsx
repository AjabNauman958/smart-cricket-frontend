import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from '../images/matches.jpg';
import '../css/home.css';
import '../css/matches.css';
import MatchCardList from './MatchCardList';
import ScrollToTopButton from './scrollupbtn/ScrollToTopButton';

const Matches = () => {
  return (
    <div>
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
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

      <h1 className="text-4xl font-semibold text-center mt-5">
        <span className="text-green-500">Recent</span> Matches
      </h1>

      {/* Initial MatchCardList */}
      <MatchCardList league="recent" />


      <h1 className="text-4xl font-semibold text-center mt-5">
        <span className="text-yellow-500">Upcoming</span> Matches
      </h1>
      {/* Initial MatchCardList */}
      <MatchCardList league="upcoming" />
      {/* Scroll-to-top button */}
      <ScrollToTopButton />

      <Footer />
    </div >
  );
}

export default Matches;
