import React, { Component }  from 'react';
import { Modal, Button } from 'react-materialize';
export const Automat = ({offer, name, onSelected}) => {
    const options = offer.map((item) => <div key={item}><Button style={{width: 250}} onClick={() => onSelected(item)}>{item}</Button></div>)

    return(
    <div>
        <h1>TAK CO TO BUDE?</h1>
        <div>{options}</div>
    </div>
);
}