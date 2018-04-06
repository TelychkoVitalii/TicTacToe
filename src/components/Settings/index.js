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
        settings: state.game.settings
    }
};

const mapDispatchToProps =  { addSettings };

class Settings extends Component {

    static getDerivedStateFromProps(nextProps) {
        return nextProps.settings;
    }

    handleUserName = (event) => this.setState({name: event.target.value});
    handleFigure = (event) => this.setState({figure: event.target.value});
    handleMode = (event) => this.setState({mode: event.target.value});

    submitData = () => {
        const {name, figure, mode} = this.state;
        this.props.addSettings(name, figure, mode);
    };

    render() {
        return (
            <div>
                <h1 className='bestSettings'>Choose your best settings</h1>
                <div id='settingsContent'>
                    <NameSet onNameChanged={this.handleUserName} value={this.state.name} />
                    <TypeSet onTypeChanged={this.handleFigure} value={this.state.figure} />
                    <ModeSet onModeChanged={this.handleMode} value={this.state.mode} />
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