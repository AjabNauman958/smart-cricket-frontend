import React, { useState } from 'react';

import SA from '../../images/SA.png';
import PAK from '../../images/pak.png';
import IND from '../../images/india.png';
import ChartComponent from './ChartComponent';

import { battingAverageData, chartOptions, bowlingPerformanceData, economyRateData, partnershipData, strikeRateData, } from './ChartData';

const TeamPerformanceAnalysisDetails = () => {
  const data = {
    pakistan: {
      batsmen: [
        { name: 'Babar Azam', runs: 112, balls: 85, fours: 11, sixes: 2, strikeRate: 131.76, out: 'not out' },
        { name: 'Fakhar Zaman', runs: 75, balls: 58, fours: 7, sixes: 1, strikeRate: 129.31, out: 'bowled', bowler: 'Bumrah' },
        { name: 'Imam-ul-Haq', runs: 34, balls: 47, fours: 3, sixes: 0, strikeRate: 72.34, out: 'run out', fielder: 'Jadeja' },
        { name: 'Mohammad Rizwan', runs: 45, balls: 38, fours: 4, sixes: 0, strikeRate: 118.42, out: 'lbw', bowler: 'Shami' },
        { name: 'Shoaib Malik', runs: 22, balls: 20, fours: 2, sixes: 0, strikeRate: 110.00, out: 'caught', fielder: 'Dhawan' },
        { name: 'Imad Wasim', runs: 15, balls: 12, fours: 1, sixes: 0, strikeRate: 125.00, out: 'not out' },
        { name: 'Shadab Khan', runs: 8, balls: 10, fours: 0, sixes: 0, strikeRate: 80.00, out: 'bowled', bowler: 'Bumrah' },
        { name: 'Hasan Ali', runs: 5, balls: 6, fours: 0, sixes: 0, strikeRate: 83.33, out: 'lbw', bowler: 'Shami' },
        { name: 'Shaheen Afridi', runs: 3, balls: 4, fours: 0, sixes: 0, strikeRate: 75.00, out: 'run out', fielder: 'Jadeja' },
        { name: 'Mohammad Amir', runs: 2, balls: 3, fours: 0, sixes: 0, strikeRate: 66.67, out: 'caught', fielder: 'Dhawan' },
        { name: 'Junaid Khan', runs: 1, balls: 2, fours: 0, sixes: 0, strikeRate: 50.00, out: 'not out' },
      ],
      bowlers: [
        { name: 'Shaheen Afridi', overs: 10, maidens: 2, runs: 45, wickets: 2, economy: 4.50 },
        { name: 'Mohammad Amir', overs: 8, maidens: 0, runs: 35, wickets: 1, economy: 4.38 },
        { name: 'Shadab Khan', overs: 6, maidens: 0, runs: 25, wickets: 0, economy: 4.17 },
        { name: 'Hasan Ali', overs: 7, maidens: 0, runs: 32, wickets: 1, economy: 4.57 },
        { name: 'Imad Wasim', overs: 5, maidens: 0, runs: 20, wickets: 0, economy: 4.00 },
        { name: 'Shoaib Malik', overs: 2, maidens: 0, runs: 12, wickets: 0, economy: 6.00 },
      ],
    },
    india: {
      batsmen: [
        { name: 'Virat Kohli', runs: 45, balls: 40, fours: 5, sixes: 1, strikeRate: 112.50, out: 'caught', fielder: 'Rizwan', bowler: 'Shaheen' },
        { name: 'Rohit Sharma', runs: 30, balls: 27, fours: 4, sixes: 1, strikeRate: 111.11, out: 'run out', fielder: 'Rizwan' },
        { name: 'Shikhar Dhawan', runs: 25, balls: 35, fours: 2, sixes: 0, strikeRate: 71.43, out: 'bowled', bowler: 'Rauf' },
        { name: 'KL Rahul', runs: 40, balls: 45, fours: 3, sixes: 1, strikeRate: 88.89, out: 'lbw', bowler: 'Rauf' },
        { name: 'Rishabh Pant', runs: 10, balls: 12, fours: 1, sixes: 0, strikeRate: 83.33, out: 'not out' },
        { name: 'Hardik Pandya', runs: 18, balls: 15, fours: 2, sixes: 0, strikeRate: 120.00, out: 'caught', fielder: 'Shadab' },
        { name: 'Ravindra Jadeja', runs: 9, balls: 8, fours: 1, sixes: 0, strikeRate: 112.50, out: 'lbw', bowler: 'Shadab' },
        { name: 'Bhuvneshwar Kumar', runs: 4, balls: 5, fours: 0, sixes: 0, strikeRate: 80.00, out: 'caught', fielder: 'Shadab' },
        { name: 'Jasprit Bumrah', runs: 3, balls: 4, fours: 0, sixes: 0, strikeRate: 75.00, out: 'not out' },
        { name: 'Mohammed Shami', runs: 2, balls: 3, fours: 0, sixes: 0, strikeRate: 66.67, out: 'caught', fielder: 'Hasan' },
        { name: 'Kuldeep Yadav', runs: 1, balls: 2, fours: 0, sixes: 0, strikeRate: 50.00, out: 'not out' },
      ],
      bowlers: [
        { name: 'Jasprit Bumrah', overs: 10, maidens: 1, runs: 55, wickets: 3, economy: 5.50 },
        { name: 'Mohammed Shami', overs: 9, maidens: 0, runs: 42, wickets: 1, economy: 4.67 },
        { name: 'Deepak Chahar', overs: 7, maidens: 0, runs: 32, wickets: 1, economy: 4.57 },
        { name: 'Bhuvneshwar Kumar', overs: 8, maidens: 0, runs: 35, wickets: 1, economy: 4.38 },
        { name: 'Kuldeep Yadav', overs: 6, maidens: 0, runs: 25, wickets: 0, economy: 4.17 },
        { name: 'Ravindra Jadeja', overs: 5, maidens: 0, runs: 20, wickets: 0, economy: 4.00 },
      ],
    },
  };
  const recentMatches = [
    {
      matchNumber: '25th Match',
      league: 'International Series',
      format: 'ODI',
      teams: [
        { name: 'South Africa', logo: SA, score: '250/8', overs: '50.0' },
        { name: 'Pakistan', logo: PAK, score: '245/9', overs: '50.0' },
      ],
      time: 'Today, 7:00 PM',
      status: 'Completed',
      result: 'South Africa won by 5 runs'
    },
    {
      matchNumber: '26th Match',
      league: 'International Series',
      format: 'ODI',
      teams: [
        { name: 'South Africa', logo: SA, score: '200/7', overs: '50.0' },
        { name: 'Pakistan', logo: PAK, score: '202/4', overs: '47.3' },
      ],
      time: 'Yesterday, 7:00 PM',
      status: 'Completed',
      result: 'Pakistan won by 6 wickets'
    },
    {
      matchNumber: '27th Match',
      league: 'International Series',
      format: 'ODI',
      teams: [
        { name: 'South Africa', logo: SA, score: '300/6', overs: '50.0' },
        { name: 'Pakistan', logo: PAK, score: '290/10', overs: '49.4' },
      ],
      time: 'Yesterday, 7:00 PM',
      status: 'Completed',
      result: 'South Africa won by 10 runs'
    },
  ];
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleMatchSelect = (matchDetails) => {
    setSelectedMatch(matchDetails);
    setShowAnalysis(false); // Reset the analysis view when a new match is selected
  };

  const handleViewAnalysisClick = () => {
    setShowAnalysis(true);
  };
  const [error, setError] = useState('');




  const [team, setTeam] = useState('pakistan');

  const handleTeamChange = (team) => {
    setTeam(team);
  };

  const totalScore = data[team].batsmen.reduce((total, player) => total + player.runs, 0);

  return (
    <div className=''>
      <div className='mt-10'>
        <h1 className='text-xl text-center'>Select a Match from the Recent Matches</h1>
      </div>
      <div className="flex mt-4" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '20px' }}>
        {recentMatches.map((matchDetails, index) => (
          <div
            key={index}
            className={`border match-card hover:border-warning dark:text-white dark:bg-gray-900 ${selectedMatch === index ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => handleMatchSelect(matchDetails)}
          >
            <div className="header">
              <h3 className='text-lg dark:text-white'>{matchDetails.matchNumber} - {matchDetails.league}, 2024</h3>
              <div className="badge">{matchDetails.format}</div>
            </div>
            <div className="teams">
              {matchDetails.teams.map((team, teamIndex) => (
                <div className="flex justify-center items-center flex-col text-center mb-2" key={teamIndex}>
                  <img src={team.logo} alt={team.name} className="w-10 h-10 mr-3 rounded-full shadow-lg" />
                  <br />
                  <span className='font-semibold'>{team.name} - {team.score} <br /> <span className='font-normal'>({team.overs} overs)</span></span>
                </div>
              ))}
            </div>
            <div className="time mb-4">{matchDetails.time}</div>
            <div className="result">
              <strong>Status: </strong>{matchDetails.status}
              <p>{matchDetails.result}</p>
            </div>
            <button className="action-button">Match Center &gt;</button>
          </div>
        ))}
      </div>
      {selectedMatch && !showAnalysis && (
        <div>
          {/* Match analysis details */}
          <div>
            <h1 className='text-4xl font-semibold text-center mt-5'>
              Match<span className='text-yellow-500'> Analysis</span>
            </h1>
            <div className="match-analysis">
              <div className="match-date">
                <h3>Tuesday, 12th March 2024, 11:00</h3>
              </div>
              <div className="match-details">
                <h1>Hong Kong, China T20 Tri-Series, 2024 - March 3</h1>
              </div>
              <div className="ground">
                <p>Tin Kwong Road Recreation Ground</p>
              </div>
              <div className="teams">
                <div className="team">
                  <img src={PAK} alt="Pakistan Flag" className="team-flag" />
                  <h1>Pakistan</h1>
                  <p className="team-score">339-5 (50)</p>
                </div>
                <div className="match-result">
                  <p>Pakistan beat India, by 180 runs</p>
                </div>
                <div className="team">
                  <img src={IND} alt="India Flag" className="team-flag" />
                  <h1>India</h1>
                  <p className="team-score">158-10 (41.2)</p>
                </div>
              </div>
            </div>

          </div>

          <div className="scorecard p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="team-buttons flex flex-col sm:flex-row sm:justify-between mb-4">
              <button onClick={() => handleTeamChange('pakistan')} className='bg-green-500 rounded-lg text-white py-2 px-4 mb-2 sm:mb-0'>PAK INNINGS</button>
              <button onClick={() => handleTeamChange('india')} className='bg-yellow-500 rounded-lg text-white py-2 px-4'>INDIA INNINGS</button>
            </div>

            <div className="team-info flex flex-col items-center sm:items-start mb-4">
              <img src={team === 'pakistan' ? PAK : IND} alt={`${team} flag`} className="team-flag w-24 h-auto mb-2 sm:w-32" />
              <h2 className="text-xl font-semibold">{team.toUpperCase()}</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                  <tr className='dark:bg-gray-900 dark:text-white '>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">BATSMAN</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">Runs</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">Balls</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">4S</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">6S</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">S/R</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">Dismissal</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">Fielder/Bowler</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data[team].batsmen.map((player, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:bg-gray-900 dark:text-white">{player.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{player.runs}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{player.balls}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{player.fours}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{player.sixes}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{player.strikeRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{player.out}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{player.fielder || player.bowler}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">BOWLER</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">Overs</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">Maidens</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">Runs</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">Wickets</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:bg-gray-900 dark:text-white">Economy</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data[team].bowlers.map((bowler, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:bg-gray-900 dark:text-white">{bowler.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{bowler.overs}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{bowler.maidens}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{bowler.runs}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{bowler.wickets}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:bg-gray-900 dark:text-white">{bowler.economy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="total-score bg-green-500 p-4 rounded-lg text-white mt-4">
              <p className="text-sm md:text-base">Total: {totalScore} ({team === 'pakistan' ? '50 overs' : '41.2 overs'})</p>
            </div>
          </div>


          <div className='graph grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center p-10'>
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden mx-auto">
              <p className='text-center'>Average on both team batting</p>
              <ChartComponent data={battingAverageData} options={chartOptions} />
            </div>
            <div className="">
              <div className="batting-average-content">
                <h2 className='text-3xl font-bold text-center mt-3'>Batting Average</h2>
                <p className='p-3'>Our analysis leverages advanced AI algorithms to provide an insightful comparison of the batting averages between both teams. The graph below illustrates the batting performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
              </div>
            </div>
          </div>

          <div className='graph grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center p-10'>
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden mx-auto">
              <div className="batting-average-content">
                <h2 className='text-3xl font-bold text-center'>Batting Average</h2>
                <p className='p-3'>Our analysis leverages advanced AI algorithms to provide an insightful comparison of the batting averages between both teams. The graph below illustrates the batting performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
              </div>
            </div>
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden mx-auto">
              <p className='text-center'>Average on both team batting</p>
              <ChartComponent data={bowlingPerformanceData} options={chartOptions} />
            </div>
          </div>

          <div className='graph grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center p-10'>
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden mx-auto">
              <p className='text-center'>Average on both team batting</p>
              <ChartComponent data={battingAverageData} options={chartOptions} />
            </div>
            <div className="">
              <div className="batting-average-content">
                <h2 className='text-3xl font-bold text-center'>Batting Average</h2>
                <p className='p-3'>Our analysis leverages advanced AI algorithms to provide an insightful comparison of the batting averages between both teams. The graph below illustrates the batting performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamPerformanceAnalysisDetails;
