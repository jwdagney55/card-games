import React from "react";
import "../App.css"
import {card} from "./../interfaces/card"
import GameColumn from "./GameColumn";
import { Col, Row } from "react-bootstrap"

export default function GameBoard() : JSX.Element {
    let c1:card = {value:'10', suit:'clubs'}
    let c2:card = {value:'3', suit:'diamonds'}
    let c3:card = {value:'2', suit:'hearts'}
    let col1:card[] = [c1,c2,c3]
    let c4:card = {value:'jack', suit:'clubs'}
    let c5:card = {value:'6', suit:'diamonds'}
    let c6:card = {value:'7', suit:'spades'}
    let col2:card[]  = [c4,c5,c6]
    return(
        <div className = "board">
            <Row>
                <Col  sm={1}>
                    <GameColumn cardList={col1}></GameColumn>
                </Col>
                <Col sm={1}>
                    <GameColumn cardList={col2}></GameColumn>
                </Col>
            </Row>
        </div>
    )
}


export {}