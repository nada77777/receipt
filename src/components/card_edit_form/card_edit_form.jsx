import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';
const CardEditForm = ({ card, ImgInputButton }) => {
    const {name, company, color, job, email, message} = card;
    return(
        <form className={styles.editform}>
            <input type='text' name='name' defaultValue={name}></input>
            <input type='text' name='company' defaultValue={company}></input>
            <select>
                <option defaultValue='orange'>orange</option>
                <option defaultValue='colorful'>colorful</option>
                <option defaultValue='light'>light</option>
            </select>
            <input type='text' name='job' defaultValue={job}></input>
            <input type='text' name='email' defaultValue={email}></input>
            <textarea name='msg' defaultValue={message}></textarea>
            <div className={styles.imginput}>
                <ImgInputButton/>
            </div>
            <Button/>
        </form>
    );
};

export default CardEditForm;