import React from 'react';
import { useSelector } from 'react-redux';
import SkillsContainer from '../SkillsContainer/SkillsContainer';
import { useTheme } from '../../themes/ThemeContext';

const AboutJessela = () => {
  const aboutSectionData = useSelector(state => state.about.about);
  const { theme } = useTheme();

  const renderPerson = personData => (
    <div className={`name-and-title jnat ${theme}`}>
      <h1>{personData.name}</h1>
      <h2>{personData.title}</h2>
      <p>{personData.phone}</p>
      <p>{personData.email}</p>
    </div>
  );

  return (
    <div>
      <div className="skills">
        <div className="skills-container">
          <SkillsContainer className="jessela-container" />
        </div>
        <div className="image-container">
          {renderPerson(aboutSectionData.section2, 'jessela-container')}
          <img src="https://placehold.co/400x900" alt="Jessela" />
        </div>
      </div>
    </div>
  );
};

export default AboutJessela;
