import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import images from '../../images/babar.png';
import 'chart.js/auto';

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

const countries = [
  { name: 'Pakistan', stadiums: ['National Stadium', 'Gaddafi Stadium', 'Rawalpindi Stadium', 'Multan Stadium', 'Peshawar Stadium'] },
  { name: 'India', stadiums: ['Eden Gardens', 'Wankhede Stadium', 'Chidambaram Stadium', 'Feroz Shah Kotla', 'Sawai Mansingh Stadium'] },
  { name: 'Australia', stadiums: ['Melbourne Cricket Ground', 'Sydney Cricket Ground', 'Adelaide Oval', 'Perth Stadium', 'Gabba'] },
  { name: 'England', stadiums: ['Lords', 'The Oval', 'Trent Bridge', 'Old Trafford', 'Headingley'] },
  { name: 'South Africa', stadiums: ['Wanderers Stadium', 'Newlands', 'Kingsmead', 'SuperSport Park', 'St George\'s Park'] },
];

const formats = ['T20', 'ODI', 'Test'];
const opponents = ['India', 'Australia', 'England', 'South Africa', 'New Zealand', 'Sri Lanka', 'West Indies'];

function TeamPerformancePredictionDetails() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState(players);
  const [country, setCountry] = useState('');
  const [stadium, setStadium] = useState('');
  const [format, setFormat] = useState('');
  const [opponent, setOpponent] = useState('');
  const [showCharts, setShowCharts] = useState(false);
  const [impactPlayer, setImpactPlayer] = useState(null);

  const handlePlayerSelect = (e) => {
    const selectedPlayerName = e.target.value;
    const selectedPlayer = availablePlayers.find(player => player.name === selectedPlayerName);
    if (selectedPlayer && !selectedPlayers.includes(selectedPlayer)) {
      if (selectedPlayers.length < 12) {
        setSelectedPlayers([...selectedPlayers, selectedPlayer]);
        setAvailablePlayers(availablePlayers.filter(player => player.name !== selectedPlayerName));
      } else {
        toast.error('You can only select 12 players.');
      }
    }
  };

  const handleRemovePlayer = (playerToRemove) => {
    setSelectedPlayers(selectedPlayers.filter(player => player.name !== playerToRemove.name));
    setAvailablePlayers([...availablePlayers, playerToRemove]);
  };

  const viewPrediction = () => {
    if (selectedPlayers.length < 11) {
      toast.error('Please select 11 players before viewing prediction.');
      return;
    }
    if (!country) {
      toast.error('Please select a country.');
      return;
    }
    if (!stadium) {
      toast.error('Please select a stadium.');
      return;
    }
    if (!format) {
      toast.error('Please select a format.');
      return;
    }
    if (!opponent) {
      toast.error('Please select an opponent.');
      return;
    }

    setShowCharts(true);
    setImpactPlayer(selectedPlayers[Math.floor(Math.random() * selectedPlayers.length)]);
    toast.success('Prediction displayed successfully!');
  };

  const data = {
    labels: selectedPlayers.map(player => player.name),
    datasets: [
      {
        label: 'Winning Probability',
        data: selectedPlayers.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Total Score',
        data: selectedPlayers.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'Performance',
        data: selectedPlayers.map(() => Math.floor(Math.random() * 100)),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  const filteredStadiums = country ? countries.find(c => c.name === country).stadiums : [];

  return (
    <div className="flex justify-center items-center ">
      <div className="container mx-auto p-6">
        <ToastContainer />
        <h1 className="text-3xl font-bold mb-6 text-center">Select 11 Players</h1>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Country Selection */}
            <div>
              <label className="block text-lg font-medium">Select Country:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-900"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setStadium('');
                }}
              >
                <option value="">Select country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.name}>{country.name}</option>
                ))}
              </select>
            </div>

            {/* Stadium Selection */}
            <div>
              <label className="block text-lg font-medium">Select Stadium:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-900"
                value={stadium}
                onChange={(e) => setStadium(e.target.value)}
                disabled={!country}
              >
                <option value="">Select stadium</option>
                {filteredStadiums.map((stadium, index) => (
                  <option key={index} value={stadium}>{stadium}</option>
                ))}
              </select>
            </div>

            {/* Format Selection */}
            <div>
              <label className="block text-lg font-medium">Select Format:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-900"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value="">Select format</option>
                {formats.map((format, index) => (
                  <option key={index} value={format}>{format}</option>
                ))}
              </select>
            </div>

            {/* Opponent Selection */}
            <div>
              <label className="block text-lg font-medium">Select Opponent:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-900"
                value={opponent}
                onChange={(e) => setOpponent(e.target.value)}
              >
                <option value="">Select opponent</option>
                {opponents.map((opponent, index) => (
                  <option key={index} value={opponent}>{opponent}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Player Selection  Option*/}
          <div>
            <label className="block text-lg font-medium">Select Players:</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-900"
              onChange={handlePlayerSelect}
              disabled={selectedPlayers.length >= 11}
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

          {/* View Prediction Button */}
          {selectedPlayers.length === 11 && (
            <div className="text-center mt-6">
              <button
                className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 text-white font-semibold rounded-lg"
                onClick={viewPrediction}
              >
                View Prediction
              </button>
            </div>
          )}

          {/* Charts and Impact Player */}
          {showCharts && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Prediction:</h2>
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

export default TeamPerformancePredictionDetails;
