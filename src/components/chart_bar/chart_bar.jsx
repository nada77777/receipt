import React from 'react';
import styles from './chart_bar.module.css';
const ChartBar = ({ chart }) => {
    // const { value } = maxExpenseValue;
    const { month, expense } = chart;
    // console.log('aaaaaaaaaa :' ,maxExpenseValue.value);
    let chartHeight = '0%';
    // if(maxExpenseValue.value > 0){
    //     chartHeight = parseInt(((expense / maxExpenseValue.value) * 100)) + '%';
    //     console.log('inner :', chartHeight);
    // }
    // console.log('chart_bar :', maxExpenseValue);
    console.log(chartHeight);
    return(
        <div className={styles.chart_bar}>
            <div className={styles.chart_bar_template}>
                <div className={styles.chart_bar_fill}></div>
            </div>
            <h3 className={styles.month}>{month}월</h3>
        </div>
    );
}
export default ChartBar;