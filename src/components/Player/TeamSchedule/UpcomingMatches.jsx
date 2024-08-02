// UpcomingMatches.jsx
import React from "react";
import "../../css/MatchCard.css";

import AUS from "../../images/aus.png";
import PAK from "../../images/pak.png";
import ENG from "../../images/eng.png";
import IND from "../../images/india.png";

const upcomingMatches = [
  {
    matchNumber: "1st Match",
    league: "ICC World Cup",
    format: "ODI",
    teams: [
      { name: "India", logo: IND },
      { name: "Pakistan", logo: PAK },
    ],
    time: "July 5, 7:00 PM",
  },
  {
    matchNumber: "2nd Match",
    league: "ICC World Cup",
    format: "ODI",
    teams: [
      { name: "Australia", logo: AUS },
      { name: "England", logo: ENG },
    ],
    time: "July 6, 7:00 PM",
  },
  {
    matchNumber: "1st Match",
    league: "ICC World Cup",
    format: "ODI",
    teams: [
      { name: "India", logo: IND },
      { name: "Pakistan", logo: PAK },
    ],
    time: "July 5, 7:00 PM",
  },
];

const UpcomingMatches = () => {
  return (
    <>

    <div
      className="flex mt-4 "
      style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
          // alignItems:'center',
        }}
        >
      {upcomingMatches.map((matchDetails, index) => (
        <div key={index} className="border match-card dark:text-white dark:bg-gray-900 hover:border-yellow-400 duration-300">
          <div className="header">
            <h3 className="text-lg dark:text-white">
              {matchDetails.matchNumber} . {matchDetails.league}, 2024
            </h3>
            <div className="badge">{matchDetails.format}</div>
          </div>
          <div className="teams">
            {matchDetails.teams.map((team, teamIndex) => (
                <div className="flex justify-center items-center flex-col text-center mb-2" key={teamIndex}>
                <img src={team.logo} alt={team.name} className="w-10 h-10 mr-3 rounded-full shadow-lg"/>
                <span className='font-semibold'>{team.name}</span>
              </div>
            ))}
          </div>
          <div className="time dark:text-white">{matchDetails.time}</div>
          
        </div>
      ))}
    </div>
      </>
  );
};

export default UpcomingMatches;
