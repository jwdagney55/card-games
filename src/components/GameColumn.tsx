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

export default function GameColumn({cardList,cardRow,setMovePile,takePile,setTakePile,putPile,setPutPile,updateDeck}:
    {cardList:card[], cardRow:number, setMovePile:(c: card[]) => void, takePile:number, setTakePile:(pile: number) => void, 
        putPile:number,setPutPile:(pile: number) => void, updateDeck:(put:number) => void}) : JSX.Element {
    const [activeCardList, setActiveCardList] = React.useState<card[]>(cardList)
    
    let hidden = get_hidden(cardList)

    function helpSetTakePile(){
        setTakePile(cardRow)
        setPutPile(-1) //needed?
        return
    }

    function helpSetMovePile(c:card){
        for(let i = 0; i < activeCardList.length; i++){
            if(c.value === activeCardList[i].value && c.suit === activeCardList[i].suit){
                //movePile becomes the list after, and including, the found card
                //activeCardList for this column becomes the list before, not including, the found card
                setMovePile(activeCardList.slice(i))
                setActiveCardList(activeCardList.slice(0,i))
            }
        }
    }

    function helpSetPutPile(){
        console.log("helpSetPutPile")
        //check put pile is valid
        setPutPile(cardRow)
        updateDeck(cardRow)
        return
    }

    return (
        <div className='column1' >
            {cardList.map( function(c, i) {
                let cardMarg:string
                let numHidden:number = 0
        
                if(i === 0){
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
                    //Is this the problem with moving piles? Does takePile and putPile not always get updated here?
                    <Card card={c} margin={cardMarg} key={c.value + ' of ' + c.suit} setMovePile={helpSetMovePile} takePile={takePile} setTakePile={helpSetTakePile} putPile={putPile} setPutPile={helpSetPutPile} ></Card>
                )
            })}
        </div>
    )}