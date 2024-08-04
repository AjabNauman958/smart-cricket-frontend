import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import images from '../../images/babar.png';
import 'chart.js/auto';

const teams = [
  'India', 'Australia', 'England', 'New Zealand', 'South Africa',
  'Sri Lanka', 'West Indies', 'Bangladesh', 'Afghanistan',
  'Ireland', 'Zimbabwe', 'Netherlands', 'Scotland', 'Nepal', 'UAE'
];

const formats = ['Test', 'ODI', 'T20'];

const stadiums = {
  India: ['Wankhede Stadium', 'Eden Gardens', 'Chinnaswamy Stadium'],
  Australia: ['Melbourne Cricket Ground', 'Sydney Cricket Ground'],
  England: ['Lords', 'The Oval'],
  'New Zealand': ['Eden Park', 'Hagley Oval'],
  'South Africa': ['Newlands', 'Wanderers Stadium'],
  'Sri Lanka': ['R. Premadasa Stadium', 'Pallekele International Cricket Stadium'],
  'West Indies': ['Kensington Oval', 'Sabina Park'],
  Bangladesh: ['Sher-e-Bangla National Stadium', 'Chittagong Stadium'],
  Afghanistan: ['Kabul International Stadium', 'Kandahar International Cricket Stadium'],
  Ireland: ['Malahide Cricket Club Ground', 'Stormont'],
  Zimbabwe: ['Harare Sports Club', 'Queens Sports Club'],
  Netherlands: ['VRA Ground', 'Hazelaarweg'],
  Scotland: ['Grange Cricket Club Ground', 'Titwood'],
  Nepal: ['Tribhuvan University International Cricket Ground', 'Pokhara Stadium'],
  UAE: ['Dubai International Cricket Stadium', 'Sharjah Cricket Stadium']
};

const players = [
  { name: 'Babar Azam', role: 'Batsman', image: images },
  { name: 'Shaheen Afridi', role: 'Bowler', image: images },
  { name: 'Mohammad Rizwan', role: 'Wicketkeeper', image: images },
  { name: 'Fakhar Zaman', role: 'Batsman', image: images },
  { name: 'Shadab Khan', role: 'All-rounder', image: images },
  { name: 'Haris Rauf', role: 'Bowler', image: images },
  { name: 'Hasan Ali', role: 'Bowler', image: images },
  { name: 'Imam-ul-Haq', role: 'Batsman', image: images },
  { name: 'Asif Ali', role: 'Batsman', image: images },
  { name: 'Mohammad Nawaz', role: 'All-rounder', image: images },
  { name: 'Mohammad Hafeez', role: 'All-rounder', image: images },
  { name: 'Shoaib Malik', role: 'All-rounder', image: images },
  { name: 'Sarfaraz Ahmed', role: 'Wicketkeeper', image: images },
  { name: 'Mohammad Wasim', role: 'Bowler', image: images },
  { name: 'Usman Qadir', role: 'Bowler', image: images },
  { name: 'Faheem Ashraf', role: 'All-rounder', image: images },
  { name: 'Haider Ali', role: 'Batsman', image: images },
  { name: 'Shahnawaz Dahani', role: 'Bowler', image: images },
  { name: 'Imad Wasim', role: 'All-rounder', image: images },
  { name: 'Iftikhar Ahmed', role: 'All-rounder', image: images },
];

function SuggestPlayingXI() {
  const [opponentTeam, setOpponentTeam] = useState('');
  const [stadiumCountry, setStadiumCountry] = useState('');
  const [stadium, setStadium] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState(players);
  const [suggestedXI, setSuggestedXI] = useState([]);
  const [showCharts, setShowCharts] = useState(false);
  const [impactPlayer, setImpactPlayer] = useState(null);

  const handlePlayerSelect = (e) => {
    if (!opponentTeam || !stadiumCountry || !stadium || !selectedFormat) {
      toast.error('Please select all options before selecting players.');
      return;
    }
    const selectedPlayerName = e.target.value;
    const selectedPlayer = availablePlayers.find(player => player.name === selectedPlayerName);
    if (selectedPlayer && !selectedPlayers.includes(selectedPlayer)) {
      setSelectedPlayers([...selectedPlayers, selectedPlayer]);
      setAvailablePlayers(availablePlayers.filter(player => player.name !== selectedPlayerName));
    }
  };

  const handleRemovePlayer = (playerToRemove) => {
    setSelectedPlayers(selectedPlayers.filter(player => player.name !== playerToRemove.name));
    setAvailablePlayers([...availablePlayers, playerToRemove]);
  };

  const suggestBestXI = () => {
    if (selectedPlayers.length < 15) {
      toast.error('Please select 15 players before suggesting the best XI.');
      return;
    }
    const shuffled = selectedPlayers.sort(() => 0.5 - Math.random());
    const bestXI = shuffled.slice(0, 11);
    setSuggestedXI(bestXI);
    setShowCharts(true);
    setImpactPlayer(bestXI[Math.floor(Math.random() * bestXI.length)]);
    toast.success('Best XI suggested successfully!');
  };

  const data = {
    labels: suggestedXI.map(player => player.name),
    datasets: [
      {
        label: 'Winning Probability',
        data: suggestedXI.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Total Score',
        data: suggestedXI.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'Performance',
        data: suggestedXI.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="container mx-auto p-6">
        <ToastContainer />
        <h1 className="text-3xl font-bold mb-6 text-center">Cricket Team Selector</h1>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Opponent Team */}
            <div>
              <label className="block text-lg font-medium">Opponent Team:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-900"
                value={opponentTeam}
                onChange={(e) => setOpponentTeam(e.target.value)}
              >
                <option value="">Select opponent team</option>
                {teams.map((team, index) => (
                  <option key={index} value={team}>{team}</option>
                ))}
              </select>
            </div>

            {/* Format */}
            <div>
              <label className="block text-lg font-medium">Select Format:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-900"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
              >
                <option value="">Select format</option>
                {formats.map((format, index) => (
                  <option key={index} value={format}>{format}</option>
                ))}
              </select>
            </div>

            {/* Stadium Country */}
            <div>
              <label className="block text-lg font-medium">Stadium Country:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-900"
                value={stadiumCountry}
                onChange={(e) => setStadiumCountry(e.target.value)}
              >
                <option value="">Select country</option>
                {Object.keys(stadiums).map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Stadium */}
            <div>
              <label className="block text-lg font-medium">Stadium:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-900"
                value={stadium}
                onChange={(e) => setStadium(e.target.value)}
                disabled={!stadiumCountry}
              >
                <option value="">Select stadium</option>
                {stadiumCountry && stadiums[stadiumCountry].map((stadium, index) => (
                  <option key={index} value={stadium}>{stadium}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-xl font-bold">Select your 15 player squad</h1>
          </div>

          {/* Player Selection */}
          <div>
            <label className="block text-lg font-medium">Select Players:</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-900"
              onChange={handlePlayerSelect}
              disabled={selectedPlayers.length >= 15}
            >
              <option value="">Select player</option>
              {availablePlayers.map((player, index) => (
                <option key={index} value={player.name}>{player.name}</option>
              ))}
            </select>
          </div>

          {/* Selected Players */}
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Selected Players:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {selectedPlayers.map((player, index) => (
                <div key={index} className="relative p-4 border border-gray-300 rounded-lg flex flex-col justify-between items-center transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                  <button
                    className="absolute top-2 right-2 text-red-500 transition-colors hover:text-red-700 duration-300"
                    onClick={() => handleRemovePlayer(player)}
                  >
                    &times;
                  </button>
                  <div className='flex items-start'>
                    <div className='leftcard'>
                      <img src={player.image} alt={player.name} className="w-12 h-12 rounded-full mb-2 transition-transform transform hover:scale-110 duration-300" />
                    </div>
                    <div className='rightcard'>
                      <span className="text-lg font-medium">{player.name}</span>
                      <br />
                      <span className="text-sm text-gray-500">{player.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggest Best XI Button */}
          {selectedPlayers.length === 15 && (
            <div className="text-center mt-6">
              <button
                className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 text-white font-semibold rounded-lg"
                onClick={suggestBestXI}
              >
                Suggest Best XI
              </button>
            </div>
          )}

          {/* Suggested XI and Charts */}
          {showCharts && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Suggested Best XI:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {suggestedXI.map((player, index) => (
                  <div key={index} className="relative p-4 border border-gray-300 rounded-lg flex flex-col justify-between items-center transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                    <div className='flex items-start'>
                      <div>
                        <img src={player.image} alt={player.name} className="w-12 h-12 rounded-full mb-2 transition-transform transform hover:scale-110 duration-300" />
                      </div>
                      <div>
                        <span className="text-lg font-medium">{player.name}</span>
                        <br />
                        <span className="text-sm text-gray-500">{player.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                <div className="transition-shadow hover:shadow-xl duration-300 ease-in-out">
                  <h2 className="text-xl font-bold mb-4">Winning Probability:</h2>
                  <Bar data={data} />
                </div>

                <div className="transition-shadow hover:shadow-xl duration-300 ease-in-out">
                  <h2 className="text-xl font-bold mb-4">Total Score:</h2>
                  <Bar data={data} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                <div className="transition-shadow hover:shadow-xl duration-300 ease-in-out">
                  <h2 className="text-xl font-bold mb-4">Performance:</h2>
                  <Bar data={data} />
                </div>

                <div className="transition-transform transform hover:scale-105 duration-300 ease-in-out">
                  <h2 className="text-xl font-bold mb-4">Impact Player:</h2>
                  {impactPlayer && (
                    <div className="flex flex-col items-center">
                      <img src={impactPlayer.image} alt={impactPlayer.name} className="w-24 h-24 rounded-full mb-2 transition-transform transform hover:scale-110 duration-300" />
                      <span className="text-lg font-medium">{impactPlayer.name}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SuggestPlayingXI;
