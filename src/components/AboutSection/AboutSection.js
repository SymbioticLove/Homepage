import React from 'react';
import { useSelector } from 'react-redux';
import SkillsContainer from '../SkillsContainer/SkillsContainer';
import AboutHeader from '../AboutHeader/AboutHeader';
import './AboutSection.css';

const AboutSection = () => {
  const aboutSectionData = useSelector(state => state.about.about);

  const renderPerson = personData => (
    <div className="name-and-title">
      <h1>{personData.name}</h1>
      <h2>{personData.title}</h2>
      <p>{personData.phone}</p>
      <p>{personData.email}</p>
    </div>
  );

  return (
    <div>
      <AboutHeader />
      {renderPerson(aboutSectionData.section1, 'matthew-container')}
      <div className="skills">
        <div className="image-container">
          <img src="https://placehold.co/400x900" alt="Matthew" />
        </div>
        <div className="skills-container">
          <SkillsContainer className="matthew-container" />
        </div>
      </div>
      {renderPerson(aboutSectionData.section2, 'jessela-container')}
      <div className="skills">
        <div className="skills-container">
          <SkillsContainer className="jessela-container" />
        </div>
        <div className="image-container">
          <img src="https://placehold.co/400x900" alt="Jessela" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
