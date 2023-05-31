import React from 'react';
import './search-box.styles.scss';

const SearchBox = ({onSearchFieldChange}) => {

    return(<input className='search-box' placeholder='Search Monsters' type='text' name='searchbox' onChange={onSearchFieldChange} />)

}

export default SearchBox;
