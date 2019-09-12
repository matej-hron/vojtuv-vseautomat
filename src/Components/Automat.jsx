import React, { Component }  from 'react';

export const Automat = ({offer, name, onSelected}) => {
    const options = offer.map((item) => <div><button onClick={() => onSelected(item)}>{item}</button></div>)

    return(
    <div>
        <h1>Co to bude, pane {name}?</h1>
        <div>{options}</div>

    </div>
);
}