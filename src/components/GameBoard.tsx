import React from "react";
import "../App.css"
import {card} from "./../interfaces/card"
import GameColumn from "./GameColumn";
import { Col, Row } from "react-bootstrap"
import * as misc from '../utilities/misc'

export default function GameBoard() : JSX.Element {
    const [playDeck, setPlayDeck] = React.useState<card[]>(misc.make_deck());
    /*
    let c11:card = {value:'10', suit:'clubs', show:false}
    let c12:card = {value:'3', suit:'diamonds', show:false}
    let c13:card = {value:'2', suit:'hearts', show:true}
    let c14:card = {value:'ace', suit:'spades', show:true}
    let c15:card = {value:'7', suit:'clubs', show:true}
    let c16:card = {value:'king', suit:'diamonds', show:true}
    let col1:card[] = [c11,c12,c13,c14,c15,c16]
    let c21:card = {value:'10', suit:'hearts', show:false}
    let c22:card = {value:'4', suit:'clubs', show:false}
    let c23:card = {value:'8', suit:'spades', show:false}
    let c24:card = {value:'jack', suit:'clubs', show:false}
    let c25:card = {value:'6', suit:'diamonds', show:true}
    let c26:card = {value:'7', suit:'spades', show:true}
    let col2:card[]  = [c21,c22,c23,c24,c25,c26]
    */

    let dealt:card[][] = misc.deal_deck(playDeck)
    return(
        <div className = "board">
            <Row>


                {
                    dealt.map( 
                        (cardCol) => {
                            return(
                            <Col sm={1}>
                                <GameColumn cardList={cardCol}></GameColumn>
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