import React from 'react';
import styles from './expense_chart.module.css';
import ChartBar from '../chart_bar/chart_bar';

const ExpenseChart = (props) => {
    return(
        <div className={styles.expense_chart}>
            <h3>월 별 지출 차트</h3>
            <div className={styles.chart_bar}>
            <ChartBar/>
            <ChartBar/>
            </div>
        </div>
    );
}

export default ExpenseChart;