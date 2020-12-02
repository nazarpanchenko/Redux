import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import { goPrevPage, goNextPage } from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';

const itemsPerPage = 3;

const UsersList = ({ users, currentPage, goPrev, goNext }) => {
    const start = currentPage * itemsPerPage;
    const usersToDisplay = users.slice(start, start + itemsPerPage);

    return (
        <div>
           <Pagination
                goNext={goNext}
                goPrev={goPrev}
                currentPage={currentPage}
                totalItems={users.length}
                itemsPerPage={itemsPerPage}
            />
            <ul className="users">
                {usersToDisplay.map(user => (
                    <User key={user.id} {...user} />
                ))}
            </ul>
        </div>
    );
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    currentPage: PropTypes.number.isRequired,
    goNext: PropTypes.func.isRequired,
    goPrev: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        users: usersListSelector(state),
        currentPage: currentPageSelector(state)
    };
};

const mapDispatch = {
    goPrev: goPrevPage, 
    goNext: goNextPage
};

export default connect(mapStateToProps, mapDispatch)(UsersList);