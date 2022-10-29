import React from 'react'
import "../App.css"
import deck from "./../assets/card-deck/cards"
import back from "./../assets/card-deck/back"
import {card} from '../interfaces/card'

function handleDragStart() {
    console.log("Dragging")

}


export default function Card({card, margin} : {card:card, margin:string}) : JSX.Element {
    const findCard = (card : card): JSX.Element => {
        if(card.show){
            return (<img draggable onDragStart={handleDragStart} className="myCard"  style={{marginTop:margin}} alt={card.value + ' of ' + card.suit} src={deck[card.suit][card.value]}/>)
        }
        else{
            return( <img  className="myCard"  style={{marginTop:margin}} alt={card.value + ' of ' + card.suit} src={back}/>)
        }
        
    }
    
    return(
            findCard(card)

        
    )
}