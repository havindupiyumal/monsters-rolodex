import React from 'react';

import {Card} from '../card/card.compoenent';

export const CardList = ({monsters}) => {
    return(
        monsters.map((monster) => <Card monster={monster} />)
    )
}