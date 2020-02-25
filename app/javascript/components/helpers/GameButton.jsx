import React from 'react';

const GameButton = props => (
    <>
    <button onClick={props.onClick} className={"btn btn-" + props.buttonType}>{props.text}</button>
    </>
);

export default GameButton;