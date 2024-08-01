import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../css/MatchCard.css';

import PAK from '../../images/pak.png';
import SA from '../../images/SA.png';
import ShowPerformanceGraph from '../PerformancePrediction/ShowPerformanceGraph';
import playerImages from '../../images/babar.png'; // Assuming you have player images in this directory

const recentMatches = [
  {
    matchNumber: '25th Match',
    league: 'International Series',
    format: 'ODI',
    teams: [
      { name: 'South Africa', logo: SA, score: '250/8', overs: '50.0' },
      { name: 'Pakistan', logo: PAK, score: '245/9', overs: '50.0' },
    ],
    time: 'Today, 7:00 PM',
    status: 'Completed',
    result: 'South Africa won by 5 runs'
  },
  {
    matchNumber: '26th Match',
    league: 'International Series',
    format: 'ODI',
    teams: [
      { name: 'South Africa', logo: SA, score: '200/7', overs: '50.0' },
      { name: 'Pakistan', logo: PAK, score: '202/4', overs: '47.3' },
    ],
    time: 'Yesterday, 7:00 PM',
    status: 'Completed',
    result: 'Pakistan won by 6 wickets'
  },
  {
    matchNumber: '27th Match',
    league: 'International Series',
    format: 'ODI',
    teams: [
      { name: 'South Africa', logo: SA, score: '300/6', overs: '50.0' },
      { name: 'Pakistan', logo: PAK, score: '290/10', overs: '49.4' },
    ],
    time: 'Yesterday, 7:00 PM',
    status: 'Completed',
    result: 'South Africa won by 10 runs'
  },
];

const players = [
  'Babar Azam', 'Shaheen Afridi', 'Mohammad Rizwan', 'Fakhar Zaman',
  'Shadab Khan', 'Haris Rauf', 'Hasan Ali', 'Imam-ul-Haq',
  'Asif Ali', 'Mohammad Nawaz', 'Mohammad Hafeez', 'Shoaib Malik',
  'Sarfaraz Ahmed', 'Mohammad Wasim', 'Usman Qadir'
];

const playerRoles = {
  'Babar Azam': 'Batsman',
  'Shaheen Afridi': 'Bowler',
  'Mohammad Rizwan': 'Batsman/Wicketkeeper',
  'Fakhar Zaman': 'Batsman',
  'Shadab Khan': 'All-rounder',
  'Haris Rauf': 'Bowler',
  'Hasan Ali': 'Bowler',
  'Imam-ul-Haq': 'Batsman',
  'Asif Ali': 'Batsman',
  'Mohammad Nawaz': 'All-rounder',
  'Mohammad Hafeez': 'All-rounder',
  'Shoaib Malik': 'All-rounder',
  'Sarfaraz Ahmed': 'Batsman/Wicketkeeper',
  'Mohammad Wasim': 'Bowler',
  'Usman Qadir': 'Bowler'
};

const SelectRecentMatches = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [error, setError] = useState('');

  const handleMatchSelect = (index) => {
    setSelectedMatch(index);
    setSelectedPlayer('');
    setError('');
  };

  const handlePlayerChange = (event) => {
    setSelectedPlayer(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedMatch === null) {
      setError('Please select a match first.');
    } else {
      setError('');
    }
  };

  return (
    <>
      <div className='mt-10'>
        <h1 className='text-xl text-center'>Select a Match from the Recent Matches</h1>
      </div>
      <div className="flex mt-4" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '20px' }}>
        {recentMatches.map((matchDetails, index) => (
          <div 
            key={index} 
            className={`border match-card dark:text-white dark:bg-gray-900 ${selectedMatch === index ? 'border-blue-500' : 'border-gray-300'}`} 
            onClick={() => handleMatchSelect(index)}
          >
            <div className="header">
              <h3 className='text-lg dark:text-white'>{matchDetails.matchNumber} - {matchDetails.league}, 2024</h3>
              <div className="badge">{matchDetails.format}</div>
            </div>
            <div className="teams">
              {matchDetails.teams.map((team, teamIndex) => (
                <div className="flex justify-center items-center flex-col text-center mb-2" key={teamIndex}>
                  <img src={team.logo} alt={team.name} className="w-10 h-10 mr-3 rounded-full shadow-lg" />
                  <br />
                  <span className='font-semibold'>{team.name} - {team.score} <br /> <span className='font-normal'>({team.overs} overs)</span></span>
                </div>
              ))}
            </div>
            <div className="time mb-4">{matchDetails.time}</div>
            <div className="result">
              <strong>Status: </strong>{matchDetails.status}
              <p>{matchDetails.result}</p>
            </div>
            <button className="action-button">Match Center &gt;</button>
          </div>
        ))}
      </div>

      {selectedMatch !== null && (
        <div className="flex flex-col items-center mt-4 dark:text-white">
          <label className="block text-lg font-bold mb-2">Select a Pakistan Player:</label>
          <select
            value={selectedPlayer}
            onChange={handlePlayerChange}
            className="dark:bg-gray-900 dark:text-white border border-gray-400 rounded py-2 px-4 mb-4 w-full max-w-xs appearance-none leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">Select a player</option>
            {players.map((player, index) => (
              <option key={index} value={player}>{player}</option>
            ))}
          </select>

          {selectedPlayer && (
            <div className="flex items-center justify-center mt-4 dark:text-white">
              <div className="flex items-center">
                <img
                  src={playerImages}
                  alt={selectedPlayer}
                  className="w-32 h-32 rounded-full mr-4 shadow-lg"
                />
                <div>
                  <h2 className="text-lg font-bold">Name: {selectedPlayer}</h2>
                  <h3 className="text-md">Role: {playerRoles[selectedPlayer]}</h3>
                </div>
              </div>
            </div>
          )}

          {selectedPlayer && (
            <div className="mt-4 duration-300 sm:w-2/4 lg:w-3/4">
              <ShowPerformanceGraph player={selectedPlayer} />
            </div>
          )}
        </div>
      )}

      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
    </>
  );
};

SelectRecentMatches.propTypes = {
  matchDetails: PropTypes.shape({
    matchNumber: PropTypes.string,
    league: PropTypes.string,
    format: PropTypes.string,
    teams: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
      score: PropTypes.string,
      overs: PropTypes.string,
    })),
    time: PropTypes.string,
    status: PropTypes.string,
    result: PropTypes.string,
  }),
};

export default SelectRecentMatches;
