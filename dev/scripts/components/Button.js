import React from 'react';
import ReactDOM from 'react-dom';

const Button  = (props) => {
    return (
        <button className={props.className}>{props.content}</button>
    )
}

export default Button;