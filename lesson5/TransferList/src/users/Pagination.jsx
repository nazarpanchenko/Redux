import React from 'react';
import { users } from './users.reducer';

const Pagination = ({ goNext, goPrev, currentPage, totalItems, itemsPerPage }) => {
    const isPrevPageAvailable = currentPage === 0;
    const isNextPageAvailable = currentPage === Math.floor(totalItems / itemsPerPage);

    return (
        <>
            <div className="pagination">
                <button 
                    className="btn"
                    onClick={() => goPrev(users)}
                    disabled={isPrevPageAvailable}
                >
                    {!isPrevPageAvailable ? `←` : ''}
                </button>
                <span className="pagination__page">{currentPage + 1}</span>
                <button 
                    className="btn"
                    onClick={() => goNext(users)}
                    disabled={isNextPageAvailable}
                >
                    {!isNextPageAvailable ? `→` : ''}
                </button>
            </div>
        </>
    );
}

export default Pagination;