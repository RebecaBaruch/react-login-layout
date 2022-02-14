import React, {useState} from 'react';
import Image from 'next/image';

import FaceLogo from '../../public/img/logo-facebook.png';

import styles from './Link.module.css'


export default function Link(props){
    const icons = {
        facebook: FaceLogo,
    };
      
    const Icon = props => (
        <Image src={icons[props.icon]} 
               className={styles.icon} 
               alt="ícone"
               width={25}
               height={25}
        />
    );


    //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    // const icons = {
    //     facebook: <GrFacebook/>,
    // };
      
    // const Icon = props => (
    //     icons[props.icon]
    // );


    return(
        <>
            <a className={styles.linkBox} href={props.href}>
                {/* {!!props.IconComponent && (<props.IconComponent/>)}             */}
                <Icon icon={props.nome}/>
                <p className={styles.text}>{props.text}</p>
            </a>
        </>
    )
} 
