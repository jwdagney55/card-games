import React from "react";
import "../App.css"
import {card} from "./../interfaces/card"
import GameColumn from "./GameColumn";
import AcesPile from "./AcesPile"
import { Col, Row, Button } from "react-bootstrap"
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
                    //setPlayDeck([...playDeck])
                    break
                }
            }
           let lastIdx:number = playDeck[put].length
            movePile.forEach((card:card) => {
                //console.log(card.value)
                //console.log(playDeck[put])
                card.index = lastIdx++
                playDeck[put].push(card)
            })
            // setPlayDeck([...playDeck])
            // setPutPile(-1)
            // setTakePile(-1)
            setPlayDeck([...playDeck])
            setPutPile(-1)
            setTakePile(-1)
            setMovePile([])
        }
        else{
            setPlayDeck(playDeck)
            setPutPile(-1)
            //setTakePile(-1)
            setMovePile([])
        }
        //why do I need to find the spot back in the playDeck? Does it not get updated from activeCardList? 
        //Can playDeck update the activeCardList for the GameColumn?
        //setMovePile([]) //got a runtime error with this
        //probably need movePile to be set back
    }

    function addToAcesPileHelper(oldCard:card): card{
        let returnCard:card = oldCard
        if(takePile !== -1 && putPile === -1){
            //check the length of the movePile (should only be 1)
            if(movePile.length !== 1){
                let x = 1
            }
            else{
                //check that movePile can be added to the ace Pile
                if(oldCard.value === "template" && movePile[0].suit === oldCard.suit
                    && movePile[0].value === "ace"){
                    returnCard = movePile[0]
                    playDeck[takePile].pop()
                    setPlayDeck(playDeck)
                }
                else if(misc.value_dict[movePile[0].value] - misc.value_dict[oldCard.value]  === 1){
                    returnCard = movePile[0]
                    playDeck[takePile].pop()
                    setPlayDeck(playDeck)
                }
            }
        }
        setTakePile(-1)
        return returnCard
    }


    function handleButtonClick(){
        let newDeck = misc.deal_deck(misc.make_deck())
        setPlayDeck(newDeck)
    }


    return(
        <div className = "board">
            <Row>
                <Col>
                    <Row className = "aceRow">
                        <Col>
                            <div className = "aceColumn">
                                <AcesPile suitName="spades" addToAcesPile = {addToAcesPileHelper}></AcesPile>
                            </div>
                        </Col>
                        <Col>
                            <div className = "aceColumn">
                                <AcesPile suitName="diamonds" addToAcesPile = {addToAcesPileHelper}></AcesPile>
                            </div>
                        </Col>
                        <Col>    
                            <div className = "aceColumn">
                                <AcesPile suitName="clubs" addToAcesPile = {addToAcesPileHelper}></AcesPile>
                            </div>
                        </Col>
                        <Col>
                            <div className = "aceColumn">
                                <AcesPile suitName="hearts" addToAcesPile = {addToAcesPileHelper}></AcesPile>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row className = "reset_btn">
                        <Button onClick={handleButtonClick}>Reset Game</Button>
                    </Row>
                </Col>
            </Row>
            <Row className = "playRow">
            {
                playDeck.map( 
                    (cardCol, i) => {
                        return(
                        <Col >
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