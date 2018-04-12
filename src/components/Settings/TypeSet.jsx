import React from 'react';
import '../../styles/TypeSet.css';

function TypeSet(props) {
        return (
            <div className="setUp">
                <h2 className='blockTitle'>Your type</h2>
                <select type='text'
                        defaultValue={props.value}
                        id='changeType'
                        onChange={props.onTypeChanged}>
                    <option value="" disabled>Choose your figure</option>
                    <option>X</option>
                    <option>O</option>
                </select>
            </div>
        );
}

export default TypeSet;