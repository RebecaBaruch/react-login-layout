import React, { useState } from 'react';
import Image from 'next/image';

//react-icons

//images
import cell from '../public//img/cellphone.png';
import instagram from '../public/img/instagram-logo.png';
import appleStore from '../public/img/app-store.png';
import googlePlay from '../public/img/google-play.png';

//styles
import styles from './login.module.css';

//componetns
import Button from '../components/Button/Button';
import Title from '../components/Title/Title';
import Subtitle from '../components/Subtitle/Subtitle';
import DataInput from '../components/DataInput/DataInput';
import BrText from '../components/BrText/BrText';
import Link from '../components/Link/Link';
import ImageLink from '../components/ImageLink/ImageLink';

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

                        <div className={styles.istallBox}>
                            <ImageLink href='https://apps.apple.com/br/app/instagram/id389801252' src={ appleStore } alt="app-store" />
                            <ImageLink href='https://play.google.com/store/apps/details?id=com.instagram.android#' src={googlePlay} alt="google-play" />
                        </div>
                    </div>
                </div>

                <div className={styles.rightSide}>
                    <form action="" className={styles.loginForm}>
                        <Image className={styles.instagram} src={instagram} alt="instagram-logo"/>
                        <DataInput type='text' placeholder='Number, user or e-mail' />

                        
                        <DataInput type='password' placeholder='Password' />
                        <Button text='Login'/>
                        <BrText text='or'/>
                        <Link href="#" nome="facebook" text="Sign in with facebook"/>
                    </form>
                </div>
            </div>
        </>
    ) 
}
    
export default HomePage