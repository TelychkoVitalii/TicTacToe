import React from 'react';
import '../../styles/NameSet.css';

function NameSet(props) {
        return (
            <div className="setUp">
                <h2 className='blockTitle'>Your name</h2>
                <input type='text'
                       id='changeUserName'
                       value={props.value}
                       placeholder='Your username'
                       onChange={props.onNameChanged} />
            </div>
        );
}

export default NameSet;