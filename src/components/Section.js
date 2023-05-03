import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class Section extends React.Component {
    static defaultProps = {
        buttons: ['bad', 'neutral', 'good'],
    };

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    

    
    handleLeaveFeedback = (event) => {
        const name = event.currentTarget.textContent;
        
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
        
        
    };

    countTotalFeedback = () => {
        console.log(Object.values(this.state));

        return Object.values(this.state).reduce((acc, option) => acc + option, 0);
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        console.log(this.countTotalFeedback());
        return Math.round((good / this.countTotalFeedback()) * 100) || 0;
        
    };
    
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <FeedbackOptions options={this.props.buttons} onLeaveFeedback={this.handleLeaveFeedback} />
                <h2>Statistics</h2>
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}  total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
            </div>
        )
    }

}

export default Section;