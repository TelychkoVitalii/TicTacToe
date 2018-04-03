import React, { Component } from 'react';
import GameField from './GameField';
import UsersList from './UsersList';
import Results from './Results';
import '../styles/GameLayout.css';

class GameLayout extends Component {
    render() {
        return (
            <div>
                <div className="layout">
                    <GameField/>
                    <UsersList/>
                </div>
                <Results/>
            </div>
        );
    }
}

export default GameLayout;