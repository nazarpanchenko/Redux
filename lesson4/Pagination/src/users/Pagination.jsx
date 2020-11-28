import React from 'react';

const Pagination = ({ goNext, goPrev, currentPage, totalItems, itemsPerPage }) => {
    const isPrevPageAvailable = currentPage === 0;
    const isNextPageAvailable = currentPage === Math.floor(totalItems / itemsPerPage);

    return (
        <>
            <div className="pagination">
                <button 
                    className="btn"
                    onClick={() => goPrev()}
                    disabled={isPrevPageAvailable}
                >
                    {!isPrevPageAvailable ? `←` : ''}
                </button>
                <span className="pagination__page">{currentPage + 1}</span>
                <button 
                    className="btn"
                    onClick={() => goNext()}
                    disabled={isNextPageAvailable}
                >
                    {!isNextPageAvailable ? `→` : ''}
                </button>
            </div>
        </>
    );
}

export default Pagination;