import React from "react";
import "../App.css"
import {card} from "./../interfaces/card"
import GameColumn from "./GameColumn";
import { Col, Row } from "react-bootstrap"
import * as misc from '../utilities/misc'

export default function GameBoard() : JSX.Element {
    const [playDeck, setPlayDeck] = React.useState<card[][]>(misc.deal_deck(misc.make_deck()));
    const [movePile, setMovePile] = React.useState<card[]>([])
    const [takePile, setTakePile] = React.useState<number>(-1)
    const [putPile, setPutPile] = React.useState<number>(-1)
    // console.log('****************-')
    // console.log('Move pile')
    // console.log(movePile)
    // console.log('Take pile')
    // console.log(takePile)
    // console.log('Put pile')
    // console.log(putPile)


    function updateDeck(put:number){
        /*
         * Assumes the deck is ready to be moved
         * Called after the second click
         * Parameters: column number of the put pile
         */
        //checkt the move pile can be placed on the bottom of the put pile
        console.log("Updating deck")
        console.log("The put pile is")
        console.log(playDeck[put])
        console.log("The take pile is")
        console.log(playDeck[takePile])
        console.log("Last card in put pile is: ")
        console.log(playDeck[put][playDeck[put].length - 1])
        console.log("first card in move pile is: ")
        console.log(movePile[0])
        console.log(playDeck[put][playDeck[put].length - 1].suit === movePile[0].suit)
        console.log(Math.abs(misc.value_dict[playDeck[put][playDeck[put].length - 1 ].value] - misc.value_dict[movePile[0].value]) === 1)


        //if the bottom card of the put pile matches suit with the top card of the move pile
        //and the value of the bottom card of the put pile is one off of the top card of the move pile
        //begin moving the cards around
        //else try to put the cards back in place
        if(playDeck[put][playDeck[put].length - 1].suit === movePile[0].suit &&
            Math.abs(misc.value_dict[playDeck[put][playDeck[put].length - 1 ].value] - misc.value_dict[movePile[0].value]) === 1){
            for(let i = 0; i < playDeck[takePile].length; i++){
                if(movePile[0].value === playDeck[takePile][i].value && movePile[0].suit === playDeck[takePile][i].suit){
                    //buggggg need to make sure its the actual card from the take pile!!!
                    playDeck[takePile] = playDeck[takePile].slice(0,i)
                    setPlayDeck(playDeck)
                    break
                }
            }
            movePile.forEach((card:card) => {
                //console.log(card.value)
                //console.log(playDeck[put])
                playDeck[put].push(card)
            })
            setPlayDeck([...playDeck])
            setPutPile(-1)
            setTakePile(-1)
        }
        else{
            

        }
        //why do I need to find the spot back in the playDeck? Does it not get updated from activeCardList? 
        //Can playDeck update the activeCardList for the GameColumn?
        //setMovePile([]) //got a runtime error with this
        //probably need movePile to be set back
    }


    return(
        <div className = "board">
            <Row>
            {
                playDeck.map( 
                    (cardCol, i) => {
                        return(
                        <Col sm={1}>
                            <GameColumn key={'col ' + String(i)} cardRow = {i} cardList={cardCol} setMovePile={setMovePile} takePile={takePile} setTakePile={setTakePile} putPile={putPile} setPutPile={setPutPile} cardIdx={-1} updateDeck={updateDeck}></GameColumn>
                        </Col>
                        )
                    }
                )
                
            }
            </Row>
        </div>
    )
}


export {}