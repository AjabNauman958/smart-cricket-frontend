import React from 'react';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, BarElement, Tooltip, Legend, ArcElement, RadarController, RadialLinearScale } from 'chart.js';

// Register components
ChartJS.register(
  LineElement, PointElement, LinearScale, Title, CategoryScale, 
  BarElement, Tooltip, Legend, ArcElement, RadarController, RadialLinearScale
);

const ShowPerformanceGraph = () => {
    // Sample data for the charts
    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Line Chart',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Bar Chart',
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: 'rgba(153,102,255,0.2)',
                borderColor: 'rgba(153,102,255,1)',
                borderWidth: 1,
            },
        ],
    };

    const pieData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Pie Chart',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    const radarData = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'Radar Chart',
                data: [65, 59, 90, 81, 56, 55, 40],
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
            },
        ],
    };

    // Options for the charts
    const options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-4 mb-10">
            <div className="p-4" style={{ height: '400px' }}>
                <h3 className="text-center text-lg font-bold mb-2">Graph 1: Line Chart</h3>
                <div className="shadow p-4 rounded h-full">
                    <Line data={lineData} options={options} height={400} />
                </div>
            </div>
            <div className="p-4" style={{ height: '400px' }}>
                <h3 className="text-center text-lg font-bold mb-2">Graph 2: Bar Chart</h3>
                <div className="shadow p-4 rounded h-full">
                    <Bar data={barData} options={options} height={400} />
                </div>
            </div>
            <div className="p-4" style={{ height: '400px' }}>
                <h3 className="text-center text-lg font-bold mb-2">Graph 3: Pie Chart</h3>
                <div className="shadow p-4 rounded h-full">
                    <Pie data={pieData} options={{ maintainAspectRatio: false }} height={400} />
                </div>
            </div>
            <div className="p-4" style={{ height: '400px' }}>
                <h3 className="text-center text-lg font-bold mb-2">Graph 4: Radar Chart</h3>
                <div className="shadow p-4 rounded h-full">
                    <Radar data={radarData} options={{ maintainAspectRatio: false }} height={400} />
                </div>
            </div>
        </div>
    );
};

export default ShowPerformanceGraph;
