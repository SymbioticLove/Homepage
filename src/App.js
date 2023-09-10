import './App.css';
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from './themes/ThemeContext';
import WebServices from './components/WebServices/WebServices';
import Footer from './components/Footer/Footer';
import LpHero from './components/LpHero/LpHero';
import AboutSection from './components/AboutSection/AboutSection';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [languageStats, setLanguageStats] = useState([]);
  const [totalBytes, setTotalBytes] = useState(0);
  const [commitData, setCommitData] = useState([]);
  const [loadingCommitData, setLoadingCommitData] = useState(true);
  const [loadingLanguageStats, setLoadingLanguageStats] = useState(true);
  const [loading, setLoading] = useState(true);

  // Function to set loading to false after 15 seconds
  const setLoadingFalseAfterTimeout = () => {
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  };

  useEffect(() => {
    const fetchCommitData = async () => {
      try {
        const reposResponse = await fetch(
          'https://api.github.com/users/SymbioticLove/repos',
        );
        const repos = await reposResponse.json();

        const commitsData = [];

        for (const repo of repos) {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/SymbioticLove/${repo.name}/commits`,
            {
              headers: {
                Accept: 'application/vnd.github.v3+json',
              },
            },
          );
          const commits = await commitsResponse.json();

          const commitsOverTime = commits.map(commit => ({
            date: commit.commit.author.date,
            commits: 1,
          }));

          commitsData.push(...commitsOverTime);
        }

        setCommitData(commitsData);
        setLoadingCommitData(false); // Set loadingCommitData to false
      } catch (error) {
        console.error('Error fetching commit data:', error);
        setLoadingCommitData(false); // Set loadingCommitData to false on error
      }
    };

    fetchCommitData();
  }, []);

  useEffect(() => {
    const fetchLanguageStats = async () => {
      try {
        const reposResponse = await fetch(
          'https://api.github.com/users/SymbioticLove/repos',
        );
        const repos = await reposResponse.json();

        const stats = {};
        let bytesTotal = 0;

        for (const repo of repos) {
          const languagesResponse = await fetch(repo.languages_url);
          const languages = await languagesResponse.json();

          for (const [language, bytes] of Object.entries(languages)) {
            stats[language] = (stats[language] || 0) + bytes;
            bytesTotal += bytes;
          }
        }

        const threshold = 0.01 * bytesTotal;
        const filteredStats = Object.keys(stats)
          .filter(language => stats[language] > threshold)
          .map(language => ({
            name: language,
            value: stats[language],
            bytes: stats[language],
          }));

        setTotalBytes(bytesTotal);
        setLanguageStats(filteredStats);
        setLoadingLanguageStats(false); // Set loadingLanguageStats to false
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingLanguageStats(false); // Set loadingLanguageStats to false on error
      }
    };

    fetchLanguageStats();
  }, []);

  // Check if both loading states are false, and set loading to false accordingly
  useEffect(() => {
    if (!loadingCommitData && !loadingLanguageStats) {
      setLoading(false);
    }
  }, [loadingCommitData, loadingLanguageStats]);

  // Set loading to false after 15 seconds
  useEffect(() => {
    setLoadingFalseAfterTimeout();
  }, []);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              <Navigation />
              <Routes>
                <Route path="/" element={<LpHero />} />
                <Route path="/Lifestyle" />
                <Route
                  path="/Web"
                  element={
                    <WebServices
                      languageStats={languageStats}
                      totalBytes={totalBytes}
                      commitData={commitData}
                    />
                  }
                />
                <Route path="/About" element={<AboutSection />} />
              </Routes>
              <Footer />
            </>
          )}
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
