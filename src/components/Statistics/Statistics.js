import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.module.css'; 

const Statistics = ({ title, stats }) => {
  
  const statsByExtension = {};

  stats.forEach(({ id, label, percentage }) => {
    
    const extension = label.split('.').pop();

    if (statsByExtension[extension]) {
      
      statsByExtension[extension].percentage += percentage;
    } else {
      
      statsByExtension[extension] = {
        id: extension,
        label: `.${extension}`,
        percentage,
      };
    }
  });

  return (
    <section className="stats-container">
      {title && <h2 className="stats-title">{title}</h2>}
      <ul className="stats-list">
        {Object.values(statsByExtension).map(({ id, label, percentage }) => (
          <li key={id} className="stats-item">
            <span className="stats-label">{label}</span>
            <span className="stats-percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
