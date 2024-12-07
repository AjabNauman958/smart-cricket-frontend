import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/favouritesSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { matchCardData } from './matchData';
import { motion } from 'framer-motion'; // Import framer-motion for scroll animation

const MatchCardList = ({ league }) => {
  const [visibleMatches, setVisibleMatches] = useState(8); // Initially, 8 matches are visible
  const [showMore, setShowMore] = useState(true); // State to track if more matches are visible
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  const isFavourite = (matchNumber) =>
    favourites.some((fav) => fav.matchNumber === matchNumber);

  const handleFavouriteClick = (matchDetails) => {
    if (!isLoggedIn) {
      toast.error('Please log in to add matches to favourites!');
      return;
    }

    if (isFavourite(matchDetails.matchNumber)) {
      dispatch(removeFavourite(matchDetails));
      toast.info('Removed from favourites.');
    } else {
      dispatch(addFavourite(matchDetails));
      toast.success('Added to favourites!');
    }
  };

  const showMoreMatches = () => {
    setVisibleMatches((prevCount) => prevCount + 8); // Load next 8 matches
  };

  const hideMatches = () => {
    setVisibleMatches(8); // Reset back to only 8 matches
    setShowMore(true); // Show "View More Matches" button again
  };

  const matches = matchCardData[league] || [];

  if (matches.length === 0) {
    return <div>No matches available for the selected league.</div>;
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div
        className="flex mt-10"
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}
      >
        {matches.slice(0, visibleMatches).map((matchDetails, index) => (
          <motion.div
            key={index}
            className="match-card"
            initial={{ opacity: 0, y: 50 }} // Initially hidden and slightly shifted
            whileInView={{ opacity: 1, y: 0 }} // Fade and slide up
            transition={{ duration: 0.6, ease: 'easeOut' }} // Smooth transition
            viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of the section is in view
          >
            <div className="header">
              <h2>
                {matchDetails.matchNumber}. {matchDetails.league}, 2024
              </h2>
              <div className="badge">{matchDetails.format}</div>
            </div>
            <div className="time">Venue: {matchDetails.venue}</div>
            <div className="teams">
              {matchDetails.teams.map((team, teamIndex) => (
                <div className="team" key={teamIndex}>
                  <img src={team.logo} alt={team.name} />
                  <span>{team.name}</span>
                </div>
              ))}
            </div>
            <div className="time">{matchDetails.time}</div>
            <button
              className="favourite-button"
              onClick={() => handleFavouriteClick(matchDetails)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              {isFavourite(matchDetails.matchNumber) ? (
                <FaHeart style={{ color: 'red' }} />
              ) : (
                <FaRegHeart style={{ color: 'grey' }} />
              )}
              <span>{isFavourite(matchDetails.matchNumber) ? 'Remove from Favourites' : 'Add to Favourites'}</span>
            </button>

            {/* Conditionally render the 'View Analysis' button based on the league */}
            {league !== 'upcoming' && (
              <Link to="/MatchAnalysis" className="action-button">
                View Analysis &gt;
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Button to toggle "View More" or "Hide Matches" */}
      {matches.length > visibleMatches && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => {
              if (showMore) {
                showMoreMatches(); // Load more matches
                setShowMore(false); // Hide "View More Matches" button
              } else {
                hideMatches(); // Hide additional matches and show "View More"
              }
            }}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-500 mb-10"
          >
            {showMore ? 'View More Matches' : 'Hide Matches'}
          </button>
        </div>
      )}
    </>
  );
};

MatchCardList.propTypes = {
  league: PropTypes.string.isRequired,
};

export default MatchCardList;
