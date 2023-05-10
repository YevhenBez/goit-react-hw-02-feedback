import React from 'react';
import css from 'statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <span className={css.statistics}>Good:{good}</span>
    <span className={css.statistics}>Neutral:{neutral}</span>
    <span className={css.statistics}>Bad:{bad}</span>
    <span className={css.statistics}>Total:{total}</span>
    <span className={css.statistics}>
      Positive feedback:{positivePercentage}%
    </span>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
