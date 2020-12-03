import React from 'react';

const Filter = ({ filterText, count, onChange }) => {
    return (
        <>
            <span className="filter__count">{count}</span>
            <input 
                type="text" 
                className="filter__input" 
                value={filterText}
                onChange={event => onChange(event.target.value)}
            />
        </>
    );
}

export default Filter;