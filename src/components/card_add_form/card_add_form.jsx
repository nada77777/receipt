import React from 'react';
import styles from './card_add_form.module.css';
const CardAddForm = (props) => {
    return(
        <form className={styles.addform}>
            <input type='text' placeholder='name' name='name'></input>
            <input type='text' placeholder='company' name='company'></input>
            <select>
                <option defaultValue='orange'>orange</option>
                <option defaultValue='colorful'>colorful</option>
                <option defaultValue='light'>light</option>
            </select>
            <input type='text' placeholder='job' name='job'></input>
            <input type='text' placeholder='email' name='email'></input>
            <textarea placeholder='Please write' name='msg'></textarea>
        </form>        
    );
};

export default CardAddForm;