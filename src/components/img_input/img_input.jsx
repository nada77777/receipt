import React from 'react';
import styles from './img_input.module.css';

const ImgInput = () => {
    return(
        <>
        <input className={styles.imginput} type='file' accept='image/*'></input>
        <button className={styles.button}>Add</button>
        </>
    );
};
export default ImgInput;