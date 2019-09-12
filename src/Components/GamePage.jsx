import React, { Component, useState }  from 'react';
import {Automat } from './Automat'
import {Desire} from "./Desire";

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
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


export const GamePage = () => {
    const [task, updateTask] = useState(tasks[0]);
    const [taskNo, updateTaskNo] = useState(1);
    const [gameOver, updateGameOver] = useState(false);

    let {wanted, wantedImage, offer} = task

    let onSelected = (selectedProduct) => {
        if(selectedProduct === wanted)
        {
            console.log(taskNo)
            console.log(tasks.length)
            const newTaskNo = getRandomInt(tasks.length);
            updateTaskNo(newTaskNo);
            updateTask(tasks[newTaskNo]);
        }
    };
    return(
        <>
            {!gameOver ? (<>
        <div>

            <Automat name='vojta' offer={offer} onSelected={onSelected}/>
        </div><br/><div/>
        <div>
            <Desire imagePath={wantedImage} />
        </div>
                </>): <div>Ohhh yessss</div>}
        </>
    );
}