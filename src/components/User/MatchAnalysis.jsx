import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PAK from '../images/pak.png';
import IND from '../images/india.png';
import record from '../images/record.png';
import playerperformancce from '../images/playerperformancce.png';

const MatchAnalysis = () => {
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
      

  const [team, setTeam] = useState('pakistan');

  const handleTeamChange = (team) => {
    setTeam(team);
  };

  const totalScore = data[team].batsmen.reduce((total, player) => total + player.runs, 0);

  return (
    <div>
      <Navbar />

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

      {/* Scorecard */}
      <div className="scorecard">
        <div className="team-buttons">
          <button onClick={() => handleTeamChange('pakistan')} className='bg-green-500 rounded-lg'>PAK INNINGS</button>
          <button onClick={() => handleTeamChange('india')} className='bg-yellow-500 rounded-lg'>INDIA INNINGS</button>
        </div>
        <div className="team-info">
          <img src={team === 'pakistan' ? PAK : IND} alt={`${team} flag`} className="team-flag" />
          <h2>{team.toUpperCase()}</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>BATSMAN</th>
              <th>Runs</th>
              <th>Balls</th>
              <th>4S</th>
              <th>6S</th>
              <th>S/R</th>
              <th>Dismissal</th>
              <th>Fielder/Bowler</th>
            </tr>
          </thead>
          <tbody>
            {data[team].batsmen.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.runs}</td>
                <td>{player.balls}</td>
                <td>{player.fours}</td>
                <td>{player.sixes}</td>
                <td>{player.strikeRate}</td>
                <td>{player.out}</td>
                <td>{player.fielder || player.bowler}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Bowlers section */}
        <table>
          <thead>
            <tr>
              <th>BOWLER</th>
              <th>Overs</th>
              <th>Maidens</th>
              <th>Runs</th>
              <th>Wickets</th>
              <th>Economy</th>
            </tr>
          </thead>
          <tbody>
            {data[team].bowlers.map((bowler, index) => (
              <tr key={index}>
                <td>{bowler.name}</td>
                <td>{bowler.overs}</td>
                <td>{bowler.maidens}</td>
                <td>{bowler.runs}</td>
                <td>{bowler.wickets}</td>
                <td>{bowler.economy}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-score bg-green-500 p-4 rounded-lg">
          <p>Total: {totalScore} ({team === 'pakistan' ? '50 overs' : '41.2 overs'})</p>
        </div>
      </div>

      <div className='graph flex'>
          <div className="left-div">
            <p>Average on both team batting</p>
            <img src={record} alt="Graph Image" />
          </div>
          <div className="right-div">
            <div className="batting-average-content">
                <h2 className='text-3xl font-bold tex'>Batting Average</h2>
              <p>Our analysis leverages advanced AI algorithms to provide an insightful comparison of the batting averages between both teams. The graph below illustrates the batting performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
            </div>
           
          </div>
        </div>

        <div className='graph flex'>
         
          <div className="right-div">
            <div className="batting-average-content">
                <h2 className='text-3xl font-bold tex'>Batting Average</h2>
              <p>Our analysis leverages advanced AI algorithms to provide an insightful comparison of the batting averages between both teams. The graph below illustrates the batting performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
            </div>
           
          </div>
           <div className="left-div">
            <p>Average on both team batting</p>
            <img src={playerperformancce} alt="Graph Image" />
          </div>
        </div>


        <div className='graph flex'>
          <div className="left-div">
            <p>Average on both team batting</p>
            <img src={record} alt="Graph Image" />
          </div>
          <div className="right-div">
            <div className="batting-average-content">
                <h2 className='text-3xl font-bold tex'>Batting Average</h2>
              <p>Our analysis leverages advanced AI algorithms to provide an insightful comparison of the batting averages between both teams. The graph below illustrates the batting performance, highlighting key trends and differences. This data-driven approach allows fans and analysts to understand team strengths and areas for improvement at a glance. Explore our full analysis to uncover deeper insights and strategic recommendations.</p>
            </div>
           
          </div>
        </div>


      <Footer />
    </div>
  );
};

export default MatchAnalysis;
