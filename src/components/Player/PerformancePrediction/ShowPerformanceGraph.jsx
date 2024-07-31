import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

// Register components
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const ShowPerformanceGraph = () => {
    // Sample data for the charts
    const data1 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const data2 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 2',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: 'rgba(153,102,255,1)',
                borderWidth: 2,
                fill: false,
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
        <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 p-4">
                <h3 className="text-center text-lg font-bold mb-2">Graph 1: Match Performance</h3>
                <div className="bg-white shadow p-4 rounded">
                    <Line data={data1} options={options} />
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
                <h3 className="text-center text-lg font-bold mb-2">Graph 2: Player Statistics</h3>
                <div className="bg-white shadow p-4 rounded">
                    <Line data={data2} options={options} />
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
                <h3 className="text-center text-lg font-bold mb-2">Graph 3: Team Comparison</h3>
                <div className="bg-white shadow p-4 rounded">
                    <Line data={data1} options={options} />
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
                <h3 className="text-center text-lg font-bold mb-2">Graph 4: Winning Probability</h3>
                <div className="bg-white shadow p-4 rounded">
                    <Line data={data2} options={options} />
                </div>
            </div>
        </div>
    );
};

export default ShowPerformanceGraph;
