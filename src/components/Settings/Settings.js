import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSettings } from '../../redux/modules/addData';
import NameSet from './NameSet';
import TypeSet from './TypeSet';
import ModeSet from './ModeSet';
import '../../styles/Settings.css';

const mapDispatchToProps = (dispatch) => {
    return {
        addSettings: (name, figure, mode) => dispatch(addSettings(name, figure, mode))
    }
};

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            mode: ''
        }
    }

    submitData = () => {
        const {name, type, mode} = this.state;
        this.props.addSettings(name, type, mode);
    };

    handleUserName = (event) => this.setState({name: event.target.value});
    handleType = (event) => this.setState({type: event.target.value});
    handleMode = (event) => this.setState({mode: event.target.value});

    render() {
        return (
            <div>
                <h1 className='bestSettings'>Choose your best settings</h1>
                <div id='settingsContent'>
                    <NameSet name={this.handleUserName} />
                    <TypeSet type={this.handleType} />
                    <ModeSet mode={this.handleMode} />
                </div>
                <button id='saveButton' onClick={this.submitData}>Save</button>
            </div>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Settings);