import React from 'react';
import FeedbackOptions from './FeedbackOptions';

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
        this.setState(prevState => ({
            btn: prevState.btn + 1,
        }));
    };
    
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <FeedbackOptions options={this.props.buttons} onLeaveFeedback={this.handleLeaveFeedback}/>
            </div>
        )
    }

}

export default Section;