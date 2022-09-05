import React from 'react';
import styles from './current_assets.module.css';
import IncomeExpense from '../income_expense/income_expense';
import { useState } from 'react';
import { useEffect } from 'react';

const CurrentAssets = ({ assets, filterItems }) => {
    const [currentAsset, setCurrentAsset ] = useState(0);
    const [expenseAsset, setExpenseAsset ] = useState(0);
    const [incomeAsset, setIncomeAsset ] = useState(0);
    // console.log(assets);

    useEffect(() => {
        let total = { totalAsset:0, totalExpense:0, totalIncome:0 };
        assets.forEach(item => {
            if(item.type === 'income'){
                total.totalIncome += parseInt(item.price);
                total.totalAsset += parseInt(item.price);
                // console.log('price : ', item.price);
            }else{
                total.totalExpense += parseInt(item.price);
                total.totalAsset -= parseInt(item.price);
                console.log('price : ', item.price);
            }

            setIncomeAsset(total.totalIncome);
            setExpenseAsset(total.totalExpense);
            setCurrentAsset(total.totalAsset);
        });
        // console.log(assets);
    },[assets]);



    return(
        <div className={styles.current_assets}>
            <p>22년 자산 현황</p>
            <h3>{currentAsset}원</h3>
            <IncomeExpense incomeAsset={incomeAsset} expenseAsset={expenseAsset}/>
        </div>
    );
}
export default CurrentAssets;