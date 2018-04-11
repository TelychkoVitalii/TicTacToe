import React, { Component } from 'react';
import { connect } from 'react-redux';
import { restartGame, exitGame } from '../../redux/modules/game';
import GameField from './GameField';
import UsersList from './UsersList';
import Results from './Summary';
import Modal from './Modal';
import '../../styles/GameLayout.css';

const mapStateToProps = (state) => {
    return {
        isActive: state.game.showWinner.isActive,
        text: state.game.showWinner.text,
        summary: state.game.summary,
        matrix: state.game.matrix,
    }
};

const mapDispatchToProps = { restartGame, exitGame };

class GameLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false,
            users: null
        }
    }

    restartGame = () => {
        this.setState({ condition: true });
        this.props.restartGame(this.props.matrix);
        window.location.reload();
    };

    exitGame = () => {
        this.setState({ condition: true });
        this.props.exitGame(this.props.matrix, this.props.summary);
        window.location.reload();
    };

    render() {
        return (
            <div>
                {this.props.isActive === true ?
                    <Modal exitGame={this.exitGame}
                           restartGame={this.restartGame}
                           condition={this.state.condition}
                           value={this.props.text} /> : null}
                <div className="layout">
                    <GameField matrix={this.props.matrix}/>
                    <UsersList />
                </div>
                <Results data={this.props.summary}/>
            </div>
        );
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(GameLayout);