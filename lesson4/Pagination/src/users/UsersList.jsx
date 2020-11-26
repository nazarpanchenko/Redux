import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';
import { connect } from 'react-redux';
import * as paginationAction from './pagination.actions';
import * as Users from './pagination.reducer';

class UsersList extends Component {
    render() {
        const { users, goPrev, goNext, currentPage } = this.props;

        return (
            <div>
                <Pagination
                    goPrev={goPrev}
                    goNext={goNext}
                    currentPage={currentPage}
                    totalItems={Users.users.length} 
                    itemsPerPage={3}
                />
                {users.map(user => (
                    <User 
                        key={user.id} 
                        name={user.name} 
                        age={user.age} 
                    />
                ))}
            </div>
        );
    }
}

const mapState = state => {
    return {
        users: state.users.usersList,
        currentPage: state.users.currentPage
    };
};

const mapDispatch = {
    goPrev: paginationAction.goPrev, 
    goNext: paginationAction.goNext
};

const connector = connect(mapState, mapDispatch);

const connectedUsersList = connector(UsersList);

export default connectedUsersList;