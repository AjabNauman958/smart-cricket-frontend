import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion'; // Import framer-motion
import backgroundImage from '../images/matches.jpg';
import '../css/home.css';
import '../css/matches.css';
import MatchCardList from './MatchCardList';
import ScrollToTopButton from './scrollupbtn/ScrollToTopButton';

const Matches = () => {
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
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <motion.h1 className="mb-5 text-5xl font-bold" initial={{ opacity: 0, y: 30 }} // Start with opacity 0 and moved down
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move up to original position
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the paragraph is in view
              transition={{ duration: 0.6, delay: 0.2 }} // Duration and delay of animation
            >Matches </motion.h1>
            <motion.p className="mb-5" initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and moved down
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move up to original position
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the heading is in view
              transition={{ duration: 0.6 }} // Duration of animation
            >
              Explore thrilling recent matches and anticipate exciting upcoming clashes.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Recent Matches Section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initially hidden and slightly shifted
        whileInView={{ opacity: 1, y: 0 }} // Fade and slide up
        transition={{ duration: 0.6, ease: 'easeOut' }} // Smooth transition
        viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of the section is in view
      >
        <h1 className="text-4xl font-semibold text-center mt-5">
          <span className="text-green-500">Recent</span> Matches
        </h1>
        {/* Initial MatchCardList for recent matches */}
        <MatchCardList league="recent" />
      </motion.div>

      {/* Upcoming Matches Section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-4xl font-semibold text-center mt-5">
          <span className="text-yellow-500">Upcoming</span> Matches
        </h1>
        {/* Initial MatchCardList for upcoming matches */}
        <MatchCardList league="upcoming" />
      </motion.div>

      {/* Scroll-to-top button */}
      <ScrollToTopButton />

      <Footer />
    </div>
  );
};

export default Matches;
