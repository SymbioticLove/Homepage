import React from 'react';
import WebHero from '../WebHero/WebHero';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import PropTypes from 'prop-types';
import QuoteForm from '../QuoteForm/QuoteForm';
import CommitStatsChart from '../CommitStatsChart/CommitStatsChart';

const WebServices = ({ languageStats, totalBytes, commitData }) => {
  return (
    <div>
      <WebHero languageStats={languageStats} totalBytes={totalBytes} />
      <CommitStatsChart commitData={commitData} />
      <QuoteForm />
      <ProjectsContainer />
    </div>
  );
};

WebServices.propTypes = {
  languageStats: PropTypes.array.isRequired,
  totalBytes: PropTypes.number.isRequired,
  commitData: PropTypes.array.isRequired,
};

export default WebServices;
