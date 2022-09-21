import React from 'react';
import styles from './filter.module.css';

const Filter = ({ changeYear }) => {

    const onChange = (event) => {
        const year = event.target.value;
        changeYear(year);
    };

    return(
        <div className={styles.filter}>
            <select onChange={onChange} name='year-filter'>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    );
}

export default Filter;