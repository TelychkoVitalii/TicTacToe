import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMove } from '../../redux/modules/game';
import '../../styles/Cell.css';

const mapStateToProps = (state) => {
    return {
        move: JSON.parse(localStorage.getItem('settings')).figure || state.game.settings.figure
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMove: (id, figure) => dispatch(addMove(id, figure))
    }
};

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