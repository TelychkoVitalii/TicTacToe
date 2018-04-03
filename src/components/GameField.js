import React, { Component } from 'react';
import Cell from './Cell';
import '../styles/GameField.css';

class GameField extends Component {
    render() {
        return (
            <div>
                {/*<div id="modal"></div>*/}
                <div id="matrix">
                    <div className='cell top left'>
                        <Cell value=''
                              className="animate"/>
                    </div>
                    <div className='cell top'>
                        <Cell value=''
                              className="animate"/>
                    </div>
                    <div className='cell top right'>
                        <Cell value=''
                              className="animate"/>
                    </div>
                    <div className='cell left'>
                        <Cell value=''
                              className="animate"/>
                    </div>
                    <div className='cell center'>
                        <Cell value=''
                              className="animate"/>
                    </div>
                    <div className='cell right'>
                        <Cell value=''
                              className="animate"/>
                    </div>
                    <div className='cell bottom left'>
                        <Cell value=''
                              className="animate"/>
                    </div>
                    <div className='cell bottom'>
                        <Cell value=''
                              className="animate"/>
                    </div>
                    <div className='cell bottom right'>
                        <Cell value=''
                              className="animate"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameField;