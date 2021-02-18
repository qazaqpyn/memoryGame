import React, {useEffect, useState} from 'react'
import Board from './Board'
import Score from './Score'

function List() {
    const [list, setList] = useState([]);
    const [showingNumbers, setShowingNumbers] = useState([]);
    const [userNumbers, setUserNumbers] = useState([]);
    const [lost, setLost] = useState(false);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const getNumbers = () => {
        let listR = []
        for (let i = 0; i< 20; i++) {
            let number = Math.floor(Math.random() * Math.floor(50));
            while(listR.includes(number)){
                number = Math.floor(Math.random() * Math.floor(50));
            }
            listR.push(number);
        }
        setList(listR);
        setLost(false);
    }

    const getShowingNumbers = () => {
        let listN = []
        for (let i = 0; i< 3; i++) {
            let number = Math.floor(Math.random() * Math.floor(20));
            while(listN.includes(number)){
                number = Math.floor(Math.random() * Math.floor(20));
            }
            listN.push(number);
        }
        setShowingNumbers(listN);
    }

    const pressNumber = (e) => {
        console.log(e.target.innerText);
        const list = Object.assign([],userNumbers);
        if(!list.includes(parseInt(e.target.innerText))) {
            list.push(parseInt(e.target.innerText));
            setUserNumbers(list);
            setScore(userNumbers.length);
        } else {
            if(bestScore<score) {
                setBestScore(score+1);
            }
            setLost(true);
            setUserNumbers([]);
        }
    }

    useEffect(()=>{
        getNumbers();
        getShowingNumbers();
    },[]);

    useEffect(()=>{
        getNumbers();
    },[lost]);

    useEffect(()=>{
            getShowingNumbers();
    },[userNumbers]);


    return (
        <div>
            {console.log(userNumbers)}
            <Score score={userNumbers.length} bestScore={bestScore}/>
            <Board showingNumbers={showingNumbers} pressNumber={pressNumber}/>
        </div>
    )
}

export default List
