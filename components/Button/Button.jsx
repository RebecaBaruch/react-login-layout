import React from 'react';

import styles from './Button.module.css';

class Button extends React.Component{
    render(){
        return <button className={styles.btn}>{this.props.text}</button>
    }
}

export default Button