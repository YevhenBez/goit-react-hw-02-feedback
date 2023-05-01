import React from 'react';

class Section extends React.Component {
    static defaultProps = {
        initialTitle: "Please leave feedback",
    };

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.initialTitle}</h1>
            </div>
        )
    }

}

export default Section;