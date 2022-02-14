import React from 'react';
import Image from 'next/image';

export default function ImageLink(props){
    return(
        <>
            <div>
                <a href={props.href}>
                    <Image src={props.src} alt={props.alt} /> 
                </a>
            </div>
        </>
    )
}