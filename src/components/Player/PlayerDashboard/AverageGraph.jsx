import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const playerStats = {
  bowling: {
    title: "Bowling",
    stats: [
      { format: "Tests", mat: 29, inns: 50, wkts: 113, ave: 26.7, econ: 3.11, sr: 51.4 },
      { format: "ODIs", mat: 50, inns: 70, wkts: 180, ave: 25.2, econ: 4.12, sr: 42.3 },
      { format: "T20Is", mat: 60, inns: 60, wkts: 75, ave: 23.5, econ: 7.5, sr: 18.7 },
    ],
  },
  batting: {
    title: "Batting & Fielding",
    stats: [
      { format: "Tests", mat: 29, inns: 50, runs: 3019, ave: 46.4, hundreds: 10, fifties: 15 },
      { format: "ODIs", mat: 100, inns: 95, runs: 4500, ave: 50.0, hundreds: 12, fifties: 22 },
      { format: "T20Is", mat: 60, inns: 60, runs: 1500, ave: 25.0, hundreds: 1, fifties: 10 },
    ],
  },
};

const AverageGraph = () => {
  // Line chart data for Bowling
  const lineChartData = {
    labels: playerStats.bowling.stats.map((stat) => stat.format),
    datasets: [
      {
        label: "Bowling Average",
        data: playerStats.bowling.stats.map((stat) => stat.ave),
        fill: false,
        borderColor: '#00A09A',
        tension: 0.1,
      },
      {
        label: "Economy",
        data: playerStats.bowling.stats.map((stat) => stat.econ),
        fill: false,
        borderColor: '#FFA500',
        tension: 0.1,
      },
    ],
  };

  // Bar chart data for Batting
  const barChartData = {
    labels: playerStats.batting.stats.map((stat) => stat.format),
    datasets: [
      {
        label: "Total Runs",
        data: playerStats.batting.stats.map((stat) => stat.runs),
        backgroundColor: '#00A09A',
        borderColor: 'rgba(0,160,154,0.2)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 dark:text-white text-black grid gap-4 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
      {/* Left Div */}
      <div className="flex flex-col justify-center items-center md:items-start p-4">
        <h2 className="text-xl md:text-2xl xl:text-2xl font-bold mb-4 text-center md:text-left">
          Bowling Analysis
        </h2>
        <p className="text-base md:text-lg xl:text-lg text-center md:text-left">
          Analyze bowling performance across formats with metrics like average, strike rate, and economy.
        </p>
      </div>

      {/* Right Div */}
      <div className="w-full h-80 md:h-96 lg:h-[400px] xl:h-[500px] flex justify-center items-center p-4">
        <Line
          data={lineChartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'top' },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.dataset.label}: ${context.raw}`,
                },
              },
            },
          }}
        />
      </div>

      {/* Bar Chart and its description */}
      <div className="w-full h-80 md:h-96 lg:h-[400px] xl:h-[500px] flex justify-center items-center p-4">
        <Bar
          data={barChartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'top' },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.dataset.label}: ${context.raw}`,
                },
              },
            },
          }}
        />
      </div>

      <div className="flex flex-col justify-center items-center md:items-start p-4">
        <h2 className="text-xl md:text-2xl xl:text-2xl font-bold mb-4 text-center md:text-left">
          Batting Analysis
        </h2>
        <p className="text-base md:text-lg xl:text-lg text-center md:text-left">
          Evaluate batting consistency with total runs, average, and significant milestones across formats.
        </p>
      </div>
    </div>
  );
};

export default AverageGraph;
