import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChartComponent from '../TeamManagement/TeamPerformanceAnalysis/ChartComponent';
import { battingAverageData, bowlingPerformanceData, chartOptions, economyRateData, partnershipData, strikeRateData } from '../TeamManagement/TeamPerformanceAnalysis/ChartData';
import { chartData, matchData, matchScoreDetails } from "./matchData";

import { Bar } from 'react-chartjs-2';


const MatchAnalysis = () => {
  const [team, setTeam] = useState(matchScoreDetails.team_1);
  const { title, matchDate, venue, teams, result } = matchData;

  const handleTeamChange = (selectedTeam) => {
    setTeam(selectedTeam);
  };

  // Determine total score and overs based on selected team
  const totalScore = matchScoreDetails.team_1.scoreDetails.runs;
  const totalOvers = matchScoreDetails.team_1.scoreDetails.overs;
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
          <button onClick={() => handleTeamChange(matchScoreDetails.team_1)} className='bg-green-500 rounded-lg text-white py-2 px-4 mb-2 sm:mb-0'>{matchScoreDetails.team_1.name}</button>
          <button onClick={() => handleTeamChange(matchScoreDetails.team_2)} className='bg-yellow-500 rounded-lg text-white py-2 px-4'>{matchScoreDetails.team_2.name}</button>
        </div>

        <div className="team-info flex flex-col items-center sm:items-start mb-4">
          <img src={team.name} alt={`${team.name} flag`} className="team-flag w-24 h-auto mb-2 sm:w-32" />
          <h2 className="text-xl font-semibold">{matchScoreDetails.team_2.name.toUpperCase()}</h2>
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
      {/* economyRateData */}
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

      {/* partnershipdata */}
      <div className='graph grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center p-10'>
        <div className="">
          <ChartComponent data={partnershipData} options={chartOptions} title="Partnership  Comparison" />
        </div>
        <div className="">
          <div className="batting-average-content">
            <h2 className='text-3xl font-bold text-center'>Partnership Comparsion</h2>
            <p className='p-3'>
              Our analysis leverages advanced AI algorithms to provide an insightful comparison of the strike rates between both teams. The graph below illustrates the striking performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default MatchAnalysis;
