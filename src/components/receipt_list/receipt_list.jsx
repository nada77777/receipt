import React from 'react';
import styles from './receipt_list.module.css';
const ReceiptList = (props) => {
    return(
        <div className={styles.receipt_list}>
            <div className={styles.receipt_title}>
                <h3>연간 내역</h3>
                <input type='date'></input>
            </div>
            <div className={styles.history}>
                <h3>입력된 데이터가 없어요</h3>
            </div>
           
        </div>
    );
}

export default ReceiptList;