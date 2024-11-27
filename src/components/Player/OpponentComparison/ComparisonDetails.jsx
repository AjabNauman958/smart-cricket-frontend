import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import babarhero from '../../images/babar.png';
import williamson from '../../images/williamson.png';
import '../../Player/css/OpponentComparison.css'
import { toast, ToastContainer } from 'react-toastify';
import { Bars } from 'react-loader-spinner'; // Import the loader

// Dummy player data name and country
const players = [
    { name: "Babar Azam", country: "Pakistan" },
    { name: "Virat Kohli", country: "India" },
    { name: "Steve Smith", country: "Australia" },
    { name: "Joe Root", country: "England" },
    { name: "Kane Williamson", country: "New Zealand" },
    { name: "Rohit Sharma", country: "India" },
    { name: "David Warner", country: "Australia" },
    { name: "AB de Villiers", country: "South Africa" },
    { name: "Faf du Plessis", country: "South Africa" },
    { name: "Ben Stokes", country: "England" },
    { name: "Quinton de Kock", country: "South Africa" },
    { name: "Aaron Finch", country: "Australia" },
    { name: "Marnus Labuschagne", country: "Australia" },
    { name: "Shai Hope", country: "West Indies" },
    { name: "Jos Buttler", country: "England" },
    { name: "Eoin Morgan", country: "England" },
    { name: "Shikhar Dhawan", country: "India" },
    { name: "Martin Guptill", country: "New Zealand" },
    { name: "Ross Taylor", country: "New Zealand" },
    { name: "Jason Roy", country: "England" },
    { name: "Jonny Bairstow", country: "England" },
    { name: "Rassie van der Dussen", country: "South Africa" },
    { name: "Rishabh Pant", country: "India" },
    { name: "Shubman Gill", country: "India" },
    { name: "Usman Khawaja", country: "Australia" },
    { name: "Travis Head", country: "Australia" },
    { name: "Mushfiqur Rahim", country: "Bangladesh" },
    { name: "Tamim Iqbal", country: "Bangladesh" },
    { name: "Mohammad Hafeez", country: "Pakistan" },
    { name: "Fakhar Zaman", country: "Pakistan" },
    { name: "Kusal Perera", country: "Sri Lanka" },
    { name: "Angelo Mathews", country: "Sri Lanka" },
    { name: "Dasun Shanaka", country: "Sri Lanka" },
    { name: "Liton Das", country: "Bangladesh" },
    { name: "Nicholas Pooran", country: "West Indies" },
    { name: "Shimron Hetmyer", country: "West Indies" },
    { name: "Brendon Taylor", country: "Zimbabwe" },
    { name: "Sikandar Raza", country: "Zimbabwe" },
    { name: "Hashim Amla", country: "South Africa" },
    { name: "JP Duminy", country: "South Africa" },
    { name: "Kagiso Rabada", country: "South Africa" },
    { name: "Pat Cummins", country: "Australia" },
    { name: "Mitchell Starc", country: "Australia" },
    { name: "Trent Boult", country: "New Zealand" },
    { name: "Tim Southee", country: "New Zealand" },
    { name: "Jasprit Bumrah", country: "India" },
    { name: "Mohammed Shami", country: "India" },
    { name: "Ravichandran Ashwin", country: "India" },
    { name: "Ravindra Jadeja", country: "India" },
    { name: "Nathan Lyon", country: "Australia" },
    { name: "James Anderson", country: "England" },
    { name: "Stuart Broad", country: "England" },
    { name: "Jofra Archer", country: "England" },
    { name: "Sam Curran", country: "England" },
    { name: "Shaheen Afridi", country: "Pakistan" },
    { name: "Hasan Ali", country: "Pakistan" },
    { name: "Shadab Khan", country: "Pakistan" },
    { name: "Imran Tahir", country: "South Africa" },
    { name: "Lungi Ngidi", country: "South Africa" },
    { name: "Josh Hazlewood", country: "Australia" },
    { name: "Adam Zampa", country: "Australia" },
    { name: "Adil Rashid", country: "England" },
    { name: "Mark Wood", country: "England" },
    { name: "Chris Woakes", country: "England" },
    { name: "Hardik Pandya", country: "India" },
    { name: "Axar Patel", country: "India" },
    { name: "Kuldeep Yadav", country: "India" },
    { name: "Bhuvneshwar Kumar", country: "India" },
    { name: "Yuzvendra Chahal", country: "India" },
    { name: "Dinesh Chandimal", country: "Sri Lanka" },
    { name: "Kusal Mendis", country: "Sri Lanka" },
    { name: "Wanindu Hasaranga", country: "Sri Lanka" },
    { name: "Mohammad Nabi", country: "Afghanistan" },
    { name: "Rashid Khan", country: "Afghanistan" },
    { name: "Mujeeb Ur Rahman", country: "Afghanistan" },
    { name: "Evin Lewis", country: "West Indies" },
    { name: "Sunil Narine", country: "West Indies" },
    { name: "Andre Russell", country: "West Indies" },
    { name: "Jason Holder", country: "West Indies" },
    { name: "Kieron Pollard", country: "West Indies" },
    { name: "Chris Gayle", country: "West Indies" },
    { name: "Dwayne Bravo", country: "West Indies" },
    { name: "Carlos Brathwaite", country: "West Indies" },
    { name: "Shannon Gabriel", country: "West Indies" },
    { name: "Kemar Roach", country: "West Indies" },
    { name: "Shane Dowrich", country: "West Indies" },
    { name: "Kraigg Brathwaite", country: "West Indies" },
    { name: "Roston Chase", country: "West Indies" },
    { name: "Jermaine Blackwood", country: "West Indies" },
    { name: "Kyle Mayers", country: "West Indies" },
    { name: "Nkrumah Bonner", country: "West Indies" },
    { name: "Alzarri Joseph", country: "West Indies" },
    { name: "Mayank Agarwal", country: "India" },
    { name: "Prithvi Shaw", country: "India" },
    { name: "Hanuma Vihari", country: "India" },
    { name: "Washington Sundar", country: "India" },
    { name: "Shardul Thakur", country: "India" },
    { name: "Ishant Sharma", country: "India" }
];


// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : players.filter(player =>
        player.name.toLowerCase().includes(inputValue)
    );
};

// When suggestion is clicked, Autosuggest needs to populate the input based on the clicked suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <div>
        {suggestion.name} ({suggestion.country})

    </div>
);
const ComparisonDetails = () => {


    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [comparisonType, setComparisonType] = useState('');
    const [playerOneInfo, setPlayerOneInfo] = useState(null);
    const [playerTwoInfo, setPlayerTwoInfo] = useState(null);
    const [error, setError] = useState('');
    const [suggestionsOne, setSuggestionsOne] = useState([]);
    const [suggestionsTwo, setSuggestionsTwo] = useState([]);
    const [activeFormat, setActiveFormat] = useState('Test'); // State to track active format
    const [isLoading, setIsLoading] = useState(true); // Track the loading state



    useEffect(() => {
        const comparisonContainer = document.querySelector('.comparison-container');
        const leftDiv = document.querySelector('.left-div');

        setTimeout(() => {
            comparisonContainer.classList.add('show');
            leftDiv.classList.add('show');
        }, 100); // Small delay to ensure the transition is noticeable

        // Simulate a delay for loader, replace this with actual API call logic
        setTimeout(() => setIsLoading(false), 2000); // Adjust the delay as needed
    }, []);
    const handleCompare = () => {
        // Validate player inputs
        const playerOneData = players.find(player => player.name === playerOne);
        const playerTwoData = players.find(player => player.name === playerTwo);

        if (!playerOneData) {
            toast.error('Please enter a valid name for Player One.');
            return;
        }
        if (!playerTwoData) {
            toast.error('Please enter a valid name for Player Two.');
            return;
        }
        if (!comparisonType) {
            toast.error('Please select a comparison type.');
            return;
        }

        // Start loading spinner
        setIsLoading(true);

        // Simulate fetching player information
        setTimeout(() => {
            setPlayerOneInfo({
                name: playerOneData.name,
                role: comparisonType === 'Bat vs Bowl' ? 'Batter' : comparisonType,
                country: playerOneData.country,
                image: babarhero,
                stats: {
                    Test: { matches: 50, innings: 92, runs: 798, highestScore: 95, hundreds: 0, fifties: 3, fours: 50, average: 17.34, strikeRate: 140.00, notOuts: 4 },
                    ODI: { matches: 90, innings: 88, runs: 4321, highestScore: 139, hundreds: 14, fifties: 22, fours: 350, average: 53.72, strikeRate: 92.37, notOuts: 8 },
                    T20: { matches: 95, innings: 94, runs: 3955, highestScore: 122, hundreds: 3, fifties: 36, fours: 423, average: 41.19, strikeRate: 129.97, notOuts: 9 },
                },
            });
            setPlayerTwoInfo({
                name: playerTwoData.name,
                role: comparisonType === 'Bat vs Bowl' ? 'Bowler' : comparisonType,
                country: playerTwoData.country,
                image: williamson,
                stats: {
                    Test: { matches: 85, innings: 150, runs: 7289, highestScore: 251, hundreds: 23, fifties: 34, fours: 580, average: 52.47, strikeRate: 51.21, notOuts: 15 },
                    ODI: { matches: 151, innings: 148, runs: 6213, highestScore: 148, hundreds: 13, fifties: 39, fours: 400, average: 47.86, strikeRate: 88.15, notOuts: 10 },
                    T20: { matches: 74, innings: 73, runs: 2021, highestScore: 95, hundreds: 0, fifties: 13, fours: 180, average: 33.69, strikeRate: 121.65, notOuts: 7 },
                },
            });

            // Stop loading spinner
            setIsLoading(false);
        }, 2000); // Simulate a 2-second API call
    };



    return (
        <div>
            <ToastContainer />
            <div className="player-inputs mt-8 p-4 text-center ">
                {error && <p className="text-red-500 mb-4">{error}</p>}

                {/* Player One and Player Two inputs */}
                <div className="mb-4 flex text-center justify-center flex-wrap">
                    <div className="mr-4">
                        <label className="block  mb-2 font-bold">Your Player:</label>
                        <Autosuggest
                            suggestions={suggestionsOne}
                            onSuggestionsFetchRequested={({ value }) => setSuggestionsOne(getSuggestions(value))}
                            onSuggestionsClearRequested={() => setSuggestionsOne([])}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={{
                                value: playerOne,
                                onChange: (e, { newValue }) => setPlayerOne(newValue),
                                className: "p-2 border border-gray-300 rounded dark:text-white dark:bg-gray-900"
                            }}
                        />
                    </div>
                    <div>
                        <label className="block  mb-2 font-bold">Opponent Player:</label>
                        <Autosuggest
                            suggestions={suggestionsTwo}
                            onSuggestionsFetchRequested={({ value }) => setSuggestionsTwo(getSuggestions(value))}
                            onSuggestionsClearRequested={() => setSuggestionsTwo([])}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={{
                                value: playerTwo,
                                onChange: (e, { newValue }) => setPlayerTwo(newValue),
                                className: "p-2 border border-gray-300 rounded dark:text-white dark:bg-gray-900"
                            }}
                        />
                    </div>
                </div>

                {/* Comparison Type dropdown */}
                <div className="mb-4">
                    <label className="block mb-2 text-center font-bold">Comparison Type:</label>
                    <select
                        value={comparisonType}
                        onChange={(e) => setComparisonType(e.target.value)}
                        className="p-2 border border-gray-300 rounded w-full dark:text-white dark:bg-gray-900"
                    >
                        <option value="">Select Comparison Type</option>
                        <option value="Batting">Batting</option>
                        <option value="Bowling">Bowling</option>
                        <option value="Bat vs Bowl">Bat vs Bowl</option>
                    </select>
                </div>

                {/* Compare button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleCompare}
                        className="bg-yellow-300 text-white p-2 rounded hover:bg-yellow-500"
                    >
                        Compare These Players
                    </button>
                </div>
            </div>
            {/* Loader */}
            {isLoading && (
                <div className=" flex justify-center mt-8">
                    <Bars
                        height="80"
                        width="80"
                        color="#00A09A"
                        ariaLabel="bars-loading"
                        visible={true}
                    />
                </div>
            )}
            {/* Comparison Result */}
            {!isLoading && playerOneInfo && playerTwoInfo && (
                <div className="comparison-result mt-8 p-4 text-center">
                    <h3 className="text-2xl font-bold mb-4">Comparison Result</h3>
                    <div className="player-info flex justify-center items-center">
                        <div className="player-card p-4 m-4">
                            <img src={playerOneInfo.image} alt={playerOneInfo.name} className="w-32 h-auto mb-2" />
                            <h4 className="text-xl font-bold">{playerOneInfo.name}</h4>
                            <p>{playerOneInfo.role}</p>
                            <p>{playerOneInfo.country}</p>
                        </div>
                        <div className="player-card p-4 m-4">
                            <img src={playerTwoInfo.image} alt={playerTwoInfo.name} className="w-32 h-auto mb-2" />
                            <h4 className="text-xl font-bold">{playerTwoInfo.name}</h4>
                            <p>{playerTwoInfo.role}</p>
                            <p>{playerTwoInfo.country}</p>
                        </div>
                    </div>

                    {/* Format Buttons */}
                    <div className="format-buttons flex justify-center mt-4">
                        <button
                            onClick={() => setActiveFormat('Test')}
                            className={`font-semibold px-5 py-2 m-2 rounded-md dark:text-black hover:bg-[#44b8b2] duration-300 ${activeFormat === 'Test' ? 'bg-[#00A09A] ' : 'bg-gray-200'}`}
                        >
                            Test
                        </button>
                        <button
                            onClick={() => setActiveFormat('ODI')}
                            className={`font-semibold px-5 py-2 m-2 rounded-md dark:text-black hover:bg-[#44b8b2] duration-300  ${activeFormat === 'ODI' ? 'bg-[#00A09A]   ' : 'bg-gray-200'}`}
                        >
                            ODI
                        </button>
                        <button
                            onClick={() => setActiveFormat('T20')}
                            className={`font-semibold px-5 py-2 m-2 rounded-md dark:text-black hover:bg-[#44b8b2] duration-300 ${activeFormat === 'T20' ? 'bg-[#00A09A] ' : 'bg-gray-200'}`}
                        >
                            T20
                        </button>
                    </div>

                    {/* Displaying Stats */}
                    <div className="mt-4">
                        <h4 className="text-2xl font-bold mb-4 text-center ">{activeFormat} Stats</h4>
                        <div className="flex justify-around flex-wrap ">
                            <div className="player-stats  p-6 m-4 rounded-lg  transition-transform duration-500 ease-in-out transform hover:scale-105 ">
                                <h5 className="text-lg text-[#00A09A] font-bold mb-2 ">{playerOneInfo.name} ({playerOneInfo.country})</h5>
                                <p className="mb-1">Matches: {playerOneInfo.stats[activeFormat].matches}</p>
                                <p className="mb-1">Innings: {playerOneInfo.stats[activeFormat].innings}</p>
                                <p className="mb-1">Runs: {playerOneInfo.stats[activeFormat].runs}</p>
                                <p className="mb-1">Highest Score: {playerOneInfo.stats[activeFormat].highestScore}</p>
                                <p className="mb-1">Hundreds: {playerOneInfo.stats[activeFormat].hundreds}</p>
                                <p className="mb-1">Fifties: {playerOneInfo.stats[activeFormat].fifties}</p>
                                <p className="mb-1">Fours: {playerOneInfo.stats[activeFormat].fours}</p>
                                <p className="mb-1">Average: {playerOneInfo.stats[activeFormat].average}</p>
                                <p className="mb-1">Strike Rate: {playerOneInfo.stats[activeFormat].strikeRate}</p>
                                <p className="mb-1">Not Outs: {playerOneInfo.stats[activeFormat].notOuts}</p>
                            </div>
                            <div className="player-stats  p-6 m-4 rounded-lg  transition-transform duration-500 ease-in-out transform hover:scale-105 ">
                                <h5 className="text-lg font-bold mb-2 text-[#00A09A]">{playerTwoInfo.name} ({playerTwoInfo.country})</h5>
                                <p className="mb-1">Matches: {playerTwoInfo.stats[activeFormat].matches}</p>
                                <p className="mb-1">Innings: {playerTwoInfo.stats[activeFormat].innings}</p>
                                <p className="mb-1">Runs: {playerTwoInfo.stats[activeFormat].runs}</p>
                                <p className="mb-1">Highest Score: {playerTwoInfo.stats[activeFormat].highestScore}</p>
                                <p className="mb-1">Hundreds: {playerTwoInfo.stats[activeFormat].hundreds}</p>
                                <p className="mb-1">Fifties: {playerTwoInfo.stats[activeFormat].fifties}</p>
                                <p className="mb-1">Fours: {playerTwoInfo.stats[activeFormat].fours}</p>
                                <p className="mb-1">Average: {playerTwoInfo.stats[activeFormat].average}</p>
                                <p className="mb-1">Strike Rate: {playerTwoInfo.stats[activeFormat].strikeRate}</p>
                                <p className="mb-1">Not Outs: {playerTwoInfo.stats[activeFormat].notOuts}</p>
                            </div>
                        </div>
                    </div>


                </div>
            )}

        </div>


    );
}

export default ComparisonDetails;
