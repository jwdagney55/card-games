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
    console.log('****************-')
    console.log(movePile)
    console.log(takePile)
    console.log(putPile)


    function updateDeck(put:number){
        /*
         * Assumes the deck is ready to be moved
         * Called after the second click
         * Where do I verify that the pile can actually move though? It gotta be here
         * 
         */
        console.log("Updating deck")
        //why do I need to find the spot back in the playDeck? Does it not get updated from activeCardList? 
        //Can playDeck update the activeCardList for the GameColumn?
        for(let i = 0; i < playDeck[takePile].length; i++){
            if(movePile[0].value === playDeck[takePile][i].value && movePile[0].suit === playDeck[takePile][i].suit){
                playDeck[takePile] = playDeck[takePile].slice(0,i)
                break
            }
        }
        movePile.forEach((card:card) => {
            console.log(card.value)
            console.log(playDeck[put])
            playDeck[put].push(card)
        })
        setPlayDeck(playDeck)
        setPutPile(-1)
        setTakePile(-1)
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
                                <GameColumn key={'col ' + String(i)} cardRow = {i} cardList={cardCol} setMovePile={setMovePile} takePile={takePile} setTakePile={setTakePile} putPile={putPile} setPutPile={setPutPile} updateDeck={updateDeck}></GameColumn>
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