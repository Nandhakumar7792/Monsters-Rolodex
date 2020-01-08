import React from 'react';

const SearchBox = ({ change }) => {
    return (
        <div>
            <input type='search'
                placeholder='search monsters'
                onChange={change}
            />
        </div>
    )
};

export default SearchBox;