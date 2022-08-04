import React, { useRef, useState } from 'react';
import styles from './img_input.module.css';

const ImgInput = ({ imgUploader, makeNewCard }) => {
    // const [file, setFile] = useState({fileName:null, fileURL:null});
    const inputRef = useRef();

    const change = async (event) => {
        // setFile(event.target.files[0]);
        const uploaded = await imgUploader.upload(event.target.files[0])//
        .then(result => makeNewCard({fileName: result.original_filename, fileURL: result.url}));
        console.log(uploaded);
    };

    const click = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    return(
        <>
        <input onChange={change} className={styles.imginput} ref={inputRef} type='file' accept='image/*'></input>
        <button onClick={click} className={styles.button}>Add</button>
        </>
    );
};
export default ImgInput;