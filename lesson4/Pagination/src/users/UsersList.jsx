import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';
import { connect } from 'react-redux';
import * as paginationAction from './pagination.actions';
import * as userData from './pagination.reducer';

class UsersList extends Component {
    onGoNext = () => {
        const { users, itemsPerPage } = userData;
        const { currentPage } = this.props;

        let nextPos;

        if (currentPage === 0) {
            nextPos = currentPage + itemsPerPage;
        } else {
            nextPos = currentPage * itemsPerPage + itemsPerPage;
        }

        this.props.goNext(users.slice().splice(nextPos, itemsPerPage));
    }

    onGoPrev = () => {
        const { users, itemsPerPage } = userData;
        const { currentPage } = this.props;

        let prevPos = currentPage * itemsPerPage - itemsPerPage;

        this.props.goPrev(users.slice().splice(prevPos, itemsPerPage));
    }

    render() {
        const { users, currentPage } = this.props;

        const initialItems = users.slice(0, 3);

        return (
            <div>
                <Pagination
                    goNext={this.onGoNext}
                    goPrev={this.onGoPrev}
                    currentPage={currentPage}
                    totalItems={userData.users.length}
                    itemsPerPage={userData.itemsPerPage}
                />
                {currentPage === 0
                    ? initialItems.map(user => (
                        <User
                            key={user.id}
                            name={user.name}
                            age={user.age} 
                        />
                    ))
                    : users.map(user => (
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