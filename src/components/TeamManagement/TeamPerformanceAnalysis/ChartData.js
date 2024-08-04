// ChartData.js
export const battingAverageData = {
    labels: ['Match 1', 'Match 2', 'Match 3', 'Match 4'], // Example labels
    datasets: [
      {
        label: 'Team A',
        data: [60, 65, 70, 75], // Example data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Team B',
        data: [55, 70, 80, 90], // Example data
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  };
  
  export const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw} runs`;
          },
        },
      },
    },
  };
  