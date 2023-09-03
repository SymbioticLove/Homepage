import React from 'react';
import { useSelector } from 'react-redux';
import './WebHero.css';
import LanguageChart from '../LanguageChart/LanguageChart';
import PropTypes from 'prop-types';
import { useTheme } from '../../themes/ThemeContext';
// import Calculator from '../Calculator/Calculator';

const WebHero = ({ languageStats, totalBytes }) => {
  const webHeroData = useSelector(state => state.about.webServices.webHero);
  const serviceList = webHeroData.serviceList;
  const specialtyList = webHeroData.specialtyList;
  const { theme } = useTheme();

  return (
    <div>
      <div className="webHero-banner">
        <div className="horizontal-bar top-bar">
          <div className="bar-list">
            {serviceList.map((service, index) => (
              <div key={index} className="bar-item">
                {service}
              </div>
            ))}
          </div>
        </div>
        <h1>{webHeroData.title}</h1>
        <div className="horizontal-bar bottom-bar">
          <div className="bar-list">
            {specialtyList.map((specialty, index) => (
              <div key={index} className="bar-item">
                {specialty}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`webHero-frame ${theme}`}>
        <a
          href="https://github.com/SymbioticLove"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Our Code</h2>
        </a>
        <LanguageChart languageStats={languageStats} totalBytes={totalBytes} />
      </div>
    </div>
  );
};

WebHero.propTypes = {
  languageStats: PropTypes.array.isRequired,
  totalBytes: PropTypes.number.isRequired,
};

export default WebHero;
