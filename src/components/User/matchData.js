// Match Data for Chart
export const matchData = {
    title: "Hong Kong, China T20 Tri-Series, 2024",
    matchDate: "Tuesday, 12th March 2024, 11:00",
    venue: "Tin Kwong Road Recreation Ground",
    teams: [
        {
            name: "Pakistan",
            flag: "/src/components/images/pak.png", // Replace with actual flag image path
            score: "339-5 (50)",
        },
        {
            name: "India",
            flag: "/src/components/images/india.png", // Replace with actual flag image path
            score: "158-10 (41.2)",
        },
    ],
    result: "Pakistan beat India by 180 runs",
};

// Chart Data Preparation
const pakistanScore = 339; // Pakistan's total score
const indiaScore = 158;    // India's total score

// Data for Chart.js (Bar chart)
export const chartData = {
    labels: ['Pakistan', 'India'],  // Teams
    datasets: [
        {
            label: 'Total Score',
            data: [pakistanScore, indiaScore],  // Scores for each team
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1,
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
        },
        tooltip: {
            enabled: true,
        },
    },
};
