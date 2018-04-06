import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Modal.css';

function Modal(props) {
    return (
        <div className={props.condition ? 'modalWindow restartWindow': 'modalWindow'}>
            <h1 id='winnerTitle'>{props.value}</h1>
            <div id='modalBtns'>
                <button className='modalBtn'
                        onClick={props.restartGame}>Restart</button>
                <Link to='/settings'>
                    <button className='modalBtn'>Settings</button>
                </Link>
                <Link to='/help'>
                    <button className='modalBtn'>Help</button>
                </Link>
            </div>
        </div>
    );
}

export default Modal;