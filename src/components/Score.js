
import React, {useState} from 'react'

function Score(props) {

    return (
        <div>
            <p>Score: {props.score}</p>
            <p>Best score: {props.bestScore}</p>
        </div>
    )
}

export default Score
