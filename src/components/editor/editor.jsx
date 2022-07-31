import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';
const Editor = ({ cards, ImgInputButton }) => {
    return(
        <div className={styles.editor}>
            <h1>Editor</h1>
            {Object.keys(cards).map(
                key =>( <CardEditForm key={key} card={cards[key]} ImgInputButton={ImgInputButton} />)
            )}
            <CardAddForm/>
        </div>
    );
};

export default Editor;