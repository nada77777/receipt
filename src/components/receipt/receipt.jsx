import React from 'react';
import styles from './receipt.module.css';
import CurrentAssets from '../current_assets/current_assets';
import ExpenseChart from '../expense_chart/expense_chart';
import ReceiptList from '../receipt_list/receipt_list';

const Receipt = (props) => {
    return(
        <div className={styles.receipt}>
            <CurrentAssets/>
            <ReceiptList/>
            <ExpenseChart/>
        </div>
    );
}

export default Receipt;