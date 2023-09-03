import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '../../themes/ThemeContext';
import './Header.css';

const Header = () => {
  const headerData = useSelector(state => state.about.header);
  const { theme } = useTheme(); // Get theme from context

  return (
    <div className={`header-container ${theme}`}>
      <h1>{headerData.title}</h1>
    </div>
  );
};

export default Header;
