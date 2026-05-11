import React from "react";
import "../App.css"
import * as misc from '../utilities/misc'
import {card} from '../interfaces/card'


export default function MoveColumn({movePile, setMovePile}:{movePile:card[], setMovePile:(c:card[])=>void}) : JSX.Element {
    const [pile, setPile] = React.useState<card[]>(movePile)



    return(
        <div className='column1'>
            
            
        </div>


    )
}