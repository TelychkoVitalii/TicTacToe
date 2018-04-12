import React, { Component } from 'react';
import '../../styles/Summary.css';

class Results extends Component {
    render() {
        const {player, ties, computer} = JSON.parse(localStorage.getItem('summary')) || this.props.data,
              summary = [
                    {id: 1, title: 'Player', score: player},
                    {id: 2, title: 'Ties', score: ties},
                    {id: 3, title: 'Computer', score: computer},
                ];

        return (
            <div className="results">
                {summary.map(el => {
                    return (
                        <div className="resultsInfo" key={el.id}>
                            <p>{el.title}</p>
                            <span className="point">{el.score}</span>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Results;