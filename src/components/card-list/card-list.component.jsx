import React from 'react';

import './card-list.styles.scss';

import { Card } from '../card/card.component';

export const CardList = ({monsters}) => {

    return (<div className='card-list'>
        {monsters.map((monster) => {
            return(<Card monster={monster} />)
        })}
    </div>)
}