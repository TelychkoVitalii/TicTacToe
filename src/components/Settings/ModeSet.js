import React from 'react';
import '../../styles/ModeSet.css';

function ModeSet(props) {
        return (
            <div className="setUp">
                <h2 className='blockTitle'>Your mode</h2>
                <div id='changeMode'>
                    <input type='radio'
                           id='first'
                           name="mode"
                           defaultValue={props.value}
                           onChange={props.onModeChanged}
                           value='Easy' />
                    <label htmlFor="first">Easy</label>
                    <input type='radio'
                           id='second'
                           name="mode"
                           defaultValue={props.value}
                           onChange={props.onModeChanged}
                           value='Hard' />
                    <label htmlFor="second">Hard</label>
                </div>
            </div>
        );
}

export default ModeSet;