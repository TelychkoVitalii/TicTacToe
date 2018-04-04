import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMove } from '../../redux/modules/game';
import '../../styles/Cell.css';

const mapStateToProps = (state) => {
    return {
        figure: state.addData.settings.figure || JSON.parse(localStorage.getItem('settings')).figure
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
        const { figure } = this.props;
        this.props.addMove(figure);
        this.setState({value: figure});
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