import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styles from './input_receipt.module.css';
const InputReceipt = ({ addItem }) => {
    const [radioState, setRadioState] = useState();
    const [incomeState, setIncomeState] = useState();
    const [expenseState, setExpenseState] = useState();

    const formRef = useRef();
    const yearRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    

    const onClick = () => {
        let item = {
            id: Date.now(),
            year: yearRef.current.value.slice(0,4),
            date: yearRef.current.value,
            title: titleRef.current.value,
            price: priceRef.current.value,
            type: radioState,
        };
        
        addItem(item);
        formRef.current.reset();
    };

    const onChange = (event) => {
        const target = event.target.value;
        if(target === 'income'){
            setRadioState(target);
            setIncomeState(target);
            setExpenseState(null);
        }else{
            setRadioState(target);
            setExpenseState(target);
            setIncomeState(null);
        };
    };
    
    
    return(
        <div className={styles.inputReceipt}>
            <h3 className={styles.title}>내역추가</h3>
            <form ref={formRef}>
                <p>날짜</p>
                <input name='year' className={styles.input} ref={yearRef} placeholder='연도-월-일' type='date'></input>
                <p>제목</p>
                <input name='title' className={styles.input} ref={titleRef} placeholder='사용 내역을 입력해주세요.' type='text'></input>
                <p>금액</p>
                <input name='price' className={styles.input} ref={priceRef} placeholder='금액을 입력해주세요.' type='number'></input>
                <div className={styles.radioInputBox}>
                    <div className={styles.radioInput}>
                        <input type="radio" name="수입" onChange={onChange} value="income" checked={incomeState || false}></input>
                        <span>수입</span>
                    </div>
                    <div className={styles.radioInput}>
                        <input type="radio" name="지출" onChange={onChange} value="expense" checked={expenseState || false} ></input>    
                        <span>지출</span>
                    </div>
                </div>
            </form>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={onClick}>등록</button>
                <button className={styles.button}>취소</button>
            </div>
        </div>
    );
}

export default InputReceipt;