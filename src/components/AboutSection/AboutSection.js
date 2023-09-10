import React from 'react';
import AboutHeader from '../AboutHeader/AboutHeader';
import AboutMatthew from '../AboutMatthew/AboutMatthew';
import AboutJessela from '../AboutJessela/AboutJessela';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div>
      <AboutHeader />
      <AboutMatthew />
      <AboutJessela />
    </div>
  );
};

export default AboutSection;
