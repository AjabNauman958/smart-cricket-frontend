import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import fullranking from '../images/fullranking.png';
import '../css/comparison.css';
import Footer from './Footer';

const FullRanking = () => {
    const [rankingType, setRankingType] = useState('');
    const [gender, setGender] = useState('');
    const [format, setFormat] = useState('');
    const [category, setCategory] = useState('');
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);

    const handleRankingTypeChange = (e) => {
        setRankingType(e.target.value);
        setGender('');
        setFormat('');
        setCategory('');
        setPlayers([]);
        setTeams([]);
        toast.success(`Selected ranking type: ${e.target.value}`);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
        setFormat('');
        setCategory('');
        setPlayers([]);
        toast.success(`Selected gender: ${e.target.value}`);
    };

    const handleFormatChange = (e) => {
        setFormat(e.target.value);
        setCategory('');
        setPlayers([]);
        setTeams(generateTeams(10));
        toast.success(`Selected format: ${e.target.value}`);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setPlayers(generatePlayers(20, gender));
        toast.success(`Selected category: ${e.target.value}`);
    };

    const loadMorePlayers = () => {
        setPlayers(prevPlayers => [...prevPlayers, ...generatePlayers(20, gender)]);
    };

    return (
        <div>
            <Navbar />
            <div className="hero bg-white mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse sm:text-center lg:text-start">
                    <img
                        src={fullranking}
                        className="rounded-2xl max-w-xs animated-babarimage"
                        alt="Full Ranking"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">
                            <span className='text-green-900'>ICC</span> World <span className='text-green-900'>Rankings</span>
                        </h1>
                        <p className="py-6">
                            The ICC World Rankings provide an official measure of the performance of cricket teams and players across different formats, including Test, ODI, and T20I.
                        </p>
                        <Link to='/ranking'>
                            <button className="btn btn-warning text-white">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 gap-4 p-4 mt-20">
                <div className="bg-white p-4 rounded-lg shadow-lg transition-all duration-500">
                    <div className="mb-4">
                        <label className="block mb-2 text-yellow-500 font-bold text-2xl">Select Ranking Type</label>
                        <select
                            className="w-full p-2 border rounded-lg"
                            value={rankingType}
                            onChange={handleRankingTypeChange}
                        >
                            <option value="" disabled>Select Ranking Type</option>
                            <option value="player">Player Ranking</option>
                            <option value="team">Team Ranking</option>
                        </select>
                    </div>

                    {rankingType === 'player' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 transition-all duration-500">
                            <div>
                                <label className="block mb-2">Select Gender</label>
                                <select
                                    className="w-full p-2 border rounded-lg"
                                    value={gender}
                                    onChange={handleGenderChange}
                                    disabled={!rankingType}
                                >
                                    <option value="" disabled>Select Gender</option>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2">Select Format</label>
                                <select
                                    className="w-full p-2 border rounded-lg"
                                    value={format}
                                    onChange={handleFormatChange}
                                    disabled={!gender}
                                >
                                    <option value="" disabled>Select Format</option>
                                    <option value="test">Test</option>
                                    <option value="odi">ODI</option>
                                    <option value="t20i">T20I</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2">Select Category</label>
                                <select
                                    className="w-full p-2 border rounded-lg"
                                    value={category}
                                    onChange={handleCategoryChange}
                                    disabled={!format}
                                >
                                    <option value="" disabled>Select Category</option>
                                    <option value="batting">Batting</option>
                                    <option value="bowling">Bowling</option>
                                    <option value="all-rounder">All-Rounder</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {rankingType === 'team' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 transition-all duration-500">
                            <div>
                                <label className="block mb-2">Select Format</label>
                                <select
                                    className="w-full p-2 border rounded-lg"
                                    value={format}
                                    onChange={handleFormatChange}
                                    disabled={!rankingType}
                                >
                                    <option value="" disabled>Select Format</option>
                                    <option value="test">Test</option>
                                    <option value="odi">ODI</option>
                                    <option value="t20i">T20I</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {category && rankingType === 'player' && (
                        <>
                            <h2 className="text-2xl font-bold text-blue-900 mb-2">{`${gender.toUpperCase()} ${format.toUpperCase()} ${category.toUpperCase()} RANKINGS`}</h2>
                            <p className="text-gray-600 mb-4">Last Updated - 26 July 2024</p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">Pos</th>
                                            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">Player</th>
                                            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">Matches</th>
                                            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">Pts</th>
                                            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {players.map((player, index) => (
                                            <tr key={index} className="border-b overflow-auto">
                                                <td className="py-2 px-4">{player.pos}</td>
                                                <td className="py-2 px-4">{player.name}</td>
                                                <td className="py-2 px-4">{player.matches}</td>
                                                <td className="py-2 px-4">{player.points}</td>
                                                <td className="py-2 px-4">{player.rating}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button
                                className="mt-4 p-2 bg-blue-900 text-white rounded-lg"
                                onClick={loadMorePlayers}
                            >
                                Load More
                            </button>
                        </>
                    )}

                    {format && rankingType === 'team' && (
                        <>
                            <h2 className="text-2xl font-bold text-blue-900 mb-2">{`${format.toUpperCase()} TEAM RANKINGS`}</h2>
                            <p className="text-gray-600 mb-4">Last Updated - 26 July 2024</p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">Pos</th>
                                            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">Team</th>
                                            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">Matches</th>
                                            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">Pts</th>
                                            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {teams.map((team, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="py-2 px-4">{team.pos}</td>
                                                <td className="py-2 px-4">{team.name}</td>
                                                <td className="py-2 px-4">{team.matches}</td>
                                                <td className="py-2 px-4">{team.points}</td>
                                                <td className="py-2 px-4">{team.rating}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
                <ToastContainer />
            </div>
            <Footer />
        </div>
    );
};

const generatePlayers = (num, gender) => {
    const maleNames = ["Virat Kohli", "Joe Root", "Kane Williamson", "Steve Smith", "David Warner", "AB de Villiers", "Chris Gayle", "Rohit Sharma", "Babar Azam", "Faf du Plessis"];
    const femaleNames = ["Mithali Raj", "Ellyse Perry", "Meg Lanning", "Suzie Bates", "Stafanie Taylor", "Harmanpreet Kaur", "Smriti Mandhana", "Heather Knight", "Sophie Devine", "Amelia Kerr"];
    const players = [];
    const names = gender === 'men' ? maleNames : femaleNames;

    for (let i = 1; i <= num; i++) {
        const nameIndex = (i - 1) % names.length;
        players.push({
            pos: i.toString().padStart(2, '0'),
            name: names[nameIndex],
            matches: Math.floor(Math.random() * 50) + 1,
            points: Math.floor(Math.random() * 5000) + 1000,
            rating: Math.floor(Math.random() * 200) + 50
        });
    }
    return players;
};

const generateTeams = (num) => {
    const teams = ['India', 'Australia', 'South Africa', 'Pakistan', 'New Zealand', 'England'];
    const teamRankings = [];
    for (let i = 1; i <= num; i++) {
        const teamIndex = (i - 1) % teams.length;
        teamRankings.push({
            pos: i.toString().padStart(2, '0'),
            name: teams[teamIndex],
            matches: Math.floor(Math.random() * 50) + 1,
            points: Math.floor(Math.random() * 5000) + 1000,
            rating: Math.floor(Math.random() * 200) + 50
        });
    }
    return teamRankings;
};

export default FullRanking;
