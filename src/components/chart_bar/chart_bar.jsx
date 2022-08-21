import React from 'react';
import styles from './chart_bar.module.css';
const ChartBar = (props) => {
    return(
        <div className={styles.chart_bar}>
            <div className={styles.chart_bar_template}>
                <div className={styles.chart_bar_fill}></div>
            </div>
            <h3 className={styles.month}>1월</h3>
        </div>
    );
}
export default ChartBar;