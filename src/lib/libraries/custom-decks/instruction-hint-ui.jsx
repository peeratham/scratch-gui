import React from 'react';

class InstructionHint extends React.Component {
    constructor(props) {
        super(props);
        this.onMoreHintClicked = this.onMoreHintClicked.bind(this);
        this.state = { nextHintVisible: false }
    }

    onMoreHintClicked() {
        this.props.onViewInstructionHint(this.props.id);
        this.setState({ nextHintVisible: true });
    }

    render() {
        return (<div>
            {this.props.content}<br />
            {!this.state.nextHintVisible && this.props.children &&
                <button onClick={this.onMoreHintClicked}>More hint</button>
            }
            {this.state.nextHintVisible && this.props.children}
        </div>);
    }
}

export default InstructionHint;