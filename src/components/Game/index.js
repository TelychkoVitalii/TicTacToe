import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearMatrix } from '../../redux/modules/game';
import GameField from './GameField';
import UsersList from './UsersList';
import Results from './Summary';
import Modal from './Modal';
import api from '../../services/api';
import '../../styles/GameLayout.css';

const mapStateToProps = (state) => {
    return {
        isActive: state.game.showWinner.isActive,
        text: state.game.showWinner.text,
        summary: JSON.parse(localStorage.getItem('summary')) || state.game.summary,
        matrix: state.game.matrix,
    }
};

const mapDispatchToProps = { clearMatrix };

class GameLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false,
            users: null
        }
    }

    componentWillMount() {
        api.fetchUsers()
            .then(users => this.setState({users: users}))
            .catch(error => error);
    }

    restartGame = () => {
        this.setState({ condition: true });
        this.props.clearMatrix(this.props.matrix);
    };

    render() {
        return (
            <div>
                {this.props.isActive === true ?
                    <Modal restartGame={this.restartGame}
                           condition={this.state.condition}
                           value={this.props.text} /> : null}
                <div className="layout">
                    <GameField matrix={this.props.matrix}/>
                    <UsersList players={this.state.users}/>
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