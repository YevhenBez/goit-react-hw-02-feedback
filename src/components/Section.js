import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class Section extends React.Component {
    static defaultProps = {
        buttons: ['bad', 'neutral', 'good']
    };

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleLeaveFeedback = (btn) => {
        console.log('Кликнули')
        this.setState(prevState => ({
            btn: prevState.btn + 1,
        }));
    };

    countTotalFeedback = () => {
        this.setState(prevState => ({
            value: this.state.good + this.state.neutral + this.state.bad,
        }));
        
    }

    countPositiveFeedbackPercentage = () => {
        return (
            Math.round((this.state.good / this.countTotalFeedback) * 100)
        )
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <FeedbackOptions options={this.props.buttons} onLeaveFeedback={this.handleLeaveFeedback} />
                <h2>Statistics</h2>
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}  ></Statistics>
            </div>
        )
    }

}

export default Section;