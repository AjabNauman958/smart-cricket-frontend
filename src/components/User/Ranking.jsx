import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from '../images/ranking.jpg';
import '../css/home.css';
import '../css/matches.css';

import React, { useRef } from 'react';
import RankingCard from './RankingCard';
import PAK from '../images/pak.png';
import AUS from '../images/aus.png';
import IND from '../images/india.png';
import SA from '../images/SA.png';
import NZ from '../images/newzealand.png';
import ENG from '../images/eng.png';
import WI from '../images/westindies.png';

// Men's team ranking
// Men's team ranking
const menstestTeams = [
  { rank: 1, player: "Australia", points: 117, flag: AUS },
  { rank: 2, player: "India", points: 115, flag: IND },
  { rank: 3, player: "Pakistan", points: 110, flag: PAK },
  { rank: 4, player: "South Africa", points: 107, flag: SA },
  { rank: 5, player: "New Zealand", points: 102, flag: NZ },
];

const mensodiTeams = [
  { rank: 1, player: "England", points: 125, flag: ENG },
  { rank: 2, player: "India", points: 124, flag: IND },
  { rank: 3, player: "New Zealand", points: 112, flag: NZ },
  { rank: 4, player: "Australia", points: 111, flag: AUS },
  { rank: 5, player: "Pakistan", points: 106, flag: PAK },
];

const menst20Teams = [
  { rank: 1, player: "India", points: 270, flag: IND },
  { rank: 2, player: "England", points: 265, flag: ENG },
  { rank: 3, player: "Pakistan", points: 261, flag: PAK },
  { rank: 4, player: "South Africa", points: 253, flag: SA },
  { rank: 5, player: "Australia", points: 249, flag: AUS },
];

// Men's batting ranking
const mensBatting = [
  { rank: 1, player: "Virat Kohli", country: "India", points: 911, flag: IND },
  { rank: 2, player: "Steve Smith", country: "Australia", points: 890, flag: AUS },
  { rank: 3, player: "Kane Williamson", country: "New Zealand", points: 877, flag: NZ },
  { rank: 4, player: "Joe Root", country: "England", points: 855, flag: ENG },
  { rank: 5, player: "Babar Azam", country: "Pakistan", points: 833, flag: PAK },
];

// Men's bowling ranking
const mensBowling = [
  { rank: 1, player: "Pat Cummins", country: "Australia", points: 908, flag: AUS },
  { rank: 2, player: "Kagiso Rabada", country: "South Africa", points: 882, flag: SA },
  { rank: 3, player: "Jasprit Bumrah", country: "India", points: 870, flag: IND },
  { rank: 4, player: "Trent Boult", country: "New Zealand", points: 850, flag: NZ },
  { rank: 5, player: "Josh Hazlewood", country: "Australia", points: 830, flag: AUS },
];

// Men's all-rounder ranking
const mensAllRounder = [
  { rank: 1, player: "Ben Stokes", country: "England", points: 495, flag: ENG },
  { rank: 2, player: "Ravindra Jadeja", country: "India", points: 471, flag: IND },
  { rank: 3, player: "Shakib Al Hasan", country: "Bangladesh", points: 465, flag: PAK },
  { rank: 4, player: "Jason Holder", country: "West Indies", points: 453, flag: WI },
  { rank: 5, player: "Mitchell Marsh", country: "Australia", points: 442, flag: AUS },
];

// Women's team ranking
const womensodiTeams = [
  { rank: 1, player: "Australia", points: 125, flag: AUS },
  { rank: 2, player: "India", points: 124, flag: IND },
  { rank: 3, player: "New Zealand", points: 112, flag: NZ },
  { rank: 4, player: "England", points: 111, flag: ENG },
  { rank: 5, player: "South Africa", points: 106, flag: SA },
];

const womenst20Teams = [
  { rank: 1, player: "Australia", points: 270, flag: AUS },
  { rank: 2, player: "England", points: 265, flag: ENG },
  { rank: 3, player: "India", points: 261, flag: IND },
  { rank: 4, player: "New Zealand", points: 253, flag: NZ },
  { rank: 5, player: "South Africa", points: 249, flag: SA },
];

// Women's batting ranking
const womensBatting = [
  { rank: 1, player: "Smriti Mandhana", country: "India", points: 767, flag: IND },
  { rank: 2, player: "Meg Lanning", country: "Australia", points: 754, flag: AUS },
  { rank: 3, player: "Sophie Devine", country: "New Zealand", points: 735, flag: NZ },
  { rank: 4, player: "Amy Jones", country: "England", points: 712, flag: ENG },
  { rank: 5, player: "Bismah Maroof", country: "Pakistan", points: 688, flag: PAK },
];

// Women's bowling ranking
const womensBowling = [
  { rank: 1, player: "Sophie Ecclestone", country: "England", points: 759, flag: ENG },
  { rank: 2, player: "Poonam Yadav", country: "India", points: 732, flag: IND },
  { rank: 3, player: "Lea Tahuhu", country: "New Zealand", points: 714, flag: NZ },
  { rank: 4, player: "Megan Schutt", country: "Australia", points: 691, flag: AUS },
  { rank: 5, player: "Nashra Sandhu", country: "Pakistan", points: 670, flag: PAK },
];

// Women's all-rounder ranking
const womensAllRounder = [
  { rank: 1, player: "Ellyse Perry", country: "Australia", points: 439, flag: AUS },
  { rank: 2, player: "Deepti Sharma", country: "India", points: 420, flag: IND },
  { rank: 3, player: "Natalie Sciver", country: "England", points: 401, flag: ENG },
  { rank: 4, player: "Amelia Kerr", country: "New Zealand", points: 382, flag: NZ },
  { rank: 5, player: "Nida Dar", country: "Pakistan", points: 367, flag: PAK },
];

const Ranking = () => {
  const mensSectionRef = useRef(null);
  const womensSectionRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'mensSection' && mensSectionRef.current) {
      mensSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'womensSection' && womensSectionRef.current) {
      womensSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div>

      <Navbar scrollToSection={scrollToSection} />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        {/* Your content here */}


        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">ICC world Rankings </h1>
            <p className="mb-5">
              Track the top-performing teams and players in T20, ODI, and Test formats. Stay updated with the latest global standings
            </p>
          </div>
        </div>
      </div>
      <div className="ranking-page">
        <section ref={mensSectionRef} id='mensSection'>
          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Men's</span> Team Ranking
          </h1>
          <div className="flex space-x-4 justify-center mb-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
            <RankingCard title="Test - Team Ranking" teams={menstestTeams} />
            <RankingCard title="ODI - Team Ranking" teams={mensodiTeams} />
            <RankingCard title="T20 - Team Ranking" teams={menst20Teams} />
          </div>

          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Men's</span> Batting Ranking
          </h1>
          <div className="flex space-x-4 justify-center mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
            <RankingCard title="Test - Batting Ranking" teams={mensBatting} />
            <RankingCard title="ODI - Batting Ranking" teams={mensBatting} />
            <RankingCard title="T20 - Batting Ranking" teams={mensBatting} />
          </div>

          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Men's</span> Bowling Ranking
          </h1>
          <div className="flex space-x-4 justify-center mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
            <RankingCard title="Test - Bowling Ranking" teams={mensBowling} />
            <RankingCard title="ODI - Bowling Ranking" teams={mensBowling} />
            <RankingCard title="T20 - Bowling Ranking" teams={mensBowling} />
          </div>

          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Men's</span> All-Rounder Ranking
          </h1>
          <div className="flex space-x-4 justify-center mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
            <RankingCard title="Test - All-Rounder Ranking" teams={mensAllRounder} />
            <RankingCard title="ODI - All-Rounder Ranking" teams={mensAllRounder} />
            <RankingCard title="T20 - All-Rounder Ranking" teams={mensAllRounder} />
          </div>
        </section>

        {/* Women's Section  */}
        <section ref={womensSectionRef} id='womensSection'>
          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Women's</span> Team Ranking
          </h1>
          <div className="flex space-x-4 justify-center mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
            <RankingCard title="ODI - Team Ranking" teams={womensodiTeams} />
            <RankingCard title="T20 - Team Ranking" teams={womenst20Teams} />
          </div>

          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Women's</span> Batting Ranking
          </h1>
          <div className="flex space-x-4 justify-center mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
            <RankingCard title="ODI - Batting Ranking" teams={womensBatting} />
            <RankingCard title="T20 - Batting Ranking" teams={womensBatting} />
          </div>

          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Women's</span> Bowling Ranking
          </h1>
          <div className="flex space-x-4 justify-center mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}   >
            <RankingCard title="ODI - Bowling Ranking" teams={womensBowling} />
            <RankingCard title="T20 - Bowling Ranking" teams={womensBowling} />
          </div>

          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Women's</span> All-Rounder Ranking
          </h1>
          <div className="flex space-x-4 justify-center mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
            <RankingCard title="ODI - All-Rounder Ranking" teams={womensAllRounder} />
            <RankingCard title="T20 - All-Rounder Ranking" teams={womensAllRounder} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Ranking