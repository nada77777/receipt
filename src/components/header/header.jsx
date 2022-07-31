import React from 'react';
import styles from './header.module.css';


const Header = (props) => {
    return(
        <div className={styles.header}>
            <img className={styles.img} src='./imgs/kaws.jpg' alt='header_img'></img>
            <h1>Business Card Maker</h1>
        </div>
    );
};

export default Header;