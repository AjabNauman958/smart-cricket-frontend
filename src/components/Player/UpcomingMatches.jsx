// UpcomingMatches.jsx
import React from "react";
import "../css/MatchCard.css";

import AUS from "../images/aus.png";
import PAK from "../images/pak.png";
import ENG from "../images/eng.png";
import IND from "../images/india.png";

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
];

const UpcomingMatches = () => {
  return (
    <>

    <div
      className="flex mt-4"
      style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
        >
      {upcomingMatches.map((matchDetails, index) => (
        <div key={index} className="match-card">
          <div className="header">
            <h2>
              {matchDetails.matchNumber} . {matchDetails.league}, 2024
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
          <button className="action-button">Match Center &gt;</button>
        </div>
      ))}
    </div>
      </>
  );
};

export default UpcomingMatches;
