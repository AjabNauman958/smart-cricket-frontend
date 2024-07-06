import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import { Link } from 'react-router-dom';
import Card from './Card'; // Import the Card component
import backgroundImage from '../components/images/backgroundImage.png';
import cardImage1 from '../components/images/psl.jpg';
import cardImage2 from '../components/images/ipl.png';
import cardImage3 from '../components/images/icc.jpg';
import cardImage4 from '../components/images/bigbash.png';
import '../components/css/home.css';
import MatchCard from './MatchCard';
import CricketRankings from './CricketRankings';
import Footer from './Footer';

const Home = () => {

    
    return (
        <div>
            <Navbar /> {/* Include the Navbar component */}
            <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
  <div className="dark-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="content" style={{ width: '50%', textAlign: 'center', color: '#fff' }}>
      <h1 className="hero-heading" style={{fontWeight:'bold'}}>Cricket Where Every Ball Counts</h1>
      <p className="hero-text">
        Dive into the thrilling world of cricket with insightful analysis,
        in-depth statistics, and captivating stories from the sport's rich history.
      </p>
      <Link to="/about" className="btn-overlay bg-yellow-400 cursor-pointer font-semibold hover:bg-yellow-500" style={{cursor:'pointer'}}>About Us</Link>
    </div>
  </div>
</div>


            {/* tournamet section  */}

            {/* Cards Section */}
            <h1 className='text-4xl	font-semibold	text-center	mt-5'> Tournaments & <span className='text-green-500'>Leagues</span></h1>
            <div className="cards-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
              
                <Card image={cardImage1} title="Pakistan Super League" description="Power-packed cricket 
action unleashed!." />
                <Card image={cardImage2} title="Indian Premier league" description="Cricket's biggest stars light 
up the stage.." />
                <Card image={cardImage3} title="International Cricket Council" description="Where cricket legends 
create history.." />
                <Card image={cardImage4} title="Big Bash League" description="Explosive cricket
 entertainment at its best4." />
            </div>

{/* matches section  */}
<div className='mb-52 '>
<h1 className='text-4xl	font-semibold	text-center	mt-5   '><span className=' text-green-500'> Recent</span> & <span className='text-yellow-500'> Upcoming</span> Matches</h1>

<MatchCard/>
<h1 className='text-4xl	font-semibold	text-center	mt-10 mb-10 '><span className='text-green-500'>Men's</span> Team Ranking </h1>

<CricketRankings />
        </div>
        <Footer/>
      
        </div>
    );
}

export default Home;
