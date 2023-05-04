import React from 'react';
import css from 'statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        <span className={css.statistics}>Good:{good}</span>
        <span className={css.statistics}>Neutral:{neutral}</span>
        <span className={css.statistics}>Bad:{bad}</span>
        <span className={css.statistics}>Total:{total}</span>
        <span className={css.statistics}>Positive feedback:{positivePercentage}%</span>
    </div>
);
    
export default Statistics;