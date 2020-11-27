import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';
import { connect } from 'react-redux';
import * as paginationAction from './pagination.actions';
import * as List from './pagination.reducer';

class UsersList extends Component {
    state = {
        currentPos: 3,
        itemsPerPage: 3
    };

    onGoNext = () => {
        const { currentPos, itemsPerPage } = this.state;
        const nextItems = List.users.slice(currentPos, currentPos + itemsPerPage);

        this.props.goNext(nextItems);
        this.setState({
            currentPos: currentPos + itemsPerPage
        });
    }

    onGoPrev = () => {
        const { currentPos, itemsPerPage } = this.state;
        const prevItems = List.users.slice(currentPos - (itemsPerPage * 2), currentPos - itemsPerPage);

        this.props.goPrev(prevItems);
        this.setState({
            currentPos: currentPos - itemsPerPage
        });
    }

    render() {
        const { itemsPerPage } = this.state;
        const { users, goPrev, goNext, currentPage } = this.props;

        const initialItems = users.slice(0, 3);

        return (
            <div>
                <Pagination
                    goPrev={this.onGoPrev}
                    goNext={this.onGoNext}
                    currentPage={currentPage}
                    totalItems={List.users.length}
                    itemsPerPage={itemsPerPage}
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