import React from 'react'
import {card} from '../interfaces/card'
import Card from './Card'

function get_hidden(cards:card[]) : number {
    let hid:number = 0
    for(let j = 0; j < cards.length; j++){
        if(cards[j].show === false){
            hid++
        }
    }
    return hid
}

export default function GameColumn({cardList}:{cardList:card[]}) : JSX.Element {
    let hidden = get_hidden(cardList)

    return (
        <div className='column1' >
            {cardList.map( function(c, i) {
                let cardMarg:string
                let numHidden:number = 0
        
                if(i == 0){
                    //console.log("0em")
                    cardMarg = '0em'
                }
                else if( cardList[i-1].show === false){
                    //console.log('1em')
                    cardMarg = String(i * 1) + 'em'
                    numHidden++
                }
                else{
                    //console.log('2em')
                    cardMarg = String(i*2 - hidden) + 'em'
                }
                //console.log(c.suit + ' ' + c.value + ' ' + cardMarg)
                //let cardMarg:string = c.show ? String(i*2)+'em' : String(i*1) + 'em'
                return (
                    <Card card={c} margin={cardMarg} key={c.value + ' of ' + c.suit} ></Card>
                )
            })}
        </div>
    )}