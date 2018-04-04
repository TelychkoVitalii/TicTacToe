import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSettings } from '../../redux/modules/game';
import { Link } from 'react-router-dom';
import NameSet from './NameSet';
import TypeSet from './TypeSet';
import ModeSet from './ModeSet';
import '../../styles/Settings.css';

const mapStateToProps = (state) => {
    return {
        settings: state.addData.settings
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addSettings: (name, figure, mode) => dispatch(addSettings(name, figure, mode))
    }
};

class Settings extends Component {

    handleUserName = (event) => this.props.settings.name = event.target.value;
    handleFigure = (event) => this.props.settings.figure = event.target.value;
    handleMode = (event) => this.props.settings.mode = event.target.value;

    submitData = () => {
        const {name, figure, mode} = this.props.settings;
        localStorage.setItem('settings', JSON.stringify(this.props.addSettings(name, figure, mode)));
    };

    render() {
        return (
            <div>
                <h1 className='bestSettings'>Choose your best settings</h1>
                <div id='settingsContent'>
                    <NameSet onNameChanged={this.handleUserName} />
                    <TypeSet onTypeChanged={this.handleFigure} />
                    <ModeSet onModeChanged={this.handleMode} />
                </div>
                <Link to='/'>
                    <button id='saveButton' onClick={this.submitData}>Save</button>
                </Link>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);