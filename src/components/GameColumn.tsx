import React from 'react'
import {card} from '../interfaces/card'
import Card from './Card'

export default function GameColumn({cardList}:{cardList:card[]}) : JSX.Element {
    return (
        <div className='column1' >
            {cardList.map( function(c, i) {
                return (
                    <Card card={c} margin={String(i*2) + 'em'} key={c.value + ' of ' + c.suit} ></Card>
                )
            })}
        </div>
    )}