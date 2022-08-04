import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';
const CardAddForm = ({ updatedCard, ImgInputButton, deleteCard }) => {

    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const jobRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();

    const makeNewCard = (file) => {
        updatedCard({
            id: Date.now(),
            name: nameRef.current.value,
            company: companyRef.current.value,
            job: jobRef.current.value,
            email: emailRef.current.value,
            path: file.fileURL,
            message: msgRef.current.value,
        });
        console.log(file);
        formRef.current.reset();
    }


    return(
        <form ref={formRef} className={styles.addform}>
            <input type='text' ref={nameRef} placeholder='name' name='name'></input>
            <input type='text' ref={companyRef} placeholder='company' name='company'></input>
            <select>
                <option defaultValue='orange'>orange</option>
                <option defaultValue='colorful'>colorful</option>
                <option defaultValue='light'>light</option>
            </select>
            <input type='text' ref={jobRef} placeholder='job' name='job'></input>
            <input type='text' ref={emailRef} placeholder='email' name='email'></input>
            <textarea ref={msgRef} placeholder='Please write' name='msg'></textarea>
            <div className={styles.imginput}>
                <ImgInputButton makeNewCard={makeNewCard} updatedCard={updatedCard} />
            </div>
            <Button deleteCard={deleteCard}/>
        </form>        
    );
};

export default CardAddForm;