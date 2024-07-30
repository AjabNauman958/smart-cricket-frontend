// RecentMatches.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../css/MatchCard.css';

import AUS from '../images/aus.png';
import IND from '../images/india.png';

const recentMatches = [
  {
    matchNumber: '25th Match',
    league: 'International Series',
    format: 'ODI',
    teams: [
      { name: 'India', logo: IND },
      { name: 'Australia', logo: AUS },
    ],
    time: 'Today, 7:00 PM'
  },
  {
    matchNumber: '26th Match',
    league: 'International Series',
    format: 'ODI',
    teams: [
      { name: 'India', logo: IND },
      { name: 'Australia', logo: AUS },
    ],
    time: 'Tomorrow, 7:00 PM'
  },
];

const RecentMatches = () => {
  return (
    <>
   
    <div className="flex mt-4" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '20px',  }}>
       
      {recentMatches.map((matchDetails, index) => (
          <div key={index} className="match-card ">
          <div className="header ">
            <h2>{matchDetails.matchNumber} . {matchDetails.league}, 2024</h2>
            <div className="badge">{matchDetails.format}</div>
          </div>
          <div className="teams">
            {matchDetails.teams.map((team, teamIndex) => (
              <div className="team" key={teamIndex}>
                <img src={team.logo} alt={team.name} />
                <span>{team.name}</span>
              </div>
            ))}
          </div>
          <div className="time">{matchDetails.time}</div>
          <button className="action-button">Match Center &gt;</button>
        </div>
      ))}
    </div>
      </>
  );
};

export default RecentMatches;
