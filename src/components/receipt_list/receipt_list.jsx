import React from 'react';
import ItemList from '../item_list/item_list';
import styles from './receipt_list.module.css';
const ReceiptList = ({ assets, deleteItem, YearFilter, changeYear, filteredItems }) => {

    // let filteredItems = [];


    // useEffect(() => {
    //     let lastItemIndex = assets.length -1;
    //     let lastItemYear = assets[lastItemIndex].year;
    //     // console.log(lastItemIndex);
    //     // console.log(lastItemYear);
    //     console.log('useEffect');
    //     changeYear(lastItemYear);
    // },[assets, changeYear]);

    // if(assets.length > 0) {
    //     filteredItems = assets.filter(item => item.year === yearStatus);
    // };




    return(
        <div className={styles.receipt_list}>
            <div className={styles.receipt_title}>
                <h3>연간 내역</h3>
                {/* <select onChange={onChange} name='year-filter'>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select> */}
                <YearFilter changeYear={changeYear} />
            </div>
           <div className={styles.receipt_list_inner}>
                <div className={styles.history}>
                    <h3>입력된 데이터가 없어요</h3>
                </div>

                {/* {assets.map(item => <ItemList key={item.id} item={item}  />)} */}
                {filteredItems.map(item => <ItemList key={item.id} item={item} />)}


            </div> 
       
    
        </div>
    );
}

export default ReceiptList;