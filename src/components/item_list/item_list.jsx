import React from 'react';
import { useEffect } from 'react';
import styles from './item_list.module.css';





const ItemList = ({ asset, deleteItem }) => {
    const { date, title, price, type } = asset;

            
    // useEffect(() => {
    //     itemFilter('2022');
    //     console.log('itemlist mount');
    // },[]);


    const onClick = () => {
        deleteItem(asset);
    }

    return(
        <ul className={styles.itemLists}>
            <li className={styles.itemList}>
                <h3 className={styles.date}>{date}</h3>
                <div className={styles.info}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.price}>{price}원</span>
                </div>
                <button className={styles.delete} onClick={onClick}>delete</button>
            </li>
        </ul>
    );
};

export default ItemList;














// const ItemList = ({ asset, deleteItem }) => {
//     const { date, title, price, type } = asset;
//     const onClick = () => {
//         deleteItem(asset);
//     }

//     return(
//         <ul className={styles.itemLists}>
//             <li className={styles.itemList}>
//                 <h3 className={styles.date}>{date}</h3>
//                 <div className={styles.info}>
//                     <h3 className={styles.title}>{title}</h3>
//                     <span className={styles.price}>{price}원</span>
//                 </div>
//                 <button className={styles.delete} onClick={onClick}>delete</button>
//             </li>
//         </ul>
//     );
// };

// export default ItemList;


