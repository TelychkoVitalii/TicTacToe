import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMove } from '../../redux/modules/game';
import '../../styles/Cell.css';

const mapStateToProps = (state) => {
    return {
        matrix: state.game.matrix,
        move: state.game.settings.figure,
        mode: state.game.settings.mode,
    }
};

const mapDispatchToProps = { addMove };

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false,
        }
    }

    userMove = () => {
        this.setState({ condition: true });
        this.props.addMove(this.props.index, this.props.move);
    };

    render() {
        return (
            <div className={this.state.condition ? 'animate' : 'innerCell'}
                 onClick={this.userMove}>
                   {this.props.value}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell);
