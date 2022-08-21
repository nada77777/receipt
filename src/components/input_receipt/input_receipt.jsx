import React from 'react';
import styles from './input_receipt.module.css';
const InputReceipt = (props) => {
    return(
        <div className={styles.inputReceipt}>
            <h3>내역추가</h3>
            <form>
                <p>날짜</p>
                <input placeholder='연도-월-일' type='data'></input>
                <p>제목</p>
                <input placeholder='사용 내역을 입력해주세요.' type='text'></input>
                <p>금액</p>
                <input placeholder='금액을 입력해주세요.' type='text'></input>
                <input type="radio" name="수입" value="수입"></input>
                <input type="radio" name="지출" value="지출"></input>
            </form>
            <button>등록</button>
            <button>지출</button>
        </div>
    );
}

export default InputReceipt;