import React from 'react';
import { useEffect } from 'react';
import ItemList from '../item_list/item_list';
import styles from './receipt_list.module.css';
const ReceiptList = ({ assets, deleteItem, itemFilter, filterItems }) => {

    const onChange = (event) => {
        itemFilter(event.target.value);
       
    };


    console.log(assets.length);


    return(
        <div className={styles.receipt_list}>
            <div className={styles.receipt_title}>
                <h3>연간 내역</h3>
                <select onChange={onChange} name='year-filter'>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
{ assets.length > 0  ?   
filterItems.map(asset => <ItemList key={asset.id} asset={asset} deleteItem={deleteItem} itemFilter={itemFilter} />
// assets.map(asset => <ItemList key={asset.id} asset={asset} deleteItem={deleteItem} filterItems={filterItems} />

)

        :       <div className={styles.receipt_list_inner}>

                    <div className={styles.history}>
                        <h3>입력된 데이터가 없어요</h3>
                    </div>
                </div> 
       
         }
        </div>
    );
}

export default ReceiptList;