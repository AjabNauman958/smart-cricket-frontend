import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "tailwindcss/tailwind.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Chart.register(...registerables);

// Teams data against Pakistan for different formats (Test, ODI, T20)
const teamsDataAgainstPakistan = {
  India: {
    Test: {
      totalMatches: 20,
      wins: 10,
      losses: 10,
      homeWins: 5,
      awayWins: 3,
      neutralWins: 2,
      homeLosses: 5,
      awayLosses: 3,
      neutralLosses: 2,
    },
    ODI: {
      totalMatches: 30,
      wins: 18,
      losses: 12,
      homeWins: 8,
      awayWins: 6,
      neutralWins: 4,
      homeLosses: 5,
      awayLosses: 3,
      neutralLosses: 4,
    },
    T20: {
      totalMatches: 15,
      wins: 8,
      losses: 7,
      homeWins: 4,
      awayWins: 2,
      neutralWins: 2,
      homeLosses: 3,
      awayLosses: 2,
      neutralLosses: 2,
    },
  },
  Australia: {
    Test: {
      totalMatches: 25,
      wins: 15,
      losses: 10,
      homeWins: 8,
      awayWins: 5,
      neutralWins: 2,
      homeLosses: 3,
      awayLosses: 5,
      neutralLosses: 2,
    },
    ODI: {
      totalMatches: 35,
      wins: 20,
      losses: 15,
      homeWins: 10,
      awayWins: 7,
      neutralWins: 3,
      homeLosses: 5,
      awayLosses: 6,
      neutralLosses: 4,
    },
    T20: {
      totalMatches: 18,
      wins: 10,
      losses: 8,
      homeWins: 6,
      awayWins: 3,
      neutralWins: 1,
      homeLosses: 2,
      awayLosses: 3,
      neutralLosses: 3,
    },
  },
  England: {
    Test: {
      totalMatches: 22,
      wins: 12,
      losses: 10,
      homeWins: 6,
      awayWins: 4,
      neutralWins: 2,
      homeLosses: 3,
      awayLosses: 4,
      neutralLosses: 3,
    },
    ODI: {
      totalMatches: 32,
      wins: 18,
      losses: 14,
      homeWins: 9,
      awayWins: 5,
      neutralWins: 4,
      homeLosses: 4,
      awayLosses: 6,
      neutralLosses: 4,
    },
    T20: {
      totalMatches: 14,
      wins: 7,
      losses: 7,
      homeWins: 3,
      awayWins: 2,
      neutralWins: 2,
      homeLosses: 2,
      awayLosses: 2,
      neutralLosses: 3,
    },
  },
  SouthAfrica: {
    Test: {
      totalMatches: 20,
      wins: 10,
      losses: 10,
      homeWins: 5,
      awayWins: 3,
      neutralWins: 2,
      homeLosses: 5,
      awayLosses: 3,
      neutralLosses: 2,
    },
    ODI: {
      totalMatches: 28,
      wins: 14,
      losses: 14,
      homeWins: 7,
      awayWins: 5,
      neutralWins: 2,
      homeLosses: 6,
      awayLosses: 5,
      neutralLosses: 3,
    },
    T20: {
      totalMatches: 12,
      wins: 6,
      losses: 6,
      homeWins: 3,
      awayWins: 2,
      neutralWins: 1,
      homeLosses: 2,
      awayLosses: 2,
      neutralLosses: 2,
    },
  },
  NewZealand: {
    Test: {
      totalMatches: 18,
      wins: 9,
      losses: 9,
      homeWins: 4,
      awayWins: 3,
      neutralWins: 2,
      homeLosses: 4,
      awayLosses: 3,
      neutralLosses: 2,
    },
    ODI: {
      totalMatches: 25,
      wins: 15,
      losses: 10,
      homeWins: 6,
      awayWins: 4,
      neutralWins: 5,
      homeLosses: 2,
      awayLosses: 3,
      neutralLosses: 3,
    },
    T20: {
      totalMatches: 10,
      wins: 6,
      losses: 4,
      homeWins: 3,
      awayWins: 2,
      neutralWins: 1,
      homeLosses: 1,
      awayLosses: 2,
      neutralLosses: 1,
    },
  },
};


const chartData = (label, labels, data) => ({
  labels,
  datasets: [
    {
      label,
      data,
      backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)", "rgba(255, 206, 86, 0.6)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)"],
      borderWidth: 1,
    },
  ],
});

const MatchAnalysis = () => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Test");

  const handleTeamChange = (event) => {
    const team = event.target.value;
    setSelectedTeam(team);
    setSelectedCategory("Test"); // Default to "Test" when team changes
    toast.success(`Showing stats for: ${team}`);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const teamData = teamsDataAgainstPakistan[selectedTeam]?.[selectedCategory] || {};

  return (
    <div className="p-5">
      {/* Team Selector */}
      <div className="mb-5 max-w-sm m-auto">
        <label htmlFor="team-select" className="block text-lg font-medium dark:bg-gray-900 dark:text-white">
          Select a Team
        </label>
        <select
          id="team-select"
          className="dark:bg-gray-900 dark:text-white mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full"
          onChange={handleTeamChange}
          value={selectedTeam}
        >
          <option value="">-- Select Team --</option>
          {Object.keys(teamsDataAgainstPakistan).map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>

      {/* Category Selector */}
      {selectedTeam && (
        <div className="mb-5 max-w-sm m-auto">
          <label htmlFor="category-select" className="block text-lg font-medium dark:bg-gray-900 dark:text-white">
            Select Category
          </label>
          <select
            id="category-select"
            className="dark:bg-gray-900 dark:text-white mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="Test">Test</option>
            <option value="ODI">ODI</option>
            <option value="T20">T20</option>
          </select>
        </div>
      )}

      {/* Show Charts */}
      {selectedTeam && selectedCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Total Matches */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">Total Matches Played</h2>
            <Bar
              data={chartData(
                `Total Matches (${selectedCategory})`,
                ["Wins", "Losses"],
                [teamData.wins || 0, teamData.losses || 0]
              )}
              options={{ maintainAspectRatio: true }}
            />
          </div>

          {/* Home Matches */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">Home Matches</h2>
            <Pie
              data={chartData(
                `Home Matches (${selectedCategory})`,
                ["Home Wins", "Home Losses"],
                [teamData.homeWins || 0, teamData.homeLosses || 0]
              )}
              options={{ maintainAspectRatio: true }}
            />
          </div>

          {/* Away Matches */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">Away Matches</h2>
            <Bar
              data={chartData(
                `Away Matches (${selectedCategory})`,
                ["Away Wins", "Away Losses"],
                [teamData.awayWins || 0, teamData.awayLosses || 0]
              )}
              options={{ maintainAspectRatio: true }}
            />
          </div>

          {/* Neutral Venue */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">Neutral Venue</h2>
            <Pie
              data={chartData(
                `Neutral Matches (${selectedCategory})`,
                ["Neutral Wins", "Neutral Losses"],
                [teamData.neutralWins || 0, teamData.neutralLosses || 0]
              )}
              options={{ maintainAspectRatio: true }}
            />
          </div>

          {/* Total Losses */}
          <div className="chart-container dark:bg-gray-900 dark:text-white p-5 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-3">Total Losses</h2>
            <Bar
              data={chartData(
                `Total Losses (${selectedCategory})`,
                ["Home Losses", "Away Losses", "Neutral Losses"],
                [
                  teamData.homeLosses || 0,
                  teamData.awayLosses || 0,
                  teamData.neutralLosses || 0,
                ]
              )}
              options={{ maintainAspectRatio: true }}
            />
          </div>
        </div>
      )}

      <ToastContainer />
    </div>

  );
};

export default MatchAnalysis;
