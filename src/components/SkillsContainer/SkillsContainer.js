import React from 'react';
import { useSelector } from 'react-redux';
import SkillBubbles from '../SkillBubbles/SkillBubbles';
import PropTypes from 'prop-types';

const SkillsContainer = ({ className }) => {
  // Use useSelector to access the Redux store and get the appropriate skills data
  const skillsData = useSelector(state =>
    className === 'matthew-container'
      ? state.about.about.matthewSkills
      : className === 'jessela-container'
      ? state.about.about.jesselaSkills
      : [],
  );

  return <SkillBubbles skillsData={skillsData} />;
};

SkillsContainer.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SkillsContainer;
