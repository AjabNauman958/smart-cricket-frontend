import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
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
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Cricket Where Every Ball Counts
            </h1>
            <p className="mb-5">
              Dive into the thrilling world of cricket with insightful analysis,
              in-depth statistics, and captivating stories from the sport's rich
              history.
            </p>
            <Link to="/about">
              <button className="btn btn-warning text-white">About Us</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Matches section */}
      <div className="mb-52">
        <h1 className="text-4xl font-semibold text-center mt-5">
          <span className=" text-green-500"> Recent</span>
          <span className="text-yellow-500"> Matches</span>
        </h1>
        <MatchCardList league="recent" />

        <div>
          <Card />
        </div>
        <h1 className="text-4xl font-semibold text-center mt-10 mb-10">
          <span className="text-green-500">Men's</span> Team Ranking
        </h1>
        <CricketRankings />
      </div>
      <Footer />

      {/* Scroll-to-top button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
