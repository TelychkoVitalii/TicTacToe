import React from 'react';
import Cell from './Cell';
import '../../styles/GameField.css';

function GameField(props) {
    const size = 3;
    return (
        <div>
            <div id="matrix">
                {props.matrix.map((content, index) => {
                    return <div className="cell">
                                <Cell index={index}
                                      value={content} />
                            </div>
                }).reduce((arr, element, index) => {
                    index % size === 0 && arr.push([]);
                    arr[arr.length - 1].push(element);
                    return arr;
                }, []).map(rowContent => <div className="row">{rowContent}</div> )}
            </div>
        </div>
    )
}

export default GameField;