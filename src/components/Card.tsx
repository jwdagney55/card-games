import React from 'react'
import "../App.css"
import deck from "./../assets/card-deck/cards"



export default function Card({suit, value} : {suit: string, value: string}) : JSX.Element {
    
    const findCard = (suit:string, value:string): JSX.Element => {
        return( <img className="card" alt={value + ' of ' + suit} src={deck[suit][value]}/>)
    }
    
    return(
        <div className="board">
            {findCard(suit, value)}
        </div>
    )
}