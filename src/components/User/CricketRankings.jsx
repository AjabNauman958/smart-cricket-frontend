import React from 'react';
import RankingCard from './RankingCard';
import PAK from '../images/pak.png';
import AUS from '../images/aus.png';
import IND from '../images/india.png';
import SA from '../images/SA.png';
import NZ from '../images/newzealand.png';
import ENG from '../images/eng.png';


// Mens team ranking 
const menstestTeams = [
  { rank: 1, teamName: "Australia", points: 117, flag: AUS },
  { rank: 2, teamName: "India", points: 117, flag: IND },
  { rank: 3, teamName: "Pakistan", points: 117, flag: PAK },
  { rank: 4, teamName: "South Africa", points: 117, flag: SA },
  { rank: 5, teamName: "New Zealand", points: 117, flag: NZ },
];

const mensodiTeams = [
  { rank: 1, teamName: "England", points: 125, flag: ENG },
  { rank: 2, teamName: "India", points: 124, flag: IND },
  { rank: 3, teamName: "New Zealand", points: 112, flag: NZ },
  { rank: 4, teamName: "Australia", points: 111, flag: AUS },
  { rank: 5, teamName: "Pakistan", points: 106, flag: PAK },
];

const menst20Teams = [
  { rank: 1, teamName: "India", points: 270, flag: IND },
  { rank: 2, teamName: "England", points: 265, flag: ENG },
  { rank: 3, teamName: "Pakistan", points: 261, flag: PAK },
  { rank: 4, teamName: "South Africa", points: 253, flag: SA },
  { rank: 5, teamName: "Australia", points: 249, flag: AUS },
];


// womens team ranking 
const womensodiTeams = [
  { rank: 1, teamName: "England", points: 125, flag: ENG },
  { rank: 2, teamName: "India", points: 124, flag: IND },
  { rank: 3, teamName: "New Zealand", points: 112, flag: NZ },
  { rank: 4, teamName: "Australia", points: 111, flag: AUS },
  { rank: 5, teamName: "Pakistan", points: 106, flag: PAK },
];

const womenst20Teams = [
  { rank: 1, teamName: "India", points: 270, flag: IND },
  { rank: 2, teamName: "England", points: 265, flag: ENG },
  { rank: 3, teamName: "Pakistan", points: 261, flag: PAK },
  { rank: 4, teamName: "South Africa", points: 253, flag: SA },
  { rank: 5, teamName: "Australia", points: 249, flag: AUS },
];


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
