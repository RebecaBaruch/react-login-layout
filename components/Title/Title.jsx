import React from 'react';
import styles from './Title.module.css'

export default function Title(props){
    
    return <h1 className={styles.Title}>{props.title}</h1>
}
