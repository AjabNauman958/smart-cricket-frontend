import React from 'react';
import MatchCardList from '../User/MatchCardList';

const TeamScheduleDashboard = () => {
  return (
    <div>
        <h1 className='text-4xl font-semibold text-center mt-5'>
        <span className='text-green-500'>Team </span> Schedule
      </h1>
<MatchCardList/>
    </div>
  );
}

export default TeamScheduleDashboard;
