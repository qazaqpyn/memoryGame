
import React, {useState} from 'react'

function Score(props) {

    return (
        <div className="header">
            <h1>Digit Memory</h1>
            <p>Score: {props.score}</p>
            <p>Best Score: {props.bestScore}</p>
        </div>
    )
}

export default Score
