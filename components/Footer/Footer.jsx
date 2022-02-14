import React from 'react';
import styles from './Footer.module.css';

export default function Footer(){

    const links = [
        {
            txt:'About',
            href:'https://about.instagram.com/',
        },
        {
            txt:'Blog',
            href:'https://about.instagram.com/blog',
        },

        {
            txt:'Jobs',
            href:'https://about.instagram.com/about-us/careers',
        },

        {
            txt:'Help',
            href:'https://help.instagram.com/',
        },

        {
            txt:'API',
            href:'https://developers.facebook.com/docs/instagram',
        },

        {
            txt: 'Privacy',
            href: 'https://help.instagram.com/519522125107875/?maybe_redirect_pol=0'
        },

        {
            txt: 'Terms',
            href: 'https://help.instagram.com/581066165581870'
        },

        {
            txt: 'Main Acounts',
            href: 'https://www.instagram.com/directory/profiles/'
        },

        {
            txt: 'Hashtags',
            href: 'https://www.instagram.com/directory/hashtags/'
        },

        {
            txt: 'Locations',
            href: 'https://www.instagram.com/explore/locations/'
        },
    ];
    
    const FooterElements = links.map( link => 
         <a className={styles.a} href={link.href}>
            <li className={styles.li}>{link.txt}</li>  
         </a>
    );

    return(
        
        <ul className={styles.ul}>
            {FooterElements}

            <li>© 2021 Instagram from Facebook</li>
        </ul>
    )
} 