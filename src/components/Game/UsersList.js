import React, { Component } from 'react';
import '../../styles/UsersList.css';

class UsersList extends Component {
    render() {
        return (
            <div className="userList">
                <h1 className="statistics">Statistics</h1>
                {/*{this.props.players.map(user => {*/}
                    {/*return (*/}
                        {/*<span>{user.name}</span>*/}
                    {/*)*/}
                {/*})}*/}
            </div>
        );
    }
}

export default UsersList;