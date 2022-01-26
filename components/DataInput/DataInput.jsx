import React from 'react';
import styles from './DataInput.module.css'

export default function DataInput(props){

    return <input className={styles.Input} type={props.type} placeholder={props.placeholder}></input>
}