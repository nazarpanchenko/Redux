import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
    const isPrevPageAvailable = currentPage === 0;
    const isNextPageAvailable = currentPage === ((totalItems + 1) / itemsPerPage) - 1;

    return (
        <>
            <div className="pagination">
                <button 
                    className="btn"
                    onClick={() => goPrev(itemsPerPage)}
                    disabled={isPrevPageAvailable}
                >
                    ←
                </button>
                <span className="pagination__page">{currentPage + 1}</span>
                <button 
                    className="btn"
                    onClick={() => goNext(itemsPerPage)}
                    disabled={isNextPageAvailable}
                >
                    →
                </button>
            </div>
        </>
    );
}

export default Pagination;