import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
    const isPrevPageAvailable = currentPage === 0;
    const isNextPageAvailable = currentPage === Math.floor(totalItems / itemsPerPage);

    return (
        <>
            <div className="pagination">
                <button 
                    className="btn"
                    onClick={() => goPrev(itemsPerPage)}
                    disabled={isPrevPageAvailable}
                >
                    {!isPrevPageAvailable ? `←`: ''}
                </button>
                <span className="pagination__page">{currentPage + 1}</span>
                <button 
                    className="btn"
                    onClick={() => goNext(itemsPerPage)}
                    disabled={isNextPageAvailable}
                >
                    {!isNextPageAvailable ? `→` : ''}
                </button>
            </div>
        </>
    );
}

export default Pagination;