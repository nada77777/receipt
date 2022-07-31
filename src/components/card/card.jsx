import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {

    const {name, job, company, email, message, path, color} = card;
    const defaultImg = './imgs/kaws.jpg';
    return(
        <li className={styles.card}>
            <img className={styles.avatar} alt='img' src={path || defaultImg}></img>
            <div className={styles.info}>
                <p>{name}</p>
                <p>{job}</p>
                <p>{company}</p>
                <p>{email}</p>
                <p>{message}</p>
            </div>
        </li>
    );
};

export default Card;