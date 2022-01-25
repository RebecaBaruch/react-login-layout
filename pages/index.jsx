import React from 'react';
import styles from './login.module.css';

function HomePage(){
    const [word, setWord] = React.useState("ola");
    const newWord = "Oi";

    return (
        <>
            <h1 className={styles.ola}> {word} </h1>
            <button onClick={() => setWord(newWord)}>click</button>
        </>
    )
}
    
export default HomePage