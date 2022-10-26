import React from "react";
import "../App.css"
import Card from "./Card"

export default function GameBoard() : JSX.Element {
    return(
        <div className="board">
            <Card suit={'diamonds'} value={'king'}></Card>
        </div>
    )
}


export {}