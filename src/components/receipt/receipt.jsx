import React from 'react';
import styles from './receipt.module.css';
import CurrentAssets from '../current_assets/current_assets';
import ExpenseChart from '../expense_chart/expense_chart';
import ReceiptList from '../receipt_list/receipt_list';

const Receipt = ({ assets, deleteItem, itemFilter, filterItems }) => {
    return(
        <div className={styles.receipt}>
            <CurrentAssets assets={assets} filterItems={filterItems} />
            <ReceiptList assets={assets} itemFilter={itemFilter} deleteItem={deleteItem} filterItems={filterItems}/>
            {/* <ExpenseChart filterItems={filterItems}/> */}
        </div>
    );
}

export default Receipt;