import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import backgroundImage from '../components/images/ranking.jpg'; 
import '../components/css/home.css'; 
import '../components/css/matches.css'; 

import CricketRankings from './CricketRankings';




const Ranking = () => {




  return (
    <div>

<Navbar />
      <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div className="dark-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="content" style={{ width: '50%', textAlign: 'center', color: '#fff' }}>
            <h1 className="hero-heading" style={{ fontWeight: 'bold' }}>ICC world Rankings</h1>
            <p className="hero-text">
            Track the top-performing teams and players in T20, ODI, and Test formats. Stay updated with the latest global standings
            </p>
          </div>
        </div>
      </div>

      <h1 className='text-4xl	font-semibold	text-center	mt-10 mb-10 '><span className='text-green-500'>Men's</span> Team Ranking </h1>

   

    <CricketRankings/>
      <Footer/>
    </div>
  )
}

export default Ranking