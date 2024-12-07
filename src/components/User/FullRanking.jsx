import React from 'react';
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import fullranking from "../images/fullranking.png";
import Footer from "./Footer.jsx";
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import framer-motion
import '../css/fullRankingPage.css';

const FullRankingPage = () => {
    const location = useLocation();
    const { title, teams } = location.state; // Passed data from the "Full Ranking" button.

    return (
        <>
            <Navbar />
            <div className="hero mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse sm:text-center lg:text-start">
                    <motion.img
                        src={fullranking}
                        className="rounded-2xl max-w-xs animated-babarimage"
                        alt="Full Ranking"
                        initial={{ opacity: 0, x: 100 }} // Start with opacity 0 and moved to the right
                        whileInView={{ opacity: 1, x: 0 }} // Fade in and move to original position
                        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the image is in view
                        transition={{ duration: 0.6 }} // Duration of animation
                    />
                    <div>
                        <motion.h1
                            className="text-5xl font-bold"
                            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and moved down
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up to original position
                            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the heading is in view
                            transition={{ duration: 0.6 }} // Duration of animation
                        >
                            <span className="text-green-800">ICC</span> World{" "}
                            <span className="text-green-900">Rankings</span>
                        </motion.h1>
                        <motion.p
                            className="py-6"
                            initial={{ opacity: 0, y: 30 }} // Start with opacity 0 and moved down
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and move up to original position
                            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the paragraph is in view
                            transition={{ duration: 0.6, delay: 0.2 }} // Duration and delay of animation
                        >
                            The ICC World Rankings provide an official measure of the
                            performance of cricket teams and players across different formats,
                            including Test, ODI, and T20I.
                        </motion.p>
                        <Link to="/ranking">
                            <button className="btn btn-warning text-white">
                                All Rankings
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <motion.div
                className="full-ranking-page"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-center text-2xl font-bold">{title}</h1>

                {/* Rankings Table */}
                <motion.div
                    className="ranking-table-container mt-6 overflow-x-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
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
                                <motion.tr
                                    key={team.rank}
                                    className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }} // Staggered animation
                                >
                                    <td className="px-4 py-2 text-center font-bold">{team.rank}</td>
                                    <td className="px-4 py-2 flex items-center">
                                        <img src={team.flag} alt={`${team.country} flag`} className="w-6 h-4 mr-2" />
                                        {team.teamName || team.player}
                                    </td>
                                    <td className="px-4 py-2 text-center">{team.points}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </motion.div>

            <Footer />
        </>
    );
};

export default FullRankingPage;
