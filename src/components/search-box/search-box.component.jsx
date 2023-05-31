import React from 'react';
import './search-box.styles.scss';

const SearchBox = ({placeholder, className, type, onSearchFieldChangeHandler}) => {

    return(<input className={className} placeholder={placeholder} type={type} name='searchbox' onChange={onSearchFieldChangeHandler} />)

}

export default SearchBox;
