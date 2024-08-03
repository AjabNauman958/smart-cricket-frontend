import React from 'react';
import MatchCardList from '../../User/MatchCardList';
import RecentMatches from './RecentMatches';
import PropTypes from 'prop-types';
import UpcomingMatches from './UpcomingMatches';

const TeamScheduleDashboard = ({ league = 'recent' }) => {
  return (
    <div>
       
      {league === 'recent' && <RecentMatches />}
      {league === 'upcoming' && <UpcomingMatches />}
    </div>
  );
}
TeamScheduleDashboard.propTypes = {
  league: PropTypes.oneOf(['recent', 'upcoming']).isRequired,
};
export default TeamScheduleDashboard;
