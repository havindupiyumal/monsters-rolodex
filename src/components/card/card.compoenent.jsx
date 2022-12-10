import React from 'react';

export const Card = ({monster}) => {
    return(<h1 key={monster.id} >{monster.name + " " + monster.phone}</h1>)
}