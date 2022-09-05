import React from 'react';
import styles from './income_expense.module.css';
const IncomeExpense = ({ incomeAsset, expenseAsset }) => {
    return(
        <div className={styles.income_expense}>
            <div className={styles.div}>
                <h3 className={styles.title}>수입</h3>
                <p>{incomeAsset}원</p>
            </div>
            <div className={styles.div}>
                <h3 className={styles.title}>지출</h3>
                    <p>{expenseAsset}원</p>
            </div>
        </div>
    );
}

export default IncomeExpense;