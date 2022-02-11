import React from 'react';
import { Image, Link } from 'next';

export default function ImageLink(props){
    return(
        <>
            <Link href={props.href}>
               <Image src={props.src} /> 
            </Link>
        </>
    )
}