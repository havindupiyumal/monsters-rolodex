import React from 'react';

import { Card } from '../card/card.component';

export const CardList = ({monsters}) => {

    return (<div className='card-list-container'>
        {monsters.map((monster) => {
            return(<Card monster={monster} />)
        })}
    </div>)
}