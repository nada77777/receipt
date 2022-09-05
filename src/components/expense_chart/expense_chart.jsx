/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styles from './expense_chart.module.css';
import ChartBar from '../chart_bar/chart_bar';
import { useEffect } from 'react';


const ExpenseChart = ({ filterItems }) => {

    const [expenseChart, setExpenseChart] = useState([
        { month: '1', expense: 0, index: '01'},
        { month: '2', expense: 0, index: '02'},
        { month: '3', expense: 0, index: '03'},
        { month: '4', expense: 0, index: '04'},
        { month: '5', expense: 0, index: '05'},
        { month: '6', expense: 0, index: '06' },
        { month: '7', expense: 0, index: '07'},
        { month: '8', expense: 0, index: '08'},
        { month: '9', expense: 0, index: '09'},
        { month: '10', expense: 0, index: '10'},
        { month: '11', expense: 0, index: '11'},
        { month: '12', expense: 0, index: '12'},
    ]);
    const [maxExpenseValue, setMaxExpenseValue] = useState({
        value: 0
    });

    useEffect(() => {
        const addExpense = filterItems.forEach(item => {
            const month = item.date.substring(5,7);
            return item.type === 'expense' ? expenseChart[month - 1].expense += parseInt(item.price) : console.log('no');
        });

        

        // const maxResult = expenseChart.map(item => item.expense);
        // const maxExpense = Math.max(...maxResult);
        // maxExpenseValue.value = maxExpense;
        // console.log('maxExpense :',maxExpense);
        // console.log('maxExpenseValue :',maxExpenseValue);
 

    },[filterItems, expenseChart]);

    return(
        <div className={styles.expense_chart}>
            <h3 className={styles.title}>월 별 지출 차트</h3>
            <div className={styles.chart_bar}>
                {expenseChart.map(chart => <ChartBar key={chart.month} chart={chart} />)}
            </div>
        </div>
    );
}

export default ExpenseChart;

























// /* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react';
// import styles from './expense_chart.module.css';
// import ChartBar from '../chart_bar/chart_bar';
// import { useEffect } from 'react';


// const ExpenseChart = ({ filterItems }) => {

//     const [expenseChart, setExpenseChart] = useState([
//         { month: '1', expense: 0, index: '01'},
//         { month: '2', expense: 0, index: '02'},
//         { month: '3', expense: 0, index: '03'},
//         { month: '4', expense: 0, index: '04'},
//         { month: '5', expense: 0, index: '05'},
//         { month: '6', expense: 0, index: '06' },
//         { month: '7', expense: 0, index: '07'},
//         { month: '8', expense: 0, index: '08'},
//         { month: '9', expense: 0, index: '09'},
//         { month: '10', expense: 0, index: '10'},
//         { month: '11', expense: 0, index: '11'},
//         { month: '12', expense: 0, index: '12'},
//     ]);
//     const [maxExpenseValue, setMaxExpenseValue] = useState({
//         value: 0
//     });








//     const expenseChart = [
//         { month: '1', expense: 0, index: '01'},
//         { month: '2', expense: 0, index: '02'},
//         { month: '3', expense: 0, index: '03'},
//         { month: '4', expense: 0, index: '04'},
//         { month: '5', expense: 0, index: '05'},
//         { month: '6', expense: 0, index: '06' },
//         { month: '7', expense: 0, index: '07'},
//         { month: '8', expense: 0, index: '08'},
//         { month: '9', expense: 0, index: '09'},
//         { month: '10', expense: 0, index: '10'},
//         { month: '11', expense: 0, index: '11'},
//         { month: '12', expense: 0, index: '12'},
//     ];
//     const maxExpenseValue = {
//         value: 0
//     };




//     useEffect(() => {
//         filterItems.forEach(item => {
//             const month = item.date.substring(5,7);
//             item.type === 'expense' ? expenseChart[month - 1].expense += parseInt(item.price) : console.log('no');


//         });
//         const maxResult = expenseChart.map(item => item.expense);
//         const maxExpense = Math.max(...maxResult);
//         maxExpenseValue.value = maxExpense;
//         console.log('maxExpense :',maxExpense);
//         console.log('maxExpenseValue :',maxExpenseValue);
 

//     },[filterItems, expenseChart]);


    



//     return(
//         <div className={styles.expense_chart}>
//             <h3 className={styles.title}>월 별 지출 차트</h3>
//             <div className={styles.chart_bar}>
//                 {expenseChart.map(chart => <ChartBar key={chart.month} chart={chart} maxExpenseValue={maxExpenseValue} />)}
//             </div>
//         </div>
//     );
// }

// export default ExpenseChart;