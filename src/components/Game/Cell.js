import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMove } from '../../redux/modules/game';
import '../../styles/Cell.css';

const mapStateToProps = (state) => {
    return {
        matrix: state.game.matrix,
        move: JSON.parse(localStorage.getItem('settings')).figure
    }
};
// || state.game.settings.figure
const mapDispatchToProps = { addMove };

class Cell extends Component {

    userMove = () => this.props.addMove(this.props.index, this.props.move);

    render() {
        return (
            <div className={this.props.value !== null ? 'cell ' + this.props.className : 'cell'}
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