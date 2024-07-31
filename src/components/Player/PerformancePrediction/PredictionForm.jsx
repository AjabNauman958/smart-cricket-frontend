import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

 // Dummy data
 const teams = [
    'India', 'Australia', 'England', 'New Zealand', 'South Africa',
    'Pakistan', 'Sri Lanka', 'West Indies', 'Bangladesh', 'Afghanistan',
    'Ireland', 'Zimbabwe', 'Netherlands', 'Scotland', 'Nepal', 'UAE'
  ];
  
  const formats = ['Test', 'ODI', 'T20'];
  
  const countries = [
    'India', 'Australia', 'England', 'New Zealand', 'South Africa',
    'Pakistan', 'Sri Lanka', 'West Indies', 'Bangladesh', 'Afghanistan',
    'Ireland', 'Zimbabwe', 'Netherlands', 'Scotland', 'Nepal', 'UAE'
  ];
  
  const grounds = {
    India: ['Wankhede Stadium', 'Eden Gardens', 'Chinnaswamy Stadium', 'M. A. Chidambaram Stadium', 'Feroz Shah Kotla'],
    Australia: ['Melbourne Cricket Ground', 'Sydney Cricket Ground', 'Adelaide Oval', 'Brisbane Cricket Ground', 'Perth Stadium'],
    England: ['Lords', 'The Oval', 'Edgbaston', 'Old Trafford', 'Trent Bridge'],
    NewZealand: ['Eden Park', 'Hagley Oval', 'Basin Reserve', 'Seddon Park', 'University Oval'],
    SouthAfrica: ['Newlands', 'Wanderers Stadium', 'Kingsmead', 'SuperSport Park', 'St George\'s Park'],
    Pakistan: ['Gaddafi Stadium', 'National Stadium', 'Rawalpindi Cricket Stadium', 'Multan Cricket Stadium', 'Qaddafi Stadium'],
    SriLanka: ['R. Premadasa Stadium', 'Pallekele International Cricket Stadium', 'Galle International Stadium', 'SSC', 'Dambulla'],
    WestIndies: ['Kensington Oval', 'Sabina Park', 'Queen\'s Park Oval', 'Antigua Recreation Ground', 'Beausejour Stadium'],
    Bangladesh: ['Sher-e-Bangla National Stadium', 'Chittagong Stadium', 'Sylhet International Cricket Stadium', 'Fatullah', 'Mymensingh Stadium'],
    Afghanistan: ['Kabul International Stadium', 'Kandahar International Cricket Stadium', 'Jalalabad', 'Herat Stadium', 'Balkh Stadium'],
    Ireland: ['Malahide Cricket Club Ground', 'Stormont', 'Clontarf Cricket Club Ground', 'Bready', 'Cork County Cricket Club'],
    Zimbabwe: ['Harare Sports Club', 'Queens Sports Club', 'Bulawayo Athletic Club', 'Kwekwe Sports Club', 'Mutare Sports Club'],
    Netherlands: ['VRA Ground', 'Hazelaarweg', 'Sportpark Westvliet', 'Maarschalkerweerd', 'Deventer'],
    Scotland: ['Grange Cricket Club Ground', 'Titwood', 'Mannofield Park', 'New Cambusdoon', 'The Grange'],
    Nepal: ['Tribhuvan University International Cricket Ground', 'Pokhara Stadium', 'APF Ground', 'Mulpani Cricket Ground', 'Pulchowk Engineering Ground'],
    UAE: ['Dubai International Cricket Stadium', 'Sharjah Cricket Stadium', 'Zayed Cricket Stadium', 'Al Ain', 'Ajman']
  };
  
  const players = {
    India: ['Virat Kohli', 'Rohit Sharma', 'Jasprit Bumrah', 'Rishabh Pant', 'Ravindra Jadeja', 'Shikhar Dhawan', 'KL Rahul', 'Shreyas Iyer', 'Mohammed Shami', 'Hardik Pandya', 'Suryakumar Yadav', 'Yuzvendra Chahal', 'Axar Patel', 'Bhuvneshwar Kumar', 'Ishan Kishan'],
    Australia: ['Steve Smith', 'David Warner', 'Pat Cummins', 'Mitchell Starc', 'Glenn Maxwell', 'Aaron Finch', 'Josh Hazlewood', 'Alex Carey', 'Marcus Stoinis', 'Adam Zampa', 'Marnus Labuschagne', 'Usman Khawaja', 'Travis Head', 'Cameron Green', 'Ashton Agar'],
    England: ['Joe Root', 'Ben Stokes', 'Jofra Archer', 'Jonny Bairstow', 'Jos Buttler', 'Eoin Morgan', 'Jason Roy', 'Adil Rashid', 'Sam Currie', 'Chris Woakes', 'Mark Wood', 'Moeen Ali', 'Stuart Broad', 'James Anderson', 'Liam Livingstone'],
    NewZealand: ['Kane Williamson', 'Trent Boult', 'Tim Southee', 'Ross Taylor', 'Tom Latham', 'Martin Guptill', 'Mitchell Santner', 'Kyle Jamieson', 'Henry Nicholls', 'Jimmy Neesham', 'Colin de Grandhomme', 'Ish Sodhi', 'Lockie Ferguson', 'Devon Conway', 'Daryl Mitchell'],
    SouthAfrica: ['Quinton de Kock', 'Kagiso Rabada', 'Faf du Plessis', 'AB de Villiers', 'Rassie van der Dussen', 'David Miller', 'Anrich Nortje', 'Aiden Markram', 'Tabraiz Shamsi', 'Andile Phehlukwayo', 'Dwaine Pretorius', 'Temba Bavuma', 'Lungi Ngidi', 'Reeza Hendricks', 'Keshav Maharaj'],
    Pakistan: ['Babar Azam', 'Shaheen Afridi', 'Mohammad Rizwan', 'Fakhar Zaman', 'Shadab Khan', 'Haris Rauf', 'Hasan Ali', 'Imam-ul-Haq', 'Asif Ali', 'Mohammad Nawaz', 'Mohammad Hafeez', 'Shoaib Malik', 'Sarfaraz Ahmed', 'Mohammad Wasim', 'Usman Qadir'],
    SriLanka: ['Kusal Perera', 'Dimuth Karunaratne', 'Dinesh Chandimal', 'Lasith Malinga', 'Thisara Perera', 'Angelo Mathews', 'Kusal Mendis', 'Suranga Lakmal', 'Niroshan Dickwella', 'Wanindu Hasaranga', 'Dhananjaya de Silva', 'Lahiru Thirimanne', 'Isuru Udana', 'Lahiru Kumara', 'Avishka Fernando'],
    WestIndies: ['Jason Holder', 'Kieron Pollard', 'Andre Russell', 'Chris Gayle', 'Shimron Hetmyer', 'Nicholas Pooran', 'Dwayne Bravo', 'Rovman Powell', 'Evin Lewis', 'Shai Hope', 'Carlos Brathwaite', 'Fabian Allen', 'Sheldon Cottrell', 'Roston Chase', 'Akeal Hosein'],
    Bangladesh: ['Shakib Al Hasan', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Mahmudullah', 'Mustafizur Rahman', 'Liton Das', 'Taskin Ahmed', 'Soumya Sarkar', 'Mehidy Hasan', 'Mohammad Saifuddin', 'Mashrafe Mortaza', 'Mominul Haque', 'Taijul Islam', 'Nasum Ahmed', 'Mohammad Mithun'],
    Afghanistan: ['Rashid Khan', 'Mohammad Nabi', 'Mujeeb Ur Rahman', 'Gulbadin Naib', 'Hazratullah Zazai', 'Rahmat Shah', 'Najibullah Zadran', 'Asghar Afghan', 'Karim Janat', 'Ibrahim Zadran', 'Afsar Zazai', 'Shapoor Zadran', 'Hamid Hassan', 'Samiullah Shinwari', 'Farid Malik'],
    Ireland: ['Paul Stirling', 'Kevin O\'Brien', 'Andrew Balbirnie', 'William Porterfield', 'Gary Wilson', 'George Dockrell', 'Harry Tector', 'Mark Adair', 'Boyd Rankin', 'Simi Singh', 'Stuart Thompson', 'Lorcan Tucker', 'James McCollum', 'Tyrone Kane', 'Curtis Campher'],
    Zimbabwe: ['Brendan Taylor', 'Sikandar Raza', 'Sean Williams', 'Craig Ervine', 'Hamilton Masakadza', 'Regis Chakabva', 'Ryan Burl', 'Tendai Chatara', 'Kyle Jarvis', 'Richard Ngarava', 'Wellington Masakadza', 'Blessing Muzarabani', 'Peter Moor', 'Solomon Mire', 'Brian Chari'],
    Netherlands: ['Pieter Seelaar', 'Ben Cooper', 'Max O\'Dowd', 'Colin Ackermann', 'Scott Edwards', 'Stephan Myburgh', 'Timm van der Gugten', 'Paul van Meekeren', 'Roelof van der Merwe', 'Fred Klaassen', 'Logan van Beek', 'Vivian Kingma', 'Brandon Glover', 'Bas de Leede', 'Shane Snater'],
    Scotland: ['Kyle Coetzer', 'Richie Berrington', 'Calum MacLeod', 'George Munsey', 'Matthew Cross', 'Michael Leask', 'Safyaan Sharif', 'Mark Watt', 'Josh Davey', 'Alasdair Evans', 'Hamza Tahir', 'Gavin Main', 'Dylan Budge', 'Craig Wallace', 'Ollie Hairs'],
    Nepal: ['Paras Khadka', 'Gyanendra Malla', 'Sandeep Lamichhane', 'Sharad Vesawkar', 'Dipendra Singh Airee', 'Sompal Kami', 'Karan KC', 'Kushal Bhurtel', 'Rohit Kumar Paudel', 'Binod Bhandari', 'Arif Sheikh', 'Lalit Rajbanshi', 'Pawan Sarraf', 'Aarif Sheikh', 'Sushan Bhari'],
    UAE: ['Chirag Suri', 'Rohan Mustafa', 'Ahmed Raza', 'Muhammad Usman', 'Rameez Shahzad', 'Shaiman Anwar', 'CP Rizwan', 'Zahoor Khan', 'Junaid Siddique', 'Waheed Ahmed', 'Sultan Ahmed', 'Muhammad Naveed', 'Adnan Mufti', 'Ashfaq Ahmed', 'Ghulam Shabber']
  };
  

const PredictionForm = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [opponentTeam, setOpponentTeam] = useState('');
  const [format, setFormat] = useState('');
  const [country, setCountry] = useState('');
  const [ground, setGround] = useState('');
  const [player, setPlayer] = useState('');

  const getSuggestionValue = (suggestion) => suggestion;
  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const onChange = (event, { newValue, method }) => {
    setOpponentTeam(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(filterSuggestions(teams, value));
  };

  const onSuggestionsFetchRequestedFormat = ({ value }) => {
    setSuggestionsFormat(filterSuggestions(formats, value));
  };

  const onSuggestionsFetchRequestedCountry = ({ value }) => {
    setSuggestionsCountry(filterSuggestions(countries, value));
  };

  const onSuggestionsFetchRequestedGround = ({ value }) => {
    setSuggestionsGround(filterSuggestions(grounds[selectedCountry] || [], value));
  };

  const filterSuggestions = (list, query) => {
    return list.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  };

  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsFormat, setSuggestionsFormat] = useState([]);
  const [suggestionsCountry, setSuggestionsCountry] = useState([]);
  const [suggestionsGround, setSuggestionsGround] = useState([]);

  const handleViewPrediction = () => {
    setShowImage(true);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="flex flex-wrap justify-between mb-4">
        <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
          <label className="block font-bold mb-1">Opponent Team:</label>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={() => setSuggestions([])}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
              placeholder: 'Search',
              value: opponentTeam,
              onChange,
              className: 'w-full p-2 border border-gray-300 rounded'
            }}
          />
        </div>
        <div className="w-full md:w-1/2 pl-2">
          <label className="block font-bold mb-1">Format:</label>
          <Autosuggest
            suggestions={suggestionsFormat}
            onSuggestionsFetchRequested={onSuggestionsFetchRequestedFormat}
            onSuggestionsClearRequested={() => setSuggestionsFormat([])}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
              placeholder: 'Search',
              value: format,
              onChange: (e, { newValue }) => setFormat(newValue),
              className: 'w-full p-2 border border-gray-300 rounded'
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between mb-4">
        <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
          <label className="block font-bold mb-1">Country:</label>
          <Autosuggest
            suggestions={suggestionsCountry}
            onSuggestionsFetchRequested={onSuggestionsFetchRequestedCountry}
            onSuggestionsClearRequested={() => setSuggestionsCountry([])}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
              placeholder: 'Search',
              value: country,
              onChange: (e, { newValue }) => {
                setCountry(newValue);
                setSelectedCountry(newValue);
              },
              className: 'w-full p-2 border border-gray-300 rounded'
            }}
          />
        </div>
        <div className="w-full md:w-1/2 pl-2">
          <label className="block font-bold mb-1">Ground:</label>
          <Autosuggest
            suggestions={suggestionsGround}
            onSuggestionsFetchRequested={onSuggestionsFetchRequestedGround}
            onSuggestionsClearRequested={() => setSuggestionsGround([])}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
              placeholder: 'Search',
              value: ground,
              onChange: (e, { newValue }) => setGround(newValue),
              className: 'w-full p-2 border border-gray-300 rounded'
            }}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-1">Player:</label>
        <Autosuggest
          suggestions={selectedCountry && players[selectedCountry] ? filterSuggestions(players[selectedCountry], player) : []}
          onSuggestionsFetchRequested={() => setSuggestions(filterSuggestions(players[selectedCountry] || [], player))}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            placeholder: 'Search',
            value: player,
            onChange: (e, { newValue }) => setPlayer(newValue),
            className: 'w-full p-2 border border-gray-300 rounded'
          }}
        />
      </div>
      <div className="flex justify-center mb-4">
        <button
          className="bg-teal-500 text-white p-3 rounded font-bold hover:bg-teal-600"
          onClick={handleViewPrediction}
        >
          View Prediction
        </button>
      </div>
      {showImage && (
        <div className="flex justify-center mt-4">
          <img src="path-to-your-image.jpg" alt="Prediction" className="rounded" />
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
