import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

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

const AverageGraph = () => {
  // Sample data for the charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Player Performance',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#00A09A',
        tension: 0.1
      }
    ]
  };

  const barChartData = {
    labels: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
    datasets: [
      {
        label: 'Player Scores',
        data: [85, 90, 75, 88, 92],
        backgroundColor: '#00A09A',
        borderColor: 'rgba(0,160,154,0.2)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="p-4 dark:text-white text-black grid gap-4 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
      {/* Left Div */}
      <div className="flex flex-col justify-center items-center md:items-start p-4">
        <h2 className="text-xl md:text-2xl xl:text-2xl font-bold mb-4 text-center md:text-left">
          Year-wise Player Performance Visualizations
        </h2>
        <p className="text-base md:text-lg xl:text-lg text-center md:text-left">
          The team's batting average indicates their overall performance and consistency. It reflects the
          players' ability to contribute runs and maintain a stable batting lineup, which is crucial for winning matches.
        </p>
      </div>

      {/* Right Div */}
      <div className="w-full h-80 md:h-96 lg:h-[400px] xl:h-[500px] flex justify-center items-center p-4">
        <Line data={lineChartData} options={{
          responsive: true,
          maintainAspectRatio: false, // Allows the chart to be responsive
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return context.dataset.label + ': ' + context.raw;
                }
              }
            }
          }
        }} />
      </div>

      {/* Bar Chart and its description */}
      <div className="w-full h-80 md:h-96 lg:h-[400px] xl:h-[500px] flex justify-center items-center p-4">
        <Bar data={barChartData} options={{
          responsive: true,
          maintainAspectRatio: false, // Allows the chart to be responsive
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return context.dataset.label + ': ' + context.raw;
                }
              }
            }
          }
        }} />
      </div>

      <div className="flex flex-col justify-center items-center md:items-start p-4">
        <h2 className="text-xl md:text-2xl xl:text-2xl font-bold mb-4 text-center md:text-left">
          Year-wise Player Performance Visualizations
        </h2>
        <p className="text-base md:text-lg xl:text-lg text-center md:text-left">
          The team's batting average indicates their overall performance and consistency. It reflects the
          players' ability to contribute runs and maintain a stable batting lineup, which is crucial for winning matches.
        </p>
      </div>
    </div>
  );
}

export default AverageGraph;
