import React from 'react'

function Board(props) {
    return (
        <div className="boardNumbers">
            <p onClick={props.pressNumber}>{props.showingNumbers[0]}</p>
            <p onClick={props.pressNumber}>{props.showingNumbers[1]}</p>
            <p onClick={props.pressNumber}>{props.showingNumbers[2]}</p>
        </div>
    )
}

export default Board
