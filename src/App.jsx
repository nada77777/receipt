import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import InputReceipt from './components/input_receipt/input_receipt';
import Receipt from './components/receipt/receipt';


function App() {
  const [assets, setAssets] = useState([]);
  const [filterItems, setFilterItems] = useState([]);

  const addItem = (item) => {
    const newAssets = [...assets, item];
    setAssets(newAssets);
    console.log(item);
  };

  const itemFilter = (year) => {
    console.log(year);
    // const filter = assets.map(asset => {
    //   return asset.date.include(year) === year});
    //   console.log(filter);


    // assets.map(asset => {
      
    //   if(asset.date.substring(0,4) === year){
    //     console.log(asset);
    //   }else{
    //     console.log('none');
    //   }
    // });
    const filter = assets.filter(asset => asset.date.substring(0,4) === year);
    setFilterItems(filter);
  };



  const deleteItem = (item) => {
    console.log(item)
    const newAssets = assets.filter(asset => asset.id !== item.id);
    setAssets(newAssets);
  };

  return (
    <div className={styles.app}>
      <Receipt assets={assets} deleteItem={deleteItem} itemFilter={itemFilter} filterItems={filterItems} />
      <InputReceipt addItem={addItem} />
    </div>
    
  );
}

export default App;
