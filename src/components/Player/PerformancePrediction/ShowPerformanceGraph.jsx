import React from 'react';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, BarElement, Tooltip, Legend, ArcElement, RadarController, RadialLinearScale } from 'chart.js';

// Register components
ChartJS.register(
    LineElement, PointElement, LinearScale, Title, CategoryScale,
    BarElement, Tooltip, Legend, ArcElement, RadarController, RadialLinearScale
);

const ShowPerformanceGraph = () => {
    // Sample cricket-related data for the charts
    const lineData = {
        labels: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6', 'Match 7'],
        datasets: [
            {
                label: 'Player Runs Scored',
                data: [45, 78, 100, 32, 67, 89, 105],
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const barData = {
        labels: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6', 'Match 7'],
        datasets: [
            {
                label: 'Wickets Taken',
                data: [2, 3, 1, 4, 3, 5, 2],
                backgroundColor: 'rgba(153,102,255,0.2)',
                borderColor: 'rgba(153,102,255,1)',
                borderWidth: 1,
            },
        ],
    };

    const pieData = {
        labels: ['Dot Balls', 'Singles', 'Boundaries', 'Sixes'],
        datasets: [
            {
                label: 'Batting Breakdown',
                data: [55, 20, 15, 10],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const radarData = {
        labels: ['Batting', 'Bowling', 'Fielding', 'Fitness', 'Consistency'],
        datasets: [
            {
                label: 'Performance Analysis',
                data: [85, 70, 75, 90, 80],
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
                <h3 className="text-center text-lg font-bold mb-2">Runs Scored </h3>
                <div className="shadow p-4 rounded h-full">
                    <Line data={lineData} options={options} height={400} />
                </div>
            </div>
            <div className="p-4" style={{ height: '400px' }}>
                <h3 className="text-center text-lg font-bold mb-2"> Wickets Taken </h3>
                <div className="shadow p-4 rounded h-full">
                    <Bar data={barData} options={options} height={400} />
                </div>
            </div>
            <div className="p-4" style={{ height: '400px' }}>
                <h3 className="text-center text-lg font-bold mb-2"> Batting Breakdown </h3>
                <div className="shadow p-4 rounded h-full">
                    <Pie data={pieData} options={{ maintainAspectRatio: false }} height={400} />
                </div>
            </div>
            <div className="p-4" style={{ height: '400px' }}>
                <h3 className="text-center text-lg font-bold mb-2"> Performance Analysis </h3>
                <div className="shadow p-4 rounded h-full">
                    <Radar data={radarData} options={{ maintainAspectRatio: false }} height={400} />
                </div>
            </div>
        </div>
    );
};

export default ShowPerformanceGraph;
