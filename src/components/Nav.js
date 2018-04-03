import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

class Nav extends Component {
    render() {
        return (
            <div>
                <ul className="navList">
                    <li>
                        <NavLink className='settings' exact activeClassName='active' to="/settings"> Settings </NavLink>
                    </li>
                    <li>
                        <NavLink className='help' activeClassName='active' to="/help"> Help </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;