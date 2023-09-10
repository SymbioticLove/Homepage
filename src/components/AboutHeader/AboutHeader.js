import React from 'react';
import { useSelector } from 'react-redux';
import ModeToggle from '../ModeToggle/ModeToggle';
import './AboutHeader.css';

const AboutHeader = () => {
  const aboutHeaderData = useSelector(state => state.about.about.aboutHeader);

  return (
    <div className="about-header">
      <div className="lptoggle-container">
        <ModeToggle />
      </div>
      <h1>{aboutHeaderData.title}</h1>
      <h2>{aboutHeaderData.subtitle}</h2>
    </div>
  );
};

export default AboutHeader;
