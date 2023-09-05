import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './LanguageChart.css';
import { useTheme } from '../../themes/ThemeContext';

const accent = '#6c3483';

const LanguageChart = ({ languageStats, totalBytes }) => {
  const { theme } = useTheme();
  const languageColors = {
    HTML: '#E44D26',
    CSS: '#264DE4',
    JavaScript: '#DAA520',
    Python: '#3572A5',
    Ruby: '#701516',
    Shell: '#4EAA25',
    Batchfile: '#C1F12E',
    Java: '#6F4E37',
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    name,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const baseOffset = 160; // Length of the longest line
    const decrement = 15; // Amount to decrement for each slice
    const offset = baseOffset - decrement * index; // Length of the line for this slice

    const x1 = cx + (outerRadius - 10) * Math.cos(-midAngle * RADIAN);
    const y1 = cy + (outerRadius - 0) * Math.sin(-midAngle * RADIAN);
    const x2 = x1 + offset * Math.cos(-midAngle * RADIAN);
    const y2 = y1 + offset * Math.sin(-midAngle * RADIAN);
    const x3 = x2 + 10; // Extend line for specific labels

    // Inside labels
    if (['CSS', 'JavaScript', 'Python', 'HTML'].includes(name)) {
      // Specific adjustments for labels can be added here
      let xInside = cx + (outerRadius / 2) * Math.cos(-midAngle * RADIAN);
      let yInside = cy + (outerRadius / 2) * Math.sin(-midAngle * RADIAN);

      // Apply individual adjustments based on label name
      switch (name) {
        case 'CSS':
          // Apply adjustment for CSS label
          xInside -= -2;
          yInside -= 13;
          break;
        case 'JavaScript':
          // Apply adjustment for JavaScript label
          xInside += -3;
          yInside -= 10;
          break;
        case 'Python':
          // Apply adjustment for Python label
          xInside -= -10;
          yInside += 5;
          break;
        case 'HTML':
          // Apply adjustment for HTML label
          xInside += 25;
          yInside += -5;
          break;
        default:
          break;
      }

      return (
        <text
          x={xInside}
          y={yInside}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
          className={`fade-in-text inner-upper ${theme}`}
        >
          {name}
        </text>
      );
    }

    return (
      <g>
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#000"
          className={`fade-in-text lines ${theme}`}
        />
        <line
          x1={x2}
          y1={y2}
          x2={x3}
          y2={y2}
          stroke="#000"
          className={`fade-in-text lines ${theme}`}
        />
        <text
          x={x3}
          y={y2}
          fill={accent}
          textAnchor="start"
          dominantBaseline="central"
          className={`fade-in-text outer-text ${theme}`}
        >
          {name}
        </text>
      </g>
    );
  };

  return (
    <div>
      <a
        href="https://github.com/SymbioticLove"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="chart-title">Our Code</h2>
      </a>
      <div className={`fade-in-text total-div ${theme}`}>
        Total Bytes: {totalBytes.toLocaleString()} and counting!
      </div>
      <ResponsiveContainer width={325} height={325} className="r-container">
        <PieChart>
          <Pie
            data={languageStats}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={props => renderCustomizedLabel(props, languageStats.length)}
            labelLine={false}
          >
            {languageStats.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={languageColors[entry.name] || '#000000'}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

LanguageChart.propTypes = {
  languageStats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      bytes: PropTypes.number.isRequired,
    }),
  ).isRequired,
  totalBytes: PropTypes.number.isRequired,
};

export default LanguageChart;
