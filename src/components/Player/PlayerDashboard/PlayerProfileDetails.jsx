import React from 'react';

const playerData = {
  fullName: "Shaheen Shah Afridi",
  playingRole: "Bowler",
  country: "Pakistan",
  battingStyle: "Left hand Bat",
  bowlingStyle: "Left arm Fast",
  age: "23 years",
  iccRankings: {
    batting: { test: "--", odi: "--", t20: "--" },
    bowling: { test: "9", odi: "3", t20: "46" }
  }
};

const PlayerProfileDetails = () => {
  return (
    <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-[#00A09A] text-white p-8 mt-10 mb-20">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-bold">FULL NAME</h3>
          <p className="text-xl mt-2">{playerData.fullName}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">PLAYING ROLE</h3>
          <p className="text-xl mt-2">{playerData.playingRole}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Country</h3>
          <p className="text-xl mt-2">{playerData.country}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <h3 className="text-lg font-bold">BATTING STYLE</h3>
          <p className="text-xl mt-2">{playerData.battingStyle}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">BOWLING STYLE</h3>
          <p className="text-xl mt-2">{playerData.bowlingStyle}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <h3 className="text-lg font-bold">AGE</h3>
          <p className="text-xl mt-2">{playerData.age}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">ICC Rankings</h3>
          <div className="mt-2">
            <div className="grid grid-cols-4 text-center">
              <div></div>
              <div>Test</div>
              <div>ODI</div>
              <div>T20</div>
            </div>
            <div className="grid grid-cols-4 text-center mt-2">
              <div className='font-bold'>Batting</div>
              <div>{playerData.iccRankings.batting.test}</div>
              <div>{playerData.iccRankings.batting.odi}</div>
              <div>{playerData.iccRankings.batting.t20}</div>
            </div>
            <div className="grid grid-cols-4 text-center mt-2 ">
              <div className='font-bold'>Bowling</div>
              <div>{playerData.iccRankings.bowling.test}</div>
              <div>{playerData.iccRankings.bowling.odi}</div>
              <div>{playerData.iccRankings.bowling.t20}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfileDetails;
