import React from 'react';
import styles from './button.module.css';

const Button = ({ card, deleteCard }) => {

    const click = () => {
        deleteCard(card);
    }

    return(
        <button onClick={click}>delete</button>      
    );
};

export default Button;