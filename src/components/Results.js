import React, { Component } from 'react';
import '../styles/Results.css';

class Results extends Component {
    render() {
        return (
            <div className="results">
                <div id="playerResults">
                    <p>Player</p>
                    <span className="point">0</span>
                </div>
                <div id="computerResults">
                    <p>Ties</p>
                    <span className="point">0</span>
                </div>
                <div id="computerResults">
                    <p>Computer</p>
                    <span className="point">0</span>
                </div>
            </div>
        );
    }
}

export default Results;