import React, { Component } from 'react';
import '../../styles/ModeSet.css';

class ModeSet extends Component {
    render() {
        return (
            <div className="setUp">
                <h2 className='blockTitle'>Your mode</h2>
                <div id='changeMode'>
                    <input type='radio'
                           id='first'
                           name="mode"
                           onChange={this.props.mode}
                           value='Easy' />
                    <label htmlFor="first">Easy</label>
                    <input type='radio'
                           id='second'
                           name="mode"
                           onChange={this.props.mode}
                           value='Hard' />
                    <label htmlFor="second">Hard</label>
                </div>
            </div>
        );
    }
}

export default ModeSet;