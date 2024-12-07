import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion
import Card from "./Card";
import backgroundImage from "../images/bgimage.jpg";
import cardImage1 from "../images/psl.jpg";
import cardImage2 from "../images/ipl.png";
import cardImage3 from "../images/icc.jpg";
import cardImage4 from "../images/bigbash.png";
import "../css/home.css";
import CricketRankings from "./CricketRankings";
import Footer from "./Footer";
import MatchCardList from "./MatchCardList";
import ScrollToTopButton from "./scrollupbtn/ScrollToTopButton";

const Home = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <motion.h1 className="mb-5 text-5xl font-bold" initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and moved down
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move up to original position
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the heading is in view
              transition={{ duration: 0.6 }} // Duration of animation
            >
              Cricket Where Every Ball Counts
            </motion.h1>
            <motion.p className="mb-5" initial={{ opacity: 0, y: 30 }} // Start with opacity 0 and moved down
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move up to original position
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the paragraph is in view
              transition={{ duration: 0.6, delay: 0.2 }} // Duration and delay of animation
            >
              Dive into the thrilling world of cricket with insightful analysis,
              in-depth statistics, and captivating stories from the sport's rich
              history.
            </motion.p>
            <Link to="/about">
              <button className="btn btn-warning text-white">About Us</button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Matches section with animation */}
      <motion.div
        className="mb-52"
        initial={{ opacity: 0, y: 50 }} // Initially hidden
        whileInView={{ opacity: 1, y: 0 }} // Fade and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% is in view
      >
        <h1 className="text-4xl font-semibold text-center mt-5">
          <span className="text-green-500">Recent</span>
          <span className="text-yellow-500"> Matches</span>
        </h1>
        <MatchCardList league="recent" />

        <div>
          <Card />
        </div>
      </motion.div>

      {/* Team ranking section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-4xl font-semibold text-center mt-10 mb-10">
          <span className="text-green-500">Men's</span> Team Ranking
        </h1>
        <CricketRankings />
      </motion.div>

      <Footer />

      {/* Scroll-to-top button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
