import React from 'react';
import styles from './BrText.module.css';

export default function BrText(props){
    
    return (
        <div className={styles.container}>
            <div className={styles.line}></div>
            <p className={styles.Text}>{props.text}</p>
            <div className={styles.line}></div>
        </div>
    )
}