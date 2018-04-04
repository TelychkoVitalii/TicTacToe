import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';
import '../../styles/GameField.css';

const mapStateToProps = (state) => {
    return {
        matrix: state.addData.matrix
    }
};

class GameField extends Component {
    render() {
        const size = 3;
        const rows = this.props.matrix.map((content, index) => <Cell key={index} className='animate'>{content}</Cell>)
            .reduce((arr, element, index) => {
                index % size === 0 && arr.push([]);
                arr[arr.length - 1].push(element);
                return arr;
        }, []).map(rowContent => <div className="row">{rowContent}</div> );
        return <div id="matrix">{rows}</div>;
    }
}

export default connect (
    mapStateToProps,
    null
)(GameField);