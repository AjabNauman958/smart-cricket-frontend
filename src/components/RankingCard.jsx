import React from 'react';

const teams = [
  { rank: 1, country: "Australia", points: 117, flag: "🇦🇺" },
  { rank: 2, country: "India", points: 117, flag: "🇮🇳" },
  { rank: 3, country: "Pakistan", points: 117, flag: "🇵🇰" },
  { rank: 4, country: "South Africa", points: 117, flag: "🇿🇦" },
  { rank: 5, country: "New Zealand", points: 117, flag: "🇳🇿" },
];

const RankingCard = () => {
  return (
    <div className="bg-teal-300 rounded-lg p-4 shadow-md w-64">
      <div className="text-center bg-pink-400 py-2 rounded-t-lg">
        <h2 className="text-white font-bold">Test - Team Ranking</h2>
      </div>
      <div className="bg-white rounded-b-lg">
        {teams.map((team, index) => (
          <div
            key={team.rank}
            className={`flex items-center justify-between px-4 py-2 ${
              index < teams.length - 1 ? "border-b" : ""
            }`}
          >
            <span className="flex items-center">
              <span className="mr-2">{String(team.rank).padStart(2, '0')}</span>
              <span className="mr-2">{team.flag}</span>
              <span>{team.country}</span>
            </span>
            <span>{team.points}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-2">
        <button className="text-teal-700 hover:underline">Full Ranking</button>
      </div>
    </div>
  );
};

export default RankingCard;
