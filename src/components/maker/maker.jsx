import React, { useState } from 'react';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ ImgInputButton }) => {
    const [cards, setCards] = useState({
        1: {
            name: 'Kaws',
            job: 'Artist',
            company: 'world',
            email: 'kaws77@gmail.com',
            color: 'orange',
            path: null,
            message: 'hello world',
        },
        2: {
            name: 'Banksy',
            job: 'Street Artist',
            company: 'world',
            email: 'banksy155@gmail.com',
            color: 'orange',
            path: null,
            message: 'hello sir',
        },
        3: {
            name: 'me',
            job: 'Artist',
            company: 'world',
            email: 'mine77@gmail.com',
            color: 'orange',
            path: null,
            message: 'sure',
        },
    });



    return(
        <div className={styles.maker}>
            <Header/>
            <div className={styles.container}>
                <Editor cards={cards} ImgInputButton={ImgInputButton}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Maker;