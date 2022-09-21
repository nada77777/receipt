import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import InputReceipt from './components/input_receipt/input_receipt';
import Receipt from './components/receipt/receipt';


function App({ YearFilter }) {
  const [assets, setAssets] = useState([]);

  const addItem = (item) => {
    const newAssets = [...assets, item];
    setAssets(newAssets);
  };


  const deleteItem = (item) => {
    const newAssets = assets.filter(asset => asset.id !== item.id);
    setAssets(newAssets);
  };

  return (
    <div className={styles.app}>
      <Receipt assets={assets} deleteItem={deleteItem} YearFilter={YearFilter} />
      <InputReceipt addItem={addItem} />
    </div>
    
  );
}

export default App;
