import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '../../themes/ThemeContext';
import './Footer.css';

const Footer = () => {
  const footerData = useSelector(state => state.about.footer);
  const { theme } = useTheme();

  return (
    <div className={`footer-container ${theme}`}>
      <h4>{footerData.starText}</h4>
    </div>
  );
};

export default Footer;
