import React from 'react'
import "../App.css"
import deck from "./../assets/card-deck/cards"
import {card} from '../interfaces/card'



export default function Card({card, margin} : {card:card, margin:string}) : JSX.Element {
    
    const findCard = (card : card): JSX.Element => {
        return( <img className="myCard"  style={{marginTop:margin}} alt={card.value + ' of ' + card.suit} src={deck[card.suit][card.value]}/>)
    }
    
    return(
            findCard(card)

        
    )
}