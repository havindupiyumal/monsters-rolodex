import React, { Component } from 'react';

export class Card extends Component {

    render(){
        const {monster} = this.props;
        return(<h1 key={monster.id} >{monster.name + " " + monster.phone}</h1>)
    }

    
}