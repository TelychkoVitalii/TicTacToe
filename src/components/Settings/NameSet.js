import React, { Component } from 'react';
import '../../styles/NameSet.css';

class NameSet extends Component {
    render() {
        return (
            <div className="setUp">
                <h2 className='blockTitle'>Your name</h2>
                <input type='text' id='changeUserName' placeholder='Your username' value='' />
            </div>
        );
    }
}

export default NameSet;