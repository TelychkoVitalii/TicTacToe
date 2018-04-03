import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <Link className='title' to='/'>Tic Tac Toe</Link>
                <Nav/>
            </header>
        );
    }
}

export default Header;