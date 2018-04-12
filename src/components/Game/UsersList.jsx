import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../redux/modules/users';
import { Link } from 'react-router-dom';
import capitalize from 'lodash.capitalize';
import '../../styles/UsersList.css';

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
    }
};

const mapDispatchToProps = { loadUsers };

class UsersList extends Component {

    state = {
        users: []
    };

    componentDidMount() {
        this.props.loadUsers();
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            users: nextProps.users
        }
    }

    render() {
        return (
            <div className="userList">
                <h1 className="statistics">List of Winners</h1>
                {this.props.users.map(users => {
                    return (
                        <ul>
                            {users.map(user => {
                                const {first, last} = user.name;
                                return (
                                    <li className="listItem" key={user.login.username}>
                                        <Link to={`user/${last}`}>
                                            {capitalize(first)} {}
                                            {capitalize(last)}
                                        </Link>
                                    </li>
                                )})}
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(UsersList);