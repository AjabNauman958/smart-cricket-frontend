import React from "react";
import { Line, Bar, Pie, Radar, Doughnut } from "react-chartjs-2";
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
  ArcElement,
  RadialLinearScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  RadialLinearScale
);

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

const AverageGraph = () => {
  const formats = playerStats.bowling.stats.map((stat) => stat.format);

  // Dynamically extract data for different metrics
  const BowlingPerformance = {
    labels: formats,
    datasets: [
      {
        label: "Bowling Average",
        data: playerStats.bowling.stats.map((stat) => stat.ave),
        borderColor: "#00A09A",
        fill: false,
        tension: 0.1,
      },
      {
        label: "Economy",
        data: playerStats.bowling.stats.map((stat) => stat.econ),
        borderColor: "#FFA500",
        fill: false,
        tension: 0.1,
      },
    ],
    plugins: {
      legend: {
        position: "top", // Ensures legend is neatly aligned
        labels: {
          boxWidth: 20, // Controls the size of legend boxes
          font: {
            size: 12, // Adjust font size for better readability
          },
        },
      },
    },
  };

  const BattingRuns = {
    labels: formats,
    datasets: [
      {
        label: "Total Runs",
        data: playerStats.batting.stats.map((stat) => stat.runs),
        backgroundColor: "#00A09A",
      },
    ],
    plugins: {
      legend: {
        position: "top", // Ensures legend is neatly aligned
        labels: {
          boxWidth: 20, // Controls the size of legend boxes
          font: {
            size: 12, // Adjust font size for better readability
          },
        },
      },
    },
  };

  const BattingMilestones = {
    labels: ["Hundreds", "Fifties"],
    datasets: [
      {
        label: "Milestones",
        data: [
          playerStats.batting.stats.reduce((sum, stat) => sum + stat.hundreds, 0),
          playerStats.batting.stats.reduce((sum, stat) => sum + stat.fifties, 0),
        ],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
    plugins: {
      legend: {
        position: "top", // Ensures legend is neatly aligned
        labels: {
          boxWidth: 20, // Controls the size of legend boxes
          font: {
            size: 12, // Adjust font size for better readability
          },
        },
      },
    },
  };

  const AllinOne = {
    labels: ["Average", "Economy", "Strike Rate"],
    datasets: formats.map((format, index) => ({
      label: format,
      data: [
        playerStats.bowling.stats[index].ave,
        playerStats.bowling.stats[index].econ,
        playerStats.bowling.stats[index].sr,
      ],
      backgroundColor: `rgba(0,160,154,${0.2 + index * 0.2})`,
      borderColor: "#00A09A",
      borderWidth: 1,
    })),
    plugins: {
      legend: {
        position: "top", // Ensures legend is neatly aligned
        labels: {
          boxWidth: 20, // Controls the size of legend boxes
          font: {
            size: 12, // Adjust font size for better readability
          },
        },
      },
    },
  };

  const MatchesPlayed = {
    labels: formats,
    datasets: [
      {
        label: "Matches Played",
        data: playerStats.bowling.stats.map((stat) => stat.mat),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },

    ],
    plugins: {
      legend: {
        position: "top", // Ensures legend is neatly aligned
        labels: {
          boxWidth: 20, // Controls the size of legend boxes
          font: {
            size: 12, // Adjust font size for better readability
          },
        },
      },
    },
  };

  return (
    <div className="p-4 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 max-w-7xl mx-auto">
      {/* Line Chart */}
      <div className="p-4 h-96 flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold mb-4">Bowling Performance</h3>
        <Line data={BowlingPerformance} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Bar Chart */}
      <div className="p-4 h-96 flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold mb-4">Batting Runs</h3>
        <Bar data={BattingRuns} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Pie Chart */}
      <div className="p-4 h-96 flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold mb-4">Batting Milestones</h3>
        <Pie data={BattingMilestones} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Radar Chart */}
      <div className="p-4 h-96 flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold mb-4">Bowling Metrics Comparison</h3>
        <Radar data={AllinOne} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      {/* Doughnut Chart */}
      <div className="p-4 h-96 flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold mb-4">Matches Distribution</h3>
        <Doughnut data={MatchesPlayed} options={{ responsive: true, maintainAspectRatio: false, }} />
      </div>
    </div>
  );
};

export default AverageGraph;
