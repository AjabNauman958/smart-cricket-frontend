import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import '../css/RankingCard.css';
import { Link } from 'react-router-dom';

const RankingCard = ({ title, teams }) => {
  return (
    <motion.div
      className="ranking-card"
      initial={{ opacity: 0, y: 50 }} // Initial state (off-screen or invisible)
      whileInView={{ opacity: 1, y: 0 }} // Animate when the element is in view
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is visible
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className="ranking-card-header">
        <h2 className='mx-4'>{title}</h2>
      </div>
      <div className="ranking-card-content">
        {teams.slice(0, 5).map((team, index) => (
          <motion.div
            key={team.rank}
            className={`ranking-team ${index < teams.length - 1 ? "border-b" : ""} ${index === 0 ? "text-xl font-bold p-6 bg-slate-100 rounded" : ""}`}
            initial={{ opacity: 0 }} // Initial opacity for each team
            whileInView={{ opacity: 1 }} // Animate opacity when in view
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the team is visible
            transition={{ duration: 0.4, delay: index * 0.2 }} // Stagger animation
          >
            <span className="flex items-center">
              <span className={`mr-2 ${index === 0 ? "text-2xl" : "text-base"}`}>
                {String(team.rank).padStart(2, '0')}
              </span>
              <img
                src={team.flag}
                className="ranking-team-flag"
                alt={`${team.country} flag`}
              />
              <span className="ranking-team-name">
                {team.player || team.teamName}
              </span>
            </span>
            <span>{team.points}</span>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-2">
        <Link to='/fullranking' state={{ title, teams }}>
          <button className="text-white hover:text-yellow-300">Full Ranking</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default RankingCard;
