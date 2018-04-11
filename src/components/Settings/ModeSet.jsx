import React from 'react';
import '../../styles/ModeSet.css';

function ModeSet(props) {
        return (
            <div className="setUp">
                <h2 className='blockTitle'>First Move</h2>
                <div id='changeMode'>
                    <input type='radio'
                           id='first'
                           name="mode"
                           defaultValue={props.value.human}
                           onChange={props.onModeChanged} />
                    <label htmlFor="first">Human</label>
                    <input type='radio'
                           id='second'
                           name="mode"
                           defaultValue={props.value.computer}
                           onChange={props.onModeChanged} />
                    <label htmlFor="second">Computer</label>
                </div>
            </div>
        );
}

export default ModeSet;