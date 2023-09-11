import React from 'react';
import { useSelector } from 'react-redux';
import SkillsContainer from '../SkillsContainer/SkillsContainer';
import { useTheme } from '../../themes/ThemeContext';
import AboutAccordion from '../AboutAccordion/AboutAccordion';

const AboutMatthew = () => {
  const aboutSectionData = useSelector(state => state.about.about);
  const { theme } = useTheme();

  const renderPerson = personData => (
    <div className={`name-and-title ${theme}`}>
      <h1>{personData.name}</h1>
      <h2>{personData.title}</h2>
      <p>{personData.phone}</p>
      <p>{personData.email}</p>
    </div>
  );

  return (
    <div>
      <div className="skills">
        <div className="image-container">
          {renderPerson(aboutSectionData.section1, 'matthew-container')}
          <img src="https://placehold.co/400x900" alt="Matthew" />
        </div>
        <div className="skills-container">
          <SkillsContainer className="matthew-container" />
        </div>
      </div>
      <AboutAccordion
        title="About Me"
        content={aboutSectionData.section1.aboutMe}
      />
    </div>
  );
};

export default AboutMatthew;
