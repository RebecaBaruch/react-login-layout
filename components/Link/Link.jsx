import React, {useState} from 'react';
import { GrFacebook } from 'react-icons';
// import styles from './Link.module.css'

export default function Link(props){
    // const icons = {
    //     facebook: 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
    // };
      
    // // const Icon = props => (
    // //     <svg width="22" height="22" viewBox="0 0 1024 1024">
    // //         <path d={icons[props.icon]}></path>
    // //     </svg>
    // // );


    //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    // const icons = {
    //     facebook: <GrFacebook/>,
    // };
      
    // const Icon = props => (
    //     icons[props.icon]
    // );


    return(
        <>
            {/* <Icon icon={props.name}/> */}
            {!!props.IconComponent && (<props.IconComponent/>)}            
            <p>{props.text}</p>
        </>
    )
} 
