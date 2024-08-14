import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import fullranking from "../images/fullranking.png";
import "../css/comparison.css";
import Footer from "./Footer.jsx";
import { teamRankings, playerRankings } from "./data.js"; // Import the dummy data

const FullRanking = () => {
    const [rankingType, setRankingType] = useState("");
    const [gender, setGender] = useState("");
    const [format, setFormat] = useState("");
    const [category, setCategory] = useState("");

    const handleRankingTypeChange = (e) => {
        setRankingType(e.target.value);
        setGender("");
        setFormat("");
        setCategory("");
        toast.success(`Selected ranking type: ${e.target.value}`);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
        setFormat("");
        setCategory("");
        toast.success(`Selected gender: ${e.target.value}`);
    };

    const handleFormatChange = (e) => {
        setFormat(e.target.value);
        setCategory("");
        toast.success(`Selected format: ${e.target.value}`);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        toast.success(`Selected category: ${e.target.value}`);
    };

    const getRankingData = () => {
        if (rankingType === "team") {
            return teamRankings[format];
        } else if (rankingType === "player") {
            return playerRankings[gender]?.[format]?.[category] || [];
        }
        return [];
    };

    const rankings = getRankingData();

    return (
        <div>
            <Navbar />
            <div className="hero  mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse sm:text-center lg:text-start">
                    <img
                        src={fullranking}
                        className="rounded-2xl max-w-xs animated-babarimage"
                        alt="Full Ranking"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">
                            <span className="text-green-900">ICC</span> World{" "}
                            <span className="text-green-900">Rankings</span>
                        </h1>
                        <p className="py-6">
                            The ICC World Rankings provide an official measure of the
                            performance of cricket teams and players across different formats,
                            including Test, ODI, and T20I.
                        </p>
                        <Link to="/ranking">
                            <button className="btn btn-warning text-white">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 gap-4 p-4 mt-20">
                <div className="bg-white p-4 rounded-lg shadow-lg transition-all duration-500">
                    <div className="mb-4">
                        <label className="block mb-2 text-yellow-500 font-bold text-2xl">
                            Select Ranking Type
                        </label>
                        <select
                            className="w-full p-2 border rounded-lg"
                            value={rankingType}
                            onChange={handleRankingTypeChange}
                        >
                            <option value="" disabled>
                                Select Ranking Type
                            </option>
                            <option value="player">Player Ranking</option>
                            <option value="team">Team Ranking</option>
                        </select>
                    </div>

                    {rankingType === "player" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block mb-2 text-yellow-500 font-bold text-2xl">
                                    Select Gender
                                </label>
                                <select
                                    className="w-full p-2 border rounded-lg"
                                    value={gender}
                                    onChange={handleGenderChange}
                                >
                                    <option value="" disabled>
                                        Select Gender
                                    </option>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-yellow-500 font-bold text-2xl">
                                    Select Format
                                </label>
                                <select
                                    className="w-full p-2 border rounded-lg"
                                    value={format}
                                    onChange={handleFormatChange}
                                >
                                    <option value="" disabled>
                                        Select Format
                                    </option>
                                    <option value="test">Test</option>
                                    <option value="odi">ODI</option>
                                    <option value="t20">T20I</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-yellow-500 font-bold text-2xl">
                                    Select Category
                                </label>
                                <select
                                    className="w-full p-2 border rounded-lg"
                                    value={category}
                                    onChange={handleCategoryChange}
                                >
                                    <option value="" disabled>
                                        Select Category
                                    </option>
                                    <option value="batting">Batting</option>
                                    <option value="bowling">Bowling</option>
                                    <option value="AllRounder">All-rounder</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {rankingType === "team" && (
                        <div className="mb-4">
                            <label className="block mb-2 text-yellow-500 font-bold text-2xl">
                                Select Format
                            </label>
                            <select
                                className="w-full p-2 border rounded-lg"
                                value={format}
                                onChange={handleFormatChange}
                            >
                                <option value="" disabled>
                                    Select Format
                                </option>
                                <option value="test">Test</option>
                                <option value="odi">ODI</option>
                                <option value="t20i">T20I</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-10 p-4  overflow-x-auto">
                {rankings && rankings.length > 0 ? (
                    <table className="min-w-full bg-white border  border-gray-200 rounded-lg shadow-lg">
                        <thead className="bg-green-500 text-yellow-400">
                            <tr >
                                <th className=" py-3 px-4 uppercase font-semibold text-base">
                                    Position
                                </th>
                                <th className=" py-3 px-4 uppercase font-semibold text-base">
                                    Name
                                </th>
                                <th className=" py-3 px-4 uppercase font-semibold text-base">
                                    Matches
                                </th>
                                <th className=" py-3 px-4 uppercase font-semibold text-base">
                                    Points
                                </th>
                                <th className=" py-3 px-4 uppercase font-semibold text-base">
                                    Rating
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rankings.map((ranking, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-100 transition-all duration-300"
                                >
                                    <td className="py-3 px-4 border-b border-gray-200">
                                        {ranking.pos}
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-200">
                                        {ranking.name}
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-200">
                                        {ranking.matches}
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-200">
                                        {ranking.points}
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-200">
                                        {ranking.rating}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500 text-center">
                        No rankings data available. Please select the correct options.
                    </p>
                )}
            </div>

            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default FullRanking;
