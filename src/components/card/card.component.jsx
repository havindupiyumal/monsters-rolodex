import React from 'react';

import './card.styles.scss';

export const Card = ({monster}) => {

    return(
        <div className='card' key={monster.id}>
            <h1>{monster.name}</h1>
        </div>
    );

}