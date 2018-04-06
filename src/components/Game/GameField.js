import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';
import '../../styles/GameField.css';

const mapStateToProps = (state) => {
    return {
        matrix: state.game.matrix
    }
};

class GameField extends Component {
    render() {
        const size = 3;
        return (
            <div id="matrix">
                {this.props.matrix.map((content, index) => {
                    return <Cell index={index}
                                 value={content}
                                 className='animate' />
                }).reduce((arr, element, index) => {
                    index % size === 0 && arr.push([]);
                    arr[arr.length - 1].push(element);
                    return arr;
                }, []).map(rowContent => <div className="row">{rowContent}</div> )}
            </div>
    )}
}

export default connect (
    mapStateToProps,
    null
)(GameField);