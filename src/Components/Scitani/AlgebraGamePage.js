import React, { Component, useState }  from 'react';
import { Modal, Button } from 'react-materialize';
import {getRandomInt} from "../../Common/randomNumber";
import { TextInput, Checkbox } from 'react-materialize';

export const AlgebraGamePage = ({createExpression, createTaskExpression, evaluateAnswer, maxA, maxB}) => {
    const [history, updateHistory] = useState([])
    const [number, updateNumber] = useState();
    const [a, updateA] = useState(getRandomInt(maxA))
    const [b, updateB] = useState(getRandomInt(maxB))
    const [gameOver, updateGameOver] = useState(false)


    const handleOnChange = e => {
        e.preventDefault();
        const answer = parseInt(number)

        updateA(getRandomInt(maxA));
        updateB(getRandomInt(maxB));

        history.push({
            a,
            b,
            answer,
            correct: evaluateAnswer(a, b, answer)
        });

        updateNumber('');

        console.log (history);
        updateHistory(history)
        const errorCount = history.filter(h => !h.correct).length;
        updateGameOver(errorCount >= 3)
    }


    const historyEntries = history.map((r, i) =>
        <div>
            {
                r.correct
                    ? <Checkbox disabled value={createExpression(r)} label={createExpression(r)} checked/>
                    : <Checkbox disabled value={createExpression(r)} label={createExpression(r)}/>

            }</div>);


    return <>
        <div>
            <h2>VYPOČÍTEJ</h2>
        </div>
        { historyEntries}
        <div>
            { gameOver
                ? <div>KONEC</div>
                : <form onSubmit={handleOnChange} style={{align: 'center'}}>
                    <TextInput
                        editable={!gameOver}
                        label={createTaskExpression(a, b)}
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