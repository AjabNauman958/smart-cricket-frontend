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
import { Bar } from 'react-chartjs-2';
import { matchData, chartData, chartOptions } from './matchData';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Matches = () => {
  const [showMoreRecent, setShowMoreRecent] = useState(false);
  const [showMoreUpcoming, setShowMoreUpcoming] = useState(false);
  const { title, matchDate, venue, teams, result } = matchData;


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

      <h1 className="text-4xl font-semibold text-center mt-5">
        <span className="text-green-500">Recent</span> Matches
      </h1>

      {/* Initial MatchCardList */}
      <MatchCardList league="recent" />

      {/* Render additional matches and button conditionally */}
      {showMoreRecent ? (
        <>
          {/* Additional MatchCardLists */}
          <MatchCardList league="recent" />
          <MatchCardList league="recent" />

          {/* Button appears below newly loaded cards */}
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowMoreRecent(false)}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
            >
              Hide Matches
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowMoreRecent(true)}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
          >
            View More Matches
          </button>
        </div>
      )}


      <h1 className="text-4xl font-semibold text-center mt-5">
        <span className="text-yellow-500">Upcoming</span> Matches
      </h1>

      {/* Initial MatchCardList */}
      <MatchCardList league="upcoming" />

      {/* Render additional matches and button conditionally */}
      {showMoreUpcoming ? (
        <>
          {/* Additional MatchCardLists */}
          <MatchCardList league="upcoming" />
          <MatchCardList league="upcoming" />

          {/* Button appears below newly loaded cards */}
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowMoreUpcoming(false)}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
            >
              Hide Matches
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowMoreUpcoming(true)}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
          >
            View More Matches
          </button>
        </div>
      )}


      {/* match analysis */}
      <div>
        <h1 className='text-4xl font-semibold text-center mt-5'>
          Match<span className='text-yellow-500'> Analysis</span>
        </h1>
        <div className="match-analysis">
          <div className="match-date">
            <h3>{matchDate}</h3>
          </div>
          <div className="match-details">
            <h1>{title}</h1>
          </div>
          <div className="ground">
            <p>{venue}</p>
          </div>
          <div className="teams">
            <div className="team">
              <img src={teams[0].flag}
                alt={`${teams[0].name} Flag`} className="team-flag" />
              <h1>{teams[0].name}</h1>
              <p className="team-score">{teams[0].score}</p>
            </div>
            <div className="match-result">
              <p>{result}</p>
            </div>
            <div className="team">
              <img src={teams[1].flag}
                alt={`${teams[1].name} Flag`} className="team-flag" />
              <h1>{teams[1].name}</h1>
              <p className="team-score">{teams[1].score}</p>
            </div>
          </div>
        </div>
        <div className='graph grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-10 '>
          <div className="">
            <p className='text-center font-semibold'>Average on both team batting</p>
            <div>

              <Bar data={chartData} options={chartOptions} />
            </div>          </div>
          <div className="p-10">
            <div className="batting-average-content" >
              <p className='text-justify'>Our analysis leverages advanced AI algorithms to provide an insightful comparison of the batting averages between both teams. The graph below illustrates the batting performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
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
