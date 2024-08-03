import React from 'react';

const playerStats = {
  bowling: {
    title: "Bowling",
    stats: [
      {
        format: "Tests",
        mat: 29,
        inns: 50,
        balls: 5814,
        runs: 3019,
        wkts: 113,
        bbi: "6/51",
        bbm: "10/94",
        ave: 26.7,
        econ: 3.11,
        sr: 51.4,
        fourW: 12,
        fiveW: 4,
        tenW: 1,
      },
      {
        format: "ODIs",
        mat: 29,
        inns: 50,
        balls: 5814,
        runs: 3019,
        wkts: 113,
        bbi: "6/51",
        bbm: "10/94",
        ave: 26.7,
        econ: 3.11,
        sr: 51.4,
        fourW: 12,
        fiveW: 4,
        tenW: 1,
      },
      {
        format: "T20Is",
        mat: 29,
        inns: 50,
        balls: 5814,
        runs: 3019,
        wkts: 113,
        bbi: "6/51",
        bbm: "10/94",
        ave: 26.7,
        econ: 3.11,
        sr: 51.4,
        fourW: 12,
        fiveW: 4,
        tenW: 1,
      }
    ]
  },
  batting: {
    title: "Batting & Fielding",
    stats: [
      {
        format: "Tests",
        mat: 29,
        inns: 50,
        no: 5814,
        runs: 3019,
        hs: 113,
        ave: 26.7,
        bf: 10,
        sr: 51.4,
        hundreds: 12,
        fifties: 4,
        fours: 1,
        sixes: 6,
        ct: 4,
      },
      {
        format: "ODIs",
        mat: 29,
        inns: 50,
        no: 5814,
        runs: 3019,
        hs: 113,
        ave: 26.7,
        bf: 10,
        sr: 51.4,
        hundreds: 12,
        fifties: 4,
        fours: 1,
        sixes: 6,
        ct: 4,
      },
      {
        format: "T20Is",
        mat: 29,
        inns: 50,
        no: 5814,
        runs: 3019,
        hs: 113,
        ave: 26.7,
        bf: 10,
        sr: 51.4,
        hundreds: 12,
        fifties: 4,
        fours: 1,
        sixes: 6,
        ct: 4,
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
