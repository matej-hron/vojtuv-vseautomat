import React, { Component, useState }  from 'react';
import {Automat } from './Automat'
import {Desire} from "./Desire";
import M from "materialize-css";
let tasks = [
    {
        wanted: "KAFE",
        wantedImage: "caffe.jpg",
        offer: ['KAFE', 'MLEKO', 'VODA', 'LIMO']
    },
    {
        wanted: "LIMO",
        wantedImage: "malinovka.jpg",
        offer: ['KAFE', 'MLEKO', 'VODA', 'LIMO']
    },
    {
        wanted: "VODA",
        wantedImage: "voda.jpg",
        offer: ['KAFE', 'MLEKO', 'VODA', 'LIMO']
    },
    {
        wanted: "MLEKO",
        wantedImage: "mleko.jpg",
        offer: ['KAFE', 'MLEKO', 'VODA', 'LIMO']
    },
    {
        wanted: "AUTO",
        wantedImage: "auto.jpg",
        offer: ['LETADLO', 'MOTORKA', 'KOLO', 'AUTO']
    },
    {
        wanted: "LETADLO",
        wantedImage: "letadlo.jpg",
        offer: ['LETADLO', 'MOTORKA', 'KOLO', 'AUTO']
    },
    {
        wanted: "TERÉŇÁK",
        wantedImage: "terenak.jpg",
        offer: ['LETADLO', 'MOTORKA', 'KOLO', 'TERÉŇÁK']
    },
    {
        wanted: "KOLO",
        wantedImage: "kolo.jpg",
        offer: ['LETADLO', 'MOTORKA', 'KOLO', 'TERÉŇÁK']
    },
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


export const GamePage = () => {
    const [task, updateTask] = useState(tasks[0]);
    const [taskNo, updateTaskNo] = useState(1);
    const [gameOver, updateGameOver] = useState(false);
    const [score, updateScore] = useState(0);
    const [errors, updateErrors] = useState(0);

    let {wanted, wantedImage, offer} = task

    M.AutoInit();

    let onSelected = (selectedProduct) => {
        if(selectedProduct === wanted)
        {
            M.toast({html: 'HURÁÁ'})
            console.log(taskNo)
            console.log(tasks.length)
            const newTaskNo = getRandomInt(tasks.length);
            updateTaskNo(newTaskNo);
            updateTask(tasks[newTaskNo]);
            updateScore(score+1);
        }
        else
        {
            M.toast({html: 'OH NOOO'});
            updateErrors(errors+1);
            updateGameOver(errors >= 3);
        }
    };
    return(
        <>
            {!gameOver ? (<>
        <div>DOBŘE: {score}</div>
        <div>ŠPATNĚ: {errors}</div>

        <div>
            <Automat name='vojta' offer={offer} onSelected={onSelected}/>
        </div><br/><div/>
        <div>
            <Desire imagePath={wantedImage} />
        </div>
                </>): <div>KONEC KÁMO</div>}
        </>
    );
}