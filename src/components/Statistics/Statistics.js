import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles['stats-container']}>
    {title && <h2 className={styles['stats-title']}>{title}</h2>}
    <ul className={styles['stats-list']}>
      {stats.map(stat => (
        <li
          className={styles['stats-item']}
          key={stat.id}
        >
          <span className={styles['stats-label']}>{stat.label}</span>
          <span className={styles['stats-percentage']}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

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
