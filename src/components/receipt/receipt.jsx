import React, { useEffect } from 'react';
import styles from './receipt.module.css';
import CurrentAssets from '../current_assets/current_assets';
import ExpenseChart from '../expense_chart/expense_chart';
import ReceiptList from '../receipt_list/receipt_list';
import { useState } from 'react';

const Receipt = ({ assets, deleteItem, YearFilter }) => {
    const currentYear = new Date().getFullYear().toString();
    const [yearStatus, setYearStatus] = useState(currentYear);

    let filteredItems = [];

    const changeYear = (year) => {
        setYearStatus(year);
    }

    useEffect(() => {
        if(assets.length > 0) {
            let lastItemIndex = assets.length -1;
            let lastItemYear = assets[lastItemIndex].year;
            setYearStatus(lastItemYear);
        }
    },[assets]);



    if(assets.length > 0) {
        filteredItems = assets.filter(item => item.year === yearStatus);
    };







    return(
        <div className={styles.receipt}>
            <CurrentAssets assets={assets} filteredItems={filteredItems} yearStatus={yearStatus}  />
            <ReceiptList assets={assets} deleteItem={deleteItem} yearStatus={yearStatus} YearFilter={YearFilter} changeYear={changeYear} filteredItems={filteredItems} />
            {/* <ExpenseChart filterItems={filterItems}/> */}
        </div>
    );
}

export default Receipt;