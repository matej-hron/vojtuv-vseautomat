import React, { Component }  from 'react';
import { Modal, Button } from 'react-materialize';
export const Automat = ({offer, name, onSelected}) => {
    const options = offer.map((item) => <div key={item}><Button style={{width: 250}} onClick={() => onSelected(item)}>{item}</Button></div>)

    return(
    <div style={{border: 'solid black', margin: 20}}>
        <h2>AUTOMAT</h2>
        <div>{options}</div>
    </div>
);
}