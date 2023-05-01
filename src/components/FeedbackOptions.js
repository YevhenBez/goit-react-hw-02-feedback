import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    options.map(btn=> <button key={btn} type="button" onClick={onLeaveFeedback}>{btn}</button>)
);

export default FeedbackOptions;