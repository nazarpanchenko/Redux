import React from 'react';
import { connect } from 'react-redux';
import Filter from '../Filter';
import User from './User';
import { onInputChange } from './users.actions';
import { filterTextSelector, usersListSelector } from './users.selectors';

const UsersList = ({ users, filterText, onInputChange }) => {
    const filteredUsersCount = users.length;

    return (
        <>
            <div className="filter">
                <Filter 
                    filterText={filterText}
                    count={filteredUsersCount}
                    onChange={onInputChange}
                />
            </div>
            <ul className="users">
                {users.map(user => (
                    <User key={user.id} {...user} />
                ))}
            </ul>
        </>
    );
}

const mapState = state => {
    return {
        filterText: filterTextSelector(state),
        users: usersListSelector(state)
    };
};

const mapDispatch = {
   onInputChange: onInputChange
};

export default connect(mapState, mapDispatch)(UsersList);