import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'tailwindcss/tailwind.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Chart.register(...registerables);

const teams = [
  'Australia', 'Bangladesh', 'England', 'India', 'New Zealand', 'Pakistan', 'South Africa',
  'Sri Lanka', 'West Indies', 'Afghanistan', 'Ireland', 'Netherlands', 'Scotland',
  'United Arab Emirates', 'Zimbabwe',
];

const AnalysisDetails = () => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [showCharts, setShowCharts] = useState(false);

  // Generate random data for each month (12 months)
  const generateRandomData = (min, max, count) =>
    Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);

  // Data sets for different formats and tournaments
  const dataSets = {
    overall: generateRandomData(50, 100, 12), // Data for 12 months
    t20: generateRandomData(100, 180, 12), // Data for 12 months
    test: generateRandomData(200, 500, 12), // Data for 12 months
    odi: generateRandomData(200, 300, 12), // Data for 12 months
    t20WorldCup: generateRandomData(120, 180, 12), // Data for 12 months
    odiWorldCup: generateRandomData(220, 350, 12), // Data for 12 months
    testChampionship: generateRandomData(400, 700, 12), // Data for 12 months
  };

  // Chart data function for dynamically rendering charts
  const chartData = (label, data) => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label,
        data,
        backgroundColor: [
          'rgba(75, 192, 192, 0.4)', 'rgba(153, 102, 255, 0.4)', 'rgba(255, 159, 64, 0.4)',
          'rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(201, 203, 207, 0.4)',
          'rgba(255, 206, 86, 0.4)', 'rgba(75, 192, 192, 0.4)', 'rgba(153, 102, 255, 0.4)',
          'rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(201, 203, 207, 0.4)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(201, 203, 207, 1)',
          'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(201, 203, 207, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  // Handle team selection change
  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
    setShowCharts(true);
    toast.success(`You have selected ${event.target.value}`);
  };

  return (
    <div className="p-5">
      <div className="mb-5 max-w-sm m-auto">
        <label htmlFor="team-select" className="block text-lg font-medium dark:bg-gray-900 dark:text-white">
          Select a Team
        </label>
        <select
          id="team-select"
          className="dark:bg-gray-900 dark:text-white mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full"
          value={selectedTeam}
          onChange={handleTeamChange}
        >
          <option value="" disabled>
            Select a team
          </option>
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>

      {showCharts && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {/* Overall Performance Chart */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">Overall</h2>
            <div className="chart-wrapper">
              <Bar data={chartData('Overall Performance', dataSets.overall)} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          {/* T20 Performance Chart */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">T20</h2>
            <div className="chart-wrapper">
              <Line data={chartData('T20 Performance', dataSets.t20)} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Test Performance Chart */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">Test</h2>
            <div className="chart-wrapper">
              <Pie data={chartData('Test Performance', dataSets.test)} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          {/* ODI Performance Chart */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">ODI</h2>
            <div className="chart-wrapper">
              <Bar data={chartData('ODI Performance', dataSets.odi)} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          {/* ICC T20 World Cup Performance Chart */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">ICC T20 World Cup</h2>
            <div className="chart-wrapper">
              <Line
                data={chartData('T20 World Cup Performance', dataSets.t20WorldCup)}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>

          {/* ICC ODI World Cup Performance Chart */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">ICC ODI World Cup</h2>
            <div className="chart-wrapper">
              <Pie
                data={chartData('ODI World Cup Performance', dataSets.odiWorldCup)}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>

          {/* ICC Test Championship Performance Chart */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">ICC Test Championship</h2>
            <div className="chart-wrapper">
              <Bar
                data={chartData('Test Championship Performance', dataSets.testChampionship)}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>
      )}

      <ToastContainer />

      <style jsx>{`
        .chart-wrapper {
          width: 100%;
          height: 300px; /* Fixed height for all charts */
        }
      `}</style>
    </div>
  );
};

export default AnalysisDetails;
