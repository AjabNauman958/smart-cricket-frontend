import IND from '../images/india.png';
import AUS from '../images/aus.png';
import PAK from '../images/pak.png';
import ENG from '../images/eng.png';
// Match Data for Chart
export const matchData = {
    title: "Hong Kong, China T20 Tri-Series, 2024", //series name
    matchDate: "Tuesday, 12th March 2024, 11:00",
    venue: "Tin Kwong Road Recreation Ground",
    teams: [
        {
            name: "Pakistan",
            flag: "/src/components/images/pak.png",
            score: "339-5 (50)",
        },
        {
            name: "India",
            flag: "/src/components/images/india.png",
            score: "158-10 (41.2)",
        },
    ],
    result: "Pakistan beat India by 180 runs",
};

// Chart Data Preparation
const pakistanScore = 339; // First team total score
const indiaScore = 158;    // Second Team total score

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


// Matches Recent and Upcoming Data
export const matchCardData = {
    recent: [
        {
            matchNumber: 'First Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '1st December, 7:00 PM',
            venue: 'Wankhede Stadium, Mumbai'
        },
        {
            matchNumber: 'Second Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '2nd December, 7:00 PM',
            venue: 'Eden Gardens, Kolkata'
        },
        {
            matchNumber: 'Third Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '3rd December, 7:00 PM',
            venue: 'M. Chinnaswamy Stadium, Bangalore'
        },
        {
            matchNumber: 'Fourth Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '4th December, 7:00 PM',
            venue: 'Rajiv Gandhi International Cricket Stadium, Hyderabad'
        },
        {
            matchNumber: 'Fifth Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '5th December, 7:00 PM',
            venue: 'Feroz Shah Kotla Ground, Delhi'
        },
        {
            matchNumber: 'Sixth Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '6th December, 7:00 PM',
            venue: 'Chinnaswamy Stadium, Bangalore'
        },
        {
            matchNumber: 'Seventh Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '7th December, 7:00 PM',
            venue: 'MCA Stadium, Pune'
        },
        {
            matchNumber: 'Eighth Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '8th December, 7:00 PM',
            venue: 'BRSABV Ekana Cricket Stadium, Lucknow'
        },
        {
            matchNumber: 'Ninth Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '9th December, 7:00 PM',
            venue: 'M. Chinnaswamy Stadium, Bangalore'
        },
        {
            matchNumber: 'Tenth Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '10th December, 7:00 PM',
            venue: 'Eden Gardens, Kolkata'
        },
        {
            matchNumber: 'Eleventh Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '11th December, 7:00 PM',
            venue: 'MCA Stadium, Pune'
        },
        {
            matchNumber: 'Twelfth Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '12th December, 7:00 PM',
            venue: 'Feroz Shah Kotla Ground, Delhi'
        },
        {
            matchNumber: 'Thirteenth Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '13th December, 7:00 PM',
            venue: 'BRSABV Ekana Cricket Stadium, Lucknow'
        },
        {
            matchNumber: 'Fourteen Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '11th December, 7:00 PM',
            venue: 'MCA Stadium, Pune'
        },
        {
            matchNumber: 'Fifteen Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '12th December, 7:00 PM',
            venue: 'Feroz Shah Kotla Ground, Delhi'
        },
        {
            matchNumber: 'Sixteen Match',
            league: 'International Series',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Australia', logo: AUS },
            ],
            time: '13th December, 7:00 PM',
            venue: 'BRSABV Ekana Cricket Stadium, Lucknow'
        },
    ],


    upcoming: [
        {
            matchNumber: 'First Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Pakistan', logo: PAK },
            ],
            time: 'July 5, 7:00 PM',
            venue: 'Wankhede Stadium, Mumbai'
        },
        {
            matchNumber: 'Second Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'Australia', logo: AUS },
                { name: 'England', logo: ENG },
            ],
            time: 'July 6, 7:00 PM',
            venue: 'Old Trafford, Manchester'
        },
        {
            matchNumber: 'Third Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Pakistan', logo: PAK },
            ],
            time: 'July 5, 7:00 PM',
            venue: 'MCA Stadium, Pune'
        },
        {
            matchNumber: 'Fourth Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'Australia', logo: AUS },
                { name: 'England', logo: ENG },
            ],
            time: 'July 6, 7:00 PM',
            venue: 'Lord\'s Cricket Ground, London'
        },
        {
            matchNumber: 'Fifth Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Pakistan', logo: PAK },
            ],
            time: 'July 5, 7:00 PM',
            venue: 'Eden Gardens, Kolkata'
        },
        {
            matchNumber: 'Sixth Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'Australia', logo: AUS },
                { name: 'England', logo: ENG },
            ],
            time: 'July 6, 7:00 PM',
            venue: 'Melbourne Cricket Ground, Melbourne'
        },
        {
            matchNumber: 'Seventh Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Pakistan', logo: PAK },
            ],
            time: 'July 5, 7:00 PM',
            venue: 'BRSABV Ekana Cricket Stadium, Lucknow'
        },
        {
            matchNumber: 'Eighth Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'Australia', logo: AUS },
                { name: 'England', logo: ENG },
            ],
            time: 'July 6, 7:00 PM',
            venue: 'Wankhede Stadium, Mumbai'
        },
        {
            matchNumber: 'Ninth Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Pakistan', logo: PAK },
            ],
            time: 'July 5, 7:00 PM',
            venue: 'Feroz Shah Kotla Ground, Delhi'
        },
        {
            matchNumber: 'Tenth Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'Australia', logo: AUS },
                { name: 'England', logo: ENG },
            ],
            time: 'July 6, 7:00 PM',
            venue: 'Feroz Shah Kotla Ground, Delhi'
        },
        {
            matchNumber: 'Eleventh Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Pakistan', logo: PAK },
            ],
            time: 'July 5, 7:00 PM',
            venue: 'Eden Gardens, Kolkata'
        },
        {
            matchNumber: 'Twelvth Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'Australia', logo: AUS },
                { name: 'England', logo: ENG },
            ],
            time: 'July 6, 7:00 PM',
            venue: 'Melbourne Cricket Ground, Melbourne'
        },
        {
            matchNumber: 'Thirteen Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Pakistan', logo: PAK },
            ],
            time: 'July 5, 7:00 PM',
            venue: 'BRSABV Ekana Cricket Stadium, Lucknow'
        },
        {
            matchNumber: 'Forteen Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'Australia', logo: AUS },
                { name: 'England', logo: ENG },
            ],
            time: 'July 6, 7:00 PM',
            venue: 'Wankhede Stadium, Mumbai'
        },
        {
            matchNumber: 'Fifteen Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'India', logo: IND },
                { name: 'Pakistan', logo: PAK },
            ],
            time: 'July 5, 7:00 PM',
            venue: 'Feroz Shah Kotla Ground, Delhi'
        },
        {
            matchNumber: 'Sixteen Match',
            league: 'ICC World Cup',
            format: 'ODI',
            teams: [
                { name: 'Australia', logo: AUS },
                { name: 'England', logo: ENG },
            ],
            time: 'July 6, 7:00 PM',
            venue: 'Feroz Shah Kotla Ground, Delhi'
        },

    ],
};
