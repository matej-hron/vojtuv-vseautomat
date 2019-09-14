import React, { Component, useState }  from 'react';
import { Modal, Button } from 'react-materialize';
import {getRandomInt} from "../../Common/randomNumber";
import { TextInput } from 'react-materialize';

export const ScitaniGamePage = () => {
    const [maxNumber, updateMaxNumber] = useState(40);
    const [history, updateHistory] = useState([])
    const [number, updateNumber] = useState();
    const [a, updateA] = useState(getRandomInt(maxNumber))
    const [b, updateB] = useState(getRandomInt(maxNumber))

    const [gameOver, updateGameOver] = useState(false)

    const handleOnChange = e => {
        e.preventDefault();
        const answer = parseInt(number)

        updateA(getRandomInt(maxNumber));
        updateB(getRandomInt(maxNumber));

        const correct = answer  === a + b;

        history.push({
            a,
            b,
            answer,
            correct
        });

        updateNumber('');

        console.log (history);
        updateHistory(history)
        const errorCount = history.filter(h => !h.correct).length;
        updateGameOver(errorCount >= 3)
    }

    const historyEntries = history.map((r, i) => <div key={i}>{r.a} + {r.b} = {r.answer} {r.correct ? 'OK' : '!!!'} </div>);

    return <>
        <div>
            <h2>SČÍTÁNÍ</h2>
        </div>
        { historyEntries}
        <div>
            { gameOver
                ? <div>KONEC</div>
                : <form onSubmit={handleOnChange} style={{align: 'center'}}>
                    <TextInput
                        editable={!gameOver}
                        label={`${a} + ${b}`}
                        inline
                        value={number}
                        onChange={e => updateNumber(e.target.value)}
                        placeholder='?'
                        style={{color: 'white'}}/>
                </form>
            }
        </div>
        </>
}