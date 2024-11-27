import React from 'react';

const playerStats = {
  bowling: {
    title: "Bowling",
    stats: [
      {
        format: "Tests",
        mat: 50,
        inns: 90,
        balls: 12000,
        runs: 9500,
        wkts: 250,
        bbi: "7/55",
        bbm: "12/125",
        ave: 25.2,
        econ: 2.9,
        sr: 52.0,
        fourW: 18,
        fiveW: 15,
        tenW: 3,
      },
      {
        format: "ODIs",
        mat: 120,
        inns: 118,
        balls: 6000,
        runs: 4800,
        wkts: 180,
        bbi: "6/35",
        bbm: "-",
        ave: 26.7,
        econ: 4.8,
        sr: 33.3,
        fourW: 10,
        fiveW: 3,
        tenW: 0,
      },
      {
        format: "T20Is",
        mat: 60,
        inns: 58,
        balls: 1400,
        runs: 1100,
        wkts: 75,
        bbi: "5/18",
        bbm: "-",
        ave: 22.0,
        econ: 7.0,
        sr: 18.7,
        fourW: 5,
        fiveW: 2,
        tenW: 0,
      }
    ]
  },
  batting: {
    title: "Batting & Fielding",
    stats: [
      {
        format: "Tests",
        mat: 50,
        inns: 85,
        no: 10,
        runs: 3200,
        hs: 165,
        ave: 42.7,
        bf: 8000,
        sr: 40.0,
        hundreds: 8,
        fifties: 20,
        fours: 400,
        sixes: 30,
        ct: 40,
      },
      {
        format: "ODIs",
        mat: 120,
        inns: 115,
        no: 15,
        runs: 4500,
        hs: 140,
        ave: 45.0,
        bf: 5000,
        sr: 90.0,
        hundreds: 12,
        fifties: 30,
        fours: 400,
        sixes: 80,
        ct: 60,
      },
      {
        format: "T20Is",
        mat: 60,
        inns: 58,
        no: 5,
        runs: 1500,
        hs: 95,
        ave: 26.3,
        bf: 1000,
        sr: 150.0,
        hundreds: 0,
        fifties: 10,
        fours: 150,
        sixes: 60,
        ct: 25,
      }
    ]
  }
};


const PlayerCareerStats = () => {
  return (
    <div className="max-w-6xl mx-auto rounded overflow-hidden shadow-inner text-white p-8 mt-8  ">
      <div className='bg-[#00A09A] p-2 rounded-xl'>
        <h2 className="text-2xl font-bold flex items-center justify-center">Shaheen Shah Afridi Career Stats</h2>
      </div>

      {Object.values(playerStats).map((section) => (
        <div key={section.title} className="mb-8 dark:text-white  dark:bg-gray-900 text-black ">
          <h3 className="text-xl font-bold mb-4 dark:text-white  dark:bg-gray-900 ">{section.title}</h3>
          <div className="overflow-x-auto ">
            <table className="min-w-full dark:text-white  dark:bg-gray-900 text-black rounded-md ">
              <thead>
                <tr >
                  {Object.keys(section.stats[0]).map((key) => (
                    <th key={key} className="px-4 py-2 text-left dark:text-white   dark:bg-gray-900 ">{key.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.stats.map((stat, index) => (
                  <tr key={index} className="text-center ">
                    {Object.values(stat).map((value, idx) => (
                      <td key={idx} className="px-4 py-2 border">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerCareerStats;
