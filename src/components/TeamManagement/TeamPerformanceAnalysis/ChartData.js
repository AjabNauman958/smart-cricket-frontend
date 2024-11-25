export const battingAverageData = {
  labels: [
    'Babar Azam',
    'Fakhar Zaman',
    'Imam-ul-Haq',
    'Mohammad Rizwan',
    'Shoaib Malik',
  ],
  datasets: [
    {
      label: 'Pakistan Batsmen Runs',
      data: [112, 75, 34, 45, 22], // Pakistan batsmen runs
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
    {
      label: 'India Batsmen Runs',
      data: [45, 30, 25, 40, 10], // India batsmen runs
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      fill: true,
    },
  ],
};

export const bowlingPerformanceData = {
  labels: [
    'Shaheen Afridi',
    'Mohammad Amir',
    'Shadab Khan',
    'Hasan Ali',
    'Imad Wasim',
    'Shoaib Malik',
  ],
  datasets: [
    {
      label: 'Pakistan Bowlers Wickets',
      data: [2, 1, 0, 1, 0, 0], // Pakistan bowlers wickets
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
    },
    {
      label: 'India Bowlers Wickets',
      data: [3, 1, 1, 1, 0, 0], // India bowlers wickets
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
    },
  ],
};

// Example chart options
export const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      enabled: true, // Enable tooltips for better user interaction
    },
  },
};
