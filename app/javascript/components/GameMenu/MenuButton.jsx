import React from 'react';

const MenuButton = props => (
    <>
    <button onClick={props.onClick} className={"btn btn-" + props.buttonType}>{props.text}</button>
    </>
);

export default MenuButton;