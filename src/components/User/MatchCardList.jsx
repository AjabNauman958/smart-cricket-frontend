import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/favouritesSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Importing heart icons
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../css/MatchCard.css';
import pz from '../images/pz.png';
import lq from '../images/lq.png';
import IND from '../images/india.png';
import AUS from '../images/aus.png';
import PAK from '../images/pak.png';
import ENG from '../images/eng.png';
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
        matchNumber: '29th January',
        league: 'International Series',
        format: 'ODI',
        teams: [
          { name: 'India', logo: IND },
          { name: 'Australia', logo: AUS },
        ],
        time: 'Today, 7:00 PM'
      },
      {
        matchNumber: '12th December',
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
        matchNumber: '2nd Match',
        league: 'ICC World Cup',
        format: 'ODI',
        teams: [
          { name: 'India', logo: IND },
          { name: 'Pakistan', logo: PAK },
        ],
        time: 'July 5, 7:00 PM'
      },
      {
        matchNumber: '1st Match',
        league: 'ICC World Cup',
        format: 'ODI',
        teams: [
          { name: 'Australia', logo: AUS },
          { name: 'England', logo: ENG },
        ],
        time: 'July 6, 7:00 PM'
      },
      {
        matchNumber: '4th Match',
        league: 'ICC World Cup',
        format: 'ODI',
        teams: [
          { name: 'India', logo: IND },
          { name: 'Pakistan', logo: PAK },
        ],
        time: 'July 5, 7:00 PM'
      },
      {
        matchNumber: '2nd July',
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
        matchNumber: '22nd Match',
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

  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);
  console.log('Favourites in UserProfile:', favourites);

  const isFavourite = (matchNumber) =>
    favourites.some((fav) => fav.matchNumber === matchNumber);

  const handleFavouriteClick = (matchDetails) => {
    if (isFavourite(matchDetails.matchNumber)) {
      dispatch(removeFavourite(matchDetails));

    } else {
      dispatch(addFavourite(matchDetails));
    }
  };

  if (!matchData[league]) {
    return <div>No matches available for the selected league.</div>;
  }
  return (
    <div
      className="flex mt-10"
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}
    >
      <ToastContainer position="top-right" autoClose={3000} />

      {matchData[league].map((matchDetails, index) => (
        <div key={index} className="match-card">
          <div className="header">
            <h2>
              {matchDetails.matchNumber}. {matchDetails.league}, 2024
            </h2>

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

          {/* Favourite Icon */}
          <button
            className="favourite-button "
            onClick={() => handleFavouriteClick(matchDetails)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            {isFavourite(matchDetails.matchNumber) ? (
              <>
                <FaHeart style={{ color: 'red' }} /> <span>Remove from Favourites</span>
              </>
            ) : (
              <>
                <FaRegHeart style={{ color: 'grey' }} /> <span>Add to Favourites</span>
              </>
            )}
          </button>

          <button className="action-button">Match Center &gt;</button>
        </div>
      ))}

    </div>
  );
};

// MatchCardList.propTypes = {
//   league: PropTypes.oneOf(['recent', 'upcoming', 'series', 'worldcup', 'psl', 'ipl', 'bigbash']).isRequired,
// };

MatchCardList.propTypes = {
  league: PropTypes.string.isRequired,
  matchData: PropTypes.object.isRequired,
};

export default MatchCardList;
