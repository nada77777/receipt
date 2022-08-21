import React from 'react';
import styles from './income_expense.module.css';
const IncomeExpense = (props) => {
    return(
        <div className={styles.income_expense}>
            <div className={styles.div}>
                <h3>수입</h3>
                <p>11원</p>
            </div>
            <div className={styles.div}>
                <h3>지출</h3>
                <p>0원</p>
            </div>
        </div>
    );
}

export default IncomeExpense;