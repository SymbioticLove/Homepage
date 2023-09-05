import React from 'react';
import { useSelector } from 'react-redux';
import './WebHero.css';
import LanguageChart from '../LanguageChart/LanguageChart';
import PropTypes from 'prop-types';
import { useTheme } from '../../themes/ThemeContext';
import CommitStatsChart from '../CommitStatsChart/CommitStatsChart';

const WebHero = ({ languageStats, totalBytes, commitData }) => {
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
        <div className="chart-row">
          <LanguageChart
            languageStats={languageStats}
            totalBytes={totalBytes}
          />
          <CommitStatsChart commitData={commitData} />
        </div>
      </div>
    </div>
  );
};

WebHero.propTypes = {
  languageStats: PropTypes.array.isRequired,
  totalBytes: PropTypes.number.isRequired,
  commitData: PropTypes.array.isRequired,
};

export default WebHero;
