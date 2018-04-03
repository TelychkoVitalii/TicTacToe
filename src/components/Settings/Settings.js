import React, { Component } from 'react';
import NameSet from './NameSet';
import TypeSet from './TypeSet';
import ModeSet from './ModeSet';
import '../../styles/Settings.css';

class Settings extends Component {
    render() {
        return (
            <div>
                <h1 className='bestSettings'>Choose your best settings</h1>
                <div id='settingsContent'>
                    <NameSet />
                    <TypeSet />
                    <ModeSet />
                </div>
                <button id='saveButton'>Save</button>
            </div>
        );
    }
}

export default Settings;