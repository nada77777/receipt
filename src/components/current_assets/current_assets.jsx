import React from 'react';
import stylse from './current_assets.module.css';
import IncomeExpense from '../income_expense/income_expense';

const CurrentAssets = (props) => {
    return(
        <div className={stylse.current_assets}>
            <p>22년 자산 현황</p>
            <h3>1000000000원</h3>
            <IncomeExpense />
        </div>
    );
}
export default CurrentAssets;