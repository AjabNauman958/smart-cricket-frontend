// Batting Average Data
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
    'Shikhar Dhawan (IND)',
    'Hardik Pandya (IND)',
  ],
  datasets: [
    {
      label: 'Pakistan Batsmen Runs',
      data: [112, 75, 34, 45, 22, null, null, null, null, null],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
    {
      label: 'India Batsmen Runs',
      data: [null, null, null, null, null, 45, 30, 40, 25, 18],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      fill: true,
    },
  ],
};

// Bowling Performance Data
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
  ],
  datasets: [
    {
      label: 'Pakistan Bowlers Wickets',
      data: [2, 1, 0, 1, 0, 0, null, null, null, null],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
    },
    {
      label: 'India Bowlers Wickets',
      data: [null, null, null, null, null, null, 3, 1, 1, 0],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
    },
  ],
};

// Strike Rate Data
export const strikeRateData = {
  labels: [
    'Babar Azam (PAK)',
    'Fakhar Zaman (PAK)',
    'Imam-ul-Haq (PAK)',
    'Mohammad Rizwan (PAK)',
    'Shoaib Malik (PAK)',
    'Virat Kohli (IND)',
    'Rohit Sharma (IND)',
    'KL Rahul (IND)',
    'Shikhar Dhawan (IND)',
    'Hardik Pandya (IND)',
  ],
  datasets: [
    {
      label: 'Pakistan Batsmen Strike Rates',
      data: [131.76, 129.31, 72.34, 118.42, 110.0, null, null, null, null, null],
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      fill: true,
    },
    {
      label: 'India Batsmen Strike Rates',
      data: [null, null, null, null, null, 112.50, 111.11, 88.89, 71.43, 120.0],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
};

// Economy Rate Data
export const economyRateData = {
  labels: [
    'Shaheen Afridi (PAK)',
    'Mohammad Amir (PAK)',
    'Shadab Khan (PAK)',
    'Hasan Ali (PAK)',
    'Imad Wasim (PAK)',
    'Shoaib Malik (PAK)',
    'Jasprit Bumrah (IND)',
    'Mohammed Shami (IND)',
    'Deepak Chahar (IND)',
    'Bhuvneshwar Kumar (IND)',
  ],
  datasets: [
    {
      label: 'Pakistan Bowlers Economy Rate',
      data: [4.50, 4.38, 4.17, 4.57, 4.00, 6.00, null, null, null, null],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
    },
    {
      label: 'India Bowlers Economy Rate',
      data: [null, null, null, null, null, null, 5.50, 4.67, 4.57, 4.38],
      borderColor: 'rgba(255, 159, 64, 1)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      fill: true,
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
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Performance Metrics',
        color: '#666',
        font: { size: 14 },
      },
    },
    x: {
      title: {
        display: true,
        text: 'Players',
        color: '#666',
        font: { size: 14 },
      },
    },
  },
};
