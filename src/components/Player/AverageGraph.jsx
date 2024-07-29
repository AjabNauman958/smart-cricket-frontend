import React from 'react';
import Graph from '../images/playerperformancce.png';
import { Link } from 'react-router-dom';

const AverageGraph = () => {
  return (
    <div className="flex flex-col items-center justify-center  p-4 dark:text-white text-black">
      <div className="flex flex-col md:flex-row dark:text-white text-black p-4 rounded-lg shadow-lg w-full max-w-6xl flex-wrap" >
        {/* Left Div */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start p-4">
          <h2 className="text-2xl font-bold mb-4">Year wise pleyer performance visuallizations  </h2>
          <p className="text-lg ">
            The team's batting average indicates their overall performance and consistency. It reflects the
            players' ability to contribute runs and maintain a stable batting lineup, which is crucial for winning matches.
          </p>
          <Link to='/MatchAnalysis' className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
            Watch Full Analysis
          </Link>
        </div>

        {/* Right Div */}
        <div className="flex-1 flex justify-center items-center p-4">
          <img src={Graph} alt="Graph" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default AverageGraph;
