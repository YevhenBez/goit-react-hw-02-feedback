import React from 'react';
import css from 'feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    options.map(btn => <button className={css.buttonOptions} key={btn} type="button" onClick={onLeaveFeedback}>{btn}</button>)
);

export default FeedbackOptions;