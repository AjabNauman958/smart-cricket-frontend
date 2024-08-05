import React, { useState } from 'react';
import ShowPerformanceGraph from './ShowPerformanceGraph';
import '../css/ShowPerformance.css';

// Dummy data
const teams = [
  'India', 'Australia', 'England', 'New Zealand', 'South Africa',
  'Pakistan', 'Sri Lanka', 'West Indies', 'Bangladesh', 'Afghanistan',
  'Ireland', 'Zimbabwe', 'Netherlands', 'Scotland', 'Nepal', 'UAE'
];

const formats = ['Test', 'ODI', 'T20'];

const grounds = {
  India: ['Wankhede Stadium', 'Eden Gardens', 'Chinnaswamy Stadium', 'M. A. Chidambaram Stadium', 'Feroz Shah Kotla'],
  Australia: ['Melbourne Cricket Ground', 'Sydney Cricket Ground', 'Adelaide Oval', 'Brisbane Cricket Ground', 'Perth Stadium'],
  England: ['Lords', 'The Oval', 'Edgbaston', 'Old Trafford', 'Trent Bridge'],
  NewZealand: ['Eden Park', 'Hagley Oval', 'Basin Reserve', 'Seddon Park', 'University Oval'],
  SouthAfrica: ['Newlands', 'Wanderers Stadium', 'Kingsmead', 'SuperSport Park', 'St George\'s Park'],
  Pakistan: ['Gaddafi Stadium', 'National Stadium', 'Rawalpindi Cricket Stadium', 'Multan Cricket Stadium', 'Qaddafi Stadium'],
  SriLanka: ['R. Premadasa Stadium', 'Pallekele International Cricket Stadium', 'Galle International Stadium', 'SSC', 'Dambulla'],
  WestIndies: ['Kensington Oval', 'Sabina Park', 'Queen\'s Park Oval', 'Antigua Recreation Ground', 'Beausejour Stadium'],
  Bangladesh: ['Sher-e-Bangla National Stadium', 'Chittagong Stadium', 'Sylhet International Cricket Stadium', 'Fatullah', 'Mymensingh Stadium'],
  Afghanistan: ['Kabul International Stadium', 'Kandahar International Cricket Stadium', 'Jalalabad', 'Herat Stadium', 'Balkh Stadium'],
  Ireland: ['Malahide Cricket Club Ground', 'Stormont', 'Clontarf Cricket Club Ground', 'Bready', 'Cork County Cricket Club'],
  Zimbabwe: ['Harare Sports Club', 'Queens Sports Club', 'Bulawayo Athletic Club', 'Kwekwe Sports Club', 'Mutare Sports Club'],
  Netherlands: ['VRA Ground', 'Hazelaarweg', 'Sportpark Westvliet', 'Maarschalkerweerd', 'Deventer'],
  Scotland: ['Grange Cricket Club Ground', 'Titwood', 'Mannofield Park', 'New Cambusdoon', 'The Grange'],
  Nepal: ['Tribhuvan University International Cricket Ground', 'Pokhara Stadium', 'APF Ground', 'Mulpani Cricket Ground', 'Pulchowk Engineering Ground'],
  UAE: ['Dubai International Cricket Stadium', 'Sharjah Cricket Stadium', 'Zayed Cricket Stadium', 'Al Ain', 'Ajman']
};

const players = {
  Pakistan: ['Babar Azam', 'Shaheen Afridi', 'Mohammad Rizwan', 'Fakhar Zaman', 'Shadab Khan', 'Haris Rauf', 'Hasan Ali', 'Imam-ul-Haq', 'Asif Ali', 'Mohammad Nawaz', 'Mohammad Hafeez', 'Shoaib Malik', 'Sarfaraz Ahmed', 'Mohammad Wasim', 'Usman Qadir']
};

const PredictionForm = () => {
  const [team1, setTeam1] = useState('');
  const [format, setFormat] = useState('');
  const [country, setCountry] = useState('');
  const [ground, setGround] = useState('');
  const [player, setPlayer] = useState('');
  const [showGraph, setShowGraph] = useState(false);

  const handlePredictClick = () => {
    // Logic to handle prediction
    setShowGraph(true); // Show the performance graph
  };
  
  const isButtonDisabled = !(team1 && format && country && ground && player);

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg dark:bg-gray-900 dark:text-white mt-10 justify-center items-center">
      <div className="space-y-6 text-center">
        <div className='flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-4'>

          {/* Opponent Team Select */}
          <div className="flex flex-col w-full md:flex-row md:items-center md:w-auto md:gap-2">
            <label htmlFor="team1" className="text-lg font-medium md:w-auto">Opponent Team:</label>
            <select
              id="team1"
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
              className="dark:bg-gray-900 dark:text-white w-full md:w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a team</option>
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>

          {/* Format Select */}
          <div className="flex flex-col w-full md:flex-row md:items-center md:w-auto md:gap-2">
            <label htmlFor="format" className="text-lg font-medium md:w-auto">Select Format:</label>
            <select
              id="format"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="dark:bg-gray-900 dark:text-white w-full md:w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a format</option>
              {formats.map((fmt) => (
                <option key={fmt} value={fmt}>
                  {fmt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-4'>

          {/* Country Select */}
          <div className="flex flex-col w-full md:flex-row md:items-center md:w-auto md:gap-2">
            <label htmlFor="country" className="text-lg font-medium dark:text-white md:w-auto">Select Country:</label>
            <select
              id="country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                setGround('');
                setPlayer('');
              }}
              className="dark:bg-gray-900 dark:text-white w-full md:w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a country</option>
              {Object.keys(grounds).map((cntry) => (
                <option key={cntry} value={cntry}>
                  {cntry}
                </option>
              ))}
            </select>
          </div>

          {/* Ground Select */}
          <div className="flex flex-col w-full md:flex-row md:items-center md:w-auto md:gap-2">
            <label htmlFor="ground" className="text-lg font-medium md:w-auto">Select Ground:</label>
            <select
              id="ground"
              value={ground}
              onChange={(e) => setGround(e.target.value)}
              className="dark:bg-gray-900 dark:text-white w-full md:w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={!country}
            >
              <option value="">Select a ground</option>
              {grounds[country]?.map((gnd) => (
                <option key={gnd} value={gnd}>
                  {gnd}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Player Select */}
        <div className="flex flex-col w-full md:flex-row md:items-center md:w-auto md:gap-2 justify-center items-center">
          <label htmlFor="player" className="text-lg font-medium md:w-auto">Select Player:</label>
          <select
            id="player"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
            className="dark:bg-gray-900 dark:text-white w-full md:w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a player</option>
            {players.Pakistan.map((plyr) => (
              <option key={plyr} value={plyr}>
                {plyr}
              </option>
            ))}
          </select>
        </div>

        {/* Predict Button */}
        <button
          type="button"
          onClick={handlePredictClick}
          className={`w-32 mr-auto ml-auto py-3 px-5 ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00A09A] hover:bg-[#2dada9]'} text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          disabled={isButtonDisabled}
        >
          Predict
        </button>
      </div>

      {showGraph && (
        <div className="mt-6">
          <ShowPerformanceGraph player={player} />
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
