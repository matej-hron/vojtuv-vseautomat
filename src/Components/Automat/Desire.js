import React, { Component }  from 'react';

export const Desire = ({imagePath}) => {
    return (
    <>
        <h4>DAL BYCH SI ...</h4>
        <img src={imagePath} style={{maxWidth: 250}} />
    </>);
}