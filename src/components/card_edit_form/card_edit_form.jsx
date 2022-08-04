import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';
const CardEditForm = ({ card, ImgInputButton, deleteCard, updatedCard, imgUploader }) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const jobRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const {name, company, color, job, email, path, message} = card;

    const changeValue = (event) => {
        updatedCard(
            {...card,[event.currentTarget.name]: event.currentTarget.value}
        );
    };



   
    return(
        <form className={styles.editform}>
            <input type='text' name='name' ref={nameRef} defaultValue={name} onChange={changeValue}></input>
            <input type='text' name='company' ref={companyRef} defaultValue={company} onChange={changeValue}></input>
            <select>
                <option defaultValue='orange'>orange</option>
                <option defaultValue='colorful'>colorful</option>
                <option defaultValue='light'>light</option>
            </select>
            <input type='text' name='job' ref={jobRef} defaultValue={job} onChange={changeValue}></input>
            <input type='text' name='email' ref={emailRef} defaultValue={email} onChange={changeValue}></input>
            <textarea name='msg' ref={messageRef} defaultValue={message} onChange={changeValue}></textarea>
            <div className={styles.imginput}>
                <ImgInputButton/>
            </div>
            <Button card={card} deleteCard={deleteCard}/>
        </form>
    );
};

export default CardEditForm;