import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSettings, addMove } from '../../redux/modules/addData';
import '../../styles/Cell.css';

const mapStateToProps = (state, props) => {
    return {
        figure: state.addData.settings.figure
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMove: (figure) => dispatch(addMove(figure))
    }
};

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    userMove = () => {
        this.props.addMove(this.props.figure);
        this.setState({value: this.props.figure});
    };

    render() {
        return (
            <div className={this.state.value !== null ? 'cell ' + this.props.className : 'cell'}
                 onClick={this.userMove}>
                {this.state.value}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell);