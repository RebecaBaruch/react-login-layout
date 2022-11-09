import React from 'react';
import styles from './Subtitle.module.css';

export default function Subtitle(props){
    return <p className={styles.Subtitle}>{props.text}</p>
}
