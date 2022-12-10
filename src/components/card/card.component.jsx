import React, { Component } from 'react';

import './card.styles.css';

export class Card extends Component {

    render(){
        const {monster} = this.props;
        const {name, email, id} = monster;
        return(
        <div className='card-container' key={monster.id} >
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set1&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>)
    }

    
}