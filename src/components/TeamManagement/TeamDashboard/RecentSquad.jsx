import React, { useState } from 'react';
import babar from '../../images/babar.png';

const playersData = {
  test: [
    { name: 'Babar Azam (c)', role: 'Top order batsman', age: '26y 256d', batting: 'Right Arm Batsman', bowling: 'Right arm off break', image: babar },
    { name: 'Abdullah Shafique', role: 'Opening batsman', age: '21y 45d', batting: 'Right Hand Batsman', bowling: 'Right arm off break', image: babar },
    { name: 'Azhar Ali', role: 'Top order batsman', age: '35y 100d', batting: 'Right Hand Batsman', bowling: 'Right arm leg break', image: babar },
    { name: 'Fawad Alam', role: 'Middle order batsman', age: '34y 150d', batting: 'Left Hand Batsman', bowling: 'Slow left arm orthodox', image: babar },
    { name: 'Mohammad Rizwan (wk)', role: 'Wicketkeeper batsman', age: '28y 200d', batting: 'Right Hand Batsman', bowling: 'N/A', image: babar },
    { name: 'Faheem Ashraf', role: 'Allrounder', age: '27y 180d', batting: 'Right Hand Batsman', bowling: 'Right arm fast-medium', image: babar },
    { name: 'Shaheen Afridi', role: 'Bowler', age: '20y 320d', batting: 'Left Hand Batsman', bowling: 'Left arm fast', image: babar },
    { name: 'Hasan Ali', role: 'Bowler', age: '26y 90d', batting: 'Right Hand Batsman', bowling: 'Right arm fast-medium', image: babar },
    { name: 'Yasir Shah', role: 'Bowler', age: '34y 45d', batting: 'Right Hand Batsman', bowling: 'Right arm leg break', image: babar },
    { name: 'Nauman Ali', role: 'Bowler', age: '33y 330d', batting: 'Left Hand Batsman', bowling: 'Slow left arm orthodox', image: babar },
    { name: 'Imran Butt', role: 'Opening batsman', age: '24y 210d', batting: 'Right Hand Batsman', bowling: 'N/A', image: babar },
    { name: 'Sajid Khan', role: 'Bowler', age: '27y 55d', batting: 'Right Hand Batsman', bowling: 'Right arm off break', image: babar },
    { name: 'Shan Masood', role: 'Opening batsman', age: '30y 300d', batting: 'Left Hand Batsman', bowling: 'Right arm medium', image: babar },
    { name: 'Usman Salahuddin', role: 'Middle order batsman', age: '30y 90d', batting: 'Right Hand Batsman', bowling: 'Right arm off break', image: babar },
    { name: 'Tabish Khan', role: 'Bowler', age: '36y 200d', batting: 'Right Hand Batsman', bowling: 'Right arm fast-medium', image: babar },
  ],
  odi: [
    { name: 'Babar Azam (c)', role: 'Top order batsman', age: '26y 256d', batting: 'Right Arm Batsman', bowling: 'Right arm off break', image: babar },
    { name: 'Fakhar Zaman', role: 'Opening batsman', age: '30y 200d', batting: 'Left Hand Batsman', bowling: 'Slow left arm orthodox', image: babar },
    { name: 'Imam-ul-Haq', role: 'Opening batsman', age: '25y 120d', batting: 'Left Hand Batsman', bowling: 'N/A', image: babar },
    { name: 'Mohammad Hafeez', role: 'Allrounder', age: '39y 250d', batting: 'Right Hand Batsman', bowling: 'Right arm off break', image: babar },
    { name: 'Mohammad Rizwan (wk)', role: 'Wicketkeeper batsman', age: '28y 200d', batting: 'Right Hand Batsman', bowling: 'N/A', image: babar },
    { name: 'Shadab Khan', role: 'Allrounder', age: '22y 180d', batting: 'Right Hand Batsman', bowling: 'Right arm leg break', image: babar },
    { name: 'Faheem Ashraf', role: 'Allrounder', age: '27y 180d', batting: 'Right Hand Batsman', bowling: 'Right arm fast-medium', image: babar },
    { name: 'Shaheen Afridi', role: 'Bowler', age: '20y 320d', batting: 'Left Hand Batsman', bowling: 'Left arm fast', image: babar },
    { name: 'Hasan Ali', role: 'Bowler', age: '26y 90d', batting: 'Right Hand Batsman', bowling: 'Right arm fast-medium', image: babar },
    { name: 'Haris Rauf', role: 'Bowler', age: '27y 60d', batting: 'Right Hand Batsman', bowling: 'Right arm fast', image: babar },
    { name: 'Imad Wasim', role: 'Allrounder', age: '31y 220d', batting: 'Left Hand Batsman', bowling: 'Slow left arm orthodox', image: babar },
    { name: 'Asif Ali', role: 'Middle order batsman', age: '29y 150d', batting: 'Right Hand Batsman', bowling: 'N/A', image: babar },
    { name: 'Khushdil Shah', role: 'Middle order batsman', age: '25y 90d', batting: 'Left Hand Batsman', bowling: 'Slow left arm orthodox', image: babar },
    { name: 'Usman Qadir', role: 'Bowler', age: '27y 110d', batting: 'Right Hand Batsman', bowling: 'Right arm leg break', image: babar },
    { name: 'Haider Ali', role: 'Middle order batsman', age: '20y 200d', batting: 'Right Hand Batsman', bowling: 'N/A', image: babar },
  ],
  t20: [
    { name: 'Babar Azam (c)', role: 'Top order batsman', age: '26y 256d', batting: 'Right Arm Batsman', bowling: 'Right arm off break', image: babar },
    { name: 'Fakhar Zaman', role: 'Opening batsman', age: '30y 200d', batting: 'Left Hand Batsman', bowling: 'Slow left arm orthodox', image: babar },
    { name: 'Mohammad Rizwan (wk)', role: 'Wicketkeeper batsman', age: '28y 200d', batting: 'Right Hand Batsman', bowling: 'N/A', image: babar },
    { name: 'Haider Ali', role: 'Middle order batsman', age: '20y 200d', batting: 'Right Hand Batsman', bowling: 'N/A', image: babar },
    { name: 'Mohammad Hafeez', role: 'Allrounder', age: '39y 250d', batting: 'Right Hand Batsman', bowling: 'Right arm off break', image: babar },
    { name: 'Shadab Khan', role: 'Allrounder', age: '22y 180d', batting: 'Right Hand Batsman', bowling: 'Right arm leg break', image: babar },
    { name: 'Imad Wasim', role: 'Allrounder', age: '31y 220d', batting: 'Left Hand Batsman', bowling: 'Slow left arm orthodox', image: babar },
    { name: 'Shaheen Afridi', role: 'Bowler', age: '20y 320d', batting: 'Left Hand Batsman', bowling: 'Left arm fast', image: babar },
    { name: 'Haris Rauf', role: 'Bowler', age: '27y 60d', batting: 'Right Hand Batsman', bowling: 'Right arm fast', image: babar },
    { name: 'Usman Qadir', role: 'Bowler', age: '27y 110d', batting: 'Right Hand Batsman', bowling: 'Right arm leg break', image: babar },
    { name: 'Asif Ali', role: 'Middle order batsman', age: '29y 150d', batting: 'Right Hand Batsman', bowling: 'N/A', image: babar },
    { name: 'Khushdil Shah', role: 'Middle order batsman', age: '25y 90d', batting: 'Left Hand Batsman', bowling: 'Slow left arm orthodox', image: babar },
    { name: 'Mohammad Nawaz', role: 'Allrounder', age: '26y 300d', batting: 'Left Hand Batsman', bowling: 'Slow left arm orthodox', image: babar },
    { name: 'Hussain Talat', role: 'Allrounder', age: '24y 150d', batting: 'Left Hand Batsman', bowling: 'Right arm medium', image: babar },
    { name: 'Sarfaraz Ahmed', role: 'Wicketkeeper batsman', age: '33y 90d', batting: 'Right Hand Batsman', bowling: 'N/A', image: babar },
  ],
};

const RecentSquad = () => {
  const [selectedFormat, setSelectedFormat] = useState('test');
  const players = playersData[selectedFormat];

  return (
    <div className="container mx-auto p-4 text-center">
      <div className="mb-6 flex justify-center space-x-4">
        <button
          className={`px-4 py-2 ${selectedFormat === 'test' ? 'bg-[#00A09A] text-white' : 'bg-gray-300'} rounded transition duration-300`}
          onClick={() => setSelectedFormat('test')}
        >
          Test
        </button>
        <button
          className={`px-4 py-2 ${selectedFormat === 'odi' ? 'bg-[#00A09A] text-white' : 'bg-gray-300'} rounded transition duration-300`}
          onClick={() => setSelectedFormat('odi')}
        >
          ODI
        </button>
        <button
          className={`px-4 py-2 ${selectedFormat === 't20' ? 'bg-[#00A09A] text-white' : 'bg-gray-300'} rounded transition duration-300`}
          onClick={() => setSelectedFormat('t20')}
        >
          T20
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6" >
        {players.map((player, index) => (
          <div
            key={index}
            className=" flex items-center bg-white border border-gray-300 rounded-lg  transform transition-transform duration-300 hover:scale-105 shadow-lg dark:bg-gray-900 dark:text-white"
          >
            <img src={player.image} alt={player.name} className="w-14 h-14 rounded-full mr-4" />
            <div className="text-left">
              <h3 className="text-md font-semibold">{player.name}</h3>
              <p className='text-sm'>{player.role}</p>
              <p className='text-sm'>Age: {player.age}</p>
              <p className='text-sm'>Batting: <strong>{player.batting}</strong></p>
              <p className='text-sm'>Bowling: <strong>{player.bowling}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSquad;
