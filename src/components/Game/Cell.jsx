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
    state = {
       condition: false,
       matrix: this.props.matrix
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.matrix !== prevState.matrix) {
            if(nextProps.matrix[nextProps.index] !== '') {
                return {
                    condition: true
                }
            }
        }
        return nextProps.matrix;
    }

    userMove = () => this.props.addMove(this.props.index, this.props.move);

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
