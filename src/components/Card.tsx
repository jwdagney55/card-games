import React from 'react'
import "../App.css"
import deck from "./../assets/card-deck/cards"
import back from "./../assets/card-deck/back"
import {card} from '../interfaces/card'

function handleDragStart() {
    console.log("Dragging")

}



export default function Card({card, margin, setMovePile, takePile, setTakePile, putPile, setPutPile}:
    {card:card, margin:string, setMovePile:(c: card) => void, takePile:number, setTakePile:() => void, 
        putPile:number, setPutPile:() => void}) : JSX.Element {

    function handleClick() {
        if(takePile === -1){
            //player has not clicked on card yet
            setMovePile(card)
            setTakePile()
        }
        else if(putPile === -1){
            //player has clicked on a card but not placed the card
            setPutPile()
        }
        console.log(card.value + ' of ' + card.suit)
    }

    const findCard = (card : card): JSX.Element => {
        if(card.show){
            return (<img  onClick={handleClick} className="myCard"  style={{marginTop:margin}} alt={card.value + ' of ' + card.suit} src={deck[card.suit][card.value]}/>)
        }
        else{
            return( <img  className="myCard"  style={{marginTop:margin}} alt={card.value + ' of ' + card.suit} src={back}/>)
        }
        
    }
    
    return(
            findCard(card)

        
    )
}