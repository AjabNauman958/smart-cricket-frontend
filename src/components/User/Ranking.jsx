import React, { useRef } from 'react';
import RankingCard from './RankingCard';
import PAK from '../images/pak.png';
import AUS from '../images/aus.png';
import IND from '../images/india.png';
import SA from '../images/SA.png';
import NZ from '../images/newzealand.png';
import ENG from '../images/eng.png';
import WI from '../images/westindies.png';
import ScrollToTopButton from './scrollupbtn/ScrollToTopButton';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from '../images/ranking.jpg';
import '../css/home.css';
import '../css/matches.css';

// Men's team ranking
const menstestTeams = [
  { rank: 1, teamName: "Australia", points: 117, flag: AUS },
  { rank: 2, teamName: "India", points: 115, flag: IND },
  { rank: 3, teamName: "Pakistan", points: 110, flag: PAK },
  { rank: 4, teamName: "South Africa", points: 107, flag: SA },
  { rank: 5, teamName: "New Zealand", points: 102, flag: NZ },
  { rank: 1, teamName: "Australia", points: 117, flag: AUS },
  { rank: 2, teamName: "India", points: 115, flag: IND },
  { rank: 3, teamName: "Pakistan", points: 110, flag: PAK },
  { rank: 4, teamName: "South Africa", points: 107, flag: SA },
  { rank: 5, teamName: "New Zealand", points: 102, flag: NZ },
];

const mensodiTeams = [
  { rank: 1, teamName: "England", points: 125, flag: ENG },
  { rank: 2, teamName: "India", points: 124, flag: IND },
  { rank: 3, teamName: "New Zealand", points: 112, flag: NZ },
  { rank: 4, teamName: "Australia", points: 111, flag: AUS },
  { rank: 5, teamName: "Pakistan", points: 106, flag: PAK },
  { rank: 1, teamName: "England", points: 125, flag: ENG },
  { rank: 2, teamName: "India", points: 124, flag: IND },
  { rank: 3, teamName: "New Zealand", points: 112, flag: NZ },
  { rank: 4, teamName: "Australia", points: 111, flag: AUS },
  { rank: 5, teamName: "Pakistan", points: 106, flag: PAK },
];

const menst20Teams = [
  { rank: 1, teamName: "India", points: 270, flag: IND },
  { rank: 2, teamName: "England", points: 265, flag: ENG },
  { rank: 3, teamName: "Pakistan", points: 261, flag: PAK },
  { rank: 4, teamName: "South Africa", points: 253, flag: SA },
  { rank: 5, teamName: "Australia", points: 249, flag: AUS },
  { rank: 1, teamName: "India", points: 270, flag: IND },
  { rank: 2, teamName: "England", points: 265, flag: ENG },
  { rank: 3, teamName: "Pakistan", points: 261, flag: PAK },
  { rank: 4, teamName: "South Africa", points: 253, flag: SA },
  { rank: 5, teamName: "Australia", points: 249, flag: AUS },
  { rank: 1, teamName: "India", points: 270, flag: IND },
  { rank: 2, teamName: "England", points: 265, flag: ENG },
  { rank: 3, teamName: "Pakistan", points: 261, flag: PAK },
  { rank: 4, teamName: "South Africa", points: 253, flag: SA },
  { rank: 5, teamName: "Australia", points: 249, flag: AUS },
];

// Men's batting ranking
const mensTestBatting = [
  { rank: 1, player: "Virat Kohli", country: "India", points: 911, flag: IND },
  { rank: 2, player: "Steve Smith", country: "Australia", points: 890, flag: AUS },
  { rank: 3, player: "Kane Williamson", country: "New Zealand", points: 877, flag: NZ },
  { rank: 4, player: "Joe Root", country: "England", points: 855, flag: ENG },
  { rank: 5, player: "Babar Azam", country: "Pakistan", points: 833, flag: PAK },
  { rank: 1, player: "Virat Kohli", country: "India", points: 911, flag: IND },
  { rank: 2, player: "Steve Smith", country: "Australia", points: 890, flag: AUS },
  { rank: 3, player: "Kane Williamson", country: "New Zealand", points: 877, flag: NZ },
  { rank: 4, player: "Joe Root", country: "England", points: 855, flag: ENG },
  { rank: 5, player: "Babar Azam", country: "Pakistan", points: 833, flag: PAK },
  { rank: 1, player: "Virat Kohli", country: "India", points: 911, flag: IND },
  { rank: 2, player: "Steve Smith", country: "Australia", points: 890, flag: AUS },
  { rank: 3, player: "Kane Williamson", country: "New Zealand", points: 877, flag: NZ },
  { rank: 4, player: "Joe Root", country: "England", points: 855, flag: ENG },
  { rank: 5, player: "Babar Azam", country: "Pakistan", points: 833, flag: PAK },
];
const mensOdiBatting = [
  { rank: 2, player: "Steve Smith", country: "Australia", points: 890, flag: AUS },
  { rank: 3, player: "Kane Williamson", country: "New Zealand", points: 877, flag: NZ },
  { rank: 5, player: "Babar Azam", country: "Pakistan", points: 833, flag: PAK },
  { rank: 4, player: "Joe Root", country: "England", points: 855, flag: ENG },
  { rank: 1, player: "Virat Kohli", country: "India", points: 911, flag: IND },
  { rank: 2, player: "Steve Smith", country: "Australia", points: 890, flag: AUS },
  { rank: 3, player: "Kane Williamson", country: "New Zealand", points: 877, flag: NZ },
  { rank: 5, player: "Babar Azam", country: "Pakistan", points: 833, flag: PAK },
  { rank: 4, player: "Joe Root", country: "England", points: 855, flag: ENG },
  { rank: 1, player: "Virat Kohli", country: "India", points: 911, flag: IND },
  { rank: 2, player: "Steve Smith", country: "Australia", points: 890, flag: AUS },
  { rank: 3, player: "Kane Williamson", country: "New Zealand", points: 877, flag: NZ },
  { rank: 5, player: "Babar Azam", country: "Pakistan", points: 833, flag: PAK },
  { rank: 4, player: "Joe Root", country: "England", points: 855, flag: ENG },
  { rank: 1, player: "Virat Kohli", country: "India", points: 911, flag: IND },
];
const mensT20Batting = [
  { rank: 5, player: "Babar Azam", country: "Pakistan", points: 833, flag: PAK },
  { rank: 1, player: "Virat Kohli", country: "India", points: 911, flag: IND },
  { rank: 2, player: "Steve Smith", country: "Australia", points: 890, flag: AUS },
  { rank: 3, player: "Kane Williamson", country: "New Zealand", points: 877, flag: NZ },
  { rank: 4, player: "Joe Root", country: "England", points: 855, flag: ENG },
  { rank: 5, player: "Babar Azam", country: "Pakistan", points: 833, flag: PAK },
  { rank: 1, player: "Virat Kohli", country: "India", points: 911, flag: IND },
  { rank: 2, player: "Steve Smith", country: "Australia", points: 890, flag: AUS },
  { rank: 3, player: "Kane Williamson", country: "New Zealand", points: 877, flag: NZ },
  { rank: 4, player: "Joe Root", country: "England", points: 855, flag: ENG },
  { rank: 5, player: "Babar Azam", country: "Pakistan", points: 833, flag: PAK },
  { rank: 1, player: "Virat Kohli", country: "India", points: 911, flag: IND },
  { rank: 2, player: "Steve Smith", country: "Australia", points: 890, flag: AUS },
  { rank: 3, player: "Kane Williamson", country: "New Zealand", points: 877, flag: NZ },
  { rank: 4, player: "Joe Root", country: "England", points: 855, flag: ENG },
];

// Men's bowling ranking
const mensTestBowling = [
  { rank: 5, player: "Josh Hazlewood", country: "Australia", points: 830, flag: AUS },
  { rank: 1, player: "Pat Cummins", country: "Australia", points: 908, flag: AUS },
  { rank: 3, player: "Jasprit Bumrah", country: "India", points: 870, flag: IND },
  { rank: 2, player: "Kagiso Rabada", country: "South Africa", points: 882, flag: SA },
  { rank: 4, player: "Trent Boult", country: "New Zealand", points: 850, flag: NZ },
  { rank: 5, player: "Josh Hazlewood", country: "Australia", points: 830, flag: AUS },
  { rank: 1, player: "Pat Cummins", country: "Australia", points: 908, flag: AUS },
  { rank: 3, player: "Jasprit Bumrah", country: "India", points: 870, flag: IND },
  { rank: 2, player: "Kagiso Rabada", country: "South Africa", points: 882, flag: SA },
  { rank: 4, player: "Trent Boult", country: "New Zealand", points: 850, flag: NZ },
  { rank: 5, player: "Josh Hazlewood", country: "Australia", points: 830, flag: AUS },
  { rank: 1, player: "Pat Cummins", country: "Australia", points: 908, flag: AUS },
  { rank: 3, player: "Jasprit Bumrah", country: "India", points: 870, flag: IND },
  { rank: 2, player: "Kagiso Rabada", country: "South Africa", points: 882, flag: SA },
  { rank: 4, player: "Trent Boult", country: "New Zealand", points: 850, flag: NZ },
];
const mensOdiBowling = [
  { rank: 2, player: "Kagiso Rabada", country: "South Africa", points: 882, flag: SA },
  { rank: 1, player: "Pat Cummins", country: "Australia", points: 908, flag: AUS },
  { rank: 5, player: "Josh Hazlewood", country: "Australia", points: 830, flag: AUS },
  { rank: 4, player: "Trent Boult", country: "New Zealand", points: 850, flag: NZ },
  { rank: 3, player: "Jasprit Bumrah", country: "India", points: 870, flag: IND },
  { rank: 2, player: "Kagiso Rabada", country: "South Africa", points: 882, flag: SA },
  { rank: 1, player: "Pat Cummins", country: "Australia", points: 908, flag: AUS },
  { rank: 5, player: "Josh Hazlewood", country: "Australia", points: 830, flag: AUS },
  { rank: 4, player: "Trent Boult", country: "New Zealand", points: 850, flag: NZ },
  { rank: 3, player: "Jasprit Bumrah", country: "India", points: 870, flag: IND },
  { rank: 2, player: "Kagiso Rabada", country: "South Africa", points: 882, flag: SA },
  { rank: 1, player: "Pat Cummins", country: "Australia", points: 908, flag: AUS },
  { rank: 5, player: "Josh Hazlewood", country: "Australia", points: 830, flag: AUS },
  { rank: 4, player: "Trent Boult", country: "New Zealand", points: 850, flag: NZ },
  { rank: 3, player: "Jasprit Bumrah", country: "India", points: 870, flag: IND },
];
const mensT20Bowling = [
  { rank: 3, player: "Jasprit Bumrah", country: "India", points: 870, flag: IND },
  { rank: 1, player: "Pat Cummins", country: "Australia", points: 908, flag: AUS },
  { rank: 2, player: "Kagiso Rabada", country: "South Africa", points: 882, flag: SA },
  { rank: 4, player: "Trent Boult", country: "New Zealand", points: 850, flag: NZ },
  { rank: 5, player: "Josh Hazlewood", country: "Australia", points: 830, flag: AUS },
  { rank: 3, player: "Jasprit Bumrah", country: "India", points: 870, flag: IND },
  { rank: 1, player: "Pat Cummins", country: "Australia", points: 908, flag: AUS },
  { rank: 2, player: "Kagiso Rabada", country: "South Africa", points: 882, flag: SA },
  { rank: 4, player: "Trent Boult", country: "New Zealand", points: 850, flag: NZ },
  { rank: 5, player: "Josh Hazlewood", country: "Australia", points: 830, flag: AUS },
  { rank: 3, player: "Jasprit Bumrah", country: "India", points: 870, flag: IND },
  { rank: 1, player: "Pat Cummins", country: "Australia", points: 908, flag: AUS },
  { rank: 2, player: "Kagiso Rabada", country: "South Africa", points: 882, flag: SA },
  { rank: 4, player: "Trent Boult", country: "New Zealand", points: 850, flag: NZ },
  { rank: 5, player: "Josh Hazlewood", country: "Australia", points: 830, flag: AUS },
];

// Men's all-rounder ranking
const mensTestAllRounder = [
  { rank: 5, player: "Mitchell Marsh", country: "Australia", points: 442, flag: AUS },
  { rank: 1, player: "Ben Stokes", country: "England", points: 495, flag: ENG },
  { rank: 2, player: "Ravindra Jadeja", country: "India", points: 471, flag: IND },
  { rank: 3, player: "Shakib Al Hasan", country: "Bangladesh", points: 465, flag: PAK },
  { rank: 4, player: "Jason Holder", country: "West Indies", points: 453, flag: WI },
  { rank: 5, player: "Mitchell Marsh", country: "Australia", points: 442, flag: AUS },
  { rank: 1, player: "Ben Stokes", country: "England", points: 495, flag: ENG },
  { rank: 2, player: "Ravindra Jadeja", country: "India", points: 471, flag: IND },
  { rank: 3, player: "Shakib Al Hasan", country: "Bangladesh", points: 465, flag: PAK },
  { rank: 4, player: "Jason Holder", country: "West Indies", points: 453, flag: WI },
  { rank: 5, player: "Mitchell Marsh", country: "Australia", points: 442, flag: AUS },
  { rank: 1, player: "Ben Stokes", country: "England", points: 495, flag: ENG },
  { rank: 2, player: "Ravindra Jadeja", country: "India", points: 471, flag: IND },
  { rank: 3, player: "Shakib Al Hasan", country: "Bangladesh", points: 465, flag: PAK },
  { rank: 4, player: "Jason Holder", country: "West Indies", points: 453, flag: WI },
];
const mensOdiAllRounder = [
  { rank: 4, player: "Jason Holder", country: "West Indies", points: 453, flag: WI },
  { rank: 1, player: "Ben Stokes", country: "England", points: 495, flag: ENG },
  { rank: 2, player: "Ravindra Jadeja", country: "India", points: 471, flag: IND },
  { rank: 3, player: "Shakib Al Hasan", country: "Bangladesh", points: 465, flag: PAK },
  { rank: 5, player: "Mitchell Marsh", country: "Australia", points: 442, flag: AUS },
  { rank: 4, player: "Jason Holder", country: "West Indies", points: 453, flag: WI },
  { rank: 1, player: "Ben Stokes", country: "England", points: 495, flag: ENG },
  { rank: 2, player: "Ravindra Jadeja", country: "India", points: 471, flag: IND },
  { rank: 3, player: "Shakib Al Hasan", country: "Bangladesh", points: 465, flag: PAK },
  { rank: 5, player: "Mitchell Marsh", country: "Australia", points: 442, flag: AUS },
  { rank: 4, player: "Jason Holder", country: "West Indies", points: 453, flag: WI },
  { rank: 1, player: "Ben Stokes", country: "England", points: 495, flag: ENG },
  { rank: 2, player: "Ravindra Jadeja", country: "India", points: 471, flag: IND },
  { rank: 3, player: "Shakib Al Hasan", country: "Bangladesh", points: 465, flag: PAK },
  { rank: 5, player: "Mitchell Marsh", country: "Australia", points: 442, flag: AUS },
];
const mensT20AllRounder = [
  { rank: 2, player: "Ravindra Jadeja", country: "India", points: 471, flag: IND },
  { rank: 1, player: "Ben Stokes", country: "England", points: 495, flag: ENG },
  { rank: 3, player: "Shakib Al Hasan", country: "Bangladesh", points: 465, flag: PAK },
  { rank: 4, player: "Jason Holder", country: "West Indies", points: 453, flag: WI },
  { rank: 5, player: "Mitchell Marsh", country: "Australia", points: 442, flag: AUS },
  { rank: 2, player: "Ravindra Jadeja", country: "India", points: 471, flag: IND },
  { rank: 1, player: "Ben Stokes", country: "England", points: 495, flag: ENG },
  { rank: 3, player: "Shakib Al Hasan", country: "Bangladesh", points: 465, flag: PAK },
  { rank: 4, player: "Jason Holder", country: "West Indies", points: 453, flag: WI },
  { rank: 5, player: "Mitchell Marsh", country: "Australia", points: 442, flag: AUS },
  { rank: 2, player: "Ravindra Jadeja", country: "India", points: 471, flag: IND },
  { rank: 1, player: "Ben Stokes", country: "England", points: 495, flag: ENG },
  { rank: 3, player: "Shakib Al Hasan", country: "Bangladesh", points: 465, flag: PAK },
  { rank: 4, player: "Jason Holder", country: "West Indies", points: 453, flag: WI },
  { rank: 5, player: "Mitchell Marsh", country: "Australia", points: 442, flag: AUS },
];

// Women's team ranking
const womensodiTeams = [
  { rank: 1, teamName: "Australia", points: 125, flag: AUS },
  { rank: 2, teamName: "India", points: 124, flag: IND },
  { rank: 3, teamName: "New Zealand", points: 112, flag: NZ },
  { rank: 4, teamName: "England", points: 111, flag: ENG },
  { rank: 5, teamName: "South Africa", points: 106, flag: SA },
  { rank: 1, teamName: "Australia", points: 125, flag: AUS },
  { rank: 2, teamName: "India", points: 124, flag: IND },
  { rank: 3, teamName: "New Zealand", points: 112, flag: NZ },
  { rank: 4, teamName: "England", points: 111, flag: ENG },
  { rank: 5, teamName: "South Africa", points: 106, flag: SA },
  { rank: 1, teamName: "Australia", points: 125, flag: AUS },
  { rank: 2, teamName: "India", points: 124, flag: IND },
  { rank: 3, teamName: "New Zealand", points: 112, flag: NZ },
  { rank: 4, teamName: "England", points: 111, flag: ENG },
  { rank: 5, teamName: "South Africa", points: 106, flag: SA },
];

const womenst20Teams = [
  { rank: 1, teamName: "Australia", points: 270, flag: AUS },
  { rank: 2, teamName: "England", points: 265, flag: ENG },
  { rank: 3, teamName: "India", points: 261, flag: IND },
  { rank: 4, teamName: "New Zealand", points: 253, flag: NZ },
  { rank: 5, teamName: "South Africa", points: 249, flag: SA },
  { rank: 1, teamName: "Australia", points: 270, flag: AUS },
  { rank: 2, teamName: "England", points: 265, flag: ENG },
  { rank: 3, teamName: "India", points: 261, flag: IND },
  { rank: 4, teamName: "New Zealand", points: 253, flag: NZ },
  { rank: 5, teamName: "South Africa", points: 249, flag: SA },
  { rank: 1, teamName: "Australia", points: 270, flag: AUS },
  { rank: 2, teamName: "England", points: 265, flag: ENG },
  { rank: 3, teamName: "India", points: 261, flag: IND },
  { rank: 4, teamName: "New Zealand", points: 253, flag: NZ },
  { rank: 5, teamName: "South Africa", points: 249, flag: SA },
];

// Women's batting ranking
const womensT20Batting = [
  { rank: 5, player: "Bismah Maroof", country: "Pakistan", points: 688, flag: PAK },
  { rank: 1, player: "Smriti Mandhana", country: "India", points: 767, flag: IND },
  { rank: 3, player: "Sophie Devine", country: "New Zealand", points: 735, flag: NZ },
  { rank: 4, player: "Amy Jones", country: "England", points: 712, flag: ENG },
  { rank: 2, player: "Meg Lanning", country: "Australia", points: 754, flag: AUS },
  { rank: 5, player: "Bismah Maroof", country: "Pakistan", points: 688, flag: PAK },
  { rank: 1, player: "Smriti Mandhana", country: "India", points: 767, flag: IND },
  { rank: 3, player: "Sophie Devine", country: "New Zealand", points: 735, flag: NZ },
  { rank: 4, player: "Amy Jones", country: "England", points: 712, flag: ENG },
  { rank: 2, player: "Meg Lanning", country: "Australia", points: 754, flag: AUS },
  { rank: 5, player: "Bismah Maroof", country: "Pakistan", points: 688, flag: PAK },
  { rank: 1, player: "Smriti Mandhana", country: "India", points: 767, flag: IND },
  { rank: 3, player: "Sophie Devine", country: "New Zealand", points: 735, flag: NZ },
  { rank: 4, player: "Amy Jones", country: "England", points: 712, flag: ENG },
  { rank: 2, player: "Meg Lanning", country: "Australia", points: 754, flag: AUS },
];
const womensOdiBatting = [
  { rank: 1, player: "Smriti Mandhana", country: "India", points: 767, flag: IND },
  { rank: 3, player: "Sophie Devine", country: "New Zealand", points: 735, flag: NZ },
  { rank: 4, player: "Amy Jones", country: "England", points: 712, flag: ENG },
  { rank: 2, player: "Meg Lanning", country: "Australia", points: 754, flag: AUS },
  { rank: 5, player: "Bismah Maroof", country: "Pakistan", points: 688, flag: PAK },
  { rank: 1, player: "Smriti Mandhana", country: "India", points: 767, flag: IND },
  { rank: 3, player: "Sophie Devine", country: "New Zealand", points: 735, flag: NZ },
  { rank: 4, player: "Amy Jones", country: "England", points: 712, flag: ENG },
  { rank: 2, player: "Meg Lanning", country: "Australia", points: 754, flag: AUS },
  { rank: 5, player: "Bismah Maroof", country: "Pakistan", points: 688, flag: PAK },
  { rank: 1, player: "Smriti Mandhana", country: "India", points: 767, flag: IND },
  { rank: 3, player: "Sophie Devine", country: "New Zealand", points: 735, flag: NZ },
  { rank: 4, player: "Amy Jones", country: "England", points: 712, flag: ENG },
  { rank: 2, player: "Meg Lanning", country: "Australia", points: 754, flag: AUS },
  { rank: 5, player: "Bismah Maroof", country: "Pakistan", points: 688, flag: PAK },
];

// Women's bowling ranking
const womensOdiBowling = [
  { rank: 1, player: "Sophie Ecclestone", country: "England", points: 759, flag: ENG },
  { rank: 2, player: "Poonam Yadav", country: "India", points: 732, flag: IND },
  { rank: 3, player: "Lea Tahuhu", country: "New Zealand", points: 714, flag: NZ },
  { rank: 4, player: "Megan Schutt", country: "Australia", points: 691, flag: AUS },
  { rank: 5, player: "Nashra Sandhu", country: "Pakistan", points: 670, flag: PAK },
  { rank: 1, player: "Sophie Ecclestone", country: "England", points: 759, flag: ENG },
  { rank: 2, player: "Poonam Yadav", country: "India", points: 732, flag: IND },
  { rank: 3, player: "Lea Tahuhu", country: "New Zealand", points: 714, flag: NZ },
  { rank: 4, player: "Megan Schutt", country: "Australia", points: 691, flag: AUS },
  { rank: 5, player: "Nashra Sandhu", country: "Pakistan", points: 670, flag: PAK },
  { rank: 1, player: "Sophie Ecclestone", country: "England", points: 759, flag: ENG },
  { rank: 2, player: "Poonam Yadav", country: "India", points: 732, flag: IND },
  { rank: 3, player: "Lea Tahuhu", country: "New Zealand", points: 714, flag: NZ },
  { rank: 4, player: "Megan Schutt", country: "Australia", points: 691, flag: AUS },
  { rank: 5, player: "Nashra Sandhu", country: "Pakistan", points: 670, flag: PAK },
];
const womensT20Bowling = [
  { rank: 2, player: "Poonam Yadav", country: "India", points: 732, flag: IND },
  { rank: 1, player: "Sophie Ecclestone", country: "England", points: 759, flag: ENG },
  { rank: 5, player: "Nashra Sandhu", country: "Pakistan", points: 670, flag: PAK },
  { rank: 4, player: "Megan Schutt", country: "Australia", points: 691, flag: AUS },
  { rank: 3, player: "Lea Tahuhu", country: "New Zealand", points: 714, flag: NZ },
  { rank: 2, player: "Poonam Yadav", country: "India", points: 732, flag: IND },
  { rank: 1, player: "Sophie Ecclestone", country: "England", points: 759, flag: ENG },
  { rank: 5, player: "Nashra Sandhu", country: "Pakistan", points: 670, flag: PAK },
  { rank: 4, player: "Megan Schutt", country: "Australia", points: 691, flag: AUS },
  { rank: 3, player: "Lea Tahuhu", country: "New Zealand", points: 714, flag: NZ },
  { rank: 2, player: "Poonam Yadav", country: "India", points: 732, flag: IND },
  { rank: 1, player: "Sophie Ecclestone", country: "England", points: 759, flag: ENG },
  { rank: 5, player: "Nashra Sandhu", country: "Pakistan", points: 670, flag: PAK },
  { rank: 4, player: "Megan Schutt", country: "Australia", points: 691, flag: AUS },
  { rank: 3, player: "Lea Tahuhu", country: "New Zealand", points: 714, flag: NZ },
];

// Women's all-rounder ranking
const womensOdiAllRounder = [
  { rank: 1, player: "Ellyse Perry", country: "Australia", points: 439, flag: AUS },
  { rank: 5, player: "Nida Dar", country: "Pakistan", points: 367, flag: PAK },
  { rank: 3, player: "Natalie Sciver", country: "England", points: 401, flag: ENG },
  { rank: 4, player: "Amelia Kerr", country: "New Zealand", points: 382, flag: NZ },
  { rank: 2, player: "Deepti Sharma", country: "India", points: 420, flag: IND },
  { rank: 1, player: "Ellyse Perry", country: "Australia", points: 439, flag: AUS },
  { rank: 5, player: "Nida Dar", country: "Pakistan", points: 367, flag: PAK },
  { rank: 3, player: "Natalie Sciver", country: "England", points: 401, flag: ENG },
  { rank: 4, player: "Amelia Kerr", country: "New Zealand", points: 382, flag: NZ },
  { rank: 2, player: "Deepti Sharma", country: "India", points: 420, flag: IND },
  { rank: 1, player: "Ellyse Perry", country: "Australia", points: 439, flag: AUS },
  { rank: 5, player: "Nida Dar", country: "Pakistan", points: 367, flag: PAK },
  { rank: 3, player: "Natalie Sciver", country: "England", points: 401, flag: ENG },
  { rank: 4, player: "Amelia Kerr", country: "New Zealand", points: 382, flag: NZ },
  { rank: 2, player: "Deepti Sharma", country: "India", points: 420, flag: IND },
];
const womensT20AllRounder = [
  { rank: 3, player: "Natalie Sciver", country: "England", points: 401, flag: ENG },
  { rank: 1, player: "Ellyse Perry", country: "Australia", points: 439, flag: AUS },
  { rank: 5, player: "Nida Dar", country: "Pakistan", points: 367, flag: PAK },
  { rank: 4, player: "Amelia Kerr", country: "New Zealand", points: 382, flag: NZ },
  { rank: 2, player: "Deepti Sharma", country: "India", points: 420, flag: IND },
  { rank: 3, player: "Natalie Sciver", country: "England", points: 401, flag: ENG },
  { rank: 1, player: "Ellyse Perry", country: "Australia", points: 439, flag: AUS },
  { rank: 5, player: "Nida Dar", country: "Pakistan", points: 367, flag: PAK },
  { rank: 4, player: "Amelia Kerr", country: "New Zealand", points: 382, flag: NZ },
  { rank: 2, player: "Deepti Sharma", country: "India", points: 420, flag: IND },
  { rank: 3, player: "Natalie Sciver", country: "England", points: 401, flag: ENG },
  { rank: 1, player: "Ellyse Perry", country: "Australia", points: 439, flag: AUS },
  { rank: 5, player: "Nida Dar", country: "Pakistan", points: 367, flag: PAK },
  { rank: 4, player: "Amelia Kerr", country: "New Zealand", points: 382, flag: NZ },
  { rank: 2, player: "Deepti Sharma", country: "India", points: 420, flag: IND },
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
            <RankingCard title="Test - Batting Ranking" teams={mensTestBatting} />
            <RankingCard title="ODI - Batting Ranking" teams={mensOdiBatting} />
            <RankingCard title="T20 - Batting Ranking" teams={mensT20Batting} />
          </div>

          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Men's</span> Bowling Ranking
          </h1>
          <div className="flex space-x-4 justify-center mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
            <RankingCard title="Test - Bowling Ranking" teams={mensTestBowling} />
            <RankingCard title="ODI - Bowling Ranking" teams={mensOdiBowling} />
            <RankingCard title="T20 - Bowling Ranking" teams={mensT20Bowling} />
          </div>

          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Men's</span> All-Rounder Ranking
          </h1>
          <div className="flex space-x-4 justify-center mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
            <RankingCard title="Test - All-Rounder Ranking" teams={mensTestAllRounder} />
            <RankingCard title="ODI - All-Rounder Ranking" teams={mensOdiAllRounder} />
            <RankingCard title="T20 - All-Rounder Ranking" teams={mensT20AllRounder} />
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
            <RankingCard title="ODI - Batting Ranking" teams={womensOdiBatting} />
            <RankingCard title="T20 - Batting Ranking" teams={womensT20Batting} />
          </div>

          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Women's</span> Bowling Ranking
          </h1>
          <div className="flex space-x-4 justify-center mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}   >
            <RankingCard title="ODI - Bowling Ranking" teams={womensOdiBowling} />
            <RankingCard title="T20 - Bowling Ranking" teams={womensT20Bowling} />
          </div>

          <h1 className='text-4xl font-semibold text-center mt-10'>
            <span className='text-green-500'>Women's</span> All-Rounder Ranking
          </h1>
          <div className="flex space-x-4 justify-center mt-10" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
            <RankingCard title="ODI - All-Rounder Ranking" teams={womensOdiAllRounder} />
            <RankingCard title="T20 - All-Rounder Ranking" teams={womensT20AllRounder} />
          </div>
        </section>
      </div>


      {/* Scroll-to-top button */}
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

export default Ranking