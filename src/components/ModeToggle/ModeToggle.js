import React from 'react';
import { useTheme } from '../../themes/ThemeContext';
import './ModeToggle.css';

const ModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="mode-toggle-container">
      <p className="toggle-label">
        {theme === 'dark' ? 'Turn On the Lights' : 'Turn Off the Lights'}
      </p>
      <div className="toggle-switch" onClick={toggleTheme}>
        <div className={`toggle-selector ${theme}`}></div>
      </div>
    </div>
  );
};

export default ModeToggle;
