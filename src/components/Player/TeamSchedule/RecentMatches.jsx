// RecentMatches.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../../css/MatchCard.css';

import PAK from '../../images/pak.png';
import SA from '../../images/SA.png';

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


const RecentMatches = () => {
  return (
    <>
   
   <div className="flex mt-4" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '20px' }}>
        {recentMatches.map((matchDetails, index) => (
          <div 
            key={index} 
            className={`border match-card dark:text-white dark:bg-gray-900 `} 
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
      </>
  );
};

export default RecentMatches;
