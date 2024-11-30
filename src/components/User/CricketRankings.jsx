import React from 'react';
import RankingCard from './RankingCard';
import { mensodiTeams, menst20Teams, menstestTeams, womensodiTeams, womenst20Teams } from './Ranking';
const CricketRankings = () => {
  return (
    <>
      <div className="flex space-x-4 justify-center mb-10" style={{ flexWrap: 'wrap' }}>

        <RankingCard title="Test - Team Ranking" teams={menstestTeams} />
        <RankingCard title="ODI - Team Ranking" teams={mensodiTeams} />
        <RankingCard title="T20 - Team Ranking" teams={menst20Teams} />
      </div>
      <h1 className='text-4xl	font-semibold	text-center	mt-10  '><span className='text-green-500'>Women's</span> Team Ranking </h1>

      <div className="flex space-x-4 justify-center mt-10" style={{ flexWrap: 'wrap' }}>
        <RankingCard title="ODI - Team Ranking" teams={womensodiTeams} />
        <RankingCard title="T20 - Team Ranking" teams={womenst20Teams} />
      </div>
    </>
  );
};

export default CricketRankings;
