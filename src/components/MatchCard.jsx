import React from 'react';

// MatchCard Component
const MatchCard = ({ matchDetails }) => {
  const { matchNumber, league, format, teams, time } = matchDetails;

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-2 sm:space-y-4">
      <div className="flex justify-between items-center border-b pb-2">
        <div>
          <h2 className="text-lg font-medium text-gray-900">
            {matchNumber} . {league}, 2024
          </h2>
        </div>
        <div className="bg-gray-200 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full">
          {format}
        </div>
      </div>
      <div className="space-y-1">
        {teams.map((team, index) => (
          <div key={index} className="flex items-center">
            <img src={team.logo} alt={team.name} className="h-6 w-6 mr-2" />
            <span className="text-gray-700">{team.name}</span>
          </div>
        ))}
      </div>
      <div className="text-gray-500 text-sm">
        {time}
      </div>
      <button className="mt-2 w-full bg-white text-gray-900 border border-gray-300 rounded-md py-2 px-4 text-center hover:bg-gray-50">
        Match Center &gt;
      </button>
    </div>
  );
};

// MatchCardList Component
const MatchCardList = () => {
  const matchData = [
    {
      matchNumber: '25th Match',
      league: 'Pakistan Super League',
      format: 'T20',
      teams: [
        { name: 'Peshawar Zalmi', logo: 'path/to/peshawar-zalmi-logo.png' },
        { name: 'Quetta Gladiator', logo: 'path/to/quetta-gladiator-logo.png' },
      ],
      time: 'Today, 7:00 PM'
    },
    {
      matchNumber: '26th Match',
      league: 'Pakistan Super League',
      format: 'T20',
      teams: [
        { name: 'Karachi Kings', logo: 'path/to/karachi-kings-logo.png' },
        { name: 'Lahore Qalandars', logo: 'path/to/lahore-qalandars-logo.png' },
      ],
      time: 'Tomorrow, 7:00 PM'
    },
    {
      matchNumber: '27th Match',
      league: 'Pakistan Super League',
      format: 'T20',
      teams: [
        { name: 'Islamabad United', logo: 'path/to/islamabad-united-logo.png' },
        { name: 'Multan Sultans', logo: 'path/to/multan-sultans-logo.png' },
      ],
      time: 'July 5, 7:00 PM'
    },
    {
      matchNumber: '28th Match',
      league: 'Pakistan Super League',
      format: 'T20',
      teams: [
        { name: 'Peshawar Zalmi', logo: 'path/to/peshawar-zalmi-logo.png' },
        { name: 'Karachi Kings', logo: 'path/to/karachi-kings-logo.png' },
      ],
      time: 'July 6, 7:00 PM'
    }
  ];

  return (
    <div className="space-y-4">
      {matchData.map((matchDetails, index) => (
        <MatchCard key={index} matchDetails={matchDetails} />
      ))}
    </div>
  );
};

export default MatchCardList;
