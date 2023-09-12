import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);

    // Update body's background color
    document.body.style.backgroundColor = isDarkMode ? '#e4e4e4' : '#333';
  };

  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
