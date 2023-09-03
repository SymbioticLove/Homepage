import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import './CommitStatsChart.css';
import { useTheme } from '../../themes/ThemeContext';

function CommitStatsChart({ commitData }) {
  // Function to calculate total commits for the last 6 months
  const calculateMonthlyCommits = () => {
    const currentDate = new Date();
    const last6Months = [];

    // Generate the last 6 months starting from the current month
    for (let i = 0; i < 6; i++) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() - i;
      last6Months.unshift({
        year: month < 0 ? year - 1 : year,
        month: (month + 12) % 12, // Ensure month is in the range 0-11
      });
    }

    // Initialize monthly commits with zeros
    const monthlyCommits = last6Months.map(({ year, month }) => ({
      year,
      month,
      commits: 0,
    }));

    // Count commits for each month
    commitData.forEach(commit => {
      const commitDate = new Date(commit.date);
      const commitYear = commitDate.getFullYear();
      const commitMonth = commitDate.getMonth();

      // Find the corresponding month in monthlyCommits and increment commits
      const monthIndex = last6Months.findIndex(
        ({ year, month }) => year === commitYear && month === commitMonth,
      );

      if (monthIndex !== -1) {
        monthlyCommits[monthIndex].commits += 1;
      }
    });

    return monthlyCommits;
  };

  const monthlyCommits = calculateMonthlyCommits();

  // Create an array of data for the chart
  const chartData = monthlyCommits.map(({ year, month, commits }) => ({
    month: new Date(year, month, 1).toLocaleString('en-US', { month: 'long' }),
    commits,
  }));

  // Custom tick formatter to hide "0" on the Y-axis
  const yAxisTickFormatter = value => (value === 0 ? '' : value);

  const { theme } = useTheme();

  return (
    <div className="chart-container">
      <h2 className={`update-title ${theme}`}>Total Updates / 6 Months</h2>
      <ResponsiveContainer width="100%" height={600}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 15 }}
        >
          <XAxis dataKey="month" textAnchor="end" />
          <YAxis
            type="number"
            domain={[0, 250]}
            ticks={[0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250]}
            tickFormatter={yAxisTickFormatter} // Customize tick formatting
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="commits"
            name="Updates"
            stroke="#8884d8"
            dot={true} // Display data points
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

CommitStatsChart.propTypes = {
  commitData: PropTypes.array.isRequired,
};

export default CommitStatsChart;
