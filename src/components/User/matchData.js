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


// MatchScoreCard Data Details
export const matchScoreDetails = {
    team_1: {
        name: "Pakistan",
        batsmen: [
            { name: 'Babar Azam', runs: 112, balls: 85, fours: 11, sixes: 2, strikeRate: 131.76, out: 'not out' },
            { name: 'Fakhar Zaman', runs: 75, balls: 58, fours: 7, sixes: 1, strikeRate: 129.31, out: 'bowled', bowler: 'Bumrah' },
            { name: 'Imam-ul-Haq', runs: 34, balls: 47, fours: 3, sixes: 0, strikeRate: 72.34, out: 'run out', fielder: 'Jadeja' },
            { name: 'Mohammad Rizwan', runs: 45, balls: 38, fours: 4, sixes: 0, strikeRate: 118.42, out: 'lbw', bowler: 'Shami' },
            { name: 'Shoaib Malik', runs: 22, balls: 20, fours: 2, sixes: 0, strikeRate: 110.00, out: 'caught', fielder: 'Dhawan' },
            { name: 'Imad Wasim', runs: 15, balls: 12, fours: 1, sixes: 0, strikeRate: 125.00, out: 'not out' },
            { name: 'Shadab Khan', runs: 8, balls: 10, fours: 0, sixes: 0, strikeRate: 80.00, out: 'bowled', bowler: 'Bumrah' },
            { name: 'Hasan Ali', runs: 5, balls: 6, fours: 0, sixes: 0, strikeRate: 83.33, out: 'lbw', bowler: 'Shami' },
            { name: 'Shaheen Afridi', runs: 3, balls: 4, fours: 0, sixes: 0, strikeRate: 75.00, out: 'run out', fielder: 'Jadeja' },
            { name: 'Mohammad Amir', runs: 2, balls: 3, fours: 0, sixes: 0, strikeRate: 66.67, out: 'caught', fielder: 'Dhawan' },
            { name: 'Junaid Khan', runs: 1, balls: 2, fours: 0, sixes: 0, strikeRate: 50.00, out: 'not out' },
        ],
        bowlers: [
            { name: 'Shaheen Afridi', overs: 10, maidens: 2, runs: 45, wickets: 2, economy: 4.50 },
            { name: 'Mohammad Amir', overs: 8, maidens: 0, runs: 35, wickets: 1, economy: 4.38 },
            { name: 'Shadab Khan', overs: 6, maidens: 0, runs: 25, wickets: 0, economy: 4.17 },
            { name: 'Hasan Ali', overs: 7, maidens: 0, runs: 32, wickets: 1, economy: 4.57 },
            { name: 'Imad Wasim', overs: 5, maidens: 0, runs: 20, wickets: 0, economy: 4.00 },
            { name: 'Shoaib Malik', overs: 2, maidens: 0, runs: 12, wickets: 0, economy: 6.00 },
        ],
        partnershipsData: {
            pat_1: {
                bat1Name: "Babar Azam",
                bat1Runs: 60,
                bat2Name: "Fakhar Zaman",
                bat2Runs: 30,
                totalRuns: 90,
                totalBalls: 75,
            },
            pat_2: {
                bat1Name: "Rizwan",
                bat1Runs: 45,
                bat2Name: "Shoaib Malik",
                bat2Runs: 25,
                totalRuns: 70,
                totalBalls: 50,
            },
            pat_3: {
                bat1Name: "Imam-ul-Haq",
                bat1Runs: 55,
                bat2Name: "Haris Sohail",
                bat2Runs: 40,
                totalRuns: 95,
                totalBalls: 85,
            },
            pat_4: {
                bat1Name: "Shadab Khan",
                bat1Runs: 20,
                bat2Name: "Asif Ali",
                bat2Runs: 35,
                totalRuns: 55,
                totalBalls: 45,
            },
            pat_5: {
                bat1Name: "Sarfaraz Ahmed",
                bat1Runs: 15,
                bat2Name: "Mohammad Nawaz",
                bat2Runs: 20,
                totalRuns: 35,
                totalBalls: 30,
            },
            pat_6: {
                bat1Name: "Shaheen Afridi",
                bat1Runs: 10,
                bat2Name: "Hassan Ali",
                bat2Runs: 15,
                totalRuns: 25,
                totalBalls: 20,
            },
            pat_7: {
                bat1Name: "Fakhar Zaman",
                bat1Runs: 65,
                bat2Name: "Rizwan",
                bat2Runs: 45,
                totalRuns: 110,
                totalBalls: 95,
            },
        }
        ,
        wicketsData: {
            wkt_1: { "batName": "Fakhar Zaman", "wktNbr": 1, "wktOver": 12.3, "wktRuns": 75 },
            wkt_2: { "batName": "Imam-ul-Haq", "wktNbr": 2, "wktOver": 15.2, "wktRuns": 34 },
            wkt_3: { "batName": "Mohammad Rizwan", "wktNbr": 3, "wktOver": 18.4, "wktRuns": 45 },
            wkt_4: { "batName": "Shoaib Malik", "wktNbr": 4, "wktOver": 22.1, "wktRuns": 22 },
            wkt_5: { "batName": "Imad Wasim", "wktNbr": 5, "wktOver": 25.0, "wktRuns": 15 },
            wkt_6: { "batName": "Shadab Khan", "wktNbr": 6, "wktOver": 28.3, "wktRuns": 8 },
            wkt_7: { "batName": "Hasan Ali", "wktNbr": 7, "wktOver": 30.4, "wktRuns": 5 },
            wkt_8: { "batName": "Shaheen Afridi", "wktNbr": 8, "wktOver": 32.1, "wktRuns": 3 },
            wkt_9: { "batName": "Mohammad Amir", "wktNbr": 9, "wktOver": 35.2, "wktRuns": 2 },
            wkt_10: { "batName": "Junaid Khan", "wktNbr": 10, "wktOver": 37.1, "wktRuns": 1 },
        }
        ,
        scoreDetails: {
            overs: 50,
            runRate: 6.80,
            runs: 340,
            wickets: 8
        }
    },
    team_2: {
        name: "India",
        batsmen: [
            { name: 'Virat Kohli', runs: 45, balls: 40, fours: 5, sixes: 1, strikeRate: 112.50, out: 'caught', fielder: 'Rizwan', bowler: 'Shaheen' },
            { name: 'Rohit Sharma', runs: 30, balls: 27, fours: 4, sixes: 1, strikeRate: 111.11, out: 'run out', fielder: 'Rizwan' },
            { name: 'Shikhar Dhawan', runs: 25, balls: 35, fours: 2, sixes: 0, strikeRate: 71.43, out: 'bowled', bowler: 'Rauf' },
            { name: 'KL Rahul', runs: 40, balls: 45, fours: 3, sixes: 1, strikeRate: 88.89, out: 'lbw', bowler: 'Rauf' },
            { name: 'Rishabh Pant', runs: 10, balls: 12, fours: 1, sixes: 0, strikeRate: 83.33, out: 'not out' },
            { name: 'Hardik Pandya', runs: 18, balls: 15, fours: 2, sixes: 0, strikeRate: 120.00, out: 'caught', fielder: 'Shadab' },
            { name: 'Ravindra Jadeja', runs: 9, balls: 8, fours: 1, sixes: 0, strikeRate: 112.50, out: 'lbw', bowler: 'Shadab' },
            { name: 'Bhuvneshwar Kumar', runs: 4, balls: 5, fours: 0, sixes: 0, strikeRate: 80.00, out: 'caught', fielder: 'Shadab' },
            { name: 'Jasprit Bumrah', runs: 3, balls: 4, fours: 0, sixes: 0, strikeRate: 75.00, out: 'not out' },
            { name: 'Mohammed Shami', runs: 2, balls: 3, fours: 0, sixes: 0, strikeRate: 66.67, out: 'caught', fielder: 'Hasan' },
            { name: 'Kuldeep Yadav', runs: 1, balls: 2, fours: 0, sixes: 0, strikeRate: 50.00, out: 'not out' },
        ],
        bowlers: [
            { name: 'Jasprit Bumrah', overs: 10, maidens: 1, runs: 55, wickets: 3, economy: 5.50 },
            { name: 'Mohammed Shami', overs: 9, maidens: 0, runs: 42, wickets: 1, economy: 4.67 },
            { name: 'Deepak Chahar', overs: 7, maidens: 0, runs: 32, wickets: 1, economy: 4.57 },
            { name: 'Bhuvneshwar Kumar', overs: 8, maidens: 0, runs: 35, wickets: 1, economy: 4.38 },
            { name: 'Kuldeep Yadav', overs: 6, maidens: 0, runs: 25, wickets: 0, economy: 4.17 },
            { name: 'Ravindra Jadeja', overs: 5, maidens: 0, runs: 20, wickets: 0, economy: 4.00 },
        ],
        partnershipsData: {
            pat_1: { bat1Name: "Virat Kohli", bat1Runs: 50, bat2Name: "Rohit Sharma", bat2Runs: 40, totalRuns: 90, totalBalls: 70 },
            pat_2: { bat1Name: "Shikhar Dhawan", bat1Runs: 25, bat2Name: "KL Rahul", bat2Runs: 30, totalRuns: 55, totalBalls: 45 },
            pat_3: { bat1Name: "Suryakumar Yadav", bat1Runs: 35, bat2Name: "Hardik Pandya", bat2Runs: 15, totalRuns: 50, totalBalls: 40 },
            pat_4: { bat1Name: "Rishabh Pant", bat1Runs: 20, bat2Name: "Deepak Hooda", bat2Runs: 10, totalRuns: 30, totalBalls: 25 },
            pat_5: { bat1Name: "Shubman Gill", bat1Runs: 45, bat2Name: "Ishan Kishan", bat2Runs: 30, totalRuns: 75, totalBalls: 60 },
            pat_6: { bat1Name: "Ravindra Jadeja", bat1Runs: 15, bat2Name: "Bhuvneshwar Kumar", bat2Runs: 10, totalRuns: 25, totalBalls: 20 },
            pat_7: { bat1Name: "Yuzvendra Chahal", bat1Runs: 5, bat2Name: "Mohammad Shami", bat2Runs: 8, totalRuns: 13, totalBalls: 12 }
        }
        ,

        wicketsData: {
            wkt_1: { "batName": "Rohit Sharma", "wktNbr": 1, "wktOver": 14.3, "wktRuns": 55 },
            wkt_2: { "batName": "Shubman Gill", "wktNbr": 2, "wktOver": 9.2, "wktRuns": 24 },
            wkt_3: { "batName": "Virat Kohli", "wktNbr": 3, "wktOver": 12.4, "wktRuns": 38 },
            wkt_4: { "batName": "KL Rahul", "wktNbr": 4, "wktOver": 16.1, "wktRuns": 33 },
            wkt_5: { "batName": "Hardik Pandya", "wktNbr": 5, "wktOver": 19.2, "wktRuns": 18 },
            wkt_6: { "batName": "Suryakumar Yadav", "wktNbr": 6, "wktOver": 21.3, "wktRuns": 27 },
            wkt_7: { "batName": "Rishabh Pant", "wktNbr": 7, "wktOver": 23.4, "wktRuns": 42 },
            wkt_8: { "batName": "Axar Patel", "wktNbr": 8, "wktOver": 25.5, "wktRuns": 11 },
            wkt_9: { "batName": "Jasprit Bumrah", "wktNbr": 9, "wktOver": 28.6, "wktRuns": 5 },
            wkt_10: { "batName": "Mohammad Shami", "wktNbr": 10, "wktOver": 30.1, "wktRuns": 3 },
        },
        scoreDetails: {
            overs: 37.3,
            runRate: 4.80,
            runs: 158,
            wickets: 10
        }
    },

};
