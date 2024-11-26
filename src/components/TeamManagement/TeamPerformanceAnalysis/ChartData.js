export const battingAverageData = {
  labels: [
    'Babar Azam (PAK)',
    'Fakhar Zaman (PAK)',
    'Imam-ul-Haq (PAK)',
    'Mohammad Rizwan (PAK)',
    'Shoaib Malik (PAK)',
    'Virat Kohli (IND)',
    'Rohit Sharma (IND)',
    'KL Rahul (IND)',
    'Shreyas Iyer (IND)',
    'Hardik Pandya (IND)',
  ],
  datasets: [
    {
      label: 'Pakistan Batsmen Runs',
      data: [112, 75, 34, 45, 22, null, null, null, null, null], // Pakistan batsmen runs
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
    {
      label: 'India Batsmen Runs',
      data: [null, null, null, null, null, 90, 85, 50, 60, 30], // India batsmen runs
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      fill: true,
    },
  ],
};

export const bowlingPerformanceData = {
  labels: [
    'Shaheen Afridi (PAK)',
    'Mohammad Amir (PAK)',
    'Shadab Khan (PAK)',
    'Hasan Ali (PAK)',
    'Imad Wasim (PAK)',
    'Shoaib Malik (PAK)',
    'Jasprit Bumrah (IND)',
    'Mohammed Shami (IND)',
    'Ravindra Jadeja (IND)',
    'Kuldeep Yadav (IND)',
    'Hardik Pandya (IND)',
  ],
  datasets: [
    {
      label: 'Pakistan Bowlers Wickets',
      data: [2, 1, 0, 1, 0, 0, null, null, null, null, null], // Pakistan bowlers wickets
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
    },
    {
      label: 'India Bowlers Wickets',
      data: [null, null, null, null, null, null, 3, 2, 1, 1, 1], // India bowlers wickets
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
