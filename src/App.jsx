import styles from './app.module.css';
import InputReceipt from './components/input_receipt/input_receipt';
import Receipt from './components/receipt/receipt';


function App() {
  return (
    <div className={styles.app}>
      <Receipt />
      <InputReceipt/>
    </div>
    
  );
}

export default App;
