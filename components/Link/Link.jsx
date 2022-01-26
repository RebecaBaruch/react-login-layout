import React, {useState} from 'react';
// import styles from './Link.module.css'

export default function Link(props){

        const [name, setName] = React.useState('');
        
        if (name !== '' || name !== undefined || name !== null) {
            <span></span>
        } else{

        }
        return(
        <>
           <span>{props.iconName}</span> 
        </>
    
   
    )
}
