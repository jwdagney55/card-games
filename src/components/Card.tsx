import React from 'react'
import "../App.css"
import deck from "./../assets/card-deck/cards"
import back from "./../assets/card-deck/back"
import {card} from '../interfaces/card'

function handleDragStart() {
    console.log("Dragging")

}



export default function Card({card, myClass, margin, setMovePile, takePile, setTakePile, putPile, setPutPile, checkReveal}:
    {card:card, myClass:string, margin:string, setMovePile:(c: card) => void, takePile:number, setTakePile:() => void, 
        putPile:number, setPutPile:() => void, checkReveal:(c: card) => void}) : JSX.Element {

    function handleClick() {
        console.log(card.value + ' of ' + card.suit)
        console.log(card)
        //check if the card is hidden and if it should be revealed
        if(card.show === false){
            checkReveal(card);
        }
        else if(takePile === -1){
            //player has not clicked on card yet
            setMovePile(card)
            setTakePile()
        }
        else if(putPile === -1){
            //player has clicked on a card but not placed the card
            setPutPile()
        }
        else{
            //setMovePile()
            //setTakePile(-1)
            //setPutPile(-1)
        }
    }

    const findCard = (card : card): JSX.Element => {
        if(card.show){
            return (<img  onClick={handleClick} className={myClass}  style={{marginTop:margin}} alt={card.value + ' of ' + card.suit} src={deck[card.suit][card.value]}/>)
        }
        else{
            return( <img  onClick={handleClick} className="myCard"  style={{marginTop:margin}} alt={card.value + ' of ' + card.suit} src={back}/>)
        }
        
    }
    
    return(
            findCard(card)

        
    )
}