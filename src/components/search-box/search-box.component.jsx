import React, { Component } from 'react';
// import './SearchBox.styles.scss';

class SearchBox extends Component{

    render(){
        return(<>
            <input placeholder='Search Monsters' type='text' name='searchbox' />
        </>);
    }

}

export default SearchBox;
