import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addMove, addMoveAI } from '../../redux/modules/game';
import Cell from './Cell';
import '../../styles/GameField.css';

const mapStateToProps = (state) => {
    return {
        matrix: state.game.matrix,
        move: state.game.settings.figure,
        mode: state.game.settings.mode,
    }
};

const mapDispatchToProps = { addMove, addMoveAI };

class GameField extends Component {
    componentDidMount() {
        if(this.props.mode !== 'Human') {
            this.props.addMoveAI(this.props.index, this.props.move);
        }
    }

    render() {
        const size = 3;
        return (
            <div>
                <div id="matrix">
                    {this.props.matrix.map((content, index) => {
                        return <div className="cell" key={index}>
                            <Cell index={index}
                                  value={content}/>
                        </div>
                    }).reduce((arr, element, index) => {
                        index % size === 0 && arr.push([]);
                        arr[arr.length - 1].push(element);
                        return arr;
                    }, []).map(rowContent => <div className="row">{rowContent}</div>)}
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameField);