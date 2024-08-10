import React from 'react';
import '../css/RankingCard.css';
import { Link } from 'react-router-dom';

const RankingCard = ({ title, teams }) => {
  return (
    <div className="ranking-card">
      <div className="ranking-card-header">
        <h2 className='mx-4 '>{title}</h2>
      </div>
      <div className="ranking-card-content">
        {teams.map((team, index) => (
          <div
            key={team.rank}
            className={`ranking-team ${index < teams.length - 1 ? "border-b" : ""} ${index === 0 ? "text-xl font-bold p-6 bg-slate-100 rounded" : ""}`}

          >
            <span className="flex items-center">
             
            <span className={`mr-2 ${index === 0 ? "text-2xl" : "text-base"}`}>
              {String(team.rank).padStart(2, '0')}</span>
              <img
                src={team.flag}
                className="ranking-team-flag"
                alt={`${team.country} flag`}
              />
              <span className="ranking-team-name">{team.player}</span>
            </span>
            <span>{team.points}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-2 ">
      <Link to='/fullranking' > <button className="text-white hover:text-yellow-300">Full Ranking</button></Link> 
      </div>
    </div>
  );
};

export default RankingCard;
