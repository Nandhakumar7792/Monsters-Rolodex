import React from 'react';
import './SearchBox.css';

const SearchBox = ({ handleChange, placeholder }) => {
    return (
        <div>
            <input type='search'
                placeholder={placeholder}
                onChange={handleChange}
                className='search'
            />
        </div>
    )
};

export default SearchBox;