import React from 'react'
import {card} from '../interfaces/card'
import deck from "./../assets/card-deck/cards"
import diamonds from "../assets/card-deck/diamonds_template.png"
import clubs from "../assets/card-deck/clubs_template.png"
import spades from "../assets/card-deck/spades_template.png"
import hearts from "../assets/card-deck/hearts_template.png"

const abc:Record<string, any>= {"diamonds" : diamonds, "clubs" : clubs, "spades" : spades, "hearts" : hearts}

export default function AcesPile({suitName,addToAcesPile}:{suitName:string,addToAcesPile:(c:card)=> card}) : JSX.Element {
    const [topCard, setTopCard] = React.useState<card>({suit:suitName,value:"template",show:true,index:0})

    function handleClick() {
        
        setTopCard(addToAcesPile(topCard))
              
    }

    let source
    if(topCard.value === "template"){
        return (
            <img onClick={handleClick} className="myCardAce" alt={topCard.value + " of " + topCard.suit} src={abc[topCard.suit]}/>
        )
    }
    else{
        return (
            <img onClick={handleClick} className="myCardAce" alt={topCard.value + " of " + topCard.suit} src={deck[topCard.suit][topCard.value]}/>    
        )
    }
}