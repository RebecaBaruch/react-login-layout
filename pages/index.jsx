import React, { useState } from 'react';
import Image from 'next/image';

//react-icons
import GrFacebook from 'react-icons';

//images
import cell from '../img/cellphone.png';
import instagram from '../img/instagram-logo.png';

//styles
import styles from './login.module.css';

//componetns
import Button from '../components/Button/Button';
import Title from '../components/Title/Title';
import Subtitle from '../components/Subtitle/Subtitle';
import DataInput from '../components/DataInput/DataInput';
import BrText from '../components/BrText/BrText';

//aprendendo a usar constructor nos códigos comentados
/*class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {word: 'ola'};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prev => ({
            word: !prev.word
        }))
    };
    
    render(){
        return(
            <>
                <h1 className={styles.ola}> {this.state.word ? 'ola' : 'oi'} </h1>
                <button onClick={this.handleClick}> click </button>
            </>
        )
    }
}*/

function HomePage(){
    return (
        //elemento de exemplo com alteração do state no constructor:
        //<Toggle />
        
        <>
            <div className={styles.body}>
                <div className={styles.leftSide}>
                    <Image className={styles.cell} src={cell} alt="cellphone-image"/>
                    
                    <div className={styles.textBox}>
                        <Title title='welcome!'/>
                        <Subtitle text="Capture and share the world's moments."/>
                    </div>
                </div>

                <div className={styles.rightSide}>
                    <form action="" className={styles.loginForm}>
                        <Image className={styles.instagram} src={instagram} alt="instagram-logo"/>

                        <DataInput type='text' placeholder='Number, user or e-mail' />
                        <DataInput type='password' placeholder='Password' />
                        <Button text='Login'/>
                        <BrText text='or'/>
                    </form>
                </div>
            </div>
        </>
    ) 
}
    
export default HomePage