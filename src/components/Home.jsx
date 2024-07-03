import React from 'react';
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

const Home = () => {
    return (
        <div>
            <Navbar /> {/* Include the Navbar component */}
            <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div className="dark-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', color: '#fff' }}>
                    <h1 className="hero-heading">Cricket Where Every Ball Counts</h1>
                    <p className="hero-text">
                        Dive into the thrilling world of cricket with insightful analysis,
                        in-depth statistics, and captivating stories from the sport's rich history.
                    </p>
                    <Link to="/about" className="btn-overlay bg-yellow-400 cursor-pointer font-semibold hover:bg-yellow-300">About Us</Link>
                </div>
            </div>

            {/* tournamet section  */}

            {/* Cards Section */}
            <h1 className='text-3xl	font-semibold	text-center	mt-5'>Tournaments & Leagues</h1>
            <div className="cards-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
              
                <Card image={cardImage1} title="Card Title 1" description="This is the description for card 1." />
                <Card image={cardImage2} title="Card Title 2" description="This is the description for card 2." />
                <Card image={cardImage3} title="Card Title 3" description="This is the description for card 3." />
                <Card image={cardImage4} title="Card Title 4" description="This is the description for card 4." />
            </div>

{/* matches section  */}
<h1 className='text-3xl	font-semibold	text-center	mt-5 mb-52'>Matches</h1>

<MatchCard/>
        </div>
    );
}

export default Home;
