import React,{Component}  from 'react';

import {Card} from '../card/card.compoenent';

export class CardList extends Component{


    render(){

        const {monsters} = this.props;

        return(
            monsters.map((monster) => <Card monster={monster} />)
        )
    } 
    
}