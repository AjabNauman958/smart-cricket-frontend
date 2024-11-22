import React from 'react';
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import fullranking from "../images/fullranking.png";
import Footer from "./Footer.jsx";
import { useLocation } from 'react-router-dom';
import '../css/fullRankingPage.css';

const FullRankingPage = () => {
    const location = useLocation();
    const { title, teams } = location.state; // Passed data from the "Full Ranking" button.

    return (
        <>
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
                            <span className="text-green-800">ICC</span> World{" "}
                            <span className="text-green-900">Rankings</span>
                        </h1>
                        <p className="py-6">
                            The ICC World Rankings provide an official measure of the
                            performance of cricket teams and players across different formats,
                            including Test, ODI, and T20I.
                        </p>
                        <Link to="/ranking">
                            <button className="btn btn-warning text-white">
                                All Rankings
                            </button>
                        </Link>
                    </div>
                </div>
            </div>



            <div className="full-ranking-page">
                <h1 className="text-center text-2xl font-bold">{title}</h1>



                {/* Rankings Table */}
                <div className="ranking-table-container mt-6 overflow-x-hidden">
                    <table className="ranking-table w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-teal-600 text-white">
                                <th className="px-4 py-2">Pos</th>
                                <th className="px-4 py-2">Team</th>
                                <th className="px-4 py-2">Pts</th>

                            </tr>
                        </thead>
                        <tbody>
                            {teams.map((team, index) => (
                                <tr key={team.rank} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                    <td className="px-4 py-2 text-center font-bold">{team.rank}</td>
                                    <td className="px-4 py-2 flex items-center">
                                        <img src={team.flag} alt={`${team.country} flag`} className="w-6 h-4 mr-2" />
                                        {team.teamName || team.player}
                                    </td>
                                    <td className="px-4 py-2 text-center">{team.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FullRankingPage;
