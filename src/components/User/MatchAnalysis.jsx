import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChartComponent from '../TeamManagement/TeamPerformanceAnalysis/ChartComponent';
import { battingAverageData, bowlingPerformanceData, chartOptions, economyRateData, strikeRateData } from '../TeamManagement/TeamPerformanceAnalysis/ChartData';
import { chartData, matchData } from "./matchData";

import { Bar } from 'react-chartjs-2';


const MatchAnalysis = () => {
  const data = {
    team_1: {
      name: "Pakistan",
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
      partnershipsData: {
        pat_1: { bat1Name: "Babar Azam", bat1Runs: 60, bat2Name: "Fakhar Zaman", bat2Runs: 30, totalRuns: 90, totalBalls: 75 },
        pat_2: { bat1Name: "Rizwan", bat1Runs: 45, bat2Name: "Shoaib Malik", bat2Runs: 25, totalRuns: 70, totalBalls: 50 }
      },
      wicketsData: {
        wkt_1: { "batName": "Simi Singh", "wktNbr": 1, "wktOver": 16.5, "wktRuns": 128 },
        wkt_2: { "batName": "Balbirnie", "wktNbr": 2, "wktOver": 1.6, "wktRuns": 20 }
      },
      scoreDetails: {
        overs: 50,
        runRate: 6.80,
        runs: 340,
        wickets: 8
      }
    },
    team_2: {
      name: "India",
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
      partnershipsData: {
        pat_1: { bat1Name: "Virat Kohli", bat1Runs: 50, bat2Name: "Rohit Sharma", bat2Runs: 40, totalRuns: 90, totalBalls: 70 },
        pat_2: { bat1Name: "Dhawan", bat1Runs: 25, bat2Name: "KL Rahul", bat2Runs: 30, totalRuns: 55, totalBalls: 45 }
      },
      wicketsData: {
        wkt_1: { "batName": "Simi Singh", "wktNbr": 1, "wktOver": 16.5, "wktRuns": 128 },
        wkt_2: { "batName": "Balbirnie", "wktNbr": 2, "wktOver": 1.6, "wktRuns": 20 }
      },
      scoreDetails: {
        overs: 37.3,
        runRate: 4.80,
        runs: 158,
        wickets: 10
      }
    },
  };


  const [team, setTeam] = useState(data.team_1);
  const { title, matchDate, venue, teams, result } = matchData;

  const handleTeamChange = (selectedTeam) => {
    setTeam(selectedTeam);
  };

  // Determine total score and overs based on selected team
  const totalScore = data.team_1.scoreDetails.runs;
  const totalOvers = data.team_1.scoreDetails.overs;
  return (
    <div>
      <Navbar />

      {/* Match analysis details */}
      <div>
        <h1 className='text-4xl font-semibold text-center mt-20'>
          Match<span className='text-yellow-500'> Analysis</span>
        </h1>
        <div className="match-analysis">
          <div className="match-date">
            <h3>{matchDate}</h3>
          </div>
          <div className="match-details">
            <h1>{title}</h1>
          </div>
          <div className="ground">
            <p>{venue}</p>
          </div>
          <div className="teams">
            <div className="team">
              <img src={teams[0].flag}
                alt={`${teams[0].name} Flag`} className="team-flag" />
              <h1>{teams[0].name}</h1>
              <p className="team-score">{teams[0].score}</p>
            </div>
            <div className="match-result">
              <p>{result}</p>
            </div>
            <div className="team">
              <img src={teams[1].flag}
                alt={`${teams[1].name} Flag`} className="team-flag" />
              <h1>{teams[1].name}</h1>
              <p className="team-score">{teams[1].score}</p>
            </div>
          </div>
        </div>
      </div>


      <div className="scorecard p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="team-buttons flex flex-col sm:flex-row sm:justify-between mb-4">
          <button onClick={() => handleTeamChange(data.team_1)} className='bg-green-500 rounded-lg text-white py-2 px-4 mb-2 sm:mb-0'>{data.team_1.name}</button>
          <button onClick={() => handleTeamChange(data.team_2)} className='bg-yellow-500 rounded-lg text-white py-2 px-4'>{data.team_2.name}</button>
        </div>

        <div className="team-info flex flex-col items-center sm:items-start mb-4">
          <img src={team.name} alt={`${team.name} flag`} className="team-flag w-24 h-auto mb-2 sm:w-32" />
          <h2 className="text-xl font-semibold">{data.team_2.name.toUpperCase()}</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BATSMAN</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Runs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balls</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">4S</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">6S</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S/R</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dismissal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fielder/Bowler</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {team.batsmen.map((player, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{player.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.runs}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.balls}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.fours}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.sixes}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.strikeRate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.out}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.fielder || player.bowler}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BOWLER</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Maidens</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Runs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wickets</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Economy</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {team.bowlers.map((bowler, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bowler.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bowler.overs}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bowler.maidens}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bowler.runs}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bowler.wickets}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bowler.economy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="total-score bg-green-500 p-4 rounded-lg text-white mt-4">
          <p className="text-sm md:text-base">{`Total: ${totalScore} (${totalOvers})`} </p>
        </div>
      </div>

      <div className='graph grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center p-10 '>

        <div className="p-10">
          <h2 className='text-3xl font-bold text-center '>Total Score</h2>

          <div className="batting-average-content" >
            <p className='text-justify'>Our analysis leverages advanced AI algorithms to provide an insightful comparison of the batting averages between both teams. The graph below illustrates the batting performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
          </div>
        </div>
        <div className="">
          <p className='text-center font-semibold'>Average on both team batting</p>
          <div>

            <Bar data={chartData} options={chartOptions} />
          </div>          </div>
      </div>


      <div className='graph grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center p-10'>
        <div className="">
          <ChartComponent data={battingAverageData} options={chartOptions} title="Batting Performance Comparison"
          />
        </div>
        <div className="">
          <div className="batting-average-content">
            <h2 className='text-3xl font-bold text-center'>Batting Average</h2>
            <p className='p-3'>Our analysis leverages advanced AI algorithms to provide an insightful comparison of the batting averages between both teams. The graph below illustrates the batting performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
          </div>
        </div>
      </div>

      <div className='graph grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center p-10'>
        <div className="">
          <div className="batting-average-content">
            <h2 className='text-3xl font-bold text-center'>Bowling Performance</h2>
            <p className='p-3'>Our analysis leverages advanced AI algorithms to provide an insightful comparison of the batting averages between both teams. The graph below illustrates the batting performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
          </div>
        </div>
        <div className="">
          <ChartComponent data={bowlingPerformanceData} options={chartOptions} title="Bowling Performance Comparison" />

        </div>
      </div>

      {/* StrikeRate */}

      <div className='graph grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center p-10'>
        <div className="">
          <ChartComponent data={strikeRateData} options={chartOptions} title="Strike Rate Comparison" />
        </div>
        <div className="">
          <div className="batting-average-content">
            <h2 className='text-3xl font-bold text-center'>StrikeRate Comparsion</h2>
            <p className='p-3'>
              Our analysis leverages advanced AI algorithms to provide an insightful comparison of the strike rates between both teams. The graph below illustrates the striking performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
          </div>
        </div>
      </div>

      <div className='graph grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center p-10'>
        <div className="">
          <div className="batting-average-content">
            <h2 className='text-3xl font-bold text-center'>Bowler's Economy Comparison</h2>
            <p className='p-3'>
              Our analysis leverages advanced AI algorithms to provide an insightful comparison of the bowlers' economies between both teams. The graph below illustrates the bowling performance, highlighting key trends and differences in economy rates. This data-driven approach allows fans and analysts to understand the effectiveness and consistency of bowlers at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
          </div>
        </div>
        <div className="">
          <ChartComponent data={economyRateData} options={chartOptions} title="Bowling Performance Comparison" />


        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MatchAnalysis;
