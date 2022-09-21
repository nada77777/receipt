import React from 'react';
import styles from './current_assets.module.css';
import IncomeExpense from '../income_expense/income_expense';
import { useState } from 'react';
import { useEffect } from 'react';

const CurrentAssets = ({ assets, filteredItems, yearStatus }) => {
    const [currentAsset, setCurrentAsset] = useState(0);
    const [expenseAsset, setExpenseAsset] = useState(0);
    const [incomeAsset, setIncomeAsset] = useState(0);

    useEffect(() => {
        let total = { income: 0, expense:0, addAll:0 }
        if(filteredItems.length > 0) {
            filteredItems.forEach(item => {
                if(item.type === 'income'){
                    total.income += parseInt(item.price);
                    total.addAll += parseInt(item.price);
                }else{
                    total.expense += parseInt(item.price);
                    total.addAll -= parseInt(item.price);
                }
                setIncomeAsset(total.income);
                setExpenseAsset(total.expense);
                setCurrentAsset(total.addAll);
            });
        }else{
            setIncomeAsset(0);
            setExpenseAsset(0);
            setCurrentAsset(0);
        }
    },[filteredItems, assets]);




    return(
        <div className={styles.current_assets}>
            <p>{yearStatus}년 자산 현황</p>
            <h3>{currentAsset}원</h3>
            <IncomeExpense incomeAsset={incomeAsset} expenseAsset={expenseAsset}/>
        </div>
    );
}
export default CurrentAssets;