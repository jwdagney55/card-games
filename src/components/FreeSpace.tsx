import React from 'react'


export default function FreeSpace({colIdx}:{colIdx:number}): JSX.Element {


    function handleClick(){
        console.log("Clicked the freespace")
    }

    return (
        <div className="freeSpace" onClick={handleClick}>
            Blank Space
        </div>
    )
}