import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import capitalize from 'lodash.capitalize';
import '../../styles/UserPage.css';

function mapStateToProps(state){
    return {
        users: state.users.users,
    };
}

class UserPage extends Component {

    render() {
        const userDetails = this.props.users.map(users => users.filter(user => user.name.last === this.props.match.params.id))[0];
        return (
            <div>
                {userDetails.map(user => {
                    const {title, first, last} = user.name;
                    return (
                        <div>
                            <h2 className="userName">
                                {capitalize(title)} {}
                                {capitalize(first)} {}
                                {capitalize(last)}
                            </h2>
                            <div className="details">
                                <div>
                                    <img className="avatar" src={user.picture.large} alt="Avatar"/>
                                    <figure>
                                        <figcaption>
                                            <Link to="/">
                                                <button id="backButton">Back</button>
                                            </Link>
                                        </figcaption>
                                    </figure>
                                 </div>
                                <div className="info">
                                    <ul className="listDetails">
                                        <li><span>Email:</span> {user.email}</li>
                                        <li><span>Phone:</span> {user.phone}</li>
                                        <li><span>Username:</span> {user.login.username}</li>
                                        <li><span>City:</span> {user.location.city}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default connect (
    mapStateToProps,
    null
)(UserPage);