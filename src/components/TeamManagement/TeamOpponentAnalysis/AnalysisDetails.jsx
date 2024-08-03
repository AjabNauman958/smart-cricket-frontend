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
  'United Arab Emirates', 'Zimbabwe'
];

const AnalysisDetails = () => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [showCharts, setShowCharts] = useState(false);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Performance',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
    setShowCharts(true);
    toast.success(`You have selected ${event.target.value}`);
  };

  return (
    <div className="p-5">
      <div className="mb-5 max-w-sm m-auto">
        <label htmlFor="team-select" className="block text-lg font-medium dark:bg-gray-900 dark:text-white">Select a Team</label>
        <select
          id="team-select"
          className="dark:bg-gray-900 dark:text-white mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full"
          value={selectedTeam}
          onChange={handleTeamChange}
        >
          <option value="" disabled>Select a team</option>
          {teams.map((team) => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>
      </div>

      {showCharts && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">Overall</h2>
            <div className="chart-wrapper">
              <Bar data={data} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">T20</h2>
            <div className="chart-wrapper">
              <Line data={data} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">Test</h2>
            <div className="chart-wrapper">
              <Pie data={data} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">ODI</h2>
            <div className="chart-wrapper">
              <Bar data={data} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">ICC T20 World Cup</h2>
            <div className="chart-wrapper">
              <Line data={data} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">ICC ODI World Cup</h2>
            <div className="chart-wrapper">
              <Pie data={data} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">ICC Test Championship</h2>
            <div className="chart-wrapper">
              <Bar data={data} options={{ maintainAspectRatio: false }} />
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
