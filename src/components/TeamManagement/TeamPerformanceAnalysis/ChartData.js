import { matchScoreDetails } from "../../User/matchData";

// Function to get top 5 batsmen based on runs
const getTopBatsmen = (team) => {
  return team.batsmen
    .sort((a, b) => b.runs - a.runs)  // Sort by runs in descending order
    .slice(0, 5);  // Take top 5
};

// Extract top 5 batsmen for Pakistan and India
const team1TopBatsmen = getTopBatsmen(matchScoreDetails.team_1);
const team2TopBatsmen = getTopBatsmen(matchScoreDetails.team_2);

// Prepare data for Batting Average Chart
export const battingAverageData = {
  labels: [
    ...team1TopBatsmen.map(player => `${player.name} ${matchScoreDetails.team_1.name}`),
    ...team2TopBatsmen.map(player => `${player.name} ${matchScoreDetails.team_2.name}`),
  ],
  datasets: [
    {
      label: `${matchScoreDetails.team_1.name} Batsman Runs`,
      data: team1TopBatsmen.map(player => ({
        x: `${player.name} ${matchScoreDetails.team_1.name}`,  // Player name on X-axis
        y: player.runs,  // Player runs on Y-axis
      })),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      showLine: true,  // To prevent connecting lines in scatter
      fill: true,
      pointRadius: 8,   // Point size
    },
    {
      label: `${matchScoreDetails.team_2.name} Batsmen Runs`,
      data: team2TopBatsmen.map(player => ({
        x: `${player.name} ${matchScoreDetails.team_2.name}`,  // Player name on X-axis
        y: player.runs,  // Player runs on Y-axis
      })),
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
      showLine: true,  // To prevent connecting lines in scatter
      fill: true,
      pointRadius: 8,   // Point size
    },
  ],
};


// Function to get top 5 bowlers based on wickets
const getTopBowlers = (team) => {
  return team.bowlers
    .sort((a, b) => b.wickets - a.wickets)  // Sort by wickets in descending order
    .slice(0, 5);  // Take top 5 bowlers
};

// Extract top 5 bowlers for Pakistan and India
const team1TopBowlers = getTopBowlers(matchScoreDetails.team_1);
const team2TopBowlers = getTopBowlers(matchScoreDetails.team_2);

// Prepare data for Bowling Performance Scatter Chart
export const bowlingPerformanceData = {
  labels: [
    ...team1TopBowlers.map(player => `${player.name} ${matchScoreDetails.team_1.name}`),
    ...team2TopBowlers.map(player => `${player.name} ${matchScoreDetails.team_2.name}`),
  ],
  datasets: [
    {
      label: `${matchScoreDetails.team_1.name} Bowlers Wickets`,
      data: team1TopBowlers.map(player => ({
        x: `${player.name} ${matchScoreDetails.team_1.name}`,  // Position on the x-axis (multiply by 2 to create a gap between points)
        y: player.wickets,  // Wickets count as the y value
      })),
      borderColor: 'rgba(255, 99, 132, 1)',  // Red for Pakistan
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      showLine: true,  // Show line connecting points
      fill: true,  // Fill the area under the curve
      pointRadius: 8,  // Size of the scatter points
    },
    {
      label: `${matchScoreDetails.team_2.name} Bowlers Wickets`,
      data: team2TopBowlers.map(player => ({
        x: `${player.name} ${matchScoreDetails.team_2.name}`,  // Multiply by 2 to ensure a wider gap from Pakistan's points
        y: player.wickets,  // Wickets count as the y value
      })),
      borderColor: 'rgba(54, 162, 235, 1)',  // Blue for India
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      showLine: true,  // Show line connecting points
      fill: true,  // Fill the area under the curve
      pointRadius: 8,  // Size of the scatter points
    },
  ],
};




// Function to get top 5 batsmen based on strike rate for any team
const getTopBatsmenByStrikeRate = (team) => {
  return team.batsmen
    .sort((a, b) => b.strikeRate - a.strikeRate) // Sort by strike rate in descending order
    .slice(0, 5); // Take top 5 batsmen
};
// Extract top 5 batsmen for both teams based on strike rate
const team1TopBatsmenStrikeRate = getTopBatsmenByStrikeRate(matchScoreDetails.team_1);
const team2TopBatsmenStrikeRate = getTopBatsmenByStrikeRate(matchScoreDetails.team_2);

// Prepare dynamic data for the strike rate comparison chart
export const strikeRateData = {
  labels: [
    ...team1TopBatsmenStrikeRate.map(player => `${player.name} ${matchScoreDetails.team_1.name}`),
    ...team2TopBatsmenStrikeRate.map(player => `${player.name} ${matchScoreDetails.team_2.name}`),
  ],
  datasets: [
    {
      label: `${matchScoreDetails.team_1.name} Batsmen Strike Rates`,
      data: team1TopBatsmenStrikeRate.map(player => ({
        x: `${player.name} ${matchScoreDetails.team_1.name}`, // Player name on X-axis
        y: player.strikeRate, // Strike rate on Y-axis
      })),
      borderColor: 'rgba(255, 99, 132, 1)', // Color for team 1
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      showLine: true, // Prevent connecting lines in scatter
      fill: true,
      pointRadius: 8, // Point size
    },
    {
      label: `${matchScoreDetails.team_2.name} Batsmen Strike Rates`,
      data: team2TopBatsmenStrikeRate.map(player => ({
        x: `${player.name} ${matchScoreDetails.team_2.name}`, // Player name on X-axis
        y: player.strikeRate, // Strike rate on Y-axis
      })),
      borderColor: 'rgba(54, 162, 235, 1)', // Color for team 2
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      showLine: true, // Prevent connecting lines in scatter
      fill: true,
      pointRadius: 8, // Point size
    },
  ],
};

// Function to get top bowlers based on economy rate for any team
const getTopBowlersByEconomyRate = (team) => {
  return team.bowlers
    .sort((a, b) => a.economy - b.economy) // Sort by economy rate in ascending order
    .slice(0, 5); // Take top 5 bowlers
};
// Extract top 5 bowlers for both teams based on economy rate
const team1TopBowlersEconomyRate = getTopBowlersByEconomyRate(matchScoreDetails.team_1);
const team2TopBowlersEconomyRate = getTopBowlersByEconomyRate(matchScoreDetails.team_2);

// Prepare dynamic data for the economy rate comparison chart
// Economy Rate Data
export const economyRateData = {
  labels: [
    ...team1TopBowlersEconomyRate.map(player => `${player.name} ${matchScoreDetails.team_1.name}`),
    ...team2TopBowlersEconomyRate.map(player => `${player.name} ${matchScoreDetails.team_2.name}`),
  ],
  datasets: [
    {
      label: `${matchScoreDetails.team_1.name} Bowlers Economy Rate`,
      data: team1TopBowlersEconomyRate.map(player => ({
        x: `${player.name} ${matchScoreDetails.team_1.name}`,
        y: player.economy,
      })), // Economy rates as array
      borderColor: 'rgba(54, 162, 235, 1)', // Color for team 1
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      showLine: true, // Prevent connecting lines in scatter
      fill: true,
      pointRadius: 8, // Point size
    },
    {
      label: `${matchScoreDetails.team_2.name} Bowlers Economy Rate`,
      data: team2TopBowlersEconomyRate.map(player => ({
        x: `${player.name} ${matchScoreDetails.team_2.name}`,
        y: player.economy
      })), // Economy rates as array
      borderColor: 'rgba(255, 159, 64, 1)', // Color for team 2
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      showLine: true, // Prevent connecting lines in scatter
      fill: true,
      pointRadius: 8, // Point size

    },
  ],
};

// Function to extract top partnerships based on runs
const getTopPartnershipsByRuns = (team) => {
  return Object.values(team?.partnershipsData || {})
    .sort((a, b) => b.totalRuns - a.totalRuns)
    .slice(0, 5);
};

const team1TopPartnerships = getTopPartnershipsByRuns(matchScoreDetails.team_1);
const team2TopPartnerships = getTopPartnershipsByRuns(matchScoreDetails.team_2);

export const partnershipData = {
  labels: [
    ...team1TopPartnerships.map(
      (partnership) =>
        `${partnership.bat1Name} & ${partnership.bat2Name} (${matchScoreDetails.team_1.name})`
    ),
    ...team2TopPartnerships.map(
      (partnership) =>
        `${partnership.bat1Name} & ${partnership.bat2Name} (${matchScoreDetails.team_2.name})`
    ),
  ],
  datasets: [
    {
      label: `${matchScoreDetails.team_1.name} Top Partnerships`,
      data: team1TopPartnerships.map((partnership) => partnership.totalRuns), // Runs as array
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
    {
      label: `${matchScoreDetails.team_2.name} Top Partnerships`,
      data: team2TopPartnerships.map((partnership) => partnership.totalRuns), // Runs as array
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};






// Chart Options
export const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        boxWidth: 20,
      },
    },
    tooltip: {
      enabled: true,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      titleFont: { size: 14 },
      bodyFont: { size: 12 },
    },
  },
  // scales: {
  //   y: {
  //     beginAtZero: true,
  //     title: {
  //       display: true,
  //       text: 'Performance Metrics',
  //       color: '#666',
  //       font: { size: 14 },
  //     },
  //   },
  //   x: {
  //     title: {
  //       display: true,
  //       text: 'Players',
  //       color: '#666',
  //       font: { size: 14 },
  //     },
  //   },
  // },
};
