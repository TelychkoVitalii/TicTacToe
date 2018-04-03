import React, { Component } from 'react';
import '../styles/Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    userMove = () => this.setState({value: 'X'});

    render() {
        return (
            <div className={this.state.value !== null ? 'cell ' + this.props.className : 'cell'}
                 onClick={() => this.userMove()}>
                {this.state.value}
            </div>
        )
    }
}

export default Cell;