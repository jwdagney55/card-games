import React from 'react'
import "../App.css"
import deck from "./../assets/card-deck/cards"

export default function Card() : JSX.Element {
    return(
        <div className="board">
            <img className="card" alt="" src={deck[0]} />
            <img className="card" alt="" src={deck[1]} />
        </div>
    )
}