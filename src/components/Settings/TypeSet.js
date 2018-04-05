import React from 'react';
import '../../styles/TypeSet.css';

function TypeSet(props) {
        return (
            <div className="setUp">
                <h2 className='blockTitle'>Your type</h2>
                <select type='text'
                        value={props.value}
                        id='changeType'
                        onChange={props.onTypeChanged}>
                    <option disabled>Choose your figure</option>
                    <option>X</option>
                    <option>O</option>
                </select>
            </div>
        );
}

export default TypeSet;