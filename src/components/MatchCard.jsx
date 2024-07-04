import React from 'react';
import '../components/css/MatchCard.css';
import pz from '../components/images/pz.png';
import lq from '../components/images/lq.png';


const MatchCardList = () => {
  const matchData = [
    {
      matchNumber: '25th Match',
      league: 'Pakistan Super League',
      format: 'T20',
      teams: [
        { name: 'Peshawar Zalmi', logo: pz },
        { name: 'Lahore Qalanders', logo: lq },
      ],
      time: 'Today, 7:00 PM'
    },
    {
      matchNumber: '26th Match',
      league: 'Pakistan Super League',
      format: 'T20',
      teams: [
        { name: 'Peshawar Zalmi', logo: pz },
        { name: 'Lahore Qalanders', logo: lq },
      ],
      time: 'Tomorrow, 7:00 PM'
    },
    {
      matchNumber: '27th Match',
      league: 'Pakistan Super League',
      format: 'T20',
      teams: [
        { name: 'Peshawar Zalmi', logo: pz },
        { name: 'Lahore Qalanders', logo: lq },
      ],
      time: 'July 5, 7:00 PM'
    },
    {
      matchNumber: '28th Match',
      league: 'Pakistan Super League',
      format: 'T20',
      teams: [
        { name: 'Peshawar Zalmi', logo: pz },
        { name: 'Lahore Qalanders', logo: lq },
      ],
      time: 'July 6, 7:00 PM'
    }
  ];

  return (
    <div className="flex mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
      {matchData.map((matchDetails, index) => (
        <div key={index} className="match-card">
          <div className="header">
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
  );
};

export default MatchCardList;