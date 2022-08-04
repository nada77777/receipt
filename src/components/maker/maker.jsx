import React, { useEffect, useState } from 'react';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

import { useLocation } from "react-router-dom";

const Maker = ({ ImgInputButton, imgUploader, database }) => {
    const historyState = useLocation().state.id;
    const [userId, setUserId] = useState(historyState && historyState);
 

    const [cards, setCards] = useState({
        // 1: {
        //     id:'1',
        //     name: 'Kaws',
        //     job: 'Artist',
        //     company: 'world',
        //     email: 'kaws77@gmail.com',
        //     color: 'orange',
        //     path: null,
        //     message: 'hello world',
        // },
        // 2: {
        //     id:'2',
        //     name: 'Banksy',
        //     job: 'Street Artist',
        //     company: 'world',
        //     email: 'banksy155@gmail.com',
        //     color: 'orange',
        //     path: null,
        //     message: 'hello sir',
        // },
        // 3: {
        //     id:'3',
        //     name: 'me',
        //     job: 'Artist',
        //     company: 'world',
        //     email: 'mine77@gmail.com',
        //     color: 'orange',
        //     path: null,
        //     message: 'sure',
        // },
    });


    const deleteCard = (card) => {
        setCards(cards => {
            const updatedCards = {...cards};
            delete updatedCards[card.id];
            return updatedCards;
        });

        database.deleteUserData(userId, card);
    };


    const updatedCard = (card) => {
        // const updatedCards = {...cards};
        // updatedCards[card.id] = card;

        // // console.log(updatedCards[card]);
        // // console.log(ss);
        // console.log(updatedCards);
        // setCards(updatedCards);
        setCards(cards => {
            const updatedCards = {...cards};
            updatedCards[card.id] = card;
            return updatedCards;
        });

        database.writeUserData(userId, card);
    };

    useEffect(() => {
        database.loadDatabase(userId,(cards) => {
            setCards(cards);
            // console.log('maker',cards);
            // console.log('maker key', Object.keys(cards));
        });
    },[userId]);

    return(
        <div className={styles.maker}>
            <Header/>
            <div className={styles.container}>
                <Editor cards={cards} ImgInputButton={ImgInputButton} deleteCard={deleteCard} updatedCard={updatedCard} imgUploader={imgUploader}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Maker;