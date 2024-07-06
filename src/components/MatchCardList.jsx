import React from 'react';
import '../components/css/MatchCard.css';
import pz from '../components/images/pz.png';
import lq from '../components/images/lq.png';
import IND from '../components/images/india.png';
import AUS from '../components/images/aus.png';
import PAK from '../components/images/pak.png';
import ENG from '../components/images/eng.png';
import PropTypes from 'prop-types';


const MatchCardList = ({ league }) => {
  const matchData = {
    recent: [
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
      }
    ],
    upcoming: [
      {
        matchNumber: '1st Match',
        league: 'ICC World Cup',
        format: 'ODI',
        teams: [
          { name: 'India', logo: IND },
          { name: 'Pakistan', logo: PAK },
        ],
        time: 'July 5, 7:00 PM'
      },
      {
        matchNumber: '2nd Match',
        league: 'ICC World Cup',
        format: 'ODI',
        teams: [
          { name: 'Australia', logo: AUS },
          { name: 'England', logo: ENG },
        ],
        time: 'July 6, 7:00 PM'
      },
      {
        matchNumber: '1st Match',
        league: 'ICC World Cup',
        format: 'ODI',
        teams: [
          { name: 'India', logo: IND },
          { name: 'Pakistan', logo: PAK },
        ],
        time: 'July 5, 7:00 PM'
      },
      {
        matchNumber: '2nd Match',
        league: 'ICC World Cup',
        format: 'ODI',
        teams: [
          { name: 'Australia', logo: AUS },
          { name: 'England', logo: ENG },
        ],
        time: 'July 6, 7:00 PM'
      }
    ],
    series: [
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
    ],
    worldcup: [
      {
        matchNumber: '1st Match',
        league: 'ICC World Cup',
        format: 'ODI',
        teams: [
          { name: 'India', logo: IND },
          { name: 'Pakistan', logo: PAK },
        ],
        time: 'July 5, 7:00 PM'
      },
      {
        matchNumber: '2nd Match',
        league: 'ICC World Cup',
        format: 'ODI',
        teams: [
          { name: 'Australia', logo: AUS },
          { name: 'England', logo: ENG },
        ],
        time: 'July 6, 7:00 PM'
      },
      {
        matchNumber: '1st Match',
        league: 'ICC World Cup',
        format: 'ODI',
        teams: [
          { name: 'India', logo: IND },
          { name: 'Pakistan', logo: PAK },
        ],
        time: 'July 5, 7:00 PM'
      },
      {
        matchNumber: '2nd Match',
        league: 'ICC World Cup',
        format: 'ODI',
        teams: [
          { name: 'Australia', logo: AUS },
          { name: 'England', logo: ENG },
        ],
        time: 'July 6, 7:00 PM'
      }

    ],
    psl: [
      {
        matchNumber: '25th Match',
        league: 'Pakistan Super League',
        format: 'T20',
        teams: [
          { name: 'Peshawar Zalmi', logo: pz },
          { name: 'Lahore Qalandars', logo: lq },
        ],
        time: 'Today, 7:00 PM'
      },
      {
        matchNumber: '26th Match',
        league: 'Pakistan Super League',
        format: 'T20',
        teams: [
          { name: 'Peshawar Zalmi', logo: pz },
          { name: 'Lahore Qalandars', logo: lq },
        ],
        time: 'Tomorrow, 7:00 PM'
      },
      {
        matchNumber: '25th Match',
        league: 'Pakistan Super League',
        format: 'T20',
        teams: [
          { name: 'Peshawar Zalmi', logo: pz },
          { name: 'Lahore Qalandars', logo: lq },
        ],
        time: 'Today, 7:00 PM'
      },
      {
        matchNumber: '26th Match',
        league: 'Pakistan Super League',
        format: 'T20',
        teams: [
          { name: 'Peshawar Zalmi', logo: pz },
          { name: 'Lahore Qalandars', logo: lq },
        ],
        time: 'Tomorrow, 7:00 PM'
      }
      
    ],
    ipl: [
      {
        matchNumber: '30th Match',
        league: 'Indian Premier League',
        format: 'T20',
        teams: [
          { name: 'Mumbai Indians', logo: pz },
          { name: 'Chennai Super Kings', logo: lq },
        ],
        time: 'Today, 7:00 PM'
      },
      {
        matchNumber: '31st Match',
        league: 'Indian Premier League',
        format: 'T20',
        teams: [
          { name: 'Royal Challengers Bangalore', logo: pz },
          { name: 'Kolkata Knight Riders', logo: lq },
        ],
        time: 'Tomorrow, 7:00 PM'
      },
      {
        matchNumber: '30th Match',
        league: 'Indian Premier League',
        format: 'T20',
        teams: [
          { name: 'Mumbai Indians', logo: pz },
          { name: 'Chennai Super Kings', logo: lq },
        ],
        time: 'Today, 7:00 PM'
      },
      {
        matchNumber: '31st Match',
        league: 'Indian Premier League',
        format: 'T20',
        teams: [
          { name: 'Royal Challengers Bangalore', logo: pz },
          { name: 'Kolkata Knight Riders', logo: lq },
        ],
        time: 'Tomorrow, 7:00 PM'
      }
    ],
    bigbash: [
      {
        matchNumber: '35th Match',
        league: 'Big Bash League',
        format: 'T20',
        teams: [
          { name: 'Melbourne Stars', logo: pz },
          { name: 'Sydney Sixers', logo: lq },
        ],
        time: 'Today, 7:00 PM'
      },
      {
        matchNumber: '36th Match',
        league: 'Big Bash League',
        format: 'T20',
        teams: [
          { name: 'Perth Scorchers', logo: pz },
          { name: 'Adelaide Strikers', logo: lq },
        ],
        time: 'Tomorrow, 7:00 PM'
      },
      {
        matchNumber: '35th Match',
        league: 'Big Bash League',
        format: 'T20',
        teams: [
          { name: 'Melbourne Stars', logo: pz },
          { name: 'Sydney Sixers', logo: lq },
        ],
        time: 'Today, 7:00 PM'
      },
      {
        matchNumber: '36th Match',
        league: 'Big Bash League',
        format: 'T20',
        teams: [
          { name: 'Perth Scorchers', logo: pz },
          { name: 'Adelaide Strikers', logo: lq },
        ],
        time: 'Tomorrow, 7:00 PM'
      }
    ]
  };
  if (!matchData[league]) {
    return <div>No matches available for the selected league.</div>;
  }
  return (
    <div className="flex mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
      {matchData[league].map((matchDetails, index) => (
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

MatchCardList.propTypes = {
  league: PropTypes.oneOf(['recent', 'upcoming', 'series', 'worldcup', 'psl', 'ipl', 'bigbash']).isRequired,
};

MatchCardList.defaultProps = {
  league: 'recent',
};

export default MatchCardList;
