import React from 'react';
import RankingCard from './RankingCard';
import PAK from '../components/images/pak.png';
import AUS from '../components/images/aus.png';
import IND from '../components/images/india.jpeg';
import SA from '../components/images/SA.png';
import NZ from '../components/images/newzealand.png';
import ENG from '../components/images/eng.png';

const testTeams = [
  { rank: 1, country: "Australia", points: 117, flag: AUS },
  { rank: 2, country: "India", points: 117, flag: IND },
  { rank: 3, country: "Pakistan", points: 117, flag: PAK},
  { rank: 4, country: "South Africa", points: 117, flag: SA },
  { rank: 5, country: "New Zealand", points: 117, flag: NZ },
];

const odiTeams = [
  { rank: 1, country: "England", points: 125, flag: ENG },
  { rank: 2, country: "India", points: 124, flag: IND },
  { rank: 3, country: "New Zealand", points: 112, flag: NZ },
  { rank: 4, country: "Australia", points: 111, flag: AUS },
  { rank: 5, country: "Pakistan", points: 106, flag: PAK },
];

const t20Teams = [
  { rank: 1, country: "India", points: 270, flag: IND },
  { rank: 2, country: "England", points: 265, flag: ENG },
  { rank: 3, country: "Pakistan", points: 261, flag:PAK },
  { rank: 4, country: "South Africa", points: 253, flag: SA },
  { rank: 5, country: "Australia", points: 249, flag:AUS },
];

const CricketRankings = () => {
  return (
    <div className="flex space-x-4 justify-center">
      <RankingCard title="Test - Team Ranking" teams={testTeams} />
      <RankingCard title="ODI - Team Ranking" teams={odiTeams} />
      <RankingCard title="T20 - Team Ranking" teams={t20Teams} />
    </div>
  );
};

export default CricketRankings;
